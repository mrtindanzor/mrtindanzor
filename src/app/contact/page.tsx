import type { Metadata } from "next"
import Contact from "@/app/contact/_components/Contact"
import Contactlinks from "@/app/contact/_components/ContactLinks"
import { Heading } from "@/components/common/Heading"
import { Section } from "@/components/common/Section"

export const metadata: Metadata = {
	title: "Contact me - Mr. Tindanzor",
	description: "Get in touch with me now.",
}

export default function ContactPage() {
	return (
		<main className="min-h-screen">
			<Section className="lg:grid-cols-[1fr_2fr] w-full max-w-xl lg:max-w-6xl gap-y-8">
				<div className="col-start-1 grid gap-y-4 lg:gap-y-4 h-fit">
					<Heading tag="h2" size="lg" className="col-span-full px-0">
						Get in touch with me!
					</Heading>
					<Contactlinks />
				</div>
				<Contact className="lg:col-start-2" />
			</Section>
		</main>
	)
}
