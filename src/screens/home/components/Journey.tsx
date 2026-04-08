import { PROFESSIONAL_TIMELIINE } from "@/shared/db"
import { routes } from "@/shared/routes"
import { JourneyCard } from "@/shared/ui/JourneyCard"
import { StyledDotLink } from "@/shared/ui/primitive/Button"
import { Heading } from "@/shared/ui/primitive/Heading"
import { Section } from "@/shared/ui/primitive/Section"
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
