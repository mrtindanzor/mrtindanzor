"use client"
import { useEffect, useRef, useState } from "react"

export default function useIntersection<T = HTMLDivElement>({
	threshold = 0.5,
	rootMargin = "0px",
	once,
}: {
	threshold?: number
	rootMargin?: string
	once?: boolean
} = {}) {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const ref = useRef<T>(null)

	useEffect(() => {
		let observer: IntersectionObserver

		requestAnimationFrame(() => {
			const currentRef = ref.current

			if (!(currentRef instanceof HTMLElement)) return
			observer = new IntersectionObserver(
				([entry]) => {
					setIsIntersecting(entry.isIntersecting)
					if (entry.isIntersecting && once) observer.unobserve(entry.target)
				},
				{
					threshold,
					rootMargin,
				},
			)

			observer.observe(currentRef)
		})

		return () => {
			if (observer) observer.disconnect()
		}
	}, [threshold, rootMargin, once])

	return { isIntersecting, ref }
}
