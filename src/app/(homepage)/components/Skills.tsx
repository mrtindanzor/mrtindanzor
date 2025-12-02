import { Heading } from "@/components/common/Heading"
import { StyledDotLink } from "@/components/common/IconLink"
import { Section } from "@/components/common/Section"
import { SkillsContainerCard } from "@/components/common/SkillsContainerCard"
import { Typography } from "@/components/common/Typography"
import { SKILLS } from "@/lib/db"
import { cn } from "@/lib/utils"

export function SkillsPreview() {
	return (
		<div className="bg-linear-to-b from-slate-900 via-slate-950 to-slate-900">
			<Section>
				<Heading tag="h2">Engineering Toolkit</Heading>

				<Typography tag="p">
					My engineering toolkit covers frontend technologies, backend
					architecture, database design, DevOps workflows, and the tools that
					support modern engineering, enabling me to deliver full-stack
					solutions with efficiency and consistency.
				</Typography>

				<ul className="grid sm:grid-cols-2 gap-4">
					{SKILLS.slice(0, 3).map((skill, index) => (
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

				<StyledDotLink href="/about#skills" variant="black" className="mx-auto">
					Explore Engineering Toolkit
				</StyledDotLink>
			</Section>
		</div>
	)
}
