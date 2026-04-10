"use client"

import { useRouter } from "@tanstack/react-router"
import { useMemo } from "react"

export function useNavigate() {
	const router = useRouter()

	const routing = useMemo(
		() => ({
			push: (url: string) => router.navigate({ href: url }),
			replace: (url: string) => router.navigate({ href: url, replace: true }),
			refresh: () => router.invalidate({ sync: true }),
			back: () => router.history.back(),
			forward: () => router.history.forward(),
		}),
		[router],
	)

	return routing
}
