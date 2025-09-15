"use client"

import { cn } from "@/lib/utils"
import { Noto_Sans } from "next/font/google"
import { motion } from "framer-motion"
import { bakBakOne } from "./Hero"
import { IconType } from "react-icons"
import {
  FaCode,
  FaGlobe,
  FaLightbulb,
  FaShoppingCart,
  FaUniversity,
} from "react-icons/fa"

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
})

const listItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut" as const,
      duration: 0.5,
    },
  },
}

export default function Bio() {
  return (
    <section className="my-10 px-5 sm:px-10 grid gap-10 bg-slate-950 max-w-5xl mx-auto">
      <h2
        className={cn(
          bakBakOne.className,
          "bg-gradient-to-br from-sky-600 to-cyan-400 text-transparent bg-clip-text font-black",
          "text-center text-4xl @2xl:text-5xl"
        )}
      >
        Vision & Work
      </h2>
      <motion.div
        className={cn(notoSans.className, "text-gray-400 leading-relaxed")}
      >
        <BioList />
      </motion.div>
    </section>
  )
}

const List = [
  {
    icon: FaCode,
    color: "text-sky-600",
    content: "Software Engineer & Aspiring Tech Entrepreneur",
  },
  {
    icon: FaShoppingCart,
    color: "text-emerald-500",
    content: "Currently building an online marketplace app for Ghana",
  },
  {
    icon: FaUniversity,
    color: "text-indigo-600",
    content:
      "Built and launched a functional web app for Successfield College (live & in use)",
  },
  {
    icon: FaGlobe,
    color: "text-cyan-600",
    content:
      "Long-term goal: create a suite of applications (marketplaces, food systems & more) to improve digital access for communities",
  },
  {
    icon: FaLightbulb,
    color: "text-amber-500",
    content:
      "Known for blending strong technical skills with a vision for scalable, impactful solutions",
  },
]

function BioList() {
  return (
    <motion.ul className="grid gap-4">
      {List.map((item) => (
        <ListItem key={item.content} {...item} />
      ))}
    </motion.ul>
  )
}

function ListItem({
  icon: Icon,
  content,
  color,
}: {
  icon: IconType
  content: string
  color: string
}) {
  return (
    <motion.div
      variants={listItemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
      }}
      className="grid grid-cols-[auto_1fr] items-center gap-4 text-gray-300 py-6 px-4 bg-white/10 backdrop-blur-md rounded-4xl"
    >
      <Icon className={cn(color, "size-8 @md:size-10")} />
      <p>{content}</p>
    </motion.div>
  )
}
