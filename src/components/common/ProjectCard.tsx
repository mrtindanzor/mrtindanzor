import type { ProjectCardProps } from "@/types/types";
import { Heading } from "./Heading";
import { MImage } from "./Image";
import { Pill } from "./Pill";
import { Typography } from "./Typography";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import type { ComponentProps } from "react";
import { ArrowUp, Eye } from "lucide-react";

export function ProjectCard({
  imgSrc,
  tags,
  title,
  description,
  link,
  repo,
}: ProjectCardProps) {
  return (
    <div className="group grid md:grid-cols-2 border relative border-sky-50/10 rounded-xl">
      <MImage
        url={imgSrc}
        alt={title}
        className="min-h-80 md:col-start-2 group-hover:scale-101 rounded-t-xl md:rounded-r-xl md:rounded-tl-none transition-transform duration-150 ease-linear *:object-cover *:object-top-left group-hover:outline-2 group-hover:outline-sky-300"
      />
      <div className="@container md:row-start-1 md:col-start-1 pb-4 gap-2 grid grid-rows-[auto_auto_1fr_auto] size-full group-hover:z-2">
        <div className="grid mt-2 pr-4 items-center gap-4">
          <Heading
            tag="h4"
            size="sm"
            className="group-hover:from-green-600 group-hover:to-green-600"
            weight="bold"
          >
            {title}
          </Heading>
        </div>

        <Typography tag="p" className="text-gray-400">
          {description}
        </Typography>

        <ul
          className="flex flex-wrap gap-x-2 gap-y-4 px-4"
          aria-label="Framework, libraries and toolings used"
        >
          {tags.map((tag) => (
            <li key={tag}>
              <Pill>{tag}</Pill>
            </li>
          ))}
        </ul>

        <Links link={link} repo={repo} />
      </div>
    </div>
  );
}

function Links({
  link,
  repo,
  className,
  ...props
}: Pick<ProjectCardProps, "repo" | "link"> & ComponentProps<"div">) {
  return (
    <div className="px-6  flex justify-end items-center gap-3" {...props}>
      {repo && (
        <Link href={repo} target="_blank" className="link-ring">
          <SiGithub /> Repo
        </Link>
      )}

      {link && (
        <Link href={link} target="_blank" className="group link-ring">
          Preview
          <ArrowUp className="rotate-45 size-4 group-hover:animate-bounce" />
        </Link>
      )}
    </div>
  );
}
