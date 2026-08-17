import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"
import type { ExtractVariantsTypes } from "@/shared/types/utils/ExtractVariants"
import { cn } from "@/shared/utils/cn"
import { Button, type ButtonProps } from "../Button"
import { Textarea } from "./Textarea"

const wrapperVariants = cva(
	"grid grid-cols-[1fr_auto] *:focus:outline-none border! bg-muted-stone items-end px-2 py-2 rounded-xl",
	{
		variants: {
			variant: {
				"outline-dark":
					"border *:border-none *:focus:outline-none border-accent bg-muted-stone",
				none: "",
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
				none: "",
			},
			pad: {
				xs: "pl-1 pr-0.5",
				sm: "pl-2 pr-1",
				md: "pl-3 pr-1.5",
				lg: "pl-4 pr-2",
				xl: "pl-6 pr-3",
				none: "",
			},
		},
		defaultVariants: {
			variant: "none",
			rad: "none",
			pad: "none",
		},
	},
)

type WrapperProps = ExtractVariantsTypes<typeof wrapperVariants>

export const TextAreaWithPlaneButton = {
	Wrapper,
	Input,
	Button: PlaneButton,
}

function Wrapper({
	className,
	pad,
	rad,
	variant,
	...props
}: ComponentProps<"div"> & WrapperProps) {
	return (
		<div
			{...props}
			className={cn(
				wrapperVariants({
					className,
					pad,
					rad,
					variant,
				}),
			)}
		/>
	)
}

function Input({
	className,
	pad,
	rad,
	variant,
	...props
}: WrapperProps & ComponentProps<"textarea">) {
	return (
		<Textarea
			{...props}
			className={cn(
				wrapperVariants({
					className: `resize-none placeholder:text-sm ${className}`,
					variant,
					pad,
					rad,
				}),
			)}
		/>
	)
}

function PlaneButton({ className, ...props }: ButtonProps) {
	return (
		<Button
			variant="none"
			{...props}
			className={cn("aspect-square", className)}
		>
			<PaperAirplaneIcon className="size-6" />
		</Button>
	)
}
