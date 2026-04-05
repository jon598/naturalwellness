import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loomi | Natural Wellness, Honestly",
  description:
    "Loomi helps you understand your natural health options with clarity and honesty, not hype. AI-powered supplement education backed by calibrated evidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}