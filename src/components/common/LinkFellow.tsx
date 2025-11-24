"use client";

import useMatchesWidth from "@/hooks/useDeviceWidth";
import { cn } from "@/lib/utils";
import type { IconLinkProps } from "@/types/types";
import { useCallback, useEffect, useRef } from "react";
import { StyledArrowLink } from "./IconLink";

export function LinkFollow({ ...props }: Omit<IconLinkProps, "icon">) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const isMeduimDevice = useMatchesWidth({ size: "sm", comparison: ">" });

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const divEl = divRef.current;
    const linkEl = linkRef.current;

    if (!(divEl instanceof HTMLElement) || !(linkEl instanceof HTMLElement))
      return;

    const { left, top } = divEl.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    linkEl.style.left = `${x}px`;
    linkEl.style.top = `${y}px`;
    linkEl.classList.remove("hidden!");
  }, []);

  const handleMouseLeave = useCallback(() => {
    const linkEl = linkRef.current;
    if (!(linkEl instanceof HTMLElement)) return;

    linkEl.classList.add("hidden!");
  }, []);

  useEffect(() => {
    if (!isMeduimDevice) return;

    const divEl = divRef.current;
    if (!(divEl instanceof HTMLElement)) return;

    divEl.addEventListener("mousemove", handleMouseOver);
    divEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      divEl.removeEventListener("mousemove", handleMouseOver);
      divEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave, handleMouseOver, isMeduimDevice]);

  return (
    <div
      ref={divRef}
      className={cn(
        !isMeduimDevice ? "size-0" : "z-2 absolute inset-0 overflow-hidden"
      )}
    >
      <StyledArrowLink
        {...props}
        ref={linkRef}
        iconClassName="border-slate-950 p-0 size-9 border-2"
        className="sm:cursor-none absolute p-0 outline-none border-node -translate-1/2 size-fit transition-transform duration-75 ease-in hidden!"
      />
    </div>
  );
}
