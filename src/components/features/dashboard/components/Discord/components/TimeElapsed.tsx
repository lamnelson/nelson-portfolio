"use client";

import { useEffect, useState } from "react";

import { discordTimestamp } from "../Discord.utils";

interface TimeElapsedProps {
	unixTimestamp: number;
}

export const TimeElapsed: React.FC<TimeElapsedProps> = ({ unixTimestamp }) => {
	const [timeAgo, setTimeAgo] = useState(discordTimestamp(unixTimestamp));

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeAgo(discordTimestamp(unixTimestamp));
		}, 1000);

		return () => clearInterval(intervalId);
	}, [unixTimestamp]);

	return <>{timeAgo}</>;
};
