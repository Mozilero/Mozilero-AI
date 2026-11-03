import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOZILERO AI — Imagine. Create. Write. Innovate.",
  description: "Affordable AI tools for writing, learning, creating and growing your business."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
