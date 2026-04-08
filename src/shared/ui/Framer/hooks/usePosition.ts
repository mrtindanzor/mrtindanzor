"use client"

import { useMemo } from "react"
import type { UseAnimatePositionProps } from "../framer.types"
import { motionVariants } from "../utils/motion"

export function useAnimatePosition({
	variants,
	autoNone,
}: UseAnimatePositionProps) {
	const updatedVariants = useMemo(() => {
		const animatePosition = motionVariants({
			hidden: autoNone ? {} : { ...(variants?.hidden ?? {}) },
		})
		return {
			hidden: { ...animatePosition.hidden, ...variants?.hidden },
			show: { ...animatePosition.show, ...variants?.show },
			exit: { ...animatePosition.exit, ...variants?.exit },
		}
	}, [variants, autoNone])

	return { updatedVariants }
}
