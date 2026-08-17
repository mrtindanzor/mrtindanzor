import { skillService } from "@/features/skills"
import { routes } from "@/shared/routes"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { StyledDotLink } from "@/shared/ui/primitive/Button"
import { SkillCard } from "@/shared/ui/skills/SkillCard"

export function SkillsPreview() {
	const featuredSkills = skillService.find({ featured: true })

	return (
		<div>
			<section className="section">
				<h2 className="section-title">
					Areas <AccentText>I Excel </AccentText> In
				</h2>

				<p className="max-w-2xl mb-12 text-sm text-center mx-auto text-neutral-secondary">
					My engineering toolkit covers frontend technologies, backend
					architecture, database design, DevOps workflows, and the tools that
					support modern engineering, enabling me to deliver full-stack
					solutions with efficiency and consistency.
				</p>

				<ul className="grid mb-5 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] overflow-hidden ">
					{featuredSkills
						.flatMap((item) => item.items)
						.slice(0, 12)
						.map((item) => (
							<SkillCard key={item.title} {...item} />
						))}
				</ul>

				<StyledDotLink
					href={routes.about.skills}
					className="mx-auto"
					hover="light"
				>
					Explore My Full Engineering Toolkit
				</StyledDotLink>
			</section>
		</div>
	)
}
