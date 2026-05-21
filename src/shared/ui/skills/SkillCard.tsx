import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn" 
import type { SkillItemsProps } from "../../db/skills.db.types"

export type SkillCardProps = ComponentProps<"div"> & SkillItemsProps

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
				"card-surface p-4 flex flex-col gap-3 transition-all hover:border-primary/30",
				className,
			)}
		>
			<div className="flex items-center gap-3">
				<div className={cn("p-2 rounded-xl bg-background-primary border border-border-subtle flex items-center justify-center", color)}>
					<Icon className="size-5 md:size-6" />
				</div>
				<h4 className="font-bold text-neutral">
					{title}
				</h4>
			</div>
			<p className="text-sm text-muted leading-relaxed">
				{description}
			</p>
		</div>
	)
}
