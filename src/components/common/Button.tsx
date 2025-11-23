import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva(
  "px-4 py-1.5 outline relative rounded w-fit h-fit focus-within:outline-2",
  {
    variants: {
      variant: {
        default: "bg-sky-600 hover:bg-sky-500 text-white",
        white: "bg-white hover:bg-gray-200 outline-0",
        outline: "bg-white hover:bg-sky-100 text-sky-600 outline-sky-300",
        ghost:
          "bg-transparent hover:bg-gray-100 outline-0 hover:outline hover:outline-gray-200",
        muted:
          "bg-muted hover:bg-gray-100 outline-1 hover:outline hover:outline-gray-200",
        accent: " bg-accent border-accent text-gray-800",
        success: "bg-green-600 hover:bg-green-400 text-white",
        successOutline:
          "bg-white hover:bg-green-100 text-green-600 outline-green-300",
        danger: "bg-rose-600 hover:bg-rose-500 text-white",
        dangerOutline:
          "bg-white hover:bg-rose-100 text-rose-600 outline-rose-300",
      },
      size: {
        default: "text-base",
        xs: "text-xs py-1",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonVaraints = VariantProps<typeof variants>;
export type ButtonVariantTypes = NonNullable<ButtonVaraints["variant"]>;

export function Button({
  variant,
  size,
  className,
  ...props
}: ButtonVaraints & ComponentProps<"button">) {
  return (
    <button className={cn(variants({ variant, size, className }))} {...props} />
  );
}
