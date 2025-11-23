import { Heading } from "@/components/common/Heading"
import { JourneyCard } from "@/components/common/JourneyCard"
import { Section } from "@/components/common/Section"
import { professionalJourneyTimeline } from "@/lib/db"

export function Journey() {
	return (
		<div className="bg-linear-to-b from-slate-950 to-slate-900 via-slate-900">
			<Section className="">
				<Heading tag="h2">Professional Journey</Heading>

				<ul className="grid sm:grid-cols-2 gap-4">
					{professionalJourneyTimeline.map((timeline) => (
						<JourneyCard key={timeline.cardId} {...timeline} />
					))}
				</ul>
			</Section>
		</div>
	)
}
