import type { ISkillsService, SKILL_FILTER } from "./skills.contracts.types"
import { SKILLS } from "./skills.db"

class SkillService implements ISkillsService {
	private db = {
		skills: [...SKILLS],
	}

	find(props?: SKILL_FILTER) {
		const { featured = false, category } = props ?? {}

		let filtered = this.db.skills

		if (featured) {
			filtered = filtered.filter((skill) => skill.featured)
		}

		if (category) {
			filtered = filtered.filter((skill) => skill.category === category)
		}

		return filtered
	}
}

export const skillService = new SkillService()
