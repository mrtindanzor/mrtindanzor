"use client"
import React, { ComponentProps, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, MotionProps, AnimatePresence } from "framer-motion"
import { AlignRight, X } from "lucide-react"

const navlistVariants = {
  hidden: {
    opacity: 1,
    height: 0,
  },
  show: {
    opacity: 1,
    height: "fit-content",
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut" as const,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeIn" as const,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut" as const,
    },
  },
}

export default function Navbar() {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      initial={{
        y: "-5rem",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut" as const,
        },
      }}
      className={cn(
        "@container bg-slate-900/50 z-10 flex justify-between drop-shadow-md items-center backdrop-blur-sm px-5 py-4 h-fit fixed top-0 inset-x-0"
      )}
    >
      <span className="text-transparent bg-gradient-to-br bg-clip-text from-sky-600 via-white to-sky-600 font-bold text-3xl uppercase">
        Tindanzor
      </span>
      <AnimatePresence>
        {active && <MobileNavLinks setActive={setActive} />}
      </AnimatePresence>
      <DesktopNavLinks />
      <span
        className="text-sky-100 @2xl:hidden *:stroke-4 cursor-pointer hover:text-sky-500"
        onClick={() => setActive(!active)}
      >
        {!active && <AlignRight />}
        {active && <X />}
      </span>
      <ContactButton className="hidden @2xl:block" />
      <div className="bg-gradient-to-r from-sky-600 to-cyan-700 via-white absolute top-full inset-x-0 h-0.5"></div>
    </motion.div>
  )
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
]

function MobileNavLinks({
  className,
  setActive,
  ...props
}: { setActive: React.Dispatch<React.SetStateAction<boolean>> } & MotionProps &
  ComponentProps<"ul">) {
  const navbarRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (!setActive) return
    const handleOutClick = (e: Event) => {
      const el = e.target
      const nav = navbarRef.current
      if (!(el instanceof HTMLElement) || !nav) return
      if (!nav.contains(el)) setActive(false)
    }

    window.addEventListener("click", handleOutClick)

    return () => {
      window.removeEventListener("click", handleOutClick)
    }
  }, [setActive])

  return (
    <motion.ul
      ref={navbarRef}
      className={cn(
        className,
        "fixed w-9/10 top-20 border-1 @2xl:hidden border-slate-800 text-center grid gap-6 rounded-xl overflow-hidden py-5 inset-x-0 bg-slate-900 mx-auto px-4"
      )}
      {...props}
      variants={navlistVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {links.map((link) => (
        <NavLink key={link.title} {...link} />
      ))}
      <div className="border-1 border-white/5 w-full "></div>
      <ContactButton className="flex w-full @2xl:hidden" />
    </motion.ul>
  )
}
function DesktopNavLinks({
  className,
  ...props
}: MotionProps & ComponentProps<"ul">) {
  return (
    <motion.ul className={cn(className, "hidden @2xl:flex gap-6 ")} {...props}>
      {links.map((link) => (
        <NavLink key={link.title} {...link} />
      ))}
    </motion.ul>
  )
}

function NavLink({
  className,
  title,
  path,
  ...props
}: { title: string; path: string } & MotionProps & ComponentProps<"li">) {
  return (
    <motion.li
      {...props}
      variants={itemVariants}
      className={cn(
        className,
        "text-white font-medium py-2 px-4 rounded-md transition duration-900 ease-out hover:text-sky-600 hover:bg-sky-600/5 hover:backdrop-blur-3xl text-xl uppercase"
      )}
    >
      <Link href={path}>{title}</Link>
    </motion.li>
  )
}

function ContactButton({ ...props }: MotionProps & ComponentProps<"button">) {
  return (
    <motion.button
      initial={{
        y: 100,
        scale: 0.9,
      }}
      animate={{
        scale: 1,
        y: 0,
        transition: {
          scale: {
            duration: 0.4,
            delay: 0.9,
            ease: "easeOut",
          },
          y: {
            duration: 0.5,
            delay: 0.3,
          },
          ease: "easeOut",
          repeatType: "reverse",
        },
      }}
      {...props}
    >
      <Link
        href="/contact"
        className={cn(
          "px-4 py-3 rounded-3xl border-2 flex w-full justify-center border-sky-600 text-sky-600 hover:text-white hover:bg-sky-600 transition-all duration-200 ease-in font-bold uppercase"
        )}
      >
        Contact
      </Link>
    </motion.button>
  )
}
