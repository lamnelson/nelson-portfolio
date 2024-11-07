import type { Activity, Data } from "use-lanyard";

import { ActivityCard } from "./ActivityCard";

interface ActivityFeedProps {
	activities: Activity[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
	return (
		<>
			{activities?.map(
				(activity, idx) =>
					activity.name !== "Custom Status" && <ActivityCard activity={activity} key={`${activity.name}-${idx}`} />,
			)}
		</>
	);
};
