import { SiWhatsapp } from "react-icons/si"
import { aboutService } from "@/features/about"
import { cn } from "../utils/cn"
import { Link, type LinkProps } from "./primitive/Button"

export function ConnectButton({ className, ...props }: LinkProps) {
	const developer = aboutService.getDeveloper()
	return (
		<Link
			{...props}
			href={developer.socials.whatsapp}
			target="_blank"
			y="center"
			className={cn(
				"bg-green-600 hover:bg-green-500  py-2 px-8 hover:scale-x-105 text-xl flex gap-x-2 font-medium tracking-wide",
				className,
			)}
		>
			<SiWhatsapp /> Let&apos;s Build
		</Link>
	)
}
