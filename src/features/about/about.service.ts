import type {
	IAboutService,
	PROFESSIONAL_JOURNEY_FILTER,
} from "./about.contract.types"
import { DEVELOPER } from "./developer.db"
import { PROFESSIONAL_TIMELIINE } from "./professional-journey.db"

class AboutService implements IAboutService {
	private db = {
		developer: DEVELOPER,
		professionalJourney: PROFESSIONAL_TIMELIINE,
	}

	getDeveloper() {
		return this.db.developer
	}

	getProfessionalJourney(filters?: PROFESSIONAL_JOURNEY_FILTER) {
		const { featured } = filters || {}

		let filtered = this.db.professionalJourney

		if (featured) {
			filtered = filtered.filter((item) => item.featured)
		}

		return filtered
	}
}

export const aboutService = new AboutService()
