import {
	type FetchDataType,
	type FetchStatus,
	fetchDataClient,
} from "@/libs/fetchData"
import { createTelegramMessagePayload } from "@/libs/telegram"
import type { IContactService } from "./contact.contract.types"

class ContactService implements IContactService {
	constructor(private apiClient: FetchDataType) {}

	async sendMessage(message: string): Promise<FetchStatus> {
		const { url, chatId, text } = await createTelegramMessagePayload(message)
		const client = this.apiClient({
			uri: url,
			method: "post",
			payload: { chat_id: chatId, text },
		})
		await client.fetch()

		return client.fetchStatus
	}
}

export const contactService: IContactService = new ContactService(
	fetchDataClient,
)
