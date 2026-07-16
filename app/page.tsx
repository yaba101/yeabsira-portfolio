import type { Metadata } from "next"

import { PortfolioPage } from "@/components/portfolio-page"

export const metadata: Metadata = {
  title: "Yeabsira Mekuria — Frontend Product Engineer",
  description:
    "Frontend product engineer building responsive experiences with Next.js, React, and TypeScript.",
}

export default function HomePage() {
  return <PortfolioPage />
}
