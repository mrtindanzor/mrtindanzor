import { cva } from "class-variance-authority"
import { Chakra_Petch } from "next/font/google"
import { cn } from "@/lib/utils"
import type { HeadingProps } from "@/types/types"

const black = Chakra_Petch({
	subsets: ["latin"],
	weight: "700",
})

const bolder = Chakra_Petch({
	subsets: ["latin"],
	weight: "600",
})

const bold = Chakra_Petch({
	subsets: ["latin"],
	weight: "500",
})

const semibold = Chakra_Petch({
	subsets: ["latin"],
	weight: "400",
})

const meduim = Chakra_Petch({
	subsets: ["latin"],
	weight: "300",
})

const weightMap = {
	black,
	bolder,
	bold,
	semibold,
	meduim,
}

export const headingVariants = cva("tracking-tight px-4 w-fit h-fit", {
	variants: {
		variant: {
			default:
				"bg-linear-to-bl hover:bg-white bg-clip-text text-transparent from-sky-600 via-gray-400 to-white mt-4",
		},
		size: {
			huge: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
			lg: "text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl",
			md: "text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl",
			sm: "text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
})

export function Heading({
	tag: Tag = "h1",
	size,
	weight = "bold",
	className,
	...props
}: HeadingProps) {
	const chakra = weightMap[weight]

	return (
		<Tag
			{...props}
			className={cn(chakra.className, headingVariants({ className, size }))}
		/>
	)
}
