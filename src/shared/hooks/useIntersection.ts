import { useEffect, useState } from "react"
import { useElRef } from "./useElRef"

export default function useIntersection({
	threshold = 0.5,
	rootMargin = "0px",
	once,
}: {
	threshold?: number
	rootMargin?: string
	once?: boolean
} = {}) {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const { refObject, ref } = useElRef(null)

	useEffect(() => {
		let observer: IntersectionObserver

		requestAnimationFrame(() => {
			const currentRef = refObject.current

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
	}, [threshold, rootMargin, refObject, once])

	return { isIntersecting, ref }
}
