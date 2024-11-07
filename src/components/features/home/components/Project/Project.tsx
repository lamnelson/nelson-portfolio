import Link from "next/link";
import { ProjectGrid } from "./components/ProjectGrid";
import { PROJECTS } from "./Project.constants";

export const Project = () => {
    return (
        <section className="md:space-y-4">
            <h2 className="text-3xl lg:text-4xl">Projects</h2>
            <ProjectGrid projects={PROJECTS} />
        </section>
    );
};