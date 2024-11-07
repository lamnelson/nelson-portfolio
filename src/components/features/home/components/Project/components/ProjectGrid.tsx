"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { CARD_ANIMATION } from "../Project.constants";
import { useGridLayout } from "../hooks/useGridLayout";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../Project.types";
import { Card } from "@/components/ui/card";

interface ProjectGridProps {
    projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
    const gridLayoutClass = useGridLayout(projects.length);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2", gridLayoutClass)}>
            {projects.map((project, idx) => (
                /*
                <Link
                    className="group relative block size-full p-2"
                    href={project.link ?? "#"}
                    key={project.title}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                {...CARD_ANIMATION}
                                className="absolute inset-0 block size-full rounded-lg bg-card-foreground text-card-foreground shadow-sm"
                                layoutId="hoverBackground"
                            />
                        )}
                    </AnimatePresence>
                    <ProjectCard project={project} />
                </Link>
                */
                <Card
                    className="group relative block size-full p-2"
                    //href={project.link ?? "#"}
                    key={project.title}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                {...CARD_ANIMATION}
                                className="absolute inset-0 block size-full rounded-lg bg-card-foreground text-card-foreground shadow-sm"
                                layoutId="hoverBackground"
                            />
                        )}
                    </AnimatePresence>
                    <ProjectCard project={project} />
                </Card>
            ))}
        </div>
    );
};