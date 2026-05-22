import { SiWhatsapp } from "react-icons/si"
import { DEVELOPER } from "../db"
import { cn } from "../utils/cn"
import { StyledLink, type StyledLinkProps } from "./primitive/Button"

export function ConnectButton({ className, ...props }: StyledLinkProps) {
	return (
		<StyledLink
			{...props}
			href={DEVELOPER.socials.whatsapp}
			target="__blank"
			y="center"
			className={cn(
				"bg-green-600 hover:bg-green-500  hover:border py-2  px-8 hover:scale-x-105 text-xl flex gap-x-2 font-medium tracking-wide",
				className,
			)}
		>
			<SiWhatsapp /> Let&apos;s Build
		</StyledLink>
	)
}
