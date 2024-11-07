"use client";

import { useMemo } from "react";

import { add, isAfter } from "date-fns";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

import type { WeatherForecast } from "@/lib/api/weather/types";
import { DayScene } from "./components/DayScene";
import { NightScene } from "./components/NightScene";

interface CurrentTimeCardProps {
	data: WeatherForecast | null;
}

export const CurrentTimeCard: React.FC<CurrentTimeCardProps> = ({ data }) => {
	const [sunriseTime, sunsetTime] = useMemo(() => {
		if (!data) return [null, null];

		return [new Date(data.results.sunrise), new Date(data.results.sunset)];
	}, [data]);

	const timeComponent = useMemo(() => {
		if (!data || !sunriseTime || !sunsetTime) return null;

		const now = new Date();
		if (isAfter(now, add(sunsetTime, { hours: 1 }))) {
			return <NightScene />;
		}

		if (isAfter(now, sunriseTime)) {
			return <DayScene />;
		}

		return <NightScene />;
	}, [data, sunriseTime, sunsetTime]);

	return (
		<Reveal
			className="relative flex h-64 flex-1"
			initial="visible"
			whileHover={{
				scale: 1.02,
				transition: { duration: 0.4, ease: "easeInOut" },
			}}
		>
			<Card className="size-full">{timeComponent}</Card>
		</Reveal>
	);
};
