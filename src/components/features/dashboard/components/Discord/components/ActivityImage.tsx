import Image from "next/image";
import type { Activity } from "use-lanyard";

interface ActivityImageProps {
    activity: Activity;
}

const DISCORD_FALLBACK_GIF = "/assets/gifs/discord.gif";
const IMAGE_DIMENSIONS = {
    height: 1024,
    width: 1024,
};

export const ActivityImage: React.FC<ActivityImageProps> = ({ activity }) => {
    const getActivityImageUrl = (): string => {
        if (activity.type === 2 && activity.assets?.large_image) {
            // Spotify activity
            return `https://i.scdn.co/image/${activity.assets.large_image.split(':')[1]}`;
        } else if (activity.assets?.large_image) {
            if (activity.assets.large_image.startsWith('mp:')) {
                return `https://media.discordapp.net/${activity.assets.large_image.replace('mp:', '')}`;
            }
            return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
        }
        return `https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=2048`;
    };

    const imageUrl = activity.assets || activity.application_id ? getActivityImageUrl() : DISCORD_FALLBACK_GIF;

    return (
        <Image
            src={imageUrl}
            alt={`${activity.name || "Activity"} Icon`}
            className="size-20 rounded object-cover"
            {...IMAGE_DIMENSIONS}
            priority
        />
    );
};