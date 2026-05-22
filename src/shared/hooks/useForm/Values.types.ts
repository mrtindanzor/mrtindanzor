import type { ChangeEvent, FormEvent } from "react"
import type {
	ArrayPaths,
	ArrayPathValue,
	Path,
	PathValue,
} from "@/libs/dot-prop"

export type UseFormGetValues<T> = <P extends Path<T>>(
	path: P,
) => PathValue<T, P>
export type UseFormReset<T> = (props?: Partial<T>) => void
export type UseFormOnSubmit = (e?: FormEvent) => Promise<void>
export type UseFormState = {
	submitting: boolean
	error: boolean
	message: string
	success: boolean
}

export type UseFormSetValues<T> = <P extends Path<T>>(
	path: P,
	value: PathValue<T, P>,
) => void

export type UseFormRegister<T> = <P extends Path<T>>(
	path: P,
) => {
	value: string
	onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

export type UseFormWatchValues<T> = <P extends Path<T>>(
	path: P,
) => PathValue<T, P>

export type UseCreateFieldArray<T> = <P extends ArrayPaths<T>>(
	path: P,
) => {
	append: (data: ArrayPathValue<T, P>) => void
	prepend: (data: ArrayPathValue<T, P>) => void
	remove: <P extends ArrayPaths<T>>(path: P, index: number) => void
	fields: PathValue<T, P>
}

export type UseFormAppend<T> = <P extends ArrayPaths<T>>(
	data: ArrayPathValue<T, P>,
) => void
export type UseFormRemoveIndex = (index: number) => void
export type UseFormArrayFields<T, P extends ArrayPaths<T>> = PathValue<T, P>
