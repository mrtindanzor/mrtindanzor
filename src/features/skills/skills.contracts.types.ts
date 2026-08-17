export type SkillItemType = {
	title: string
	icon: React.ElementType
	color: string
	description: string
}
export type SkillType = {
	featured?: boolean
	category: string
	items: SkillItemType[]
}

export type SKILL_FILTER = {
	category?: string
	featured?: boolean
}

export interface ISkillsService {
	find(props?: SKILL_FILTER): SkillType[]
}
