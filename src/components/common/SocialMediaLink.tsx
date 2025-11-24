import { cn } from "@/lib/utils";
import type { SocailMediaCardProps } from "@/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Typography } from "./Typography";

export function SocialMediaCard({
  title,
  link,
  icon: Icon,
  color,
  className,
  ...props
}: SocailMediaCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "first:rounded-t-xl group last:rounded-b-xl relative grid px-4 py-2 gap-x-2 gap-y-2 w-full border border-gray-700/30 items-center grid-cols-[auto_1fr_auto] hover:bg-gray-800/20",
        className
      )}
    >
      <Typography>
        <Icon className="size-6" />
      </Typography>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="link mr-auto"
      >
        <Typography>{title}</Typography>
      </Link>

      <ArrowRight className="text-gray-800/80 group-hover:text-white group-hover:animate-pulse group-hover:-rotate-180 transition-transform duration-300" />
    </div>
  );
}
