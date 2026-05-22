import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import type { ButtonProps } from "../button.types"
import { buttonVariants } from "./Button"

export function Pill({
	className,
	variant,
	animation,
	rad,
	pad,
	x,
	y,
	w,
	hover,
	...props
}: ButtonProps & ComponentProps<"span">) {
	return (
		<span
			{...props}
			className={cn(
				buttonVariants({
					variant,
					rad,
					pad,
					x,
					y,
					w,
					hover,
					animation,
					className,
				}),
			)}
		/>
	)
}
