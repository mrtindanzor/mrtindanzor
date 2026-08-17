import { Link as TanstackLink } from "@tanstack/react-router"
import { ArrowUp, Dot } from "lucide-react"
import { cn } from "@/shared/utils/cn"
import type {
	IconLinkProps,
	LinkProps,
	StyledIconLinkProps,
} from "../button.types"
import { buttonVariants } from "./Button"

export function Link({
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
}: LinkProps) {
	return (
		<TanstackLink
			to={href as never}
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
		</TanstackLink>
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
		<Link
			y="center"
			x="center"
			pad="lg"
			{...props}
			className={cn("flex-place-center gap-x-1.5 rounded-full", className)}
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
			variant="ghost-light"
			iconClassName={cn(
				"size-2 rounded-full bg-current group-hover:animate-pulse",
				iconClassName,
			)}
			{...props}
		/>
	)
}
