"use client"

import { MoveUp } from "lucide-react"
import {
	Activity,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react"
import { Button } from "@/components/common/Button"
import { Typography } from "@/components/common/Typography"
import { cn } from "@/lib/utils"

type ScrollDirection = {
	direction: "Top" | "Down"
	current: number
	previous: number
}
const ScrollDirectionContext = createContext<ScrollDirection | null>(null)

export default function GoToTop() {
	const { direction, current: currentScroll } = useDirectionContext()

	return (
		<Activity
			mode={direction === "Top" && currentScroll > 300 ? "visible" : "hidden"}
		>
			<div
				className={cn(
					"fixed pointer-events-none z-10 bottom-20 w-screen max-w-7xl left-1/2 -translate-x-1/2 flex justify-end pr-5",
				)}
			>
				<Button
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" })
					}}
					className="link pointer-events-auto bg-slate-950/50 backdrop-blur-md hover:bg-slate-950/60  px-0 py-4 gap-2 rounded-3xl flex flex-col items-center"
				>
					<MoveUp className="size-8" />
					<Typography size="sm" className="text-white">
						Go To Top
					</Typography>
				</Button>
			</div>
		</Activity>
	)
}

export function ScrollDirectionProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [scroll, setScroll] = useState({ current: 0, previous: 0 })
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)
	const direction =
		scroll.current > scroll.previous ? ("Down" as const) : ("Top" as const)

	useEffect(() => {
		const timeoutId = timeoutRef.current

		const handleScroll = () => {
			const body = document.querySelector("body")
			const docElement = document.documentElement

			if (!body) return

			const scrollTop = docElement.scrollTop || body.scrollTop

			timeoutRef.current = setTimeout(() => {
				setScroll((prev) => ({ previous: prev.current, current: scrollTop }))
			}, 200)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
			if (timeoutId) clearTimeout(timeoutId)
		}
	}, [])

	return (
		<ScrollDirectionContext.Provider
			value={{ direction, current: scroll.current, previous: scroll.previous }}
		>
			<GoToTop />
			{children}
		</ScrollDirectionContext.Provider>
	)
}

export function useDirectionContext() {
	const context = useContext(ScrollDirectionContext)
	if (!context) throw Error("Scroll direction context not provided")

	return context
}
