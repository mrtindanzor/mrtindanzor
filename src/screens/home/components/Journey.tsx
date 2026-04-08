import { PROFESSIONAL_TIMELIINE } from "@/shared/db"
import { routes } from "@/shared/routes"
import { Heading } from "@/shared/ui/Heading"
import { JourneyCard } from "@/shared/ui/JourneyCard"
import { StyledDotLink } from "@/shared/ui/primitive/Button/IconLink"
import { Section } from "@/shared/ui/Section"
export function JourneyPreview() {
	return (
		<div className="bg-linear-to-b from-slate-900 to-slate-900 via-slate-950">
			<Section>
				<Heading tag="h2">Professional Journey</Heading>

				<JourneyCard {...PROFESSIONAL_TIMELIINE[0]} />
				<StyledDotLink
					href={`${routes.about}#professioanaljourney`}
					variant="outline"
					className="mx-auto"
				>
					Explore Full Journey
				</StyledDotLink>
			</Section>
		</div>
	)
}
