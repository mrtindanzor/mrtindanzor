import avatar from "@/assets/images/mrtindanzor/avatar5.png"
import { Heading } from "@/components/common/Heading"
import { StyledArrowLink, StyledDotLink } from "@/components/common/IconLink"
import { MImage } from "@/components/common/Image"
import { Section } from "@/components/common/Section"
import { Typography } from "@/components/common/Typography"
import { resumeLink } from "@/lib/db"

export function HeroSection() {
	return (
		<Section className="@container">
			<MImage
				url={avatar.src}
				alt="Mr. Tindanzor Simon"
				className="size-50 md:size-70 mx-auto bg-linear-to-bl from-zinc-700 rounded-full"
			/>

			<Heading className="mx-auto text-center" size="lg">
				Meet the Developer
			</Heading>

			<Typography tag="p">
				I&apos;m a Full-Stack and DevOps developer passionate about building
				innovative, scalable, and user-focused applications. I have hands-on
				experience with projects like Myghmart and Successfield College, where I
				combine modern technologies to solve real-world problems. My technical
				expertise spans React, Next.js, Tailwind CSS, MongoDB, Redis, Docker,
				Express, GraphQL, and TypeScript, enabling me to craft efficient and
				maintainable solutions from front-end interfaces to back-end
				infrastructure. I thrive on learning, optimizing workflows, and creating
				projects that deliver tangible impact while embracing best practices in
				development and DevOps.
			</Typography>

			<div className="flex gap-4 items-center flex-col @md:flex-row w-fit mx-auto *:outline-none *:border-none">
				<StyledArrowLink
					target="_blank"
					rel="noreferrer noopener"
					href={resumeLink}
				>
					See My Resume
				</StyledArrowLink>

				<StyledDotLink href="/contact" variant="sky">
					Contact Me
				</StyledDotLink>
			</div>
		</Section>
	)
}
