import { Heading } from "@/components/common/Heading"
import { Section } from "@/components/common/Section"
import { SkillsContainerCard } from "@/components/common/SkillsContainerCard"
import { SKILLS } from "@/lib/db"
import { cn } from "@/lib/utils"

export function Skills() {
	return (
		<div className="bg-linear-to-b from-slate-900 via-slate-950 to-slate-950">
			<Section id="skills">
				<Heading tag="h2">Engineering Toolkit</Heading>

				<ul className="grid sm:grid-cols-2 gap-4">
					{SKILLS.map((skill, index) => (
						<li
							key={skill.category}
							className={cn(
								index === 0 && skill.category === "Languages"
									? "col-span-full"
									: "",
							)}
						>
							<SkillsContainerCard {...skill} />
						</li>
					))}
				</ul>
			</Section>
		</div>
	)
}
