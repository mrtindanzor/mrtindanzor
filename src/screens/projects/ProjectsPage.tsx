import { projectService } from "@/features/projects"

import { ProjectCard } from "@/shared/ui/ProjectCard"
import { AccentText } from "@/shared/ui/primitive/AccentText"

export function ProjectsPage() {
	const projects = projectService.find()

	return (
		<main>
			<section className="section">
				<h1 className="section-title">
					Solutions <AccentText as="span">I&apos;ve</AccentText> Crafted
				</h1>

				<p className="max-w-3xl mx-auto text-center text-sm md:text-base text-neutral-secondary leading-relaxed mb-12">
					These projects showcase my work in designing and building web
					applications that solve real-world problems. From educational
					platforms to e-commerce solutions, each project highlights the
					technologies I use, my problem-solving approach, and the impact
					achieved.
				</p>

				<hr className="border-neutral-secondary/10 mb-12" />

				<div className="@container">
					<ul className="grid @lg:grid-cols-2 @4xl:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10">
						{projects.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</ul>
				</div>
			</section>
		</main>
	)
}
