import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ComponentProps } from "react";

export function MImage({
  alt,
  url,
  className,
  children,
  ...props
}: { alt: string; url: string } & ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn("relative size-full overflow-hidden", className)}
    >
      <Image src={url} alt={alt} fill sizes="100%" className="object-contain" />
      {children}
    </div>
  );
}
