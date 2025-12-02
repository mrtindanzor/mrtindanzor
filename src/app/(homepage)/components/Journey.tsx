"use client"

import { Heading } from "@/components/common/Heading"
import { StyledDotLink } from "@/components/common/IconLink"
import { JourneyCard } from "@/components/common/JourneyCard"
import { Section } from "@/components/common/Section"
import { PROFESSIONAL_TIMELIINE } from "@/lib/db"

export function JourneyPreview() {
	return (
		<div className="bg-linear-to-b from-slate-900 to-slate-900 via-slate-950">
			<Section>
				<Heading tag="h2">Professional Journey</Heading>

				<JourneyCard {...PROFESSIONAL_TIMELIINE[0]} />
				<StyledDotLink
					href="/about#professioanaljourney"
					variant="black"
					className="mx-auto"
				>
					Explore Full Journey
				</StyledDotLink>
			</Section>
		</div>
	)
}
