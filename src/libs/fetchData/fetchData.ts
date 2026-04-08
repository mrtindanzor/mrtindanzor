/** biome-ignore-all lint/style/noNonNullAssertion: assert data is not null by runing our own checks */

import type { AxiosResponse } from "axios"
import type { ZodType } from "zod"
import { fe } from "@/shared/utils/fe"
import { syncTryCatch, tryCatch } from "@/shared/utils/tryCatch"
import { axiosInstance } from "./axios"
import type {
	ErrorCode,
	FetchDataProps,
	FetchDataType,
	FetchingStatus,
	FetchStatus,
	ServerResponse,
	SuccessCode,
} from "./fetchData.types"

function fetchData(
	accessToken: string | null | undefined | (() => string | null),
): FetchDataType {
	return <T>(payload: FetchDataProps) => {
		const localPayload = payload

		let status: FetchingStatus = "idle"
		let data: T | null = null
		let error: string | null = null
		let message: string | null = null

		let statusCode: ErrorCode | SuccessCode | null = null

		async function fetch<Schema extends ZodType>(validator?: Schema) {
			if (status !== "idle") return

			if (validator) {
				const parsed = syncTryCatch(
					() => validator.parse(localPayload.payload) as T,
				)
				if (!parsed.success) {
					error = fe(parsed.error)
					status = "error"
					statusCode = 400
					return
				}

				if (parsed.data) localPayload.payload = parsed.data
			}

			const { uri, method = "post", payload } = localPayload
			status = "loading"

			let access = accessToken
			if (typeof access === "function") access = access()
			const axios = axiosInstance({ accessToken: access })

			let promise: Promise<AxiosResponse<ServerResponse<T>, unknown>>

			switch (method) {
				case "delete":
				case "get": {
					promise = axios[method]<ServerResponse<T>>(uri)
					break
				}
				default:
					promise = axios[method]<ServerResponse<T>>(uri, payload)
			}

			const res = await tryCatch(promise)

			status = "error"
			statusCode = 400

			if (!res.success) {
				error = fe(res.error)
				return
			}

			const resData = res.data.data

			if (![200, 201].includes(resData.status)) {
				error = fe(resData.message)
				return
			}

			const { message: resMessage, status: _s, ...rest } = resData

			statusCode = resData.status
			status = "success"
			message = resMessage

			data = rest as T
		}

		return {
			fetch,
			isError() {
				return status === "error"
			},
			isSuccess() {
				return status === "success"
			},
			get message(): string {
				if (!message) throw Error("No success message exists")

				return message
			},
			get error(): string {
				if (!error) throw Error("No error exists")
				return error
			},
			get data(): T {
				if (!data) throw Error(error ?? "Data not available, call fetch first")

				return data
			},
			get fetchStatus(): FetchStatus {
				if (status === "success")
					return { error: false, success: true, message: message! }
				return { error: true, success: false, message: error! }
			},
			statusCode,
		}
	}
}

export function createFetchDataClient(
	accessToken: string | null | undefined | (() => string | null),
): FetchDataType {
	return fetchData(accessToken)
}
