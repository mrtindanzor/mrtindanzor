import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { TypographyProps } from "@/types/types"

export const typographyVariants = cva("tracking-tight block text-gray-400", {
	variants: {
		size: {
			xs: "text-xs px-2 py-1",
			sm: "text-sm px-3 py-1.5",
			md: "text-base px-4 py-1.5",
			lg: "text-lg py-2 px-4",
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
		size: "md",
	},
})

export function Typography<T extends React.ElementType>({
	tag,
	size = "md",
	className,
	...props
}: TypographyProps<T>) {
	const Tag = tag ?? "span"

	return (
		<Tag
			{...props}
			className={`font-jura ${cn(typographyVariants({ size, className }))}`}
		/>
	)
}
