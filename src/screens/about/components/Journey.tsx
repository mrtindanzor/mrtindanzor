import { PROFESSIONAL_TIMELIINE } from "@/shared/db"
import { Heading } from "@/shared/ui/Heading"
import { JourneyCard } from "@/shared/ui/JourneyCard"
import { Section } from "@/shared/ui/Section"

export function Journey() {
	return (
		<div className="bg-linear-to-b from-slate-950 to-slate-900 via-slate-900">
			<Section id="professioanaljourney">
				<Heading tag="h2">Professional Journey</Heading>

				<ul className="grid gap-4">
					{PROFESSIONAL_TIMELIINE.map((timeline) => (
						<JourneyCard key={timeline.cardId} {...timeline} />
					))}
				</ul>
			</Section>
		</div>
	)
}
