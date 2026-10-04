import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nubeOfThaughts — Subconscious Optical Personality Profiler & AI Companion",
  description:
    "Discover your psychological archetype through 19 unfiltered optical illusions. Powered by Google Gemini cognitive intelligence.",
  keywords: ["personality test", "optical illusions", "psychometric profiling", "gemini ai", "nube of thoughts"],
  openGraph: {
    title: "nubeOfThaughts — What Does Your Visual Perception Reveal?",
    description: "Take the 19-stage optical illusion test and meet your AI companion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
