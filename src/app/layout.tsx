import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Cihat Salik's CV",
  description: "Cihat Salik's CV",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cihat.dev",
  }
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updateTheme() {
                  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', isDark);
                  document.head
                    .querySelector('meta[name=theme-color]')
                    ?.setAttribute('content', isDark ? '#1c1c1c' : '#fcfcfc');
                }
                
                updateTheme();
                
                window.matchMedia('(prefers-color-scheme: dark)')
                  .addEventListener('change', updateTheme);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
