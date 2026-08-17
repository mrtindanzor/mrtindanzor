export type AboutDeveloperType = Readonly<{
	avatar: string
	avatar2: string
	nick: "Mr. Tindanzor"
	name: "Mr. Tindanzor Simon"
	lastName: "Tindanzor"
	firstName: "Simon"
	resume: string
	email: string
	phone: string
	socials: {
		github: string
		linkedin: string
		tiktok: string
		whatsapp: string
		instagram: string
		facebook: string
	}
}>

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

export type PROFESSIONAL_JOURNEY_FILTER = {
	featured?: boolean
}

export interface IAboutService {
	getDeveloper: () => AboutDeveloperType
	getProfessionalJourney: (
		filters?: PROFESSIONAL_JOURNEY_FILTER,
	) => ProfessionalJourneyType[]
}
