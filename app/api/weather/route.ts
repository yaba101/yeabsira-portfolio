import { headers } from "next/headers"
import { NextResponse } from "next/server"

import { getWeather } from "@/lib/weather"

export async function GET() {
  const h = await headers()
  const latitude = Number(h.get("x-vercel-ip-latitude") ?? 9.03)
  const longitude = Number(h.get("x-vercel-ip-longitude") ?? 38.74)
  const city = h.get("x-vercel-ip-city") ?? "Addis Ababa"
  const countryCode = h.get("x-vercel-ip-country") ?? "ET"
  const country =
    new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode) ??
    "Ethiopia"

  return NextResponse.json(
    await getWeather(latitude, longitude, decodeURIComponent(city), country)
  )
}
