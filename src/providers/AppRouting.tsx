import { useRouter } from "@tanstack/react-router"
import {
	createContext,
	type PropsWithChildren,
	Suspense,
	useLayoutEffect,
	useMemo,
	useState,
} from "react"
import type { SetState } from "@/shared/types/utils/setState"

type Search = Record<string, string | string[]>

type AppRoutingContext = {
	searchParams: Search
	pathname: string
}

export const AppRoutingContext = createContext<AppRoutingContext | null>(null)

export function AppRoutingProvider({ children }: PropsWithChildren) {
	const route = useRouter()
	const { pathname: path } = route.state.location
	const [searchParams, setSearchParams] = useState({})
	const [pathname, setPathname] = useState(path)

	const value = useMemo(
		() => ({
			searchParams,
			pathname,
		}),
		[searchParams, pathname],
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
	setPathname: SetState<string>
	setSearchParams: SetState<Search>
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
			setSearchParams(() => {
				const searchParams: Search = {}

				for (const [key, value] of Object.entries(search)) {
					if (typeof value !== "string" && !Array.isArray(value)) continue

					let isExists = searchParams[key]

					if (isExists && Array.isArray(isExists)) {
						if (typeof value === "string") isExists.push(value)
						if (Array.isArray(value)) {
							isExists = [...isExists, ...value]
						}
						continue
					}

					if (isExists && !Array.isArray(isExists)) {
						if (typeof value === "string") isExists = [isExists, value]
						if (Array.isArray(value)) {
							isExists = [isExists, ...value]
						}

						continue
					}

					searchParams[key] = value
				}

				return searchParams
			})
		})
	}, [route, setPathname, setSearchParams])

	return null
}
