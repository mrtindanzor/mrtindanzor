import { useLayoutEffect, useRef, useState } from "react"
import useIntersection from "./useIntersection"

type UseTypingProps = {
	text: string
	speedInSeconds?: number
	enabled?: boolean
	whileInView?: boolean
}

export function useTyping(props: {
	text: string
	speedInSeconds?: number
	enabled: true
	whileInView?: boolean
}): string
export function useTyping(props: {
	text: string
	speedInSeconds?: number
	whileInView: true
}): {
	output: string
	ref: <T>(el: T | null) => void
}

export function useTyping({
	text,
	speedInSeconds = 0.15,
	enabled: defaultEnabled,
	whileInView,
}: UseTypingProps) {
	const [current, setCurrent] = useState<string | null>(null)
	const { ref, isIntersecting } = useIntersection({ once: true })
	const enabled =
		(whileInView ? isIntersecting : defaultEnabled) && current !== text

	const timeoutIdRef = useRef<Record<
		number,
		ReturnType<typeof setTimeout>
	> | null>(null)

	useLayoutEffect(() => {
		if (!enabled) return

		text.split("").forEach((_, index) => {
			if (!timeoutIdRef.current) timeoutIdRef.current = {}
			const timeoutId = setTimeout(
				() => {
					setCurrent(
						index === text.length - 1 ? text : `${text.slice(0, index + 1)} |`,
					)
				},
				index * speedInSeconds * 100,
			)
			timeoutIdRef.current[index] = timeoutId
		})

		return () => {
			if (timeoutIdRef.current) {
				Object.values(timeoutIdRef.current).forEach((id) => {
					clearTimeout(id)
				})
			}
		}
	}, [text, enabled, speedInSeconds])

	if (defaultEnabled) return current ?? ""

	return {
		output: current ?? "",
		ref,
	}
}
