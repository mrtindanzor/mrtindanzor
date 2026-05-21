import { PROJECTS } from "@/shared/db"
import { ProjectCard } from "@/shared/ui/ProjectCard"

export function ProjectsPage() {
	return (
		<main className="bg-background-primary">
			<section className="section">
				<h1 className="text-4xl md:text-6xl mb-8 text-gradient">
					Where Design Meets Development: Projects I&apos;ve Brought to Life
				</h1>

				<p className="max-w-3xl text-lg md:text-xl leading-relaxed mb-16">
					These projects showcase my work in designing and building web
					applications that solve real-world problems. From educational
					platforms to e-commerce solutions, each project highlights the
					technologies I use, my problem-solving approach, and the impact
					achieved.
				</p>

				<div className="@container">
					<ul className="grid gap-x-4 md:gap-x-6 gap-y-16">
						{PROJECTS.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</ul>
				</div>
			</section>
		</main>
	)
}
