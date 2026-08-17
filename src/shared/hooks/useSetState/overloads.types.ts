import type {
	ArrayPaths,
	ArrayPathValue,
	Path,
	PathValue,
} from "@/libs/dot-prop"

export type UseSetState<T extends Record<string, unknown>> = {
	getValue: <P extends Path<T>>(path: P) => PathValue<T, P>
	getPathValueFromData: <P extends Path<T>>(data: T, path: P) => PathValue<T, P>
	setValue: <P extends Path<T>>(path: P, data: PathValue<T, P>) => void
	reset: (data?: Partial<T> | undefined) => void
	createFieldArray: <P extends ArrayPaths<T>>({
		name,
	}: {
		name: P
	}) => {
		append: (data: ArrayPathValue<T, P>) => void
		prepend: (data: ArrayPathValue<T, P>) => void
		remove: <P extends ArrayPaths<T>>(name: P, index: number) => void
		fields: PathValue<T, P>
	}
}
