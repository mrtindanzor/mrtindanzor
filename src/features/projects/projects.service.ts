import type {
	IProjectsService,
	PROJECTS_FILTER,
	ProjectCategory,
	ProjectType,
} from "./projects.contracts.types"
import { PROJECTS } from "./projects.db"

class ProjectService implements IProjectsService {
	private db = {
		projects: [...PROJECTS],
	}

	find(filters?: PROJECTS_FILTER): ProjectType[] {
		const { featured, category } = filters || {}
		let filtered = this.db.projects

		if (featured) {
			filtered = filtered.filter((project) => project.featured)
		}

		if (category && category !== "all" && category !== "All") {
			filtered = filtered.filter((project) =>
				project.categories.includes(category),
			)
		}

		return filtered
	}

	getCategoryFilters(): ProjectCategory[] {
		return [
			...new Set(this.db.projects.flatMap((project) => project.categories)),
		]
	}
}

export const projectService = new ProjectService()
