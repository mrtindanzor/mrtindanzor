import { FEATURED_PROJECTS } from "@/shared/db"
import { routes } from "@/shared/routes"
import { ProjectCard } from "@/shared/ui/ProjectCard"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { StyledDotLink } from "@/shared/ui/primitive/Button"

export function FeatureProjects() {
	return (
		<div className="bg-muted">
			<section className="section space-y-4">
				<h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
					Featured <AccentText>Projects</AccentText>
				</h2>

				<div className="@container">
					<ul className="grid @lg:grid-cols-2 @4xl:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10">
						{FEATURED_PROJECTS.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</ul>
				</div>

				<StyledDotLink
					href={routes.projects}
					className="mx-auto"
					variant="ghost-light"
					hover="light"
				>
					View More
				</StyledDotLink>
			</section>
		</div>
	)
}
