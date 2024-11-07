type NavItem = {
	href: string;
	title: string;
};

export const MAIN_NAV_CONFIG: NavItem[] = [
	{
		href: "/#about-section",
		title: "About",
	},
	{
		href: "/#journey-section",
		title: "Journey",
	},
	{
		href: "/#projects-section",
		title: "Projects",
	},
	{
		href: "/dashboard",
		title: "Dashboard",
	},
] as const;
