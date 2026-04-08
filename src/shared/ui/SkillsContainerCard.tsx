import type { MotionProps } from "framer-motion"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import type { SkillProps } from "../db"
import { Heading } from "./Heading"
import { Section } from "./Section"
import { SkillCard } from "./SkillCard"

export type SkillsContainerCardProps = MotionProps &
	ComponentProps<"section"> &
	SkillProps

export function SkillsContainerCard({
	category,
	items,
	className,
	...props
}: SkillsContainerCardProps) {
	return (
		<Section {...props} className={cn("w-full p-0", className)}>
			<Heading tag="h3" size="sm" className="mr-auto">
				{category}
			</Heading>

			<ul>
				{items.map((item) => (
					<SkillCard key={item.title} {...item} />
				))}
			</ul>
		</Section>
	)
}
