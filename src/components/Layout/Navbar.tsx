"use client";

import avatar from "@/assets/images/mrtindanzor/avatar8.png";
import { motionVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useDirectionContext } from "@/Providers/ScrollDirectionProvider";
import type { MobileNavbarProps } from "@/types/types";
import {
  AnimatePresence,
  type MotionProps,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, useEffect, useRef, useState } from "react";
import Backdrop from "../common/Backdrop";
import { Button } from "../common/Button";
import { StyledDotLink } from "../common/IconLink";
import { MImage } from "../common/Image";
import { Typography } from "../common/Typography";

const headerVariants = motionVariants({
  hidden: { y: "-5rem" },
  show: { transition: { duration: 0.2, ease: "easeOut", stiffness: 50 } },
});

const navVariants = motionVariants({
  hidden: { height: 0 },
  show: { height: "fit-content" },
  exit: { opacity: 0, height: 0, transition: { ease: "easeIn" } },
});

export default function Header() {
  const [active, setActive] = useState(false);
  const { direction, current } = useDirectionContext();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scrollAmount = y.get();

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="show"
        className={cn(
          "@container bg-slate-950/70 z-10 flex transition-transform duration-150 ease-in-out drop-shadow-md items-center justify-center backdrop-blur-sm px-2 py-0.5 h-19 sticky w-screen top-0",
          direction === "Down" && current > 60
            ? "-translate-y-18"
            : !active
            ? "translate-y-0"
            : "fixed!"
        )}
      >
        <div className="max-w-6xl w-full justify-between items-center flex">
          <Typography
            size="lg"
            className="flex items-center gap-2 text-transparent uppercase bg-gradient-to-br bg-clip-text from-sky-600 via-white to-sky-600"
          >
            <MImage
              url={avatar.src}
              alt="Mr. Tindanzor"
              className="size-10 rounded-full *:size-full bg-white/10 backdrop-blur-md"
            />
            Tindanzor
          </Typography>
          <DesktopNavLinks />
          <StyledDotLink
            href="/contact"
            animation="enlargeX"
            iconClassName="text-black bg-black"
            className="hidden! lg:flex! outline-none border-none"
          >
            Contact
          </StyledDotLink>
          <Button
            variant="ghost"
            className="text-sky-100 lg:hidden *:stroke-2 p-0 cursor-pointer hover:bg-transparent hover:text-sky-600 outline-none"
            onClick={() => setActive(!active)}
          >
            {!active && <Menu />}
            {active && <X />}
          </Button>
        </div>

        <div
          className={cn(
            "bg-gradient-to-r from-sky-600 to-cyan-700 rounded-b-3xl transition-width duration-75 ease-linear -translate-y-full h-0.5 via-white absolute top-full inset-x-0",
            "mx-auto"
          )}
          style={{
            width: scrollAmount,
          }}
        ></div>
      </motion.header>
      <AnimatePresence>
        {active && <MobileNavLinks setActive={setActive} />}
      </AnimatePresence>
    </>
  );
}

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
] as const;

function MobileNavLinks({ className, setActive, ...props }: MobileNavbarProps) {
  const navbarRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!setActive) return;
    const handleOutClick = (e: Event) => {
      const el = e.target;
      const nav = navbarRef.current;
      if (!(el instanceof HTMLElement) || !nav) return;
      if (!nav.contains(el)) setActive(false);
    };

    window.addEventListener("click", handleOutClick);

    return () => {
      window.removeEventListener("click", handleOutClick);
    };
  }, [setActive]);

  return (
    <Backdrop className="lg:hidden top-18">
      <motion.ul
        ref={navbarRef}
        className={cn(
          className,
          "fixed w-9/10 top-1 border border-slate-800 text-center rounded-xl overflow-hidden inset-x-0 bg-slate-950/90 backdrop-blur-3xl mx-auto "
        )}
        {...props}
        variants={navVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="px-4 py-5 grid gap-1">
          {links.map((link) => (
            <NavLink
              key={link.title}
              className="py-4 bg-transparent"
              {...link}
              onClick={() => setActive(false)}
            />
          ))}
          <div className="border-1 border-white/5 w-full "></div>

          <StyledDotLink
            href="/contact"
            onClick={() => setActive(false)}
            className="flex w-full lg:hidden py-4 rounded-lg"
            iconClassName="bg-white"
            animation="enlargeY"
            variant="black"
          >
            Contact
          </StyledDotLink>
        </div>
      </motion.ul>
    </Backdrop>
  );
}

function DesktopNavLinks({
  className,
  ...props
}: MotionProps & ComponentProps<"ul">) {
  return (
    <motion.ul className={cn("hidden lg:flex gap-0.5", className)} {...props}>
      {links.map((link) => (
        <NavLink key={link.title} {...link} />
      ))}
    </motion.ul>
  );
}

function NavLink({
  className,
  title,
  path,
  ...props
}: { title: string; path: string } & MotionProps & ComponentProps<"li">) {
  const pathname = usePathname();

  return (
    <li {...props}>
      <Link href={path}>
        <Typography
          size="sm"
          className={cn(
            "py-2 lg:py-1 px-4 flex gap-1 border-transparent lg:border-b-2 lg:rounded-none items-center rounded-md transition duration-200 ease-out lg:hover:text-sky-600 hover:bg-sky-600/10 lg:hover:border-b-sky-600 text-xl justify-center",
            pathname === path ? "border-b-sky-600  bg-sky-600/10" : "",
            className
          )}
        >
          {title}
        </Typography>
      </Link>
    </li>
  );
}
