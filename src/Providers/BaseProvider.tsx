"use client"

import { Header } from "@/shared/layouts"
import { AppRoutingProvider } from "./AppRouting"
import { ScrollDirectionProvider } from "./ScrollDirectionProvider"

export default function BaseProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<AppRoutingProvider>
			<ScrollDirectionProvider>
				<Header />

				{children}
			</ScrollDirectionProvider>
		</AppRoutingProvider>
	)
}
