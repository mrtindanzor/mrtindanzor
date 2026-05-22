import { createFetchDataClient } from "./fetchData"
import type { FetchDataType, FetchQueryType } from "./fetchData.types"
import { createFetchQueryClient } from "./fetchQuery"

type CreateServiceProps<T> = (config: {
	apiClient: FetchDataType
	queryClient: FetchQueryType
}) => T

export function createService<T>(config: CreateServiceProps<T>) {
	const apiClient = createFetchDataClient(() => null)
	const queryClient = createFetchQueryClient(() => null)

	return config({ apiClient, queryClient })
}
