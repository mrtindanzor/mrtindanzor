import { useCallback, useState } from "react"
import {
	type ArrayPaths,
	type ArrayPathValue,
	dotProps,
	type Path,
	type PathValue,
} from "@/libs/dot-prop"
import type { UseSetState } from "./overloads.types"

export function useSetState<T extends Record<string, unknown>>(
	defaultState: T,
): readonly [T, UseSetState<T>]

export function useSetState<T extends Record<string, unknown>>(
	defaultState?: T,
): readonly [undefined, UseSetState<T>]

export function useSetState<T extends Record<string, unknown>>(
	defaultState: T,
) {
	const [state, setState] = useState({ ...(defaultState ?? {}) } as T)

	const setValue = useCallback(
		<P extends Path<T>>(path: P, data: PathValue<T, P>) => {
			setState((state) => ({
				...dotProps.setValue({ ...(state ?? {}) } as T, path, data),
			}))
		},
		[],
	)

	const getValue = useCallback(
		<P extends Path<T>>(path: P) => {
			return dotProps.getValue(state, path)
		},
		[state],
	)

	const getPathValueFromData = useCallback(
		<P extends Path<T>>(data: T, path: P) => dotProps.getValue(data, path),
		[],
	)

	const reset = useCallback((data?: Partial<T>) => {
		setState({ ...(data ?? {}) } as T)
	}, [])

	const insert = useCallback(
		<P extends ArrayPaths<T>>(
			path: P,
			data: ArrayPathValue<T, P>,
			position: "prepend" | "append",
		) => {
			setState((state) => {
				// biome-ignore lint/suspicious/noExplicitAny: Cast the data as any array
				const arrayValues = (dotProps.getValue(state, path) ?? []) as any[]

				const updatedData =
					position === "append"
						? [...arrayValues, data]
						: position === "prepend"
							? [data, ...arrayValues]
							: arrayValues

				return {
					...dotProps.setValue(
						{ ...(state ?? {}) } as T,
						path,
						updatedData as PathValue<T, P>,
					),
				}
			})
		},
		[],
	)

	const removeIndex = useCallback(
		<P extends ArrayPaths<T>>(path: P, index: number) => {
			setState((state) => {
				const arrayValues =
					// biome-ignore lint/suspicious/noExplicitAny: Cast the data as any array
					((dotProps.getValue(state, path) ?? []) as any[]).filter(
						(_, i) => i !== index,
					)
				return {
					...dotProps.setValue(
						{ ...(state ?? {}) } as T,
						path,
						arrayValues as PathValue<T, P>,
					),
				}
			})
		},
		[],
	)

	const createFieldArray = useCallback(
		<P extends ArrayPaths<T>>({ name }: { name: P }) => ({
			append: (data: ArrayPathValue<T, P>) => insert(name, data, "append"),
			prepend: (data: ArrayPathValue<T, P>) => insert(name, data, "prepend"),
			remove: removeIndex,
			fields: (getPathValueFromData(state, name) ?? []) as PathValue<T, P>,
		}),
		[state, insert, getPathValueFromData, removeIndex],
	)

	return [
		state,
		{ getValue, createFieldArray, getPathValueFromData, setValue, reset },
	] as const
}
