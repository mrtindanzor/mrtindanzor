import type {
	MotionProps,
	MotionStyle,
	SpringOptions,
	TargetAndTransition,
	TransformInputRange,
} from "framer-motion"
import type { ComponentProps, RefObject } from "react"

export type FramerOptionsProps = {
	hidden?: TargetAndTransition
	show?: TargetAndTransition
	exit?: TargetAndTransition
}

export type FramerAnimatePositionProps = {
	children: React.ReactNode
	variants?: FramerOptionsProps
	autoNone?: boolean
} & Omit<ComponentProps<"div">, "style"> &
	Omit<MotionProps, "variants">

type SupportedEdgeUnit = "px" | "vw" | "vh" | "%"
type EdgeUnit = `${number}${SupportedEdgeUnit}`
type NamedEdges = "start" | "end" | "center"
type EdgeString = NamedEdges | EdgeUnit | `${number}`
type Edge = EdgeString | number
type ProgressIntersection = [number, number]
type Intersection = `${Edge} ${Edge}`
type ScrollOffset = Array<Edge | Intersection | ProgressIntersection>

export type FramerScrollWrapperProps = {
	container?: RefObject<HTMLElement>
	target?: RefObject<HTMLElement>
	axis?: "x" | "y"
	offset?: ScrollOffset
	spring?: SpringOptions
	inputRange: TransformInputRange
	outputRange: unknown[]
}

export type UseAnimatePositionProps = Pick<
	FramerAnimatePositionProps,
	"variants" | "autoNone"
>

export type FramerAnimateScrollProps = FramerScrollWrapperProps &
	MotionProps &
	ComponentProps<"div"> & {
		styleKey: keyof MotionStyle
	}
