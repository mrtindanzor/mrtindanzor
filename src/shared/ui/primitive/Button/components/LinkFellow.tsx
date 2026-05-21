import type { ComponentProps } from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useMediaQuery } from "@/shared/hooks/useMediaQuery"
import { cn } from "@/shared/utils/cn"
import type { IconLinkProps } from ".."
import { StyledArrowLink } from "./IconLink"

export function LinkFollow({ ...props }: Omit<IconLinkProps, "icon">) {
	const { linkRef, divRef, popupVisible, isMeduimDevice } = useLinkFellow()

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

function PopUp({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			{...props}
			className={cn(
				"absolute flex whitespace-nowrap text-xs px-3 py-1 top-[calc(100%+0.5rem)] bg-background-primary border border-border-subtle rounded-full text-neutral shadow-lg z-50",
				className,
			)}
		>
			Click to visit link
		</span>
	)
}

function useLinkFellow() {
	const [popupVisible, setPopupVisbile] = useState(true)
	const linkRef = useRef<HTMLAnchorElement>(null)
	const divRef = useRef<HTMLDivElement>(null)
	const isMeduimDevice = useMediaQuery({ size: "sm", comparison: ">" })
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

	return { linkRef, divRef, popupVisible, isMeduimDevice }
}
