import type { Metadata } from "next"
import { headers } from "next/headers"

import { PortfolioPage } from "@/components/portfolio-page"
import { getWeather } from "@/lib/weather"

const regionNames = new Intl.DisplayNames(["en"], { type: "region" })

export const metadata: Metadata = {
  title: "Yeabsira Mekuria — Frontend Product Engineer",
  description:
    "Frontend product engineer building responsive experiences with Next.js, React, and TypeScript.",
}

export default async function HomePage() {
  const h = await headers()
  const countryCode = h.get("x-vercel-ip-country") ?? "ET"
  const country = regionNames.of(countryCode) ?? "Ethiopia"
  const weather = await getWeather(
    Number(h.get("x-vercel-ip-latitude") ?? 9.03),
    Number(h.get("x-vercel-ip-longitude") ?? 38.74),
    decodeURIComponent(h.get("x-vercel-ip-city") ?? "Addis Ababa"),
    country
  )
  return <PortfolioPage initialWeather={weather} />
}
