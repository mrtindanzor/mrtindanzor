import { ExternalLink } from "lucide-react"
import { DEVELOPER, FEATURED_PROJECTS } from "@/shared/db"
import { ConnectButton } from "@/shared/ui/ConnectButton"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { StyledLink } from "@/shared/ui/primitive/Button"

export function HeroSection() {
	return (
		<section className="section text-center">
			<h1 className="font-bold text-4xl md:text-6xl mt-12 mb-6">
				<AccentText className="font-bold">Developer </AccentText> Profile
			</h1>

			<p className="max-w-4xl mx-auto text-sm text-neutral-secondary md:text-base leading-relaxed mb-12">
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
				<ConnectButton />

				<StyledLink
					target="_blank"
					rel="noreferrer noopener"
					href={DEVELOPER.resume}
					variant="ghost-light"
					className="flex gap-x-1.5 px-8 py-2"
					y="center"
					hover="light"
				>
					<ExternalLink className="size-4" />
					See My Resume
				</StyledLink>
			</div>
		</section>
	)
}
