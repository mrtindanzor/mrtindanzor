import type { MotionProps } from "framer-motion"
import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import type { SkillProps } from "../../db"
import { SkillCard } from "./SkillCard"

export type SkillsContainerCardProps = MotionProps &
	ComponentProps<"section"> &
	SkillProps

export function SkillsContainerCard({
	category,
	items,
	className,
	featured: _f,
	...props
}: SkillsContainerCardProps) {
	return (
		<section {...props} className={cn("w-full flex flex-col gap-4", className)}>
			<h3 className="text-lg font-bold text-neutral px-2">
				{category}
			</h3>

			<ul className="grid @xs:grid-cols-2 gap-3">
				{items.map((item) => (
					<li key={item.title}>
						<SkillCard {...item} />
					</li>
				))}
			</ul>
		</section>
	)
}
