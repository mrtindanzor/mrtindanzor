/** biome-ignore-all lint/suspicious/noExplicitAny: Matching by array Paths */
import type { Path } from "./Paths.types"
import type { PathValue } from "./PathValue.types"

export type ArrayPaths<T> = {
	[P in Path<T>]: PathValue<T, P> extends any[] ? P : never
}[Path<T>]

export type ArrayPathValue<T, P extends ArrayPaths<T>> = PathValue<
	T,
	P
> extends any[]
	? PathValue<T, P>[number]
	: never
