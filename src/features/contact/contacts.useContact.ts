import { useForm } from "@/shared/hooks/useForm"
import type { ContactDataType } from "./contact.contract.types"
import { contactService } from "./contact.service"
import { contactValidator } from "./contact.validators"

export function useContact() {
	const { register, handleSubmit, reset, formState, setResponse } =
		useForm<ContactDataType>({ data: { name: "", contact: "", message: "" } })

	const onSubmit = handleSubmit(async function sendMessage(payload) {
		const parsed = contactValidator.parse(payload)
		const res = await contactService.create(parsed)

		setResponse(res)
		if (res.success) reset({ message: "", name: "", contact: "" })
	})

	return {
		onSubmit,
		register,
		formState,
	}
}
