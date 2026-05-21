import { PROFESSIONAL_TIMELIINE } from "@/shared/db"
import { JourneyCard } from "@/shared/ui/JourneyCard"
export function Journey() {
	return (
		<div className="bg-background-primary">
			<section id="professioanaljourney" className="section">
				<h2 className="text-3xl md:text-5xl mb-12 text-gradient">
					Professional Journey
				</h2>

				<ul className="grid gap-4">
					{PROFESSIONAL_TIMELIINE.map((timeline) => (
						<JourneyCard key={timeline.cardId} {...timeline} />
					))}
				</ul>
			</section>
		</div>
	)
}
