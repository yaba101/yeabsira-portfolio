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

export async function getWeather(
  latitude = 9.03,
  longitude = 38.74,
  city = "Addis Ababa",
  country = "Ethiopia"
): Promise<WeatherDisplay> {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`,
      { next: { revalidate: 900 }, signal: AbortSignal.timeout(2500) }
    )
    if (!response.ok) throw new Error("Weather unavailable")
    const data = (await response.json()) as {
      current: { temperature_2m: number; weather_code: number }
    }
    return {
      city,
      country,
      temperature: Math.round(data.current.temperature_2m),
      description: descriptions[data.current.weather_code] ?? "Current weather",
    }
  } catch {
    return {
      city: "Addis Ababa",
      country: "Ethiopia",
      temperature: 65,
      description: "Partly cloudy",
    }
  }
}
