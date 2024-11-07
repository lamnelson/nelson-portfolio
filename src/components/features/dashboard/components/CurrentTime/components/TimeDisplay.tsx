"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import type { PropsWithChildren } from "react";
import { RenderIf } from "@/components/common/shared";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { USTimeFormatter } from "../CurrentTime.utils";
import { WEATHER_API_CONFIG } from "@/lib/api/weather/constants"; // Import the weather API config
import { fetchWeatherApi } from 'openmeteo';

interface TimeDisplayProps extends PropsWithChildren {
	bgClassName: React.ComponentProps<"div">["className"];
	timeClassName: React.ComponentProps<"div">["className"];
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ bgClassName, children, timeClassName }) => {
	const [time, setTime] = useState<string | undefined>(undefined);
	const [weatherData, setWeatherData] = useState<{
		temperature: number;
		humidity: number;
		windSpeed: number;
	} | null>(null);
	const [loadingWeather, setLoadingWeather] = useState(true);
	const [errorWeather, setErrorWeather] = useState<string | null>(null);

	// Use latitude and longitude from the WEATHER_API_CONFIG
	const latitude = WEATHER_API_CONFIG.DALLAS_COORDINATES.latitude;
	const longitude = WEATHER_API_CONFIG.DALLAS_COORDINATES.longitude;

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const params = {
					latitude,
					longitude,
					current: ["temperature_2m", "relative_humidity_2m", "wind_speed_10m"],
					temperature_unit: "fahrenheit",
					wind_speed_unit: "mph",
					precipitation_unit: "inch",
				};
		
				const url = "https://api.open-meteo.com/v1/forecast";
				const responses = await fetchWeatherApi(url, params);
				const response = responses[0];
				// Process the response based on the new structure
				const current = response.current()!;

				if (current) {
					setWeatherData({
						temperature: current.variables(0)!.value(),
						humidity: current.variables(1)!.value(),
						windSpeed: current.variables(2)!.value(),
					});
				} else {
					setErrorWeather("Weather data is not available.");
				}
			} catch (err) {
				setErrorWeather("Failed to fetch weather data.");
				if (axios.isAxiosError(err)) {
					console.error("Error response:", err.response?.data);
				} else {
					console.error(err);
				}
			} finally {
				setLoadingWeather(false);
			}
		};
		fetchWeatherData();
	}, [latitude, longitude]);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(USTimeFormatter.format(new Date()));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative col-span-1 row-span-1 size-full overflow-hidden rounded-lg">
			{/* Background */}
			<div className={cn("absolute inset-0 h-full", bgClassName)} />

			{/* Time and location */}
			<div className={cn("relative z-10 flex h-full flex-col p-4", timeClassName)}>
				<div className="flex items-center space-x-2">
					<RenderIf
						fallback={
							<>
								<Skeleton className="size-2 rounded-full bg-current md:size-3" />
								<Skeleton className="h-6 w-20 md:h-8 md:w-32" />
							</>
						}
						when={Boolean(time)}
					>
						<div className="size-2 animate-pulse rounded-full bg-current md:size-3" />
						<div className="font-semibold text-xl md:text-3xl">{time}</div>
					</RenderIf>
				</div>

				<RenderIf fallback={<Skeleton className="mt-2 h-4 w-24 md:h-6 md:w-32" />} when={Boolean(time)}>
					<div className="text-current text-lg md:text-2xl">in Dallas, TX</div>
				</RenderIf>

				{/* Weather Data Display */}
				{loadingWeather ? (
					<Skeleton className="mt-2 h-6 w-32" />
				) : errorWeather ? (
					<div className="mt-2 text-red-500">{errorWeather}</div>
				) : (
					<div className="mt-auto text-current text-xs md:text-sm">
						<div className="mb-2">
							Temperature: {Math.floor(weatherData?.temperature || 0)}°F
						</div>
						<div className="mb-2">
							Humidity: {Math.floor(weatherData?.humidity || 0)}%
						</div>
						<div>
							Wind Speed: {Math.floor(weatherData?.windSpeed || 0)} mph
						</div>
					</div>
				)}
			</div>

			{/* Additional content (e.g., sun or stars) */}
			{children}
		</div>
	);
};