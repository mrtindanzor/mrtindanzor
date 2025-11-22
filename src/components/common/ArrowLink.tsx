"use client";

import { cn } from "@/lib/utils";
import type { ArrowLinkProps, StyledArrowProps } from "@/types/types";
import { cva } from "class-variance-authority";
import { ArrowUpCircle } from "lucide-react";
import Link from "next/link";

export function ArrowLink({ children, className, ...props }: ArrowLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "flex-place-center rounded-full overflow-hidden",
        className
      )}
    >
      <ArrowUpCircle className="rotate-45" />
      {children}
    </Link>
  );
}

export const styleArrowButtonVariants = cva(
  "gap-4 outline border-1 w-fit py-2.5 ease-in transition-transform px-8 rounded-3xl *:first:size-5",
  {
    variants: {
      variant: {
        white: "border-slate-900 outline-white bg-white text-gray-800",
        sky: "bg-sky-600 text-gray-300 outline-sky-600",
        black: "border-white bg-slate-950 text-gray-300",
      },
      animation: {
        squish: "hover:scale-y-98 hover:scale-x-110",
        enlarge: "hover:scale-x-110 hover:scale-y-110",
        enlargeX: "hover:scale-x-110",
        enlargeY: "hover:scale-y-115",
      },
    },
    defaultVariants: {
      variant: "white",
      animation: "squish",
    },
  }
);

export function StyledArrowButton({
  className,
  variant,
  animation,
  ...props
}: StyledArrowProps) {
  return (
    <ArrowLink
      {...props}
      className={cn(
        styleArrowButtonVariants({ className, variant, animation })
      )}
    />
  );
}
