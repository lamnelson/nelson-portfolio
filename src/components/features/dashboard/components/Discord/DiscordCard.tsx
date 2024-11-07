"use client";

import type { Data, DiscordUser } from "use-lanyard";

import { RenderIf } from "@/components/common/shared";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { ActivityFeed } from "./components/ActivityFeed";
import { ActivitySkeleton } from "./components/ActivitySkeleton";
import { StatusDisplay } from "./components/StatusDisplay";
import { useDiscordStatus } from "./hooks/useDiscordStatus";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface DiscordCardProps {
	userId: bigint;
}

export const DiscordCard: React.FC<DiscordCardProps> = ({ userId }) => {
	const { isLoading, status, activities, user } = useDiscordStatus(userId);

	const statusFormat = (status: Data["discord_status"]) => {
		const statusMap: Record<Data["discord_status"], { cn: string; text: string }> = {
			dnd: { cn: "text-rose-400", text: "Do Not Disturb" },
			idle: { cn: "text-amber-400", text: "Idle" },
			offline: { cn: "text-muted", text: "Offline" },
			online: { cn: "text-emerald-500", text: "Online" },
		};

		return statusMap[status] || statusMap.offline;
	};

	const statusInfo = statusFormat(status);
	const getDarkerShade = (colorClass: string) => {
		switch (colorClass) {
			case 'text-emerald-500':
				return 'bg-emerald-700'; // Darker shade
			case 'text-rose-400':
				return 'bg-rose-600'; // Darker shade
			case 'text-amber-400':
				return 'bg-amber-600'; // Darker shade
			case 'text-muted':
				return 'bg-gray-600'; // Darker shade
			case 'text-indigo-500':
				return 'bg-indigo-700'; // Darker shade
			// Add more cases as needed
			default:
				return 'bg-gray-600'; // Fallback darker shade
		}
	};
	return (
		<Reveal
			className="relative flex flex-1"
			initial="visible"
			whileHover={{
				scale: 1.02,
				transition: { duration: 0.4, ease: "easeInOut" },
			}}
		>
			<Card className="w-full">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="flex flex-row items-center justify-between font-medium text-base">
						Discord activity
					</CardTitle>
					<div className="mt-1">
						<div className={`flex gap-2 h-8 items-center rounded-full p-3 ${getDarkerShade(statusInfo.cn)}`}> {/* Darker background */}
								<Icons.discord />
								<span className="text-xs mb-1">{statusInfo.text}</span>
							</div>
						</div>
				</CardHeader>

				<CardContent className="flex flex-col gap-4">
					{/* Render if no data is present */}
					<RenderIf when={isLoading}>
						<ActivitySkeleton />
					</RenderIf>

					<RenderIf when={Boolean(status)}>
						<StatusDisplay user={user as DiscordUser} status={status} />

						{/* Render if no activities */}
						<RenderIf when={!activities?.length}>
							<Alert className="border-none bg-secondary">
								<AlertDescription>No activities currently.</AlertDescription>
							</Alert>
						</RenderIf>

						{/* Render activities */}
						<RenderIf when={Boolean(activities?.some((a) => a?.name !== "Custom Status"))}>
							<ActivityFeed activities={activities || []} />
						</RenderIf>
					</RenderIf>
				</CardContent>
			</Card>
		</Reveal>
	);
};
