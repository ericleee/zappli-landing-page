# Zappli — Landing Page

> Your next job is one swipe away.

The pre-launch landing page and email waitlist for **Zappli**, an iPhone app that
makes job applications almost effortless.

> 🚧 **Status: under active development.** This repository is a work in progress.

---

## About Zappli

Zappli lets job seekers upload their resume once, then swipe through job listings
like a dating app. On every swipe-right, Zappli's AI tailors the resume to that
role, fills out the application, and drafts personal intro messages to real people
at the company. The user does a ~60-second review and taps submit themselves.

> Zappli does the 45-minute part of every job application. You do the 60-second part.

This site has one job: **collect waitlist emails from job seekers before launch.**

## Tech stack

| Layer              | Choice                                     |
| ------------------ | ------------------------------------------ |
| Framework          | Next.js (App Router) + TypeScript          |
| Styling            | Tailwind CSS                               |
| Icons              | lucide-react                               |
| Animation          | motion (Framer Motion)                     |
| Waitlist storage   | Supabase                                   |
| Confirmation email | Resend, via a Next.js route handler        |
| Hosting            | Vercel                                     |

## Getting started

> The application has not been scaffolded yet — see **[PLAN.md](PLAN.md)** Phase 0.
> Once scaffolded, local development will work as follows:

```bash
npm install
cp .env.example .env.local   # then fill in your own values
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

Copy `.env.example` to `.env.local` and fill in your values. **Never commit
`.env.local` or any real keys** — `.gitignore` excludes every `.env*` file except
the example.

| Variable                        | Description                | Safe in client? |
| ------------------------------- | -------------------------- | --------------- |
| `NEXT_PUBLIC_SUPABASE_URL`       | Supabase project URL       | Yes             |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`  | Supabase anonymous key     | Yes             |
| `RESEND_API_KEY`                 | Transactional email key    | **No — secret** |

Production values are set in the Vercel dashboard, never in the repository.

## Project documentation

- **[PLAN.md](PLAN.md)** — the phased build plan.
- **[CHECKLIST.md](CHECKLIST.md)** — actionable task checklist.

## Deployment

Deployed on Vercel, with automatic deploys from the `main` branch.

## Author

Eric Lee

## License

© 2026 Eric Lee. All rights reserved. Not licensed for reuse while in development.
