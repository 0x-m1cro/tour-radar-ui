import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TourRadar - Discover Your Next Adventure",
  description: "Explore the world with our curated selection of tours and experiences. Find and book the perfect tour from thousands of options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
