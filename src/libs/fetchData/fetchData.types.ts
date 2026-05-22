import type { ZodType } from "zod"
import type { FetchStatus, FetchStatusWithData } from "@/shared/utils/response"

export type FetchingStatus = "idle" | "loading" | "success" | "error"

export type FetchDataProps<Payload = object | undefined> = {
	payload?: Payload
	uri: string
	method?: "post" | "put" | "delete" | "patch" | "get"
}

export type FetchQueryProps = {
	query: string
	variables?: object
}

export type ServerResponse<T> = T & {
	rateExceeded?: boolean
	message: string
	status: ErrorCode | SuccessCode
}

export type ErrorCode = 500 | 400 | 403 | 404
export type SuccessCode = 200 | 201

export type FetchQueryType = <T>(payload: FetchQueryProps) => {
	fetch: () => Promise<void>
	isError(): boolean
	readonly error: string
	readonly data: T
	readonly status: FetchingStatus
}

export type FetchDataType = <T>(payload: FetchDataProps) => {
	fetch: <Schema extends ZodType>(validator?: Schema) => Promise<void>
	isError(): boolean
	isSuccess(): boolean
	readonly message: string
	readonly error: string
	readonly data: T
	readonly dataWithStatus: FetchStatusWithData<T>
	readonly fetchStatus: FetchStatus
	statusCode: null
}
