import { SKILLS } from "@/shared/db"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { SkillCard } from "@/shared/ui/skills/SkillCard"

export function Skills() {
	return (
		<section id="skills" className="section">
			<h2 className="section-title">
				Areas <AccentText>I Excel</AccentText> In
			</h2>

			<p className="mb-12 text-neutral-secondary mx-auto max-w-2xl">
				My engineering toolkit covers frontend technologies, backend
				architecture, database design, DevOps workflows, and the tools that
				support modern engineering, enabling me to deliver full-stack solutions
				with efficiency and consistency.
			</p>

			<ul className="grid mb-5 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] overflow-hidden border-neutral-secondary/10">
				{SKILLS.map(({ items }) =>
					items.map((item) => <SkillCard key={item.title} {...item} />),
				)}
			</ul>
		</section>
	)
}
