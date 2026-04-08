"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useDirectionContext } from "@/providers/ScrollDirectionProvider"
import { DEVELOPER } from "../db"
import { routes } from "../routes"
import { motionVariants } from "../ui/Framer"
import { Button, StyledDotLink } from "../ui/primitive/Button"
import { MImage } from "../ui/primitive/Image"
import { Typography } from "../ui/primitive/Typography"
import { cn } from "../utils/cn"
import { DesktopNavbar, MobileNavbar } from "./Navbar"

const headerVariants = motionVariants({
	hidden: { y: "-5rem" },
	show: { transition: { duration: 0.2, ease: "easeOut", stiffness: 50 } },
})

export function Header() {
	const [active, setActive] = useState(false)
	const { direction, current } = useDirectionContext()
	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
	const scrollAmount = y.get()

	return (
		<>
			<motion.header
				variants={headerVariants}
				initial="hidden"
				animate="show"
				className={cn(
					"@container bg-slate-950/70 z-10 flex transition-transform duration-150 ease-in-out drop-shadow-md items-center justify-center backdrop-blur-sm px-2 py-0.5 h-19 sticky w-screen top-0",
					direction === "Down" && current > 60
						? "-translate-y-18"
						: !active
							? "translate-y-0"
							: "fixed!",
				)}
			>
				<div className="max-w-6xl w-full justify-between items-center flex">
					<Typography
						size="lg"
						className="flex items-center gap-2 text-transparent uppercase bg-gradient-to-br bg-clip-text from-sky-600 via-white to-sky-600"
					>
						<MImage
							url={DEVELOPER.avatar}
							alt="Mr. Tindanzor"
							className="size-10 rounded-full *:size-full bg-white/10 backdrop-blur-md"
						/>
						Tindanzor
					</Typography>
					<DesktopNavbar />
					<StyledDotLink
						href={routes.contact}
						animation="enlargeX"
						iconClassName="text-black bg-black"
						className="hidden! lg:flex! outline-none border-none"
					>
						Contact
					</StyledDotLink>
					<Button
						variant="ghost"
						className="text-sky-100 lg:hidden *:stroke-2 p-0 cursor-pointer hover:bg-transparent hover:text-sky-600 outline-none"
						onClick={() => setActive(!active)}
					>
						{!active && <Menu />}
						{active && <X />}
					</Button>
				</div>

				<div
					className={cn(
						"bg-gradient-to-r from-sky-600 to-cyan-700 rounded-b-3xl transition-width duration-75 ease-linear -translate-y-full h-0.5 via-white absolute top-full inset-x-0",
						"mx-auto",
					)}
					style={{
						width: scrollAmount,
					}}
				/>
			</motion.header>
			<AnimatePresence>
				{active && <MobileNavbar setActive={setActive} />}
			</AnimatePresence>
		</>
	)
}
