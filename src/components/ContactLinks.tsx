"use client"
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa"
import Link from "next/link"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"
import { motion } from "framer-motion"

const links = [
  {
    title: "Whatsapp",
    link: "https://wa.me/+233546087679",
    color: "text-green-600",
    icon: FaWhatsapp,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/mrtindanzor",
    color: "text-red-600",
    icon: FaInstagram,
  },
  {
    title: "Tiktok",
    link: "http://www.tiktok.com/@mrtindanzor",
    color: "text-black",
    icon: FaTiktok,
  },
  {
    title: "Facebook",
    link: "https://web.facebook.com/tindanzorsimon",
    color: "text-sky-600",
    icon: FaFacebook,
  },
]

const LinksVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
}

const linkItemVariant = {
  hidden: {
    opacity: 0,
    x: 8,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut" as const,
      duration: 0.5,
    },
  },
}

export default function Contactlinks({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(className, "grid gap-4 px-3 sm:px-5 py-6 h-fit")}
    >
      <h2 className="font-bold text-2xl text-white text-center lg:text-left">
        Contact or follow me on my social media channels!
      </h2>
      <SocialMediaButtons />
    </div>
  )
}

function SocialMediaButtons() {
  return (
    <motion.ul
      className="flex flex-wrap justify-center text-center lg:grid-cols-1 lg:grid w-full lg:w-max gap-4 mx-auto md:gap-3"
      variants={LinksVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {links.map((link) => (
        <SocialLink key={link.title} link={link} />
      ))}
    </motion.ul>
  )
}

function SocialLink({
  link: { title, link, icon: Icon, color },
}: {
  link: {
    title: string
    link: string
    icon: IconType
    color: string
  }
}) {
  return (
    <li
      className={cn(
        "relative rounded-md flex flex-col w-25 lg:grid lg:grid-cols-[auto_1fr] lg:w-full gap-2 py-3 hover:bg-gray-200/10 hover:backdrop-blur-3xl px-2 transition-all duration-500 ease-in-out font-meduim items-center text-gray-300"
      )}
    >
      <Icon className={cn("size-10 bg-white rounded-full p-2", color)} />
      <motion.div
        className="grid text-center lg:text-left"
        variants={linkItemVariant}
      >
        <span className="">{title}</span>
        <Link
          href={link}
          className="text-cyan-600 font-medium before:absolute before:content-[''] before:inset-0 h-0 overflow-y-hidden lg:overflow-y-visible lg:h-auto"
        >
          {link}
        </Link>
      </motion.div>
    </li>
  )
}
