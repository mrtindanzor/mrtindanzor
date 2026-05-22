import type { ComponentProps } from "react"
import type { SocailMediaProps } from "@/shared/db"
import { StyledLink } from "@/shared/ui/primitive/Button"
import { cn } from "@/shared/utils/cn"

type SocailMediaCardProps = ComponentProps<"div"> & SocailMediaProps

export function SocialMediaCard({
	title,
	link,
	icon: Icon,
	color,
	className,
	...props
}: SocailMediaCardProps) {
	return (
		<div
			{...props}
			className={cn(
				"group relative flex items-center border border-muted-secondary bg-muted-secondary/30 flex-place-center aspect-square rounded-2xl hover:bg-background-secondary transition-all",
				className,
			)}
		>
			<StyledLink
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					"font-semibold static link text-neutral-secondary group-hover:text-neutral",
					"p-2.5 rounded-xl text-neutral",
					color,
				)}
				title={title}
			>
				<Icon className="size-5" />
			</StyledLink>
		</div>
	)
}
