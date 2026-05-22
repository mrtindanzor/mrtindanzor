import { routes } from "../routes"

export const NAV_LINKS = [
	{
		title: "Home",
		path: routes.home,
	},
	{
		title: "About",
		path: routes.about,
	},
	{
		title: "Projects",
		path: routes.projects,
	},
] as const
