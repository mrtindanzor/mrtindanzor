import { SKILLS } from "@/shared/db"
import { SkillsContainerCard } from "@/shared/ui/skills/SkillsContainerCard"
import { cn } from "@/shared/utils/cn"

export function Skills() {
	return (
		<div className="bg-background-secondary border-y border-border-subtle">
			<section id="skills" className="section">
				<h2 className="text-3xl md:text-5xl mb-12 text-gradient">
					Engineering Toolkit
				</h2>

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
			</section>
		</div>
	)
}
