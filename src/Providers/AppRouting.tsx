"use client"

import { usePathname, useSearchParams } from "next/navigation"
import {
	createContext,
	type PropsWithChildren,
	Suspense,
	useLayoutEffect,
	useMemo,
	useState,
} from "react"
import type { SetState } from "@/shared/types/utils/setState"

type AppRoutingContext = {
	searchParams: URLSearchParams
	pathname: string
	url: string
}

type AppRouteListenerProps = {
	setSearchParams: SetState<URLSearchParams>
}

export const AppRoutingContext = createContext<AppRoutingContext | null>(null)

export function AppRoutingProvider({ children }: PropsWithChildren) {
	const [searchParams, setSearchParams] = useState(new URLSearchParams(""))
	const pathname = usePathname()

	const url = useMemo(() => {
		const query = searchParams.toString().trim()
		return query ? `${pathname}?${query}` : pathname
	}, [pathname, searchParams])

	const value = useMemo(
		() => ({
			searchParams,
			pathname,
			url,
		}),
		[searchParams, pathname, url],
	)

	return (
		<AppRoutingContext value={value}>
			<Suspense fallback={null}>
				<AppRouteListener setSearchParams={setSearchParams} />
			</Suspense>

			{children}
		</AppRoutingContext>
	)
}

function AppRouteListener({ setSearchParams }: AppRouteListenerProps) {
	const sp = useSearchParams()

	useLayoutEffect(() => {
		setSearchParams(new URLSearchParams(sp.toString()))
	}, [sp, setSearchParams])

	return null
}
