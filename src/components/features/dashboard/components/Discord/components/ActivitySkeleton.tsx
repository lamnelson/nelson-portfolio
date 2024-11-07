import { Skeleton } from "@/components/ui/skeleton";

export const ActivitySkeleton = () => (
	<div className="flex flex-col gap-2">
		<div className="flex gap-2">
			<Skeleton className="size-10 rounded-full" />
			<Skeleton className="h-10 w-28 md:w-56" />
		</div>
		<Skeleton className="h-8 w-full" />
	</div>
);
