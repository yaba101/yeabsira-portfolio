import type { Metadata } from "next"

import { PortfolioPage } from "@/components/portfolio-page"

export const metadata: Metadata = {
  title: "Yeabsira Mekuria — Frontend & Next.js Developer",
  description:
    "Frontend developer building responsive product experiences with Next.js, React, and TypeScript.",
}

export default function HomePage() {
  return <PortfolioPage />
}
