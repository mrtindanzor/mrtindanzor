import { cn } from "@/lib/utils";
import type { PillProps } from "@/types/types";
import { cva } from "class-variance-authority";
import { Typography } from "./Typography";

export const pillVariants = cva(
  "outline select-none px-4 py-1.5 w-fit rounded-3xl",
  {
    variants: {
      variant: {
        green: "outline-green-600 bg-green-900/20 text-green-600",
        sky: "outline-sky-200 bg-sky-600/5 text-sky-200",
      },
    },
    defaultVariants: {
      variant: "sky",
    },
  }
);

export function Pill({
  className,
  variant,
  size = "sm",
  tag,
  ...props
}: PillProps) {
  return (
    <Typography
      {...props}
      size={size}
      tag={tag}
      className={cn(pillVariants({ className, variant }))}
    />
  );
}
