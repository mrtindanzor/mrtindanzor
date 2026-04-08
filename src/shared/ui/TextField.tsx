import { useId } from "react"
import { cn } from "@/lib/utils"
import type { TextFieldProps } from "@/shared/types/types"
import { Typography } from "./Typography"

export function TextField({
	title,
	icon: Icon,
	className,
	children,
	...props
}: TextFieldProps) {
	const id = useId()

	return (
		<div className={cn(className, "grid gap-2 relative")}>
			<label htmlFor={id}>
				<Typography size="sm" className="text-gray-200 p-0">
					{title}
				</Typography>
			</label>
			<div className="relative w-full grid">
				<input
					{...props}
					className="rounded-sm border-1 placeholder:font-light placeholder:text-xs focus:outline focus-within:outline-gray-400/40 border-gray-300/10 py-2 pl-10 pr-3 text-gray-200 bg-slate-950/50 backdrop-blur-md"
				/>
				<Icon
					className={cn("absolute left-2 bottom-2.5 text-white/50 size-5")}
				/>
			</div>
			{children}
		</div>
	)
}
