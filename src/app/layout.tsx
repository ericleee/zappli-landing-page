import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zappli — Your next job is one swipe away",
  description:
    "Zappli does the 45-minute part of every job application. Swipe through real jobs; our AI tailors your resume, fills the application, and drafts warm intros to people at the company. You do the 60-second part.",
  applicationName: "Zappli",
  authors: [{ name: "Eric Lee" }],
  metadataBase: new URL("https://zappli.app"),
  openGraph: {
    title: "Zappli — Your next job is one swipe away",
    description:
      "Swipe through jobs. Zappli tailors your resume, fills the application, and drafts warm intros at the company.",
    type: "website",
    url: "https://zappli.app",
    siteName: "Zappli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zappli — Your next job is one swipe away",
    description:
      "Swipe through jobs. Zappli tailors your resume, fills the application, drafts warm intros.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
