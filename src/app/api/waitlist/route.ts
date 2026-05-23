/**
 * /api/waitlist — the single waitlist backend.
 *
 * STAGE A (current): local mock. Reads/writes a gitignored
 * `waitlist.local.json` at the project root. Validates email format, dedupes,
 * accepts honeypot-flagged bots silently.
 *
 * STAGE B (future): swap the storage to Supabase + add a Resend
 * confirmation-email call. Same request/response contract — the
 * `<WaitlistForm>` component will not need to change.
 */

import { NextResponse } from "next/server";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const STORE = path.resolve(process.cwd(), "waitlist.local.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Entry {
  email: string;
  source: string;
  created_at: string;
  user_agent?: string;
}

async function readStore(): Promise<Entry[]> {
  try {
    const raw = await readFile(STORE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as Entry[];
    return [];
  } catch {
    return [];
  }
}

async function writeStore(entries: Entry[]) {
  await writeFile(STORE, JSON.stringify(entries, null, 2), "utf-8");
}

export const dynamic = "force-dynamic"; // never cache

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { email, website } = body as {
    email?: unknown;
    website?: unknown;
  };

  // Honeypot — silently accept; never let the bot know it was caught
  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ ok: true, status: "stored" });
  }

  if (typeof email !== "string") {
    return NextResponse.json(
      { ok: false, error: "Please enter your email." },
      { status: 400 }
    );
  }

  const normalised = email.trim().toLowerCase();
  if (!EMAIL_RE.test(normalised) || normalised.length > 254) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 }
    );
  }

  const entries = await readStore();
  if (entries.some((e) => e.email === normalised)) {
    return NextResponse.json(
      { ok: false, status: "duplicate", error: "You're already on the list." },
      { status: 409 }
    );
  }

  const entry: Entry = {
    email: normalised,
    source: "landing",
    created_at: new Date().toISOString(),
    user_agent: request.headers.get("user-agent") ?? undefined,
  };

  entries.unshift(entry);
  await writeStore(entries);

  return NextResponse.json({ ok: true, status: "stored" });
}
