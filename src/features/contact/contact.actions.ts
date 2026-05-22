import { createServerFn } from "@tanstack/react-start"
import { libsConfig } from "@/config/libsConfig"
import { toCapitalized } from "@/shared/utils/textFormat"
import type { ContactDataType } from "./contact.contract.types"
import { contactService } from "./contact.services"
import { contactValidator } from "./contact.validators"

export const sendMessage = createServerFn({ method: "POST" })
	.inputValidator(contactValidator)
	.handler(async ({ data }) => {
		const message = formatMessage(data)
		return await contactService.sendMessage(message, libsConfig.telegram)
	})

function formatMessage({
	message,
	name,
	contact,
}: Omit<ContactDataType, "honeypot">) {
	return `
		**New message from ${toCapitalized(name)}**
		**Contact - ${contact}**
		
		${message}
	`
}
