import type { FetchStatus } from "@/libs/fetchData"

export type ContactDataType = {
	name: string
	contact: string
	message: string
	honeypot?: string | undefined | null
}

export interface IContactService {
	sendMessage(message: string): Promise<FetchStatus>
}
