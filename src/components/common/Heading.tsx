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
			lg: "@5xl:text-[7rem] @6xl:text-[8rem] @7xl:text-[10rem] text-4xl @sm:text-5xl @md:text-6xl @2xl:text-7xl @3xl:text-9xl @4xl:text-[6.5rem]",
			md: "@5xl:text-[6.5rem] @6xl:text-[7.5rem] @7xl:text-[9.5rem] text-3xl @sm:text-5xl @md:text-6xl @2xl:text-6xl @3xl:text-8xl @4xl:text-[6.5rem]",
			sm: "@5xl:text-[5rem] @6xl:text-[6rem] @7xl:text-[8rem] text-2xl @sm:text-3xl @md:text-4xl @2xl:text-5xl @3xl:text-7xl @4xl:text-[5.5rem]",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "sm",
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
