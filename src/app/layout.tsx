import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Cihat Salik - Software Engineer | iOS Developer & Full Stack Developer",
  description: "Experienced Software Engineer specialized in iOS development (Swift, SwiftUI), full-stack web development (React, Next.js, Vue), and mobile app creation. Based in Istanbul, Turkey.",
  keywords: [
    "Cihat Salik",
    "Software Engineer",
    "iOS Developer", 
    "Swift Developer",
    "SwiftUI",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "TypeScript Developer",
    "Mobile App Developer",
    "Istanbul Developer",
    "Turkish Developer",
    "Frontend Developer",
    "Backend Developer",
    "JotForm"
  ],
  authors: [{ name: "Cihat Salik" }],
  creator: "Cihat Salik",
  metadataBase: new URL("https://cihat.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cihat.dev",
    title: "Cihat Salik - Software Engineer | iOS Developer & Full Stack Developer",
    description: "Experienced Software Engineer specialized in iOS development (Swift, SwiftUI), full-stack web development (React, Next.js, Vue), and mobile app creation. Based in Istanbul, Turkey.",
    siteName: "Cihat Salik's Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/57585087?v=4",
        width: 1200,
        height: 630,
        alt: "Cihat Salik - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cihat Salik - Software Engineer | iOS Developer & Full Stack Developer",
    description: "Experienced Software Engineer specialized in iOS development (Swift, SwiftUI), full-stack web development (React, Next.js, Vue), and mobile app creation.",
    creator: "@chtslk",
    images: ["https://avatars.githubusercontent.com/u/57585087?v=4"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Bu kısmı Google Search Console'dan alacaksınız
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
