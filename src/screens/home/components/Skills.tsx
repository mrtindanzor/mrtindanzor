import { FEATURED_SKILLS } from "@/shared/db"
import { routes } from "@/shared/routes"
import { StyledDotLink } from "@/shared/ui/primitive/Button"
import { Heading } from "@/shared/ui/primitive/Heading"
import { Section } from "@/shared/ui/primitive/Section"
import { Typography } from "@/shared/ui/primitive/Typography"
import { SkillsContainerCard } from "@/shared/ui/skills/SkillsContainerCard"
import { cn } from "@/shared/utils/cn"

export function SkillsPreview() {
	return (
		<div className="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
			<Section>
				<Heading tag="h2">Engineering Toolkit</Heading>

				<Typography tag="p">
					My engineering toolkit covers frontend technologies, backend
					architecture, database design, DevOps workflows, and the tools that
					support modern engineering, enabling me to deliver full-stack
					solutions with efficiency and consistency.
				</Typography>

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
			</Section>
		</div>
	)
}
