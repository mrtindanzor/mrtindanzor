export type ProfessionalJourneyType = {
	cardId: number
	organization: string
	role: string
	locationType: "Remote" | "Hybrid" | "On site"
	period: {
		start: number | string
		end: number | string
	}
	achievements: string[]
}
