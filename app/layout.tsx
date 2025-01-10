import type { Metadata } from "next";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Flow",
  description: "Another way to stack-over-flow",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export const metadata2: Metadata = {
  title: "Dev Flow",
  description: "Another way to stack-over-flow",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export const metadata3: Metadata = {
  title: "Dev Flow",
  description: "Another way to stack-over-flow",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export const metadata4: Metadata = {
  title: "Dev Flow",
  description: "Another way to stack-over-flow",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
