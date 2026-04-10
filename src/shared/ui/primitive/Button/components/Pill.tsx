import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import type { ButtonProps } from "../button.types"
import { buttonVariants } from "./Button"

export function Pill({
	className,
	variant,
	animation,
	...props
}: ButtonProps & ComponentProps<"span">) {
	return (
		<span
			{...props}
			className={cn(buttonVariants({ variant, animation, className }))}
		/>
	)
}
