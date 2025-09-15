"use client"
import avatar from "@/assets/images/mrtindanzor.png"
import { Saira_Stencil_One, Bakbak_One } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "framer-motion"

const siara = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
})
export const bakBakOne = Bakbak_One({
  subsets: ["latin"],
  weight: "400",
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 justify-center flex flex-col @2xl:flex-row gap-4 py-20 @2xl:py-0 @2xl:h-dvh items-center max-w-5xl mx-auto">
      <div
        className={cn(
          "flex gap-4 py-5 flex-col w-full",
          "@sm:text-center @2xl:text-left @2xl:w-1/2"
        )}
      >
        <motion.h1
          initial={{
            x: -40,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
            },
          }}
          className={cn(
            siara.className,
            "bg-gradient-to-br from-cyan-700 to-sky-500 bg-clip-text ",
            "text-transparent font-black",
            "text-5xl @4xl:text-6xl"
          )}
        >
          I am Simon Tindanzor
        </motion.h1>
        <motion.p
          className="text-base flex flex-col"
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
        >
          <span
            className={cn(
              "font-bold font-mono text-2xl @sm:text-3xl @lg:text-4xl @xl:text-4xl text-white",
              bakBakOne.className
            )}
          >
            Web Developer & Founder of Tindanzor Software Solutions
          </span>
          <span className="text-gray-400 @xl:text-sm @2xl:text-base @3xl:text-lg">
            Transforming ideas into sleek web apps and powerful tech solutions.
          </span>
        </motion.p>
      </div>

      <motion.div
        initial={{
          x: 60,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeOut",
            duration: 0.6,
          },
        }}
        viewport={{ once: true }}
        className={cn(
          "relative backdrop-blur-3xl size-70 @sm:size-90 mx-auto @xl:size-110 @2xl:size-80 @3xl:size-90 @4xl:size-100 border-6 shadow-md shadow-sky-600 border-gray-600 bg-slate-950 rounded-4xl"
        )}
      >
        <Image
          src={avatar}
          fill
          alt="Mr. Tindanzor Simon"
          className="object-contain z-1"
        />
      </motion.div>
    </section>
  )
}
