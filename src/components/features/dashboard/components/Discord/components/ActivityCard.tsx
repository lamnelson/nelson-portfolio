import type { Activity, Data } from "use-lanyard";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ActivityImage } from "./ActivityImage";
import { TimeElapsed } from "./TimeElapsed";

interface ActivityCardProps {
	activity: Activity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
	return (
		<Alert className="flex flex-col items-center gap-4 border-none bg-secondary text-center sm:flex-row sm:text-left">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<ActivityImage activity={activity} />
					</TooltipTrigger>
					<TooltipContent>
						{activity.assets ? activity.assets.large_text || activity.name : activity.name}
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<div>
				<AlertTitle className="line-clamp-1">{activity.name}</AlertTitle>
				<AlertDescription className="line-clamp-1">{activity.details || null}</AlertDescription>
				<AlertDescription className="line-clamp-1">{activity.state || null}</AlertDescription>

				<AlertDescription className="line-clamp-1">
					{activity.timestamps?.start ? <TimeElapsed unixTimestamp={activity.timestamps.start} /> : null}
				</AlertDescription>
			</div>
		</Alert>
	);
};
