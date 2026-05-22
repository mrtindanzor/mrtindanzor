export type responseUtilType<
	T = unknown,
	Success extends "success" | "error" = "success",
> = Success extends "success" ? FetchSuccessType & { data: T } : FetchErrorType

export type FetchErrorType = {
	message: string
	success: false
	error: true
}

export type FetchSuccessType = {
	message: string
	success: true
	error: false
}

export type FetchStatusWithData<T> =
	| (FetchSuccessType & { data: T })
	| FetchErrorType

export type FetchStatus = FetchSuccessType | FetchErrorType
