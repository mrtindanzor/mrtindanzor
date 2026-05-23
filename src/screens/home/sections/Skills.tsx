import { FEATURED_SKILLS } from "@/shared/db"
import { routes } from "@/shared/routes"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { StyledDotLink } from "@/shared/ui/primitive/Button"
import { SkillCard } from "@/shared/ui/skills/SkillCard"

export function SkillsPreview() {
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
					{FEATURED_SKILLS.map(({ items }) =>
						items.map((item) => <SkillCard key={item.title} {...item} />),
					)}
				</ul>

				<StyledDotLink
					href={`${routes.about}#skills`}
					variant="outline"
					className="mx-auto"
					hover="light"
				>
					Explore My Full Engineering Toolkit
				</StyledDotLink>
			</section>
		</div>
	)
}
