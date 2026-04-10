import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useDirectionContext } from "@/providers/ScrollDirectionProvider"
import { DEVELOPER } from "../db"
import { routes } from "../routes"
import { motionVariants } from "../ui/Framer"
import { Button, StyledDotLink, StyledLink } from "../ui/primitive/Button"
import { MImage } from "../ui/primitive/Image"
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
					<div className="flex items-center gap-2">
						<MImage
							url={DEVELOPER.avatar}
							alt={DEVELOPER.name}
							className="size-10 rounded-full *:size-full bg-neutral/10 backdrop-blur-md"
						/>
						<StyledLink
							variant="muted"
							href={routes.home}
							className="font-bold text-lg uppercase sm:text-2xl text-transparent bg-gradient-to-br bg-clip-text from-primary via-white to-primary"
						>
							{DEVELOPER.lastName}
						</StyledLink>
					</div>
					<DesktopNavbar />
					<StyledDotLink
						href={routes.contact}
						animation="enlargeX"
						variant="light"
						iconClassName="text-black bg-black"
						className="hidden! lg:flex! items-center gap-x-2 outline-none border-none"
					>
						Contact
					</StyledDotLink>
					<Button
						className="lg:hidden *:stroke-2 p-0"
						onClick={() => setActive(!active)}
					>
						{!active && <Menu />}
						{active && <X />}
					</Button>
				</div>

				<div
					className={cn(
						"bg-gradient-to-r from-primary to-neutral rounded-b-3xl transition-width duration-75 ease-linear -translate-y-full h-0.5 via-primary/30 absolute top-full inset-x-0",
						"mx-auto",
					)}
					style={{
						width: scrollAmount,
					}}
				/>
			</motion.header>
			<MobileNavbar active={active} setActive={setActive} />
		</>
	)
}
