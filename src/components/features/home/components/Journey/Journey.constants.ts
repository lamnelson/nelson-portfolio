import { EmploymentType, type ExperienceItem } from "./Journey.types";

export const experiences: ExperienceItem[] = [
	{
		company: "Freelancer",
		title: "Web Developer",
		date: {
			start: new Date(2023, 0, 1),
			end: new Date(2024, 11, 1),
		},
		description:
			"Developed customized website designs for clients, integrating their business goals, brand identity, and design preferences, resulting in an increase in customer engagement and a rise in customer satisfaction ratings. Engineered user-friendly interfaces for websites, optimizing navigation and functionality following extensive client consultations, contributing to a substantial boost in website traffic.",
		employmentType: EmploymentType.Contractor,
		image: "/assets/companies/cnmt.png",
		skills: ["React", "TypeScript", "FIGMA", "API", "GCP", "OpenSSL"],
	},
	{
		company: "Thai Orchid",
		title: "FOH Manager",
		date: {
			start: new Date(2021, 6, 1),
			end: new Date(2024, 11, 1),
		},
		description:
			"Oversee daily operations, including staff management, scheduling, and resource allocation, ensuring smooth restaurant functionality. Lead a team of 15+ employees, providing training, performance feedback, and conflict resolution to maintain a high standard of service.",
		employmentType: EmploymentType.FullTime,
		image: "/assets/companies/torchid.png",
		skills: ["Team Leadership", "Staff Training", "Operations Management", "Conflict Resolution"],
	},
	{
		company: "University of Texas at Arlington",
		title: "Student, B.S. in Software Engineering",
		date: {
			start: new Date(2020, 7, 22),
			end: new Date(2023, 7, 1),
		},
		description:
			"Java Object-Oriented Programming, Software Project Management, UI/UX Human-Computer Interaction, Operations Research, Software Design Patterns, Information Security, Software Testing, Database System",
		employmentType: EmploymentType.FullTime,
		image: "/assets/companies/utacampus.jpg",
		skills: ["Java", "React", "Python", "C", "C#", "Assembly", "Information Security", "Android Development"],
	},
	/**
	{
		company: "",
		title: "",
		date: {
			start: new Date(0, 0, 0),
			end: new Date(0, 0, 0),
		},
		description:
			"",
		employmentType: EmploymentType.Intern,
		image: "/assets/companies/",
		skills: [""],
	},
	 */
] as const;
