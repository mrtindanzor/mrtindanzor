import type { Metadata } from "next"
import { Chakra_Petch, Jura } from "next/font/google"
import "./globals.css"
import { AppLayout } from "@/Layout"

const chakra = Chakra_Petch({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-chakra",
	display: "swap",
})

const jura = Jura({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-jura",
	display: "swap",
})

const appUrl = process.env.APP_URL
if (!appUrl) throw Error("App url not defined")

export const metadata: Metadata = {
	metadataBase: new URL(appUrl),
	title: "Mr. Tindanzor Simon",
	description: "Mr. Tindanzor Simon - Portfolio",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="Mr. Tindanzor" />
			</head>

			<body className={`${jura.variable} ${chakra.variable}`}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	)
}
