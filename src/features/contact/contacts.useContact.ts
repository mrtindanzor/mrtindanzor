"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { sendMessage } from "./contact.actions"
import type { ContactDataType } from "./contact.contract.types"
import { contactValidator } from "./contact.validators"

export function useContact() {
	const { register, handleSubmit, setError, reset, formState } =
		useForm<ContactDataType>({
			resolver: zodResolver(contactValidator),
		})

	const handleMessage = useCallback(
		async (payload: ContactDataType) => {
			const res = await sendMessage(payload)
			if (res.error) throw res.message

			reset()
			setError("root", { message: res.message })
		},
		[setError, reset],
	)

	return {
		onsubmit: handleSubmit(handleMessage),
		handleMessage,
		register,
		handleSubmit,
		formState,
	}
}
