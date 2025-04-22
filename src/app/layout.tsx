import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";
import Fathom from "@/components/Fathom";

import type { Metadata, Viewport } from "next";

config.autoAddCss = false;

export const viewport: Viewport = {
  themeColor: "#fff",
  width: "device-width",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  title: "koch.ie | Kochie Engineering",
  description: "Kochie Engineering - Software Engineer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  twitter: {
    card: "summary_large_image",
    title: "koch.ie | Kochie Engineering",
    description: "Kochie Engineering - Software Engineer",
    images: "/opengraph-image.png",
    creator: "@kochie",
  },
  openGraph: {
    title: "koch.ie | Kochie Engineering",
    description: "Kochie Engineering - Software Engineer",
    url: "https://kochie.io",
    siteName: "koch.ie",
    images: "/opengraph-image.png",
    locale: "en-US",
    type: "website",
  },
  alternates: {
    canonical: "https://kochie.io",
    languages: {
      "en-US": "https://kochie.io",
    },
  },
  metadataBase: new URL("https://kochie.io"),
  generator: "Next.js",
  applicationName: "koch.ie",
  category: "website",
  creator: "Robert Koch <robert@kochie.io>",
  authors: [
    {
      name: "Robert Koch",
      url: "https://me.kochie.io",
    },
  ],
  classification: "public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <Fathom />
          <Toaster />
          <Sonner />
          {/* <ThemeButton /> */}
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
