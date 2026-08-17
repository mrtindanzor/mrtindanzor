import { routes } from "@/shared/routes"

export const NAV_LINKS = [
	{
		title: "Home",
		path: routes.home,
	},
	{
		title: "About",
		path: routes.about.home,
	},
	{
		title: "Projects",
		path: routes.projects(),
	},
] as const
