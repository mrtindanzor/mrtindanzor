import Contact from "@/app/contact/_Components/Contact"
import Contactlinks from "@/app/contact/_Components/ContactLinks"
import { Heading } from "@/components/common/Heading"
import { Section } from "@/components/common/Section"

export default function ContactPage() {
	return (
		<main className="min-h-screen">
			<Section className="lg:grid-cols-[1fr_2fr] w-full max-w-xl lg:max-w-6xl">
				<div className="col-start-1">
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
