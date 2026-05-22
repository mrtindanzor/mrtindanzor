import { useContext } from "react"
import { AppRoutingContext } from "@/providers/AppRouting"

export function useAppSearchParams() {
	const ctx = useContext(AppRoutingContext)
	if (!ctx)
		throw Error("UseAppSearchParams must be used inside AppRoutingProvider")

	return ctx.searchParams
}

export function useAppPathname() {
	const ctx = useContext(AppRoutingContext)
	if (!ctx) throw Error("UseAppPathname must be used inside AppRoutingProvider")

	return ctx.pathname
}

export function usePathUrl() {
	const ctx = useContext(AppRoutingContext)
	if (!ctx) throw Error("UsePathUrl must be used inside AppRoutingProvider")

	return ctx.url
}
