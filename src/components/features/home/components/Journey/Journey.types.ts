export enum EmploymentType {
	Contractor = "Contractor",
	FullTime = "Full-Time",
	Intern = "Intern",
	PartTime = "Part-Time",
}

export interface ExperienceDate {
	end: Date;
	start: Date;
}

export interface ExperienceItem {
	company: string;
	title: string;
	date: ExperienceDate;
	description: string;
	employmentType: EmploymentType;
	image?: string;
	skills?: string[];
}
