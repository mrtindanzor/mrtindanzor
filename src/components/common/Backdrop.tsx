import { cn } from "@/lib/utils";
import type { BackropProps } from "@/types/types";
import { useLayoutEffect } from "react";

export default function Backdrop({ className, ...props }: BackropProps) {
  useLayoutEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    document.documentElement.classList.add("lg:overflow-y-auto");

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("lg:overflow-y-auto");
    };
  }, []);

  return (
    <div
      {...props}
      className={cn(
        "fixed! z-2000 bg-slate-950/5 backdrop-blur w-screen h-screen inset-0 *:z-10",
        className
      )}
    />
  );
}
