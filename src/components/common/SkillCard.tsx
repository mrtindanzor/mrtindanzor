import { cn } from "@/lib/utils";
import type { SkillCardProps } from "@/types/types";
import { Heading } from "./Heading";
import { Typography } from "./Typography";

export function SkillCard({
  icon: Icon,
  title,
  color,
  description,
  className,
  ...props
}: SkillCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "border border-gray-600/40 @container rounded-3xl not-first:rounded-t-none not-last:rounded-b-none p-2",
        className,
      )}
    >
      <header
        className={cn("grid grid-cols-[auto_1fr] gap-2 py-2 px-4 items-center")}
      >
        <Typography
          className={cn("border rounded-xl border-gray-600/40 py-2", color)}
        >
          <Icon className="size-4 md:size-6" />
        </Typography>
        <Heading
          tag="h4"
          size="none"
          className={cn("my-auto mx-auto @xs:mx-0 ")}
        >
          {title}
        </Heading>
      </header>
      <Typography tag="p" size="sm" className="text-center @xs:text-left">
        {description}
      </Typography>
    </div>
  );
}
