import type React from "react"
import { ProvidersWithExtraUI } from "./providers/BaseProvider"
import { Footer } from "./shared/layouts/Footer"

type LayoutProps = {
	children: React.ReactNode
}

export function AppLayout({ children }: LayoutProps) {
	return (
		<ProvidersWithExtraUI>
			{children}
			<Footer />
		</ProvidersWithExtraUI>
	)
}
