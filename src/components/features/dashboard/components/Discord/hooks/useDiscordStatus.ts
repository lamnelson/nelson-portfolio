import { type Data, useLanyardWS } from "use-lanyard";

export const useDiscordStatus = (userId: bigint) => {
	const lanyard = useLanyardWS(`${userId}`);

	return {
		isLoading: !lanyard,
		status: lanyard?.discord_status as Data["discord_status"],
		activities: lanyard?.activities,
		user: lanyard?.discord_user,
	};
};
