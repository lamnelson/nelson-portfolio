import type { Duration } from "date-fns";

import type { ExperienceDate } from "./Journey.types";

export function calculateExperienceDuration(date: ExperienceDate): string {
	const duration = calculateDuration(date);
	return formatDuration(duration);
}

function calculateDuration(dates: ExperienceDate): Duration {
	const startDate = new Date(dates.start);
	const endDate = new Date(dates.end);

	const yearDifference = endDate.getFullYear() - startDate.getFullYear();
	const monthDifference = endDate.getMonth() - startDate.getMonth();
	const daysDifference = endDate.getDate() - startDate.getDate();

	const totalMonths = monthDifference + yearDifference * 12 + daysDifference / 30;
	return { years: Math.floor(totalMonths / 12), months: Math.round(totalMonths % 12) };
}

function formatDuration(duration: Duration): string {
	const years = duration.years as number;
	const months = duration.months as number;

	if (years === 0) {
		return formatMonths(months);
	}

	if (months === 0) {
		return formatYears(years);
	}

	return `${formatYears(years)} and ${formatMonths(months)}`;
}

function formatYears(years: number): string {
	return pluralize(years, "year");
}

function formatMonths(months: number): string {
	return pluralize(months, "month");
}

function pluralize(value: number, unit: string): string {
	return `${value} ${unit}${value !== 1 ? "s" : ""}`;
}

export function formatExperienceDate(date: Date): string {
	return date.toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
	});
}
