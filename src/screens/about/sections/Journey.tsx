import { PROFESSIONAL_TIMELIINE } from "@/shared/db"
import { JourneyCard } from "@/shared/ui/JourneyCard"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { TimelineCard, TimelineContainer } from "@/shared/ui/TimelineContainer"
export function Journey() {
	return (
		<div className="bg-background-primary">
			<section id="professioanaljourney" className="section">
				<h2 className="text-3xl md:text-5xl text-center font-bold mb-12">
					Professional <AccentText>Mile</AccentText>stones
				</h2>

				<div className="max-w-4xl mx-auto md:w-screen">
					<TimelineContainer wrapperClassName="gap-y-4 grid">
						{PROFESSIONAL_TIMELIINE.map((timeline) => (
							<TimelineCard key={timeline.cardId}>
								<JourneyCard {...timeline} />
							</TimelineCard>
						))}
					</TimelineContainer>
				</div>
			</section>
		</div>
	)
}
