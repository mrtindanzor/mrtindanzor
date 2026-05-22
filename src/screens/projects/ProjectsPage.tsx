import { PROJECTS } from "@/shared/db"
import { ProjectCard } from "@/shared/ui/ProjectCard"

export function ProjectsPage() {
	return (
		<main className="bg-background-primary">
			<section className="section">
				<h1 className="text-4xl mb-6 font-semibold max-w-2xl">
					Solutions I&apos;ve Crafted
				</h1>

				<p className="max-w-3xl text-sm md:text-base text-neutral-secondary leading-relaxed mb-12">
					These projects showcase my work in designing and building web
					applications that solve real-world problems. From educational
					platforms to e-commerce solutions, each project highlights the
					technologies I use, my problem-solving approach, and the impact
					achieved.
				</p>

				<hr className="border-neutral-secondary/10 mb-12" />

				<div className="@container">
					<ul className="grid grid-cols-3 gap-x-4 md:gap-x-6 gap-y-16">
						{PROJECTS.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</ul>
				</div>
			</section>
		</main>
	)
}
