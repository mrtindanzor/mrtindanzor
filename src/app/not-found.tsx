import { TakeAction } from "@/shared/ui/NotFoundPageTakeAction"
import { Heading } from "@/shared/ui/primitive/Heading"
import { Section } from "@/shared/ui/primitive/Section"
import { Typography } from "@/shared/ui/primitive/Typography"

export const metadata = {
	title: "Oops, page not found - Mr. Tindanzor",
	description:
		"The page you're looking for can't be found or may have been moved. Let's take you back safely.",
}

export default function NotFound() {
	return (
		<main className="h-[calc(100vh-4.5rem)] flex-place-center">
			<Section className="gap-0">
				<Heading size="lg">Eerr mm...</Heading>
				<Typography tag="p" size="lg">
					Congratulations, you broke the internet!
				</Typography>
				<Typography tag="p">
					The page you&apos;re looking for can&apos;t be found or may have been
					moved. Let&apos;s take you back safely.
				</Typography>
				<TakeAction />
			</Section>
		</main>
	)
}
