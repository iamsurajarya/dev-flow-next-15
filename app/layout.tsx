import type { Metadata } from "next";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import React from "react";

import "./globals.css";
import ThemeProvider from "@/context/Theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
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

console.log(inter.variable, spaceGrotesk.variable, "srj");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
