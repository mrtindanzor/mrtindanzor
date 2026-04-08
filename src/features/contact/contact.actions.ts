"use server"

import { standardResponse } from "@/shared/utils/response"
import { toCapitalized } from "@/shared/utils/textFormat"
import { syncTryCatch } from "@/shared/utils/tryCatch"
import type { ContactDataType } from "./contact.contract.types"
import { contactService } from "./contact.services"
import { contactValidator } from "./contact.validators"

export const sendMessage = async (payload: ContactDataType) => {
	const parsed = syncTryCatch(() => contactValidator.parse(payload))
	if (!parsed.success) return standardResponse("bad-request", parsed.error)

	const { error, message: ErrorMessage } = await contactService.sendMessage(
		formatMessage(payload),
	)

	if (error) return { error: true, message: ErrorMessage }

	return {
		status: 201,
		message: "Thanks! Your message was received. I'll be in touch soon.",
	}
}

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
