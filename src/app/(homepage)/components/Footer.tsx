import { StyledArrowButton } from "@/components/common/ArrowLink"
import { Heading } from "@/components/common/Heading"
import { Section } from "@/components/common/Section"

export function Footer() {
	return (
		<Section>
			<Heading tag="h4" className="mx-auto" size="lg">
				Let&apos;s Connect!
			</Heading>

			<StyledArrowButton
				href="/contact"
				variant="sky"
				className="mx-auto"
				animation="enlargeX"
			>
				Contact
			</StyledArrowButton>
		</Section>
	)
}
