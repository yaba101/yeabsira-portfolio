// The root layout wraps every page. It loads our fonts and the global stylesheet.
// We'll add the site header/footer here later in the video once we've built them.
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

// Geist (sans) for text and Geist Mono for code. Exposed as CSS variables
// so Tailwind can reference them via font-sans / font-mono.
const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

// Basic metadata shown in the browser tab and search results.
export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/yaba101"),
  title: "Yeabsira Mekuria — Frontend & Next.js Developer",
  description:
    "Frontend developer in Addis Ababa building responsive product experiences with Next.js, React, and TypeScript.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    title: "Yeabsira Mekuria — Frontend & Next.js Developer",
    description:
      "Frontend developer building responsive product experiences with Next.js, React, and TypeScript.",
    siteName: "Yeabsira Mekuria",
    images: [
      {
        url: "/og-yeabsira.png",
        width: 1200,
        height: 630,
        alt: "Yeabsira Mekuria, Frontend and Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeabsira Mekuria — Frontend & Next.js Developer",
    description:
      "Frontend developer building responsive product experiences with Next.js, React, and TypeScript.",
    images: ["/og-yeabsira.png"],
  },
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontSans.variable,
        fontMono.variable
      )}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
