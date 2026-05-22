import { fe } from "@/shared/utils/fe"
import { tryCatch } from "@/shared/utils/tryCatch"
import { axiosInstance } from "./axios"
import type {
	FetchingStatus,
	FetchQueryProps,
	FetchQueryType,
} from "./fetchData.types"

function fetchQuery(
	getAccessToken: () => string | null | undefined,
): FetchQueryType {
	return <T>(payload: FetchQueryProps) => {
		const localPayload = payload
		let status: FetchingStatus = "idle"
		let error: string | null = null
		let data: T | null = null

		async function fetch() {
			if (status !== "idle") return

			status = "loading"

			const accessToken = getAccessToken()
			const axios = axiosInstance({ accessToken })

			const res = await tryCatch(
				axios.post<{ data: T }>("/query", localPayload),
			)

			if (!res.success) {
				status = "error"
				error = fe(res.error)
				return
			}

			status = "success"
			data = res.data.data.data
		}

		return {
			fetch,
			isError() {
				return status === "error"
			},

			get error(): string {
				if (!error) throw Error("No error message")
				return error
			},

			get data(): T {
				if (!data) throw Error("No data fetched")

				return data
			},

			get status() {
				return status
			},
		}
	}
}

export function createFetchQueryClient(
	getAccessToken: () => string | null | undefined,
): FetchQueryType {
	return fetchQuery(getAccessToken)
}
