import { motion } from "framer-motion"
import type { FramerAnimatePositionProps } from "../framer.types"
import { useAnimatePosition } from "../hooks/usePosition"

export function FramerAnimatePosition({
	variants,
	autoNone,
	...props
}: FramerAnimatePositionProps) {
	const { updatedVariants } = useAnimatePosition({ variants, autoNone })

	return (
		<motion.div
			variants={updatedVariants}
			initial="hidden"
			exit="hidden"
			viewport={{ once: true }}
			{...props}
		/>
	)
}
