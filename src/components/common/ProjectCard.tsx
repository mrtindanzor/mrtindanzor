import type { ProjectCardProps } from "@/types/types";
import { Heading } from "./Heading";
import { StyledArrowLink } from "./IconLink";
import { MImage } from "./Image";
import { LinkFollow } from "./LinkFellow";
import { Pill } from "./Pill";
import { Typography } from "./Typography";

export function ProjectCard({
  imgSrc,
  tags,
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="group">
      <div className="@container relative rounded-xl pb-4 gap-2 grid grid-rows-[auto_auto_1fr_auto] border border-sky-50/10 size-full group-hover:z-2">
        <MImage
          url={imgSrc}
          alt={title}
          className="h-80 group-hover:scale-101 rounded-t-xl transition-transform duration-150 ease-linear *:object-cover *:object-top-left group-hover:outline-2 group-hover:outline-sky-300"
        />

        <div className="grid grid-cols-[1fr_auto] mt-2 pr-4 items-center gap-4">
          <Heading
            tag="h4"
            size="sm"
            className="group-hover:from-green-600 group-hover:to-green-600"
            weight="bold"
          >
            {title}
          </Heading>

          <StyledArrowLink
            href={link}
            target="_blank"
            animation="none"
            className="p-0 size-10 sm:hidden!"
            iconClassName="stroke-3"
          />
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
        <LinkFollow href={link} target="_blank" />
      </div>
    </div>
  );
}
