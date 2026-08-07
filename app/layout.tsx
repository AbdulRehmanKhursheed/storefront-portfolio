import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keenu One · Storefront Portfolio",
  description:
    "A live catalog of branded restaurant storefronts on the Keenu One platform.",
  // Concept designs for merchants who have not launched must never be indexed.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
