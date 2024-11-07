import { WEATHER_API_CONFIG } from "@/lib/api/weather/constants";
import type { WeatherForecast } from "@/lib/api/weather/types";

export async function fetchWeatherForecast(): Promise<WeatherForecast | null> {
	const url = new URL(WEATHER_API_CONFIG.API_URL);
	url.searchParams.append("lat", WEATHER_API_CONFIG.DALLAS_COORDINATES.latitude.toString());
	url.searchParams.append("lng", WEATHER_API_CONFIG.DALLAS_COORDINATES.longitude.toString());
	url.searchParams.append("formatted", "0");

	try {
		const response = await fetch(url.toString(), {
			next: { revalidate: WEATHER_API_CONFIG.CACHE_DURATION },
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(`Weather API Error: ${errorData.message || response.statusText}`);
		}

		const data = (await response.json()) as WeatherForecast;
		
		return data;
	} catch (error) {
		console.error("[Weather API]:", error instanceof Error ? error.message : "Unknown error occurred");
		return null;
	}
}
