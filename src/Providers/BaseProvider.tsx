"use client"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Navbar from "@/components/Layout/Navbar"
import { ScrollDirectionProvider } from "./ScrollDirectionProvider"

export default function BaseProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()

	return (
		<ScrollDirectionProvider>
			<Navbar />

			<AnimatePresence>
				<div key={pathname}>{children}</div>
			</AnimatePresence>
		</ScrollDirectionProvider>
	)
}
