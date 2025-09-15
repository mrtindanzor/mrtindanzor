"use client"

import { skillJs } from "@/lib/skills"
import { cn } from "@/lib/utils"
import { IconType } from "react-icons"
import { motion } from "framer-motion"

const List = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
}

export default function Skills() {
  return (
    <div className="px-5 py-5 items-center max-w-4xl mx-auto">
      <p className="font-bold text-sky-700 text-center mb-10 text-2xl">
        My Development Stack
      </p>
      <motion.ul
        className="grid @md:flex flex-wrap gap-2 grid-cols-[repeat(auto-fill,_minmax(6rem,_1fr))] justify-center"
        variants={List}
        viewport={{ once: false }}
        initial="hidden"
        whileInView="visible"
      >
        {skillJs.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </motion.ul>
    </div>
  )
}

function SkillCard({
  title,
  icon: Icon,
  color,
}: {
  title: string
  icon: IconType
  color: string
}) {
  return (
    <motion.li
      className="flex @md:size-30 flex-col aspect-square items-center justify-center py-5 rounded-xl drop-shadow-xl bg-slate-800/90 backdrop-blur-3xl gap-2 text-center"
      variants={item}
    >
      <Icon className={cn(color, "size-10")} />
      <span className={cn("text-sm text-white")}>{title}</span>
    </motion.li>
  )
}
