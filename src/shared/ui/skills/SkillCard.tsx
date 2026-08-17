import type { ComponentProps } from "react"
import type { SkillItemType } from "@/features/skills"
import { cn } from "@/shared/utils/cn"

export type SkillCardProps = ComponentProps<"li"> & SkillItemType

export function SkillCard({
	icon: Icon,
	title,
	color,
	description,
	className,
	...props
}: SkillCardProps) {
	return (
		<li
			{...props}
			className={cn(
				"card-surface rounded-none hover:bg-muted-secondary/20 p-4 flex flex-col gap-3",
				className,
			)}
		>
			<div className="flex items-center gap-3">
				<div
					className={cn(
						"p-2 rounded-xl  flex items-center justify-center",
						color,
					)}
				>
					<Icon className="size-5 md:size-6" />
				</div>
				<h4 className="font-bold text-neutral">{title}</h4>
			</div>
			<p className="text-sm text-neutral-secondary leading-relaxed">
				{description}
			</p>
		</li>
	)
}
