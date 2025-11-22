"use client";

import { skillJs } from "@/lib/db";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

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
};

const item = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

export default function Skills() {
  return (
    <div className="px-5 @container py-5 items-center max-w-4xl mx-auto">
      <p className="font-bold text-sky-700 text-center mb-10 text-2xl">
        My Development Stack
      </p>
      <motion.ul
        className="grid gap-2 grid-cols-2 @xs:grid-cols-3 @md:grid-cols-4 @xl:grid-cols-5 @2xl:grid-cols-6 justify-center"
        variants={List}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
      >
        {skillJs.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </motion.ul>
    </div>
  );
}

function SkillCard({
  title,
  icon: Icon,
  color,
}: {
  title: string;
  icon: IconType;
  color: string;
}) {
  return (
    <motion.li
      className="flex size-full flex-col aspect-square items-center justify-center py-5 rounded-xl drop-shadow-xl bg-slate-800/90 backdrop-blur-3xl gap-2 text-center"
      variants={item}
    >
      <Icon className={cn(color, "size-10")} />
      <span className={cn("text-sm text-white")}>{title}</span>
    </motion.li>
  );
}
