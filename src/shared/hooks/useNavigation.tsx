import { useContext } from "react"
import { AppRoutingContext } from "@/providers/AppRouting"

type Search = Record<string, string | string[]>
type SearchParams<T extends Search> = {
	[K in keyof T]: T[K] | null
}

export function useSearchParams<T extends Search>() {
	const ctx = useContext(AppRoutingContext)
	if (!ctx)
		throw Error("UseSearchParams must be used inside AppRoutingProvider")

	return ctx.searchParams as SearchParams<T>
}

export function usePathname() {
	const ctx = useContext(AppRoutingContext)
	if (!ctx) throw Error("UseAppPathname must be used inside AppRoutingProvider")

	return ctx.pathname
}
