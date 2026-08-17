import type { ProjectCategory } from "@/features/projects"

export const routes = Object.freeze({
	home: "/",
	about: {
		home: "/about",
		professionalJourney: "/about#professioanaljourney",
		skills: "/about#skills",
	},
	projects: (filters?: { category?: ProjectCategory | "All" }) => {
		const { category } = filters || {}
		if (!category) return "/projects" as const
		return `/projects?category=${category}` as const
	},
	contact: "/contact",
})

export type Routes = (typeof routes)[keyof typeof routes]
