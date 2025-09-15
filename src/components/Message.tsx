import { cn } from "@/lib/utils"
import { Info } from "lucide-react"

export default function Message({
  message,
  success,
}: {
  message: string
  success?: boolean
}) {
  return (
    <p
      className={cn(
        success ? "text-green-600" : "text-red-600",
        "grid grid-cols-[auto_1fr] px-2 items-center gap-2 rounded h-fit"
      )}
    >
      <Info className="size-4" />
      <span className="font-medium text-sm">{message}</span>
    </p>
  )
}
