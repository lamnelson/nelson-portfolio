import { TracingBeam } from "@/components/ui/tracing-beam";
import { experiences } from "./Journey.constants";
import { ExperienceCard } from "./components/JourneyCard";

export function Journey() {
	return (
		<section className="md:mx-14">
			<TracingBeam>
				<div className="flex flex-col gap-4">
					<h1 className="text-3xl lg:text-4xl" id="experience-section">
						My Journey
					</h1>
					{experiences.map((experience, idx) => (
						<ExperienceCard
							company={experience.company}
							date={experience.date}
							description={experience.description}
							employmentType={experience.employmentType}
							image={experience.image}
							index={idx}
							key={`${experience.title}-${idx}`}
							skills={experience.skills}
							title={experience.title}
						/>
					))}
				</div>
			</TracingBeam>
		</section>
	);
}
