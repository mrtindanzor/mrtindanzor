import type { FetchStatus } from "@/shared/utils/response"

export type ContactDataType = {
	name: string
	contact: string
	message: string
	honeypot?: string | undefined | null
}

export abstract class IContactService {
	abstract create(props: ContactDataType): Promise<FetchStatus>
}
