"use client"

import { cva } from "class-variance-authority"
import { ArrowUp, Dot } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { IconLinkProps, StyledIconLinkProps } from "@/types/types"

export const StyledIconLinkVariants = cva(
	"gap-4 outline border-1 w-fit py-2.5 ease-in transition-transform px-8 rounded-3xl",
	{
		variants: {
			variant: {
				white: "border-slate-900 outline-white bg-white text-gray-800",
				sky: "bg-sky-600 text-gray-300 outline-sky-600",
				black: "border-white bg-slate-950 text-gray-300",
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
			variant: "white",
			animation: "squish",
		},
	},
)

export function IconLink({
	children,
	className,
	icon: Icon,
	iconClassName,
	...props
}: IconLinkProps) {
	return (
		<Link
			{...props}
			className={cn(
				"flex-place-center rounded-full overflow-hidden",
				className,
			)}
		>
			<Icon className={iconClassName} />
			{children}
		</Link>
	)
}

export function StyledIconLink({
	className,
	variant,
	animation,
	...props
}: StyledIconLinkProps) {
	return (
		<IconLink
			{...props}
			className={cn(StyledIconLinkVariants({ variant, animation, className }))}
		/>
	)
}

export function StyledArrowLink({
	iconClassName,
	...props
}: Omit<StyledIconLinkProps, "icon" | "iconClassName"> & {
	iconClassName?: string
}) {
	return (
		<StyledIconLink
			icon={ArrowUp}
			iconClassName={cn("rotate-45 rounded-full border p-0.5", iconClassName)}
			{...props}
		/>
	)
}

export function StyledDotLink({
	iconClassName,
	...props
}: Omit<StyledIconLinkProps, "icon" | "iconClassName"> & {
	iconClassName?: string
}) {
	return (
		<StyledIconLink
			icon={Dot}
			iconClassName={cn("size-2 rounded-full p-0 bg-white", iconClassName)}
			{...props}
		/>
	)
}
