import { useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import type { FramerScrollWrapperProps } from "../framer.types"

export function useFramerScroll<T extends HTMLElement = HTMLDivElement>({
	container,
	target,
	axis = "y",
	offset,
	spring,
	inputRange,
	outputRange,
}: FramerScrollWrapperProps) {
	const ref = useRef<T>(null)
	const { scrollYProgress, scrollXProgress } = useScroll({
		target: target ? target : ref,
		container,
		axis,
		offset,
	})
	const progress = axis === "y" ? scrollYProgress : scrollXProgress
	const springValue = useSpring(progress, spring)
	const motionValue = useTransform(springValue, inputRange, outputRange)

	return { motionValue, ref }
}
