"use client"

import { useCallback, useEffect, useRef } from "react"
import useMatchesWidth from "@/hooks/useDeviceWidth"
import { cn } from "@/lib/utils"
import type { FollowLinkProps } from "@/types/types"
import { ArrowLink } from "./ArrowLink"

export function LinkFollow({ ...props }: FollowLinkProps) {
	const linkRef = useRef<HTMLAnchorElement>(null)
	const divRef = useRef<HTMLDivElement>(null)
	const isMeduimDevice = useMatchesWidth({ size: "sm", comparison: ">" })

	const handleMouseOver = useCallback((e: MouseEvent) => {
		const divEl = divRef.current
		const linkEl = linkRef.current

		if (!(divEl instanceof HTMLElement) || !(linkEl instanceof HTMLElement))
			return

		const { left, top } = divEl.getBoundingClientRect()
		const x = e.clientX - left
		const y = e.clientY - top
		linkEl.style.left = `${x}px`
		linkEl.style.top = `${y}px`
		linkEl.classList.remove("hidden!")
	}, [])

	const handleMouseLeave = useCallback(() => {
		const linkEl = linkRef.current
		if (!(linkEl instanceof HTMLElement)) return

		linkEl.classList.add("hidden!")
	}, [])

	useEffect(() => {
		if (!isMeduimDevice) return

		const divEl = divRef.current
		if (!(divEl instanceof HTMLElement)) return

		divEl.addEventListener("mousemove", handleMouseOver)
		divEl.addEventListener("mouseleave", handleMouseLeave)

		return () => {
			divEl.removeEventListener("mousemove", handleMouseOver)
			divEl.removeEventListener("mouseleave", handleMouseLeave)
		}
	}, [handleMouseLeave, handleMouseOver, isMeduimDevice])

	return (
		<div
			ref={divRef}
			className={cn(
				"sm:cursor-none z-2 absolute inset-0 overflow-hidden",
				!isMeduimDevice
					? "size-0"
					: "cursor-none z-2 absolute inset-0 overflow-hidden",
			)}
		>
			<ArrowLink
				ref={linkRef}
				{...props}
				className="sm:cursor-none absolute -translate-1/2 bg-white text-slate-800 size-10 transition-transform duration-75 ease-in *:size-10 hidden!"
			/>
		</div>
	)
}
