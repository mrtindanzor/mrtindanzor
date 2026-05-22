import { Link } from "@tanstack/react-router"
import { ArrowUp, Dot } from "lucide-react"
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
	rad,
	pad,
	x,
	y,
	w,
	hover,
	animation,
	href,
	...props
}: StyledLinkProps) {
	return (
		<Link
			// biome-ignore lint/suspicious/noExplicitAny: I do not need the tanstack type
			to={href as any}
			{...props}
			className={cn(
				buttonVariants({
					variant,
					rad,
					pad,
					x,
					y,
					w,
					hover,
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
			y="center"
			x="center"
			pad="lg"
			{...props}
			className={cn("flex-place-center gap-x-1.5 rounded-full", className)}
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
				"size-2 rounded-full bg-current group-hover:animate-pulse",
				iconClassName,
			)}
			{...props}
		/>
	)
}
