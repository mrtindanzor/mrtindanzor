import type React from "react"
import BaseProvider from "./providers/BaseProvider"
import Footer from "./shared/layouts/Footer"

type LayoutProps = {
	children: React.ReactNode
}

export function AppLayout({ children }: LayoutProps) {
	return (
		<BaseProvider>
			{children}
			<Footer />
		</BaseProvider>
	)
}
