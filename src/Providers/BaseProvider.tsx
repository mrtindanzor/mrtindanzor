import { Header } from "@/shared/layouts"
import { AppRoutingProvider } from "./AppRouting"
import { ScrollDirectionProvider } from "./ScrollDirectionProvider"

export function DataProviders({ children }: { children: React.ReactNode }) {
	return (
		<AppRoutingProvider>
			<ScrollDirectionProvider>{children}</ScrollDirectionProvider>
		</AppRoutingProvider>
	)
}

export function ProvidersWithExtraUI({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
