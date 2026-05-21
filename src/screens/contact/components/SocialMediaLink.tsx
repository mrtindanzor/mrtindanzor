import { ArrowRight } from "lucide-react"
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
				"group flex items-center gap-4 p-4 border-x border-b border-border-subtle first:border-t first:rounded-t-2xl last:rounded-b-2xl hover:bg-background-secondary transition-all",
				className,
			)}
		>
			<div className={cn("p-2 rounded-xl bg-background-primary border border-border-subtle text-neutral", color)}>
				<Icon className="size-6" />
			</div>

			<StyledLink
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="font-semibold text-neutral hover:text-primary transition-colors flex-1"
			>
				{title}
			</StyledLink>

			<ArrowRight className="size-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
		</div>
	)
}
