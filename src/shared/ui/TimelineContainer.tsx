import { type MotionProps, motion } from "framer-motion"
import { type ComponentProps, useId } from "react"
import { useFramerScroll } from "@/shared/ui/Framer"
import { useMeasure } from "../hooks/useMeasure"
import { cn } from "../utils/cn"

export type TimelineContainerProps = ComponentProps<"div"> &
	MotionProps & {
		wrapperClassName?: string
	}

export function TimelineContainer({
	className,
	children,
	wrapperClassName,
	...props
}: TimelineContainerProps) {
	const id = useId()
	const { height } = useMeasure({ selector: `#${id}` })
	const { ref, motionValue: motionHeight } = useFramerScroll<HTMLDivElement>({
		offset: ["start end", "end"],
		inputRange: [0, 0.5, 0.75, 0.85, 1],
		outputRange: [
			"0px",
			`${height / 4}px`,
			`${height / 2.2}px`,
			`${height / 2}px`,
			`${height}px`,
		],
	})

	return (
		<div
			{...props}
			ref={ref}
			className={cn("pl-6 relative w-full grid mx-auto", className)}
		>
			<motion.div
				style={{ height: motionHeight }}
				className="timeline-view-container"
			></motion.div>
			<ul id={id} className={wrapperClassName}>
				{children}
			</ul>
		</div>
	)
}

export function TimelineCard({ children }: { children: React.ReactNode }) {
	return (
		<li className="relative timeline-card">
			<div className="floating-dot-timeline"></div>
			{children}
		</li>
	)
}
