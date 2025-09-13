import Image from "next/image"
import { ComponentProps } from "react"
import avatar from "@/assets/images/mtindanzor0.webp"
import { cn } from "@/lib/utils"

export default function Avatar({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        className,
        "relative h-full aspect-square rounded-md overflow-hidden"
      )}
    >
      <Image
        fill
        src={avatar}
        sizes="100%"
        alt="avatar"
        className="object-cover object-top"
      />
    </div>
  )
}
