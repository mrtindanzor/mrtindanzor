import type { ComponentProps } from "react"

export type FTextareaProps = {
	icon?: React.ElementType
	label: string
	textClassName?: string
	labelClassName?: string
} & ComponentProps<"textarea">
