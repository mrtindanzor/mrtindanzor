import { routes } from "@/shared/routes"
import { StyledDotLink } from "@/shared/ui/primitive/Button"

export function Footer() {
	return (
		<section className="section text-center">
			<h2 className="text-3xl md:text-5xl mb-12 text-gradient">
				Work With Me!
			</h2>

			<StyledDotLink
				href={routes.contact}
				variant="outline"
				className="mx-auto"
			>
				Contact Me
			</StyledDotLink>
		</section>
	)
}
