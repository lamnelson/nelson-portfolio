import { RenderIf } from "@/components/common/shared";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "../Project.types";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
    <div className="relative z-20 size-full rounded-md bg-card text-card-foreground shadow-sm">
        <div className="relative z-50">
            <div className="flex flex-col space-y-1 p-3.5">
                <CardHeader className="p-0">
                    <CardTitle className="font-heading text-xl md:text-2xl">
                        <h2>{project.title}</h2>
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                    <CardDescription>
                        <RenderIf fallback={project.description} when={project.description.length > 100}>
                            {`${project.description.substring(0, 100)}...`}
                        </RenderIf>
                    </CardDescription>
                </CardContent>

                <CardFooter className="p-0">
                    <CardDescription className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="rounded bg-secondary px-2 py-1 text-xs">
                                {tech}
                            </span>
                        ))}
                    </CardDescription>
                </CardFooter>
            </div>
        </div>
    </div>
);