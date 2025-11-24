"use client";

import avatar from "@/assets/images/mrtindanzor/avatar8.png";
import { Heading } from "@/components/common/Heading";
import { MImage } from "@/components/common/Image";
import { Section } from "@/components/common/Section";
import { Typography } from "@/components/common/Typography";
import { skillsJs } from "@/lib/db";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

export function HeroSection() {
  return (
    <div className="text-center bg-linear-to-t from-slate-950 via-zinc-700 to-slate-900">
      <Section className="min-h-screen @container grid grid-rows-[auto_auto_1fr] pb-0">
        <Typography size="lg" className="">
          My name is Simon Tindanzor,
          <Typography className="text-2xl">and I am a</Typography>
        </Typography>

        <Heading className="mx-auto" size="huge" weight="black">
          Full-Stack Web Developer
          <Typography size="lg"> & </Typography>
          Devops Engineer
        </Heading>

        <MImage
          alt="Mr. Tindanzor Simon image"
          url={avatar.src}
          className="z-1 group mx-auto"
          imageClassName="top-full! -translate-y-full w-auto h-1/2! md:h-3/4!"
        >
          <Scribbled />
        </MImage>
      </Section>
    </div>
  );
}

function Scribbled() {
  return (
    <ul className="absolute inset-0 top-0 size-full -z-1 group-hover:z-2 flex justify-between flex-wrap gap-4">
      {skillsJs
        .flatMap((skill) => skill.items)
        .map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
    </ul>
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
    <li
      className={cn(
        "flex flex-col *:pointer-events-none *:select-none items-center justify-center  gap-2 text-center text-shadow-2xs bg-clip-text",
        color
      )}
    >
      <Icon className={cn("size-5 sm:size-8")} />
      <Typography>{title}</Typography>
    </li>
  );
}
