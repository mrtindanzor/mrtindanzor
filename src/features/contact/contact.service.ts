import { createService, type FetchDataType } from "@/libs/fetchData"
import { apiRoutes } from "@/shared/routes/apiRoutes"
import type { FetchStatus } from "@/shared/utils/response"
import type { ContactDataType, IContactService } from "./contact.contract.types"
import { CONTACT_LINKS } from "./contact.db"

class ContactService implements IContactService {
	private db = {
		socials: CONTACT_LINKS,
	}

	constructor(private apiClient: FetchDataType) {}

	async create(props: ContactDataType): Promise<FetchStatus> {
		const client = this.apiClient({
			uri: apiRoutes.contact.create.path,
			method: apiRoutes.contact.create.method,
			payload: props,
		})
		await client.fetch()

		return client.fetchStatus
	}

	socials() {
		return this.db.socials
	}
}

export function createContactService(apiClient: FetchDataType) {
	return new ContactService(apiClient)
}

export const contactService = createService(({ apiClient }) =>
	createContactService(apiClient),
)
