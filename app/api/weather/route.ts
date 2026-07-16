import { headers } from "next/headers"
import { NextResponse } from "next/server"

export type WeatherDisplay = {
  city: string
  country: string
  temperature: number
  description: string
}

const descriptions: Record<number, string> = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Cloudy",
  45: "Foggy",
  51: "Light drizzle",
  61: "Light rain",
  63: "Rain",
  80: "Rain showers",
  95: "Thunderstorms",
}

export async function GET() {
  const h = await headers()
  const latitude = Number(h.get("x-vercel-ip-latitude") ?? 9.03)
  const longitude = Number(h.get("x-vercel-ip-longitude") ?? 38.74)
  const city = h.get("x-vercel-ip-city") ?? "Addis Ababa"
  const countryCode = h.get("x-vercel-ip-country") ?? "ET"
  const country =
    new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode) ??
    "Ethiopia"

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`,
      { next: { revalidate: 900 }, signal: AbortSignal.timeout(2500) }
    )
    if (!response.ok) throw new Error("Weather unavailable")
    const data = (await response.json()) as {
      current: { temperature_2m: number; weather_code: number }
    }
    return NextResponse.json({
      city: decodeURIComponent(city),
      country,
      temperature: Math.round(data.current.temperature_2m),
      description: descriptions[data.current.weather_code] ?? "Current weather",
    } satisfies WeatherDisplay)
  } catch {
    return NextResponse.json({
      city: "Addis Ababa",
      country: "Ethiopia",
      temperature: 65,
      description: "Partly cloudy",
    } satisfies WeatherDisplay)
  }
}
