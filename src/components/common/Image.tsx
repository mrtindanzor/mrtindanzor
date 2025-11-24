import { cn } from "@/lib/utils";
import type { MImageProps } from "@/types/types";
import Image from "next/image";

export function MImage({
  alt,
  url,
  className,
  imageClassName,
  children,
  ...props
}: MImageProps) {
  return (
    <div
      {...props}
      className={cn("relative size-full overflow-hidden", className)}
    >
      <Image
        src={url}
        alt={alt}
        fill
        sizes="100%"
        className={cn("object-contain", imageClassName)}
      />
      {children}
    </div>
  );
}
