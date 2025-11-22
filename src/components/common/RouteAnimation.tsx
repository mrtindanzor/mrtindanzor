"use client"

import { motion, type TargetAndTransition } from "framer-motion"

export default function AnimationProvider({
	variants,
	children,
}: {
	children: React.ReactNode
	variants: {
		hidden?: TargetAndTransition
		show?: TargetAndTransition
		exit?: TargetAndTransition
	}
}) {
	return (
		<motion.div variants={variants} initial="hidden" animate="show" exit="exit">
			{children}
		</motion.div>
	)
}
