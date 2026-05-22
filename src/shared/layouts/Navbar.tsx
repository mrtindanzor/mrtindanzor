import { AnimatePresence, type MotionProps, motion } from "framer-motion"
import type { ComponentProps } from "react"
import {
	FramerAnimatePosition,
	type FramerAnimatePositionProps,
	motionVariants,
} from "@/shared/ui/Framer"
import Backdrop from "@/shared/ui/primitive/Backdrop"
import { StyledDotLink, StyledLink } from "@/shared/ui/primitive/Button"
import { cn } from "@/shared/utils/cn"
import { useAppPathname } from "../hooks/useNavigation"
import { routes } from "../routes"
import { NAV_LINKS } from "./constants"

const navVariants = motionVariants({
	hidden: { x: "100%" },
	show: {
		height: "fit-content",
		transition: { stiffness: 40, ease: "easeIn" },
	},
})

type MobileNavbarProps = {
	close: () => void
	captureRef: (index?: number) => <T>(ref: T | null) => void
	active: boolean
} & Omit<FramerAnimatePositionProps, "children">

export function MobileNavbar({
	className,
	close,
	captureRef,
	active,
	...props
}: MobileNavbarProps) {
	return (
		<AnimatePresence>
			{active && (
				<Backdrop className="lg:hidden top-18">
					<FramerAnimatePosition
						className={cn(
							className,
							"fixed w-screen h-screen inset-0 flex justify-end text-center rounded-xl overflow-hidden backdrop-blur-md mx-auto ",
						)}
						{...props}
						variants={navVariants}
						animate="show"
					>
						<div
							ref={captureRef(1)}
							className="h-app-height px-4 py-5 w-full bg-muted max-w-sm border-l border-muted-secondary"
						>
							<ul className="grid gap-y-6 h-fit">
								{NAV_LINKS.map((link) => (
									<NavLink
										key={link.title}
										{...link}
										className="py-2 bg-transparent"
										onClick={close}
									/>
								))}
								<li>
									<div className="border-1 border-white/5 w-full "></div>
								</li>
								<li>
									<StyledDotLink
										href={routes.contact}
										onClick={close}
										className="flex-place-center gap-x-2  w-full lg:hidden py-2 rounded-lg"
										variant="accent"
									>
										Contact
									</StyledDotLink>
								</li>
							</ul>
						</div>
					</FramerAnimatePosition>
				</Backdrop>
			)}
		</AnimatePresence>
	)
}

export function DesktopNavbar({
	className,
	...props
}: MotionProps & ComponentProps<"ul">) {
	return (
		<motion.ul className={cn("hidden lg:flex gap-1", className)} {...props}>
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
	const active = pathname === path

	return (
		<li {...props}>
			<StyledLink
				href={path}
				variant={active ? "success-light" : "none"}
				hover="accent"
				x="center"
				className={cn(active ? "outline-none bg-transparent" : "", className)}
			>
				{title}
			</StyledLink>
		</li>
	)
}
