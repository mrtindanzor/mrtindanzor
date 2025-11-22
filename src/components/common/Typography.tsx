import { cn } from "@/lib/utils";
import type { TypographyProps } from "@/types/types";
import { cva } from "class-variance-authority";
import { Jura } from "next/font/google";

const xs = Jura({
  subsets: ["latin"],
  weight: "300",
});
const sm = Jura({
  subsets: ["latin"],
  weight: "400",
});
const md = Jura({
  subsets: ["latin"],
  weight: "500",
});
const lg = Jura({
  subsets: ["latin"],
  weight: "600",
});

const juraWeights = {
  xs,
  sm,
  md,
  lg,
};

export const typographyVariants = cva("tracking-tight block text-gray-400", {
  variants: {
    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-1.5",
      lg: "text-lg py-2 px-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export function Typography({
  tag: Tag = "span",
  size = "md",
  className,
  ...props
}: TypographyProps) {
  return (
    <Tag
      {...props}
      className={cn(
        juraWeights[size].className,
        typographyVariants({ size, className })
      )}
    />
  );
}
