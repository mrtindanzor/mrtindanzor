"use client"

import Navbar from "@/shared/layouts/Navbar"
import { ScrollDirectionProvider } from "./ScrollDirectionProvider"

export default function BaseProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ScrollDirectionProvider>
			<Navbar />

			{children}
		</ScrollDirectionProvider>
	)
}
