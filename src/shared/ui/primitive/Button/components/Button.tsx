import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import type { ButtonVariants } from "../button.types"

export const buttonVariants = cva(
	"transition duration-300 outline-none flex ease-in-out outline link relative rounded focus-visible:outline-2",
	{
		variants: {
			variant: {
				light: "bg-neutral text-muted",
				outline:
					"bg-transparent text-neutral-secondary outline-neutral-secondary",
				"outline-muted": "bg-transparent text-muted outline-muted",
				muted: "bg-muted text-neutral outline-1",
				accent: " bg-accent border-accent text-muted",
				success: "bg-success text-muted",
				successOutline: "text-success outline-success",
				danger: "bg-danger text-neutral",
				dangerOutline: "text-danger outline-danger",
				"danger-light": "text-danger bg-danger/10",
				"success-light": "text-success bg-success/10",
				"accent-light": "text-accent bg-accent/10",
				"ghost-light": "text-neutral bg-neutral/10",
				"dark-light": "text-dark bg-dark/10",
				none: "outline-none!",
			},
			hover: {
				light: "hover:bg-neutral hover:text-muted",
				outline:
					"hover:bg-transparent hover:text-neutral-secondary hover:outline-neutral-secondary",
				"outline-muted":
					"hover:bg-transparent hover:text-muted hover:outline-muted",
				muted: "hover:bg-muted hover:text-neutral hover:outline-1",
				accent: " hover:bg-accent hover:border-accent hover:text-muted",
				success: " hover:bg-success hover:text-muted",
				successOutline: "hover:text-success hover:outline-success",
				danger: "hover:bg-danger hover:text-white",
				dangerOutline: "hover:text-danger hover:outline-danger",
				"danger-light": "hover:text-danger hover:bg-danger/10",
				"success-light": "hover:text-success hover:bg-success/10",
				"accent-light": "hover:text-accent hover:bg-accent/10",
				"ghost-light": "hover:text-neutral hover:bg-neutral/10",
				"dark-light": "hover:text-dark hover:bg-dark/10",
				none: "outline-none!",
			},
			rad: {
				xs: "rounded",
				sm: "rounded-sm",
				md: "rounded-md",
				lg: "rounded-lg",
				xl: "rounded-xl",
				"2xl": "rounded-2xl",
				"3xl": "rounded-3xl",
				"4xl": "rounded-4xl",
				none: "rounded-none",
			},
			pad: {
				xs: "px-1 py-0.5",
				sm: "px-2.5 py-1",
				md: "px-3.5 py-1.5",
				lg: "px-6 py-2",
				xl: "px-8 py-2.5",
				none: "p-0",
			},
			x: {
				center: "justify-center",
				left: "justify-start",
				right: "justify-end",
				between: "justify-between",
				none: "",
			},
			y: {
				center: "items-center",
				start: "items-start",
				end: "items-end",
				none: "",
			},
			w: {
				full: "w-full",
				fit: "w-fit",
				"10": "w-10",
				"15": "w-15",
				"20": "w-20",
				"25": "w-25",
				"30": "w-30",
				"35": "w-35",
				"40": "w-40",
				"45": "w-45",
				"60": "w-60",
				"65": "w-65",
				"80": "w-80",
				"85": "w-85",
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
			variant: "none",
			pad: "md",
			rad: "xl",
			animation: "none",
		},
	},
)

export function Button({
	variant,
	rad,
	pad,
	x,
	y,
	w,
	hover,
	className,
	...props
}: ButtonVariants & ComponentProps<"button">) {
	return (
		<button
			className={cn(
				buttonVariants({ variant, hover, x, y, w, pad, rad, className }),
			)}
			{...props}
		/>
	)
}
