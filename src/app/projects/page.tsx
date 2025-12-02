import type { Metadata } from "next"
import { Heading } from "@/components/common/Heading"
import { ProjectCard } from "@/components/common/ProjectCard"
import { Section } from "@/components/common/Section"
import { Typography } from "@/components/common/Typography"
import { PROJECTS } from "@/lib/db"

export const metadata: Metadata = {
	title:
		"Where Design Meets Development: Projects I've Brought to Life - Mr. Tindanzor",
	description: `These projects showcase my work in designing and building web
            applications that solve real-world problems. From educational
            platforms to e-commerce solutions, each project highlights the
            technologies I use, my problem-solving approach, and the impact
            achieved.`,
}

export default function ProjectsPage() {
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
