"use client";

import avatar from "@/assets/images/mrtindanzor/avatar6.png";
import { Heading } from "@/components/common/Heading";
import { MImage } from "@/components/common/Image";
import { Section } from "@/components/common/Section";
import { Typography } from "@/components/common/Typography";
import { skillJs } from "@/lib/db";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

export function HeroSection() {
  return (
    <div className="text-center bg-linear-to-t from-slate-950 via-slate-900 to-slate-950">
      <Section className="min-h-screen @container grid grid-rows-[auto_auto_1fr] pb-0">
        <Typography className="text-4xl">
          My name is Simon Tindanzor,
          <Typography className="text-2xl">and I am a</Typography>
        </Typography>
        <Heading className="mx-auto" size="huge" weight="black">
          Full-Stack Web Developer
          <br />
          <Typography size="lg"> & </Typography>
          Devops Engineer
        </Heading>
        <MImage
          alt="Mr. Tindanzor Simon image"
          url={avatar.src}
          className="z-1 *:object-contain group mx-auto"
        >
          <Scribbled />
        </MImage>
      </Section>
    </div>
  );
}

function Scribbled() {
  return (
    <ul className="absolute inset-0 top-0 size-full -z-1 group-hover:z-2 flex justify-around flex-wrap gap-4">
      {skillJs.map((skill) => (
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
      <Icon className={cn("size-10")} />
      <Typography>{title}</Typography>
    </li>
  );
}
