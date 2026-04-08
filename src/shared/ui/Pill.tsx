import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { PillProps } from "@/shared/types/types"
import { Typography } from "./Typography"

export const pillVariants = cva(
	"outline select-none px-4 py-1.5 w-fit rounded-3xl text-white",
	{
		variants: {
			variant: {
				green: "outline-green-900 bg-green-950",
				sky: "outline-sky-600",
			},
		},
		defaultVariants: {
			variant: "sky",
		},
	},
)

export function Pill({
	className,
	variant,
	size = "sm",
	tag,
	...props
}: PillProps) {
	return (
		<Typography
			{...props}
			size={size}
			tag={tag}
			className={cn(pillVariants({ className, variant }))}
		/>
	)
}
