import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

import { AxiosError } from "axios"

export const fe = (error: unknown) => {
	if (error instanceof AxiosError && error.response?.data.message)
		return (error.response?.data?.message as string) || error.message

	if (error instanceof Error) return error.message
	if (typeof error === "string") return error

	return "Something went wrong"
}

export async function tryCatch<T, E = Error>(promise: Promise<T>) {
	try {
		return [await promise, null] as const
	} catch (error) {
		return [null, error as E] as const
	}
}

export function syncTryCatch<T, E = Error>(callback: () => T) {
	try {
		return [callback() as T, null] as const
	} catch (error) {
		return [null, error as E] as const
	}
}

//return bad request
export function errorR(error: unknown, status = 400) {
	return { status, message: fe(error) }
}

//return success
export function successR<T>({
	status = 200,
	message,
}: { status?: number; message: string } & T) {
	return { status, message }
}

export const arrangeObjectKeys = <T extends object>(
	data: T,
	sort: "asc" | "desc" = "asc",
) => {
	return Object.fromEntries(
		Object.entries(data).sort(([key], [bKey]) =>
			sort === "asc" ? key.localeCompare(bKey) : bKey.localeCompare(key),
		),
	)
}

export function sortBylatestTime(a: { time: Date }, b: { time: Date }) {
	const aTime = new Date(a.time)
	const bTime = new Date(b.time)
	return aTime.getTime() - bTime.getTime()
}

export function qraphqlVariablesBuilder(variables = {}) {
	let variableParams = ""
	let variableKeys = ""

	for (const [key, value] of Object.entries(variables)) {
		if (typeof value === "boolean") {
			variableParams += `, $${key}: Boolean`
			variableKeys += `, ${key}: $${key}`
		}
		if (typeof value === "string") {
			variableParams += `, $${key}: String`
			variableKeys += `, ${key}: $${key}`
		}

		if (typeof value === "number") {
			variableParams += `, $${key}: Int`
			variableKeys += `, ${key}: $${key}`
		}

		if (Array.isArray(value)) {
			if (typeof value[0] === "string") {
				variableParams += `, $${key}: [String]`
				variableKeys += `, ${key}: $${key}`
			} else if (typeof value[0] === "number") {
				variableParams += `, $${key}: [Int]`
				variableKeys += `, ${key}: $${key}`
			}
		}
	}

	return {
		types: variableParams ? `( ${variableParams.slice(2)} )` : "",
		variables: variableKeys ? `( ${variableKeys.slice(2)} )` : "",
	}
}

export const hasKey = <T extends object>(
	object: T,
	key: PropertyKey,
): key is keyof T => {
	return key in object
}
