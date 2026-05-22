import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useDirectionContext } from "@/providers/ScrollDirectionProvider"
import { DEVELOPER } from "../db"
import { routes } from "../routes"
import { Button, StyledLink } from "../ui/primitive/Button"
import { MImage } from "../ui/primitive/Image"
import { cn } from "../utils/cn"
import { DesktopNavbar, MobileNavbar } from "./Navbar"

export function Header() {
	const [active, setActive] = useState(false)
	const { current } = useDirectionContext()

	return (
		<>
			<header
				className={cn(
					"fixed bg-muted inset-x-0 top-0 h-18 z-50 flex items-center",
					current > 2 && "border-b border-b-muted-secondary shadow-sm",
				)}
			>
				<div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
					<div className="flex items-center gap-3">
						<MImage
							url={DEVELOPER.avatar}
							alt={DEVELOPER.name}
							className="size-10 rounded-full border-muted-secondary border p-0.5"
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
						variant="accent"
						className="hidden! hover:shadow-md hover:shadow-accent/40 lg:flex! items-center gap-x-2 rounded-full px-6 py-2"
					>
						Contact me
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
