import { createService, type FetchDataType } from "@/libs/fetchData"
import { apiRoutes } from "@/shared/routes/apiRoutes"
import type { FetchStatus } from "@/shared/utils/response"
import { type ContactDataType, IContactService } from "./contact.contract.types"

class ContactService extends IContactService {
	constructor(private apiClient: FetchDataType) {
		super()
	}
	async create(props: ContactDataType): Promise<FetchStatus> {
		const client = this.apiClient({
			uri: apiRoutes.contact.create.path,
			method: apiRoutes.contact.create.method,
			payload: props,
		})
		await client.fetch()

		return client.fetchStatus
	}
}

export function createContactService(apiClient: FetchDataType) {
	return new ContactService(apiClient)
}

export const contactService = createService(({ apiClient }) =>
	createContactService(apiClient),
)
