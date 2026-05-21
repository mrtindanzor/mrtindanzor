import { PROFESSIONAL_TIMELIINE } from "@/shared/db"
import { useMediaQuery } from "@/shared/hooks/useMediaQuery"
import { routes } from "@/shared/routes"
import { JourneyCard } from "@/shared/ui/JourneyCard"
import { StyledDotLink } from "@/shared/ui/primitive/Button"

export function JourneyPreview() {
	const isMobile = useMediaQuery({ size: "sm", comparison: "<" })
	const data = PROFESSIONAL_TIMELIINE.slice(0, isMobile ? 1 : 2)

	return (
		<div className="bg-background-primary">
			<section className="section space-y-4">
				<h2 className="text-3xl mb-12 text-gradient text-center">
					Professional Journey
				</h2>

				<ul className="grid sm:grid-cols-2 gap-x-4">
					{data.map((item) => (
						<li key={item.cardId}>
							<JourneyCard {...item} />
						</li>
					))}
				</ul>

				<StyledDotLink
					href={`${routes.about}#professioanaljourney`}
					variant="ghost-light"
					className="mx-auto gap-x-4"
				>
					Explore Full Journey
				</StyledDotLink>
			</section>
		</div>
	)
}
