export type SkillItemsProps = {
	title: string
	icon: React.ElementType
	color: string
	description: string
}
export type SkillProps = {
	featured?: boolean
	category: string
	items: SkillItemsProps[]
}
