"use client";

import type { FollowLinkProps } from "@/types/types";
import { useCallback, useEffect, useRef } from "react";
import { ArrowLink } from "./ArrowLink";

export function LinkFollow({ ...props }: FollowLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

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
    const divEl = divRef.current;
    if (!(divEl instanceof HTMLElement)) return;

    divEl.addEventListener("mousemove", handleMouseOver);
    divEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      divEl.removeEventListener("mousemove", handleMouseOver);
      divEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave, handleMouseOver]);

  return (
    <div
      ref={divRef}
      className="cursor-none z-2 absolute inset-0 overflow-hidden"
    >
      <ArrowLink
        ref={linkRef}
        {...props}
        className="cursor-none absolute -translate-1/2 bg-white text-slate-800 size-10 transition-transform duration-75 ease-in *:size-10 hidden!"
      />
    </div>
  );
}
