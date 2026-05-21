import { FEATURED_SKILLS } from "@/shared/db"
import { routes } from "@/shared/routes"
import { StyledDotLink } from "@/shared/ui/primitive/Button"
import { SkillsContainerCard } from "@/shared/ui/skills/SkillsContainerCard"
import { cn } from "@/shared/utils/cn"

export function SkillsPreview() {
	return (
		<div>
			<section className="section">
				<h2 className="text-3xl md:text-4xl mb-4 text-gradient">Engineering Toolkit</h2>

				<p className="max-w-2xl mb-12 text-lg">
					My engineering toolkit covers frontend technologies, backend
					architecture, database design, DevOps workflows, and the tools that
					support modern engineering, enabling me to deliver full-stack
					solutions with efficiency and consistency.
				</p>

				<ul className="grid sm:grid-cols-2 gap-4">
					{FEATURED_SKILLS.map((skill, index) => (
						<li
							key={skill.category}
							className={cn(
								index === 0 &&
									skill.category === "Languages" &&
									"col-span-full",
							)}
						>
							<SkillsContainerCard {...skill} />
						</li>
					))}
				</ul>

				<StyledDotLink
					href={`${routes.about}#skills`}
					variant="outline"
					className="mx-auto"
				>
					Explore Engineering Toolkit
				</StyledDotLink>
			</section>
		</div>
	)
}
