import { ContactSection } from "./components/Contact"
import { ContactLinks } from "./components/ContactLinks"

export function ContactPage() {
	return (
		<main className="max-w-6xl py-20 px-4 sm:px-6 mx-auto grid gap-y-8 md:grid-cols-[auto_1fr] min-h-app-height gap-x-8">
			<ContactLinks />
			<ContactSection />
		</main>
	)
}
