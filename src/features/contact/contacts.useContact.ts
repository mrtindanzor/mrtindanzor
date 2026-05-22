import { useServerFn } from "@tanstack/react-start"
import { useForm } from "@/shared/hooks/useForm"
import { sendMessage } from "./contact.actions"
import type { ContactDataType } from "./contact.contract.types"
import { contactValidator } from "./contact.validators"

export function useContact() {
	const sendContactMessage = useServerFn(sendMessage)
	const { register, handleSubmit, reset, formState, setResponse } =
		useForm<ContactDataType>({ data: { name: "", contact: "", message: "" } })

	const onSubmit = handleSubmit(async function sendMessage(payload) {
		const parsed = contactValidator.parse(payload)
		const res = await sendContactMessage({ data: parsed })

		setResponse(res)
		if (res.success) reset({ message: "", name: "", contact: "" })
	})

	return {
		onSubmit,
		register,
		formState,
	}
}
