import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/ui/page-header";
import type { WeatherForecast } from "@/lib/api/weather/types";
import { CurrentTimeCard } from "./components/CurrentTime";
import { DiscordCard } from "./components/Discord";
import { DiscordLink } from "./components/DiscordLink/DiscordLink";

interface DashboardPageProps {
	weatherForecast: WeatherForecast | null;
	userId: bigint;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ weatherForecast, userId }) => {
	return (
		<section className="container relative max-w-3xl space-y-4">
			<PageHeader className="items-start">
				<PageHeaderHeading className="font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
					Dashboard
				</PageHeaderHeading>
				<PageHeaderDescription className="font-light text-muted sm:text-base md:text-base lg:text-base">
					Statistics about my activities
				</PageHeaderDescription>
			</PageHeader>

			<div className="flex flex-wrap gap-2">
				<DiscordCard userId={userId} />
				<div className="flex size-full flex-wrap gap-2">
					<DiscordLink />
					<CurrentTimeCard data={weatherForecast} />
				</div>
			</div>
		</section>
	);
};
