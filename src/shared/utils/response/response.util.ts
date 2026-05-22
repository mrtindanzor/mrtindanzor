import { fe } from "../fe"
import type { responseUtilType } from "./response.util.types"

export function responseUtil<T, Success extends "success" | "error">(
	message: string,
	success: Success,
	data?: T,
): responseUtilType<T, Success> {
	if (success === "success")
		return {
			message,
			success: true,
			error: false,
			...(data ? { data } : {}),
		} as responseUtilType<T, Success>

	return { message, success: false, error: true } as responseUtilType<
		T,
		Success
	>
}

export function errorR(message: unknown) {
	return responseUtil(fe(message), "error")
}
