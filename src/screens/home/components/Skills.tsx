import { cn } from "@/lib/utils"
import { FEATURED_SKILLS } from "@/shared/db"
import { routes } from "@/shared/routes"
import { Heading } from "@/shared/ui/Heading"
import { StyledDotLink } from "@/shared/ui/primitive/Button/IconLink"
import { Section } from "@/shared/ui/Section"
import { SkillsContainerCard } from "@/shared/ui/SkillsContainerCard"
import { Typography } from "@/shared/ui/Typography"

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
