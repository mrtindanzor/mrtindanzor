import type { Metadata } from "next"
import { ContactPage } from "@/screens/contact"

export const metadata: Metadata = {
	title: "Contact - Mr. Tindanzor",
	description:
		"Get in touch with me for collaboration, inquiries, or just to say hi.",
}

export default function Page() {
	return <ContactPage />
}
