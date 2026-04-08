import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import type { ButtonVariants } from "../button.types"

export const buttonVariants = cva(
	"px-4 py-1.5 outline relative rounded w-fit h-fit focus-within:outline-2",
	{
		variants: {
			variant: {
				default: "bg-sky-600 hover:bg-sky-500 text-white",
				white: "bg-white hover:bg-gray-200 outline-0",
				outline: "bg-white hover:bg-sky-100 text-sky-600 outline-sky-300",
				ghost:
					"bg-transparent hover:bg-gray-100 outline-0 hover:outline hover:outline-gray-200",
				muted:
					"bg-muted hover:bg-gray-100 outline-1 hover:outline hover:outline-gray-200",
				accent: " bg-accent border-accent text-gray-800",
				success: "bg-green-600 hover:bg-green-400 text-white",
				successOutline:
					"bg-white hover:bg-green-100 text-green-600 outline-green-300",
				danger: "bg-rose-600 hover:bg-rose-500 text-white",
				dangerOutline:
					"bg-white hover:bg-rose-100 text-rose-600 outline-rose-300",
				none: "outline-none!",
			},
			size: {
				default: "text-base",
				xs: "text-xs py-1",
				sm: "text-sm",
				lg: "text-lg",
			},
			animation: {
				squish: "hover:scale-y-98 hover:scale-x-110",
				enlarge: "hover:scale-x-110 hover:scale-y-110",
				enlargeX: "hover:scale-x-110",
				enlargeY: "hover:scale-y-115",
				none: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			animation: "squish",
		},
	},
)

export function Button({
	variant,
	size,
	className,
	...props
}: ButtonVariants & ComponentProps<"button">) {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}
