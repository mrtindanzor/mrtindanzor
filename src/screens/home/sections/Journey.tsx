import { FEATURED_PROFESSIONAL_TIMELINE } from "@/shared/db"
import { routes } from "@/shared/routes"
import { JourneyCard } from "@/shared/ui/JourneyCard"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { StyledDotLink } from "@/shared/ui/primitive/Button"
import { TimelineCard, TimelineContainer } from "@/shared/ui/TimelineContainer"

export function JourneyPreview() {
	return (
		<div className="bg-background-primary">
			<section className="section space-y-4">
				<h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">
					Professional <AccentText>Mile</AccentText>stones
				</h2>

				<div className="max-w-4xl mx-auto w-screen">
					<TimelineContainer wrapperClassName="gap-y-4 grid">
						{FEATURED_PROFESSIONAL_TIMELINE.map((item) => (
							<TimelineCard key={item.cardId}>
								<JourneyCard {...item} />
							</TimelineCard>
						))}
					</TimelineContainer>
				</div>

				<StyledDotLink
					href={`${routes.about}#professioanaljourney`}
					variant="ghost-light"
					hover="light"
					className="mx-auto gap-x-4"
				>
					Explore Full Journey
				</StyledDotLink>
			</section>
		</div>
	)
}
