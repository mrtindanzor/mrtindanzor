import type { FetchStatus } from "@/shared/utils/response"

export type ContactDataType = {
	name: string
	contact: string
	message: string
	honeypot?: string | undefined | null
}

export type SocailMediaProps = {
	title: string
	link: string
	icon: React.ElementType
	color: string
}

export interface IContactService {
	create(props: ContactDataType): Promise<FetchStatus>
	socials: () => SocailMediaProps[]
}
