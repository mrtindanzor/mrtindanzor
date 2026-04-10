"use client"

import { useRouter } from "@tanstack/react-router"
import {
	createContext,
	type PropsWithChildren,
	Suspense,
	useLayoutEffect,
	useMemo,
	useState,
} from "react"

type AppRoutingContext = {
	searchParams: URLSearchParams
	pathname: string
	url: string
}

export const AppRoutingContext = createContext<AppRoutingContext | null>(null)

export function AppRoutingProvider({ children }: PropsWithChildren) {
	const route = useRouter()
	const { search, pathname: path } = route.state.location
	const [searchParams, setSearchParams] = useState(new URLSearchParams(search))
	const [pathname, setPathname] = useState(path)

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
				<RouteChangeListener
					setSearchParams={setSearchParams}
					setPathname={setPathname}
				/>
			</Suspense>

			{children}
		</AppRoutingContext>
	)
}

type RouteChangeListenerProps = {
	setPathname: (pathname: string) => void
	setSearchParams: (searchParams: URLSearchParams) => void
}
function RouteChangeListener({
	setSearchParams,
	setPathname,
}: RouteChangeListenerProps) {
	const route = useRouter()

	useLayoutEffect(() => {
		route.subscribe("onLoad", () => {
			const { pathname, search } = route.latestLocation
			setPathname(pathname)
			setSearchParams(new URLSearchParams(search))
		})
	}, [route, setPathname, setSearchParams])

	return null
}
