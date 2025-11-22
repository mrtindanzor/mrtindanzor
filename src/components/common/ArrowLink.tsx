"use client";

import { cn } from "@/lib/utils";
import type { ArrowLinkProps } from "@/types/types";
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
