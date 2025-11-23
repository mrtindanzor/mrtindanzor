import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { Typography } from "./Typography";

export default function WarningText({
  message,
  success,
}: {
  message: string;
  success?: boolean;
}) {
  return (
    <p
      className={cn(
        success ? "bg-green-600/20" : "bg-red-600/20",
        "grid grid-cols-[auto_1fr] px-2 py-0.5 *:text-white items-center gap-2 rounded h-fit"
      )}
    >
      <Info className="size-4" />
      <Typography size="sm">{message}</Typography>
    </p>
  );
}
