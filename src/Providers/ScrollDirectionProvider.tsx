"use client"

import { ArrowUpToLine } from "lucide-react"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { Button } from "@/shared/ui/primitive/Button"
import { Visibility } from "@/shared/ui/primitive/Visibility"
import { cn } from "@/shared/utils/cn"

type ScrollDirection = {
	direction: "Top" | "Down"
	current: number
	previous: number
}
const ScrollDirectionContext = createContext<ScrollDirection | null>(null)

export default function GoToTop() {
	const { direction, current: currentScroll } = useDirectionContext()

	return (
		<Visibility show={direction === "Top" && currentScroll > 300}>
			<div
				className={cn(
					"fixed pointer-events-none z-10 bottom-20 w-screen max-w-7xl left-1/2 -translate-x-1/2 flex justify-end pr-5",
				)}
			>
				<Button
					title="Go to Top"
					aria-label="Click to go to top"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" })
					}}
					variant="none"
					className="link pointer-events-auto px-1"
				>
					<ArrowUpToLine className="size-8" />
				</Button>
			</div>
		</Visibility>
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
