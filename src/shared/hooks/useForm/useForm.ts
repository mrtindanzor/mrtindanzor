import { type ChangeEvent, useCallback } from "react"
import type { Path, PathValue } from "@/libs/dot-prop"
import { useFetch } from "../useFetch"
import { useSetState } from "../useSetState"

export type UpdateProps = {
	message: unknown
	error?: boolean
	success?: boolean
}

export type useFormProps<T> = {
	data?: Partial<T>
}

export function useForm<T extends Record<string, unknown>>({
	data,
}: useFormProps<T> = {}) {
	const [
		formdata,
		{ setValue, getValue, getPathValueFromData, createFieldArray, reset },
	] = useSetState(data as T)
	const {
		setResponse,
		msgCtnRef,
		submitRequest: handleSubmit,
		isLoading: submitting,
		autoClearFormState,
		clearFormState,
		error,
		success,
		message,
	} = useFetch({ data: formdata })

	const register = useCallback(
		<P extends Path<T>>(path: P) => {
			return {
				value: (getPathValueFromData(formdata, path) ?? "") as string,
				onChange(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
					setValue(path, e.target.value as PathValue<T, P>)
				},
			}
		},
		[getPathValueFromData, setValue, formdata],
	)

	return {
		setResponse,
		msgCtnRef,
		handleSubmit,
		formState: { error, success, message, submitting },
		clearFormState,
		data: formdata,
		setValue,
		getValue,
		reset,
		register,
		autoClearFormState,
		createFieldArray,
	}
}
