import { ArrowRight } from "lucide-react"
import type { ComponentProps } from "react"
import type { SocailMediaProps } from "@/shared/db"
import { StyledLink } from "@/shared/ui/primitive/Button"
import { Typography } from "@/shared/ui/primitive/Typography"
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
				"first:rounded-t-xl group last:rounded-b-xl relative grid px-4 py-2 gap-x-2 gap-y-2 w-full border border-gray-700/30 items-center grid-cols-[auto_1fr_auto] hover:bg-gray-800/20",
				className,
			)}
		>
			<Typography>
				<Icon className="size-6" />
			</Typography>

			<StyledLink
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="link mr-auto"
			>
				<Typography>{title}</Typography>
			</StyledLink>

			<ArrowRight className="text-gray-800/80 group-hover:text-white group-hover:animate-pulse group-hover:-rotate-180 transition-transform duration-300" />
		</div>
	)
}
