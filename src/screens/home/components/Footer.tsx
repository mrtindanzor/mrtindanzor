import { routes } from "@/shared/routes"
import { Heading } from "@/shared/ui/Heading"
import { StyledDotLink } from "@/shared/ui/primitive/Button/IconLink"
import { Section } from "@/shared/ui/Section"

export function Footer() {
	return (
		<Section>
			<Heading tag="h4" className="mx-auto" size="lg">
				Work With Me!
			</Heading>

			<StyledDotLink
				href={routes.contact}
				variant="outline"
				className="mx-auto"
			>
				Contact Me
			</StyledDotLink>
		</Section>
	)
}
