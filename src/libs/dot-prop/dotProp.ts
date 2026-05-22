import { getProperty, setProperty } from "dot-prop"
import type { Path } from "./types/Paths.types"
import type { PathValue } from "./types/PathValue.types"

export const dotProps = { getValue, setValue }

function getValue<T, P extends Path<T>>(data: T, path: P): PathValue<T, P> {
	return getProperty(data, path) as PathValue<T, P>
}

function setValue<
	T extends Record<string, unknown> | unknown[],
	P extends Path<T>,
>(data: T, path: P, value: PathValue<T, P>): T {
	return setProperty({ ...(data ?? {}) }, path, value)
}
