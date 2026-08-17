export type ProjectType = {
	imgSrc: string
	categories: ProjectCategory[]
	title: string
	description: string
	tags: string[]
	link?: string
	repo?: string
	featured?: boolean
}

export type ProjectCategory =
	| "Web Development"
	| "Full-Stack Development"
	| "DevOps and Cloud"
	| "Developer Tools"
	| "Mobile and Automation"
	| "E-Commerce"
	| "Education"
	| "Nonprofit"
	| "Community and Media"
	| "Open Source"

export type PROJECTS_FILTER = {
	featured?: boolean
	category?: ProjectCategory | "All" | "all"
}

export interface IProjectsService {
	find(filters?: PROJECTS_FILTER): ProjectType[]
	getCategoryFilters(): ProjectCategory[]
}
