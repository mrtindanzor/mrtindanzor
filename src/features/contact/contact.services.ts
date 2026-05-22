import axios from "axios"
import type { FetchStatus } from "@/libs/fetchData"
import { createTelegramMessagePayload, type ITelegram } from "@/libs/telegram"
import { tryCatch } from "@/shared/utils/tryCatch"
import type { IContactService } from "./contact.contract.types"

class ContactService implements IContactService {
	async sendMessage(
		message: string,
		telegram: ITelegram,
	): Promise<FetchStatus> {
		const { url, chatId, text } = await createTelegramMessagePayload(
			message,
			telegram,
		)

		const res = await tryCatch(axios.post(url, { chat_id: chatId, text }))
		if (!res.success)
			return {
				success: false,
				error: true,
				message: "Failed to send message, try again in a few minutes.",
			}

		return {
			success: true,
			error: false,
			message: "Message recieved successfully, I will get back to you soon.",
		}
	}
}

export const contactService: IContactService = new ContactService()
