import { TakeAction } from "./NotFoundPageTakeAction"
import { Heading } from "./primitive/Heading"
import { Section } from "./primitive/Section"
import { Typography } from "./primitive/Typography"

export function NotFoundPage() {
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
