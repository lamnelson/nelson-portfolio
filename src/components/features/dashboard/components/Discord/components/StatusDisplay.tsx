import type { Data, DiscordUser } from "use-lanyard";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface StatusDisplayProps {
	status: Data["discord_status"];
	user: DiscordUser;
}

export const StatusDisplay: React.FC<StatusDisplayProps> = ({ status, user }) => {
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

	return (
		<div className="flex flex-col items-baseline gap-4 sm:flex-row">
			<div className="flex gap-4">
				<div className="inline-flex items-center justify-center">
					<Avatar>
						<AvatarImage src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} />
						<AvatarFallback className="animate-pulse" />
					</Avatar>
				</div>
				<div>
					<div className="font-bold text-lg">{user.global_name}</div>
					<div className="text-muted text-xs">{user.username}</div>
				</div>
			</div>
		</div>
	);
};
