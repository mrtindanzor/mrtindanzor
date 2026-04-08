import { ArrowUp, Dot } from "lucide-react"
import Link from "next/link"
import { cn } from "@/shared/utils/cn"
import type {
	IconLinkProps,
	StyledIconLinkProps,
	StyledLinkProps,
} from "../button.types"
import { buttonVariants } from "./Button"

export function StyledLink({
	children,
	className,
	variant,
	animation,
	...props
}: StyledLinkProps) {
	return (
		<Link
			{...props}
			className={cn(
				buttonVariants({
					variant,
					animation,
					className,
				}),
			)}
		>
			{children}
		</Link>
	)
}

export function IconLink({
	children,
	className,
	icon: Icon,
	iconClassName,
	...props
}: IconLinkProps) {
	return (
		<StyledLink
			{...props}
			className={cn("flex-place-center rounded-full", className)}
		>
			<Icon className={iconClassName} />
			{children}
		</StyledLink>
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
