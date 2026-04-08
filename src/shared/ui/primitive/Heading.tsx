import { cva } from "class-variance-authority"
import type { HeadingProps } from "@/shared/types/types"
import { cn } from "@/shared/utils/cn"

export const headingVariants = cva("tracking-tighter px-4 w-fit h-fit", {
	variants: {
		variant: {
			default:
				"bg-linear-to-bl hover:bg-white bg-clip-text text-transparent from-sky-600 via-gray-400 to-white mt-4",
		},
		size: {
			huge: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
			lg: "text-3xl lg:text-4xl",
			md: "text-2xl lg:text-3xl",
			sm: "text-xl lg:text-2xl",
			xs: "text-lg lg:text-xl",
			none: "",
		},
		weight: {
			black: "font-black",
			bolder: "font-bolder",
			bold: "font-bold",
			semibold: "font-semibold",
			meduim: "font-medium",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
		weight: "semibold",
	},
})

export function Heading({
	tag: Tag = "h1",
	size,
	weight = "bold",
	className,
	...props
}: HeadingProps) {
	return (
		<Tag
			{...props}
			className={`font-chakra ${cn(
				headingVariants({ className, size, weight }),
			)}`}
		/>
	)
}
