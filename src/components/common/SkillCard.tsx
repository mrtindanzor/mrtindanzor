import { cn } from "@/lib/utils"
import type { SkillCardProps } from "@/types/types"
import { Typography } from "./Typography"

export function SkillCard({
	icon: Icon,
	title,
	color,
	description,
	className,
	...props
}: SkillCardProps) {
	return (
		<div
			{...props}
			className={cn(
				"border border-gray-600/40 rounded-3xl not-first:rounded-t-none not-last:rounded-b-none p-2",
				className,
			)}
		>
			<header
				className={cn("grid grid-cols-[auto_1fr] gap-2 py-2 px-4 items-center")}
			>
				<Typography
					className={cn("border rounded-xl border-gray-600/40 py-2", color)}
				>
					<Icon className="size-8" />
				</Typography>
				<Typography>{title}</Typography>
			</header>
			<Typography tag="p">{description}</Typography>
		</div>
	)
}
