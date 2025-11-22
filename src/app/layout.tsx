import type { Metadata } from "next"
import { Stack_Sans_Headline } from "next/font/google"
import Footer from "@/components/Layout/Footer"
import { cn } from "@/lib/utils"
import BaseProvider from "@/Providers/BaseProvider"
import "./globals.css"

const sansHeadline = Stack_Sans_Headline({
	subsets: ["latin"],
})

export const metadata: Metadata = {
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
			<body
				style={{
					scrollbarWidth: "thin",
				}}
				className={cn(
					"bg-slate-950 text-gray-300 min-h-screen tracking-wide antialiased",
					sansHeadline.className,
				)}
			>
				<BaseProvider>{children}</BaseProvider>
				<Footer />
			</body>
		</html>
	)
}
