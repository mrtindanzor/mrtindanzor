"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import useMatchesWidth from "@/hooks/useDeviceWidth"
import { cn } from "@/lib/utils"
import type { IconLinkProps, TypographyProps } from "@/types/types"
import { StyledArrowLink } from "./IconLink"
import { Typography } from "./Typography"

export function LinkFollow({ ...props }: Omit<IconLinkProps, "icon">) {
	const [popupVisible, setPopupVisbile] = useState(true)
	const linkRef = useRef<HTMLAnchorElement>(null)
	const divRef = useRef<HTMLDivElement>(null)
	const isMeduimDevice = useMatchesWidth({ size: "sm", comparison: ">" })
	const timeoutIdRef = useRef<ReturnType<typeof setTimeout>>(null)

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

	const handlePopOverMouseOver = useCallback(() => {
		if (popupVisible) {
			const timeoutId = timeoutIdRef.current
			if (timeoutId) clearTimeout(timeoutId)

			timeoutIdRef.current = setTimeout(() => setPopupVisbile(false), 1000)
		}
	}, [popupVisible])

	useEffect(() => {
		if (!isMeduimDevice) return

		const divEl = divRef.current
		if (!(divEl instanceof HTMLElement)) return

		divEl.addEventListener("mousemove", handleMouseOver)
		divEl.addEventListener("mouseleave", handleMouseLeave)
		divEl.addEventListener("mouseover", handlePopOverMouseOver)

		return () => {
			divEl.removeEventListener("mousemove", handleMouseOver)
			divEl.removeEventListener("mouseleave", handleMouseLeave)
			divEl.removeEventListener("mouseover", handlePopOverMouseOver)
		}
	}, [
		handleMouseLeave,
		handlePopOverMouseOver,
		handleMouseOver,
		isMeduimDevice,
	])

	const Portal = () =>
		linkRef.current && popupVisible
			? createPortal(<PopUp />, linkRef.current)
			: null

	return (
		<div
			ref={divRef}
			className={cn(
				!isMeduimDevice ? "size-0" : "z-2 absolute inset-0 overflow-hidden",
			)}
		>
			<StyledArrowLink
				{...props}
				ref={linkRef}
				iconClassName="border-slate-950 p-0 size-9 border-2"
				className="sm:cursor-none absolute p-0 -translate-1/2 size-fit transition-transform duration-75 ease-in  hidden!"
			/>
			<Portal />
		</div>
	)
}

function PopUp({ className, ref, ...props }: TypographyProps) {
	return (
		<Typography
			{...props}
			ref={ref}
			className={cn(
				"absolute flex! whitespace-nowrap top-[calc(100%+0.25rem)] bg-slate-950/80 rounded-3xl text-white drop-shadow-md",
				className,
			)}
		>
			Click to visit link
		</Typography>
	)
}
