/** biome-ignore-all lint/style/noNonNullAssertion: assert data is not null by runing our own checks */

import type { AxiosResponse } from "axios"
import type { ZodType } from "zod"
import { fe } from "@/shared/utils/fe"
import {
	type FetchStatus,
	type FetchStatusWithData,
	responseUtil,
} from "@/shared/utils/response"
import { syncTryCatch, tryCatch } from "@/shared/utils/tryCatch"
import { axiosInstance } from "./axios"
import type {
	ErrorCode,
	FetchDataProps,
	FetchDataType,
	FetchingStatus,
	ServerResponse,
	SuccessCode,
} from "./fetchData.types"

function fetchData(
	getAccessToken: () => string | null | undefined,
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
				const res = syncTryCatch(() => validator.parse(localPayload.payload))
				if (!res.success) {
					error = fe(res.error)
					status = "error"
					statusCode = 400
					return
				}

				if (data) localPayload.payload = data
			}

			const { uri, method = "post", payload } = localPayload
			status = "loading"

			const accessToken = getAccessToken()

			const axios = axiosInstance({ accessToken })

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

			const result = await tryCatch(promise)

			status = "error"
			statusCode = 400

			if (!result.success) {
				error = fe(result.error)
				return
			}

			if (![200, 201].includes(result.data.data.status)) {
				error = fe(result.data.data.message)
				return
			}

			const { message: resMessage, status: _s, ...rest } = result.data.data

			statusCode = result.data.data.status
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
			get dataWithStatus(): FetchStatusWithData<T> {
				if (data) return responseUtil(message!, "success", data!)

				return responseUtil(error!, "error")
			},
			get fetchStatus(): FetchStatus {
				if (status === "success") return responseUtil(message!, "success")

				return responseUtil(error!, "error")
			},
			statusCode,
		}
	}
}

export function createFetchDataClient(
	getAccessToken: () => string | null | undefined,
): FetchDataType {
	return fetchData(getAccessToken)
}
