"use client";

import { motionVariants } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

const homePageVariants = motionVariants({
  hidden: { scale: 0.8 },
  show: { scale: 1, transition: { stiffness: 50 } },
  exit: { opacity: 0 },
});

const aboutPageVariants = motionVariants({
  hidden: { y: 50 },
  show: { transition: { ease: "easeIn" } },
  exit: { opacity: 0 },
});

const projectsPageVariants = motionVariants({
  hidden: { scale: 1.3 },
  show: { scale: 1, transition: { stiffness: 50 } },
  exit: { opacity: 0 },
});
const variants = {
  "/": homePageVariants,
  "/projects": projectsPageVariants,
  "/about": aboutPageVariants,
} as const;

export default function RouteAnimation({ children }: PropsWithChildren) {
  const pathname = usePathname() as keyof typeof variants;
  const currentVariants = variants[pathname] ?? homePageVariants;

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={currentVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
