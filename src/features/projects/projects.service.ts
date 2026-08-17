import type {
	IProjectsService,
	PROJECTS_FILTER,
	ProjectType,
} from "./projects.contracts.types"
import { PROJECTS } from "./projects.db"

class ProjectService implements IProjectsService {
	private db = {
		projects: [...PROJECTS],
	}

	find(filters?: PROJECTS_FILTER): ProjectType[] {
		const { featured } = filters || {}
		let filtered = this.db.projects

		if (featured) {
			filtered = filtered.filter((project) => project.featured)
		}

		return filtered
	}
}

export const projectService = new ProjectService()
