"use client"
import { AnimatePresence, type MotionProps, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { type ComponentProps, useEffect, useRef, useState } from "react"
import avatar from "@/assets/images/mrtindanzor/avatar5.png"
import { motionVariants } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { useDirectionContext } from "@/Providers/ScrollDirectionProvider"
import { StyledArrowButton } from "../common/ArrowLink"
import { Button } from "../common/Button"
import { MImage } from "../common/Image"
import { Typography } from "../common/Typography"

const headerVariants = motionVariants({
	hidden: { y: "-5rem" },
	show: { transition: { duration: 0.2, ease: "easeOut", stiffness: 50 } },
})

const navVariants = motionVariants({
	hidden: { height: 0 },
	show: { height: "fit-content", transition: { staggerChildren: 0.1 } },
	exit: { opacity: 0, height: 0, transition: { ease: "easeIn" } },
})

const navItemVariants = motionVariants({ hidden: { y: 8 } })

export default function Header() {
	const [active, setActive] = useState(false)
	const { direction, current } = useDirectionContext()

	return (
		<motion.header
			variants={headerVariants}
			initial="hidden"
			animate="show"
			className={cn(
				"@container bg-slate-950/70 z-10 flex transition-transform duration-150 ease-in-out drop-shadow-md items-center justify-center backdrop-blur-sm px-8 py-0.5 h-19 sticky w-screen top-0",
				direction === "Down" && current > 60
					? "-translate-y-18"
					: "translate-y-0",
			)}
		>
			<div className="max-w-6xl w-full justify-between items-center flex">
				<Typography className="flex gap-2 text-transparent text-3xl uppercase bg-gradient-to-br bg-clip-text from-sky-600 via-white to-sky-600">
					<MImage
						url={avatar.src}
						alt="Mr. Tindanzor"
						className="size-10 rounded-full *:size-full bg-white/10 backdrop-blur-md"
					/>
					Tindanzor
				</Typography>

				<AnimatePresence>
					{active && <MobileNavLinks setActive={setActive} />}
				</AnimatePresence>
				<DesktopNavLinks />
				<Button
					variant="ghost"
					className="text-sky-100 lg:hidden *:stroke-2 p-0 cursor-pointer hover:bg-transparent hover:text-sky-600 outline-none"
					onClick={() => setActive(!active)}
				>
					{!active && <Menu />}
					{active && <X />}
				</Button>

				<StyledArrowButton
					href="/contact"
					animation="enlargeX"
					variant="black"
					className="hidden! lg:flex!"
				>
					Contact
				</StyledArrowButton>
			</div>

			<div className="bg-gradient-to-r from-sky-600 to-cyan-700 rounded-b-3xl -translate-y-full h-0.5 via-white absolute top-full inset-x-0"></div>
		</motion.header>
	)
}

const links = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Projects",
		path: "/projects",
	},
] as const

function MobileNavLinks({
	className,
	setActive,
	...props
}: { setActive: React.Dispatch<React.SetStateAction<boolean>> } & MotionProps &
	ComponentProps<"ul">) {
	const navbarRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		if (!setActive) return
		const handleOutClick = (e: Event) => {
			const el = e.target
			const nav = navbarRef.current
			if (!(el instanceof HTMLElement) || !nav) return
			if (!nav.contains(el)) setActive(false)
		}

		window.addEventListener("click", handleOutClick)

		return () => {
			window.removeEventListener("click", handleOutClick)
		}
	}, [setActive])

	return (
		<motion.ul
			ref={navbarRef}
			className={cn(
				className,
				"fixed w-9/10 top-20 border lg:hidden border-slate-800 text-center grid gap-1 rounded-xl overflow-hidden py-5 inset-x-0 bg-slate-950/90 backdrop-blur-3xl mx-auto px-4",
			)}
			{...props}
			variants={navVariants}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<div>
				{links.map((link) => (
					<NavLink
						key={link.title}
						{...link}
						onClick={() => setActive(false)}
					/>
				))}
				<div className="border-1 border-white/5 w-full "></div>

				<StyledArrowButton
					href="/contact"
					onClick={() => setActive(false)}
					className="flex w-full lg:hidden"
					animation="enlargeY"
					variant="black"
				>
					Contact
				</StyledArrowButton>
			</div>
		</motion.ul>
	)
}

function DesktopNavLinks({
	className,
	...props
}: MotionProps & ComponentProps<"ul">) {
	return (
		<motion.ul className={cn("hidden lg:flex gap-0.5", className)} {...props}>
			{links.map((link) => (
				<NavLink key={link.title} {...link} />
			))}
		</motion.ul>
	)
}

function NavLink({
	className,
	title,
	path,
	...props
}: { title: string; path: string } & MotionProps & ComponentProps<"li">) {
	const pathname = usePathname()

	return (
		<motion.li {...props} variants={navItemVariants}>
			<Link href={path}>
				<Typography
					size="sm"
					className={cn(
						"py-2 lg:py-1 px-4 flex gap-1 border-transparent lg:border-b-2 lg:rounded-none items-center rounded-md transition duration-200 ease-out lg:hover:text-sky-600 hover:bg-sky-600/10 lg:hover:border-b-sky-600 text-xl justify-center",
						pathname === path ? "border-b-sky-600  bg-sky-600/10" : "",
						className,
					)}
				>
					{title}
				</Typography>
			</Link>
		</motion.li>
	)
}
