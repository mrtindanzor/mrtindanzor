import type { FetchStatus } from "@/libs/fetchData"
import type { ITelegram } from "@/libs/telegram"

export type ContactDataType = {
	name: string
	contact: string
	message: string
	honeypot?: string | undefined | null
}

export interface IContactService {
	sendMessage(message: string, telegram: ITelegram): Promise<FetchStatus>
}
