import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa"
import Link from "next/link"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

const links = [
  {
    title: "Whatsapp",
    link: "https://wa.me/+233546087679",
    color: "green",
    icon: FaWhatsapp,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/mrtindanzor",
    color: "red",
    icon: FaInstagram,
  },
  {
    title: "Tiktok",
    link: "http://www.tiktok.com/@mrtindanzor",
    color: "black",
    icon: FaTiktok,
  },
  {
    title: "Facebook",
    link: "https://web.facebook.com//tindanzorsimon",
    color: "blue",
    icon: FaFacebook,
  },
]

export default function Contactlinks({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        className,
        "grid gap-4 px-4 py-6 bg-white/10 backdrop-blur-3xl h-fit"
      )}
    >
      <h2 className="text-lg font-bold text-stone-900 md:text-2xl md:font-semibold">
        Contact or follow me on my social media channels!
      </h2>
      <SocialMediaButtons />
    </div>
  )
}

function SocialMediaButtons() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(5rem,_1fr))] w-full gap-4 mx-auto md:gap-3 sm:px-5">
      {links.map((link) => (
        <SocialLink key={link.title} link={link} />
      ))}
    </ul>
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
        "relative rounded-md flex gap-2 flex-col py-3 hover:-translate-y-1 transition-all duration-100 ease-linear px-3 w-full font-meduim items-center",
        color === "green" ? "border-2 border-green-600" : "",
        color === "blue" ? "border-2 border-blue-600" : "",
        color === "red" ? "border-2 border-orange-600" : "",
        color === "black" ? "border-2 border-gray-800" : ""
      )}
    >
      <Icon
        className={cn(
          "size-10",
          color === "green" ? "border-green-600 text-green-600" : "",
          color === "blue" ? "text-blue-600 border-blue-600" : "",
          color === "red" ? "text-red-600 border-red-400" : "",
          color === "black" ? "text-black border-black" : ""
        )}
      />
      <Link href={link} className="link">
        {title}
      </Link>
    </li>
  )
}
