import { PROJECTS } from "@/shared/db"
import { ProjectCard } from "@/shared/ui/ProjectCard"
import { Heading } from "@/shared/ui/primitive/Heading"
import { Section } from "@/shared/ui/primitive/Section"
import { Typography } from "@/shared/ui/primitive/Typography"

export function ProjectsPage() {
	return (
		<main className="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
			<Section>
				<Heading>
					Where Design Meets Development: Projects I&apos;ve Brought to Life
				</Heading>

				<Typography tag="p">
					These projects showcase my work in designing and building web
					applications that solve real-world problems. From educational
					platforms to e-commerce solutions, each project highlights the
					technologies I use, my problem-solving approach, and the impact
					achieved.
				</Typography>

				<div className="@container mt-10">
					<ul className="grid gap-x-4 md:gap-x-6 gap-y-10">
						{PROJECTS.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</ul>
				</div>
			</Section>
		</main>
	)
}
