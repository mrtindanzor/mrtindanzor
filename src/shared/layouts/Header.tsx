import { Menu, X } from "lucide-react"
import { useState } from "react"
import { DEVELOPER } from "../db"
import { routes } from "../routes"
import { motionVariants } from "../ui/Framer"
import { Button, StyledLink } from "../ui/primitive/Button"
import { MImage } from "../ui/primitive/Image"
import { DesktopNavbar, MobileNavbar } from "./Navbar"

const headerVariants = motionVariants({
	hidden: { y: "-5rem" },
	show: { transition: { duration: 0.2, ease: "easeOut", stiffness: 50 } },
})

export function Header() {
	const [active, setActive] = useState(false)  

	return (
		<>
			<header
				className="fixed inset-x-0 top-0 h-18 bg-background-primary z-50 flex items-center border-b border-border-subtle shadow-sm transition-all duration-300"
			>
				<div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">
					<div className="flex items-center gap-3">
						<MImage
							url={DEVELOPER.avatar}
							alt={DEVELOPER.name}
							className="size-10 rounded-full border border-border-subtle bg-background-secondary p-0.5"
						/>
						<StyledLink
							variant="none"
							href={routes.home}
							className="font-bold text-xl uppercase tracking-tighter text-gradient"
						>
							{DEVELOPER.lastName}
						</StyledLink>
					</div>
					<DesktopNavbar />
					
					<StyledLink
						href={routes.contact}
						animation="enlargeX"
						variant="primary-light" 
						className="hidden! lg:flex! items-center gap-x-2 rounded-full px-6 py-2"
					>
						Contact
					</StyledLink>

					<Button
						className="lg:hidden *:stroke-2 p-0"
						onClick={() => setActive(!active)}
					>
						{!active && <Menu />}
						{active && <X />}
					</Button>
				</div>

			</header>
			<MobileNavbar active={active} setActive={setActive} />
		</>
	)
}
