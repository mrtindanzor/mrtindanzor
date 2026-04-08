import { ArrowUp, Dot } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./Button"
import type { IconLinkProps, StyledIconLinkProps } from "./button.types"

export function IconLink({
	children,
	className,
	icon: Icon,
	iconClassName,
	variant,
	animation,
	...props
}: IconLinkProps) {
	return (
		<Link
			{...props}
			className={cn(
				buttonVariants({
					variant,
					animation,
					className: `flex-place-center rounded-full ${className}`,
				}),
			)}
		>
			<Icon className={iconClassName} />
			{children}
		</Link>
	)
}

export function StyledIconLink(props: StyledIconLinkProps) {
	return <IconLink {...props} />
}

export function StyledArrowLink({
	iconClassName,
	...props
}: Omit<StyledIconLinkProps, "icon">) {
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
}: Omit<StyledIconLinkProps, "icon">) {
	return (
		<StyledIconLink
			icon={Dot}
			iconClassName={cn(
				"size-2 rounded-full p-0 bg-white group-hover:animate-pulse",
				iconClassName,
			)}
			{...props}
		/>
	)
}
