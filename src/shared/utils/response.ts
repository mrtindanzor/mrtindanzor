import { fe } from "./fe"

type ErrorState =
	| "forbidden"
	| "unauthorized"
	| "not-found"
	| "server-errorState"
	| "bad-request"

export function standardResponse(
	res: ErrorState,
	message: string | Error,
): { error: true; message: string }
export function standardResponse<T>(
	res: "success",
	message: string,
	data: T,
): { error: false; message: string; data?: T }

export function standardResponse<
	T,
	Res extends "success" | ErrorState = ErrorState,
>(
	res: Res,
	message: string | Error,
	data?: T,
):
	| { error: false; message: string; data?: T }
	| { error: true; message: string } {
	if (res === "success")
		return { error: false, message: fe(message), data } as const

	return { message: fe(message), error: true } as const
}
