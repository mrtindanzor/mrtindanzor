export type ProjectType = {
	imgSrc: string
	title: string
	description: string
	tags: string[]
	link?: string
	repo?: string
	featured?: boolean
}

export type PROJECTS_FILTER = {
	featured?: boolean
}

export interface IProjectsService {
	find(filters?: PROJECTS_FILTER): ProjectType[]
}
