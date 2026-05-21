import { Info } from "lucide-react"
import { cn } from "@/shared/utils/cn"

export default function WarningText({
	message,
	success,
}: {
	message: string
	success?: boolean
}) {
	return (
		<div
			className={cn(
				"flex items-center gap-3 p-3 rounded-xl border transition-all",
				success 
					? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" 
					: "bg-danger/10 border-danger/20 text-danger"
			)}
		>
			<Info className="size-5 shrink-0" />
			<span className="text-sm font-medium leading-tight">{message}</span>
		</div>
	)
}
