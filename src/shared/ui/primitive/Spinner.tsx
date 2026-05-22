import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"
import type { ExtractVariantsTypes } from "@/shared/types/utils/ExtractVariants"
import { cn } from "@/shared/utils/cn"

const spinnerVariants = cva(
	"border-3 block rounded-full z-1 aspect-square! animate-spin size-10",
	{
		variants: {
			variant: {
				light: "border-neutral border-b-neutral/20",
				dark: "border-muted border-b-muted/20",
				"accent-secondary":
					"border-accent-secondary border-b-accent-secondary/20",
				accent: "border-accent border-b-accent/20",
				danger: "border-danger border-b-danger/20",
				success: "border-success border-b-success/20",
			},
			hover: {
				light:
					"hover:border-neutral hover:border-b-neutral/20 group-hover/button:border-neutral group-hover/button:border-b-neutral/20",
				dark: "hover:border-muted hover:border-b-muted/20 group-hover/button:border-muted group-hover/button:border-b-muted/20",
				"accent-secondary":
					"hover:border-accent-secondary hover:border-b-accent-secondary/20 group-hover/button:border-accent-secondary group-hover/button:border-b-accent-secondary/20",
				accent:
					"hover:border-accent hover:border-b-accent/20 group-hover/button:border-accent group-hover/button:border-b-accent/20",
				danger:
					"hover:border-danger hover:border-b-danger/20 group-hover/button:border-danger group-hover/button:border-b-danger/20",
				success:
					"hover:border-success hover:border-b-success/20 group-hover/button:border-success group-hover/button:border-b-success/20",
			},
		},
		defaultVariants: {
			variant: "light",
			hover: "light",
		},
	},
)

export type SpinnerVariantProps = ExtractVariantsTypes<typeof spinnerVariants>

export function Spinner({
	className,
	variant,
	hover,
	...props
}: ComponentProps<"span"> & SpinnerVariantProps) {
	return (
		<span
			{...props}
			className={cn(
				spinnerVariants({
					variant,
					hover,
					className,
				}),
			)}
		/>
	)
}
