import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"
import type { ExtractVariantsTypes } from "@/shared/types/utils/ExtractVariants"
import { cn } from "@/shared/utils/cn"

const labelVariants = cva("h-fit py-0.5", {
	variants: {
		variant: {
			"outline-dark":
				"border *:border-none *:focus:outline-none border-accent bg-muted-stone",
			none: "",
		},
		layout: {
			inline: "flex items-center",
			block: "grid gap-y-1",
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
		layout: "block",
		rad: "md",
		pad: "none",
	},
})

export const Label = {
	Wrapper,
	ButtonWrapper,
	Title,
}

type WrapperProps = ComponentProps<"label"> &
	ExtractVariantsTypes<typeof labelVariants>

function Wrapper({
	id,
	className,
	children,
	variant,
	layout = "block",
	pad,
	rad,
	...props
}: WrapperProps) {
	return (
		<label
			{...props}
			htmlFor={id}
			className={cn(
				labelVariants({
					variant,
					layout,
					pad,
					rad,
					className,
				}),
			)}
		>
			{children}
		</label>
	)
}

type ButtonWrapperProps = ComponentProps<"div"> &
	ExtractVariantsTypes<typeof labelVariants>

function ButtonWrapper({
	id,
	className,
	variant = "none",
	layout = "none",
	pad = "none",
	rad = "none",
	...props
}: ButtonWrapperProps) {
	return (
		<div
			{...props}
			className={cn(
				labelVariants({
					variant,
					layout,
					pad,
					rad,
					className,
				}),
			)}
		/>
	)
}

function Title({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			{...props}
			className={cn("text-neutral font-medium px-1.5", className)}
		/>
	)
}
