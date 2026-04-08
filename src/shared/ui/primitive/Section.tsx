"use client"
import { type MotionProps, motion } from "framer-motion"
import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"

export function Section({
	className,
	...props
}: MotionProps & ComponentProps<"section">) {
	return (
		<motion.section
			{...props}
			className={cn(
				"grid h-fit gap-4 py-10 px-4 mx-auto max-w-[calc(100%-1rem)] md:max-w-6xl",
				className,
			)}
		/>
	)
}
