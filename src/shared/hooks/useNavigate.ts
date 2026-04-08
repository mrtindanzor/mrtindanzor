"use client"

import { useRouter } from "next/navigation"
import { useMemo } from "react"

export function useNavigate() {
	const router = useRouter()

	const routing = useMemo(
		() => ({
			push: router.push,
			replace: router.replace,
			refresh: router.refresh,
			back: router.back,
			forward: router.forward,
		}),
		[router],
	)

	return routing
}
