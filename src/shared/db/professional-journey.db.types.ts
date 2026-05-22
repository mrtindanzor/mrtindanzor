export type ProfessionalJourneyType = {
	featured?: boolean
	cardId: number
	organization: string
	role: string
	logo?: string
	locationType: "Remote" | "Hybrid" | "On site" | "Online"
	period: {
		start: number | string
		end: number | string
	}
	achievements: string[]
}
