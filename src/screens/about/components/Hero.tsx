import { DEVELOPER, FEATURED_PROJECTS } from "@/shared/db"
import { routes } from "@/shared/routes"
import { StyledArrowLink, StyledDotLink } from "@/shared/ui/primitive/Button"
import { MImage } from "@/shared/ui/primitive/Image"

export function HeroSection() {
	return (
		<section className="section text-center">
			<MImage
				url={DEVELOPER.avatar}
				alt={DEVELOPER.name}
				className="size-50 md:size-70 mx-auto bg-background-secondary border border-border-subtle rounded-full p-1 shadow-2xl"
				imageClassName="object-cover rounded-full"
			/>

			<h1 className="text-4xl md:text-6xl mt-12 mb-6 text-gradient">
				Meet the Developer
			</h1>

			<p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
				I&apos;m a Full-Stack and DevOps developer passionate about building
				innovative, scalable, and user-focused applications. I have hands-on
				experience with projects like{" "}
				{FEATURED_PROJECTS.map((project) => project.title).join(", ")}, where I
				combine modern technologies to solve real-world problems. My technical
				expertise spans React, Next.js, Tailwind CSS, MongoDB, Redis, Docker,
				Express, GraphQL, and TypeScript, enabling me to craft efficient and
				maintainable solutions from front-end interfaces to back-end
				infrastructure. I thrive on learning, optimizing workflows, and creating
				projects that deliver tangible impact while embracing best practices in
				development and DevOps.
			</p>

			<div className="flex gap-4 items-center flex-col sm:flex-row w-fit mx-auto">
				<StyledArrowLink
					target="_blank"
					rel="noreferrer noopener"
					href={DEVELOPER.resume}
					size="lg"
				>
					See My Resume
				</StyledArrowLink>

				<StyledDotLink href={routes.contact} variant="outline" size="lg">
					Contact Me
				</StyledDotLink>
			</div>
		</section>
	)
}
