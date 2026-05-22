import { motion } from "framer-motion"
import type { FramerAnimateScrollProps } from "../framer.types"
import { useFramerScroll } from "../hooks/useFramerScroll"

export function AnimateScroll({
	style,
	styleKey,
	offset,
	inputRange,
	outputRange,
	spring,
	container,
	target,
	axis,

	...props
}: FramerAnimateScrollProps) {
	const { ref, motionValue } = useFramerScroll<HTMLDivElement>({
		offset,
		inputRange,
		outputRange,
		spring,
		container,
		target,
		axis,
	})

	return (
		<motion.div
			{...props}
			style={{ ...style, [styleKey]: motionValue }}
			ref={ref}
		/>
	)
}
