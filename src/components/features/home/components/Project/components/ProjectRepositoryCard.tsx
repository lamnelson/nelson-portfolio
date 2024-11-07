import { Star } from "lucide-react";

import { RenderIf } from "@/components/common/shared";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { GitHubRepository } from "@/lib/api/github/types";
import { ProjectCard } from "./ProjectCard";

interface RepositoryCardProps {
	repository: GitHubRepository;
}

export const ProjectRepositoryCard = ({ repository }: RepositoryCardProps) => (
	<ProjectCard>
		<CardHeader className="p-0">
			<CardTitle className="font-heading text-xl md:text-2xl">
				<h2>{repository.repo}</h2>
			</CardTitle>
		</CardHeader>

		<CardContent className="p-0">
			<CardDescription>
				<RenderIf fallback={repository.description} when={repository.description.length > 100}>
					{`${repository.description.substring(0, 100)}...`}
				</RenderIf>
			</CardDescription>
		</CardContent>

		<CardFooter className="p-0">
			<CardDescription className="flex items-center gap-1 text-sm/normal">
				<Star className="size-3 md:size-4" />
				{repository.stars}
			</CardDescription>
		</CardFooter>
	</ProjectCard>
);
