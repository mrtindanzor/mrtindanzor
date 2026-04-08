"use client"

import { type MotionProps, motion } from "framer-motion"
import type { ComponentProps } from "react"
import { motionVariants } from "@/shared/ui/Framer"
import Backdrop from "@/shared/ui/primitive/Backdrop"
import { StyledDotLink } from "@/shared/ui/primitive/Button"
import { cn } from "@/shared/utils/cn"
import { useAutoHide } from "../hooks/useAutoHide"
import { useAppPathname } from "../hooks/useNavigation"
import { routes } from "../routes"
import type { SetState } from "../types/utils/setState"
import { NAV_LINKS } from "./constants"

const navVariants = motionVariants({
	hidden: { height: 0 },
	show: { height: "fit-content" },
	exit: { opacity: 0, height: 0, transition: { ease: "easeIn" } },
})

type MobileNavbarProps = {
	setActive: SetState<boolean>
} & MotionProps &
	ComponentProps<"ul">

export function MobileNavbar({
	className,
	setActive,
	...props
}: MobileNavbarProps) {
	const { captureRef } = useAutoHide({
		close: () => setActive(false),
		isOpen: true,
	})

	return (
		<Backdrop className="lg:hidden top-18">
			<motion.ul
				ref={captureRef()}
				className={cn(
					className,
					"fixed w-9/10 top-1 border border-slate-800 text-center rounded-xl overflow-hidden inset-x-0 bg-slate-950/90 backdrop-blur-3xl mx-auto ",
				)}
				{...props}
				variants={navVariants}
				initial="hidden"
				animate="show"
				exit="exit"
			>
				<div className="px-4 py-5 grid gap-1">
					{NAV_LINKS.map((link) => (
						<NavLink
							key={link.title}
							className="py-4 bg-transparent"
							{...link}
							onClick={() => setActive(false)}
						/>
					))}
					<div className="border-1 border-white/5 w-full "></div>

					<StyledDotLink
						href={routes.contact}
						onClick={() => setActive(false)}
						className="flex w-full lg:hidden py-4 rounded-lg"
						iconClassName="bg-white"
						animation="enlargeY"
						variant="muted"
					>
						Contact
					</StyledDotLink>
				</div>
			</motion.ul>
		</Backdrop>
	)
}

export function DesktopNavbar({
	className,
	...props
}: MotionProps & ComponentProps<"ul">) {
	return (
		<motion.ul className={cn("hidden lg:flex gap-0.5", className)} {...props}>
			{NAV_LINKS.map((link) => (
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
	const pathname = useAppPathname()

	return (
		<li {...props}>
			<StyledDotLink href={path} variant={pathname === path ? "white" : "none"}>
				{title}
			</StyledDotLink>
		</li>
	)
}
