import { useMemo } from "react"

export function useCurrentYear() {
	return useMemo(() => new Date().getFullYear(), [])
}
