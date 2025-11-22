import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn("grid h-fit gap-4 py-10 px-4 mx-auto max-w-6xl", className)}
    />
  );
}
