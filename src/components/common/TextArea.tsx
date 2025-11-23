import { cn } from "@/lib/utils";
import type { TextAreaProps } from "@/types/types";
import { Typography } from "./Typography";

export function TextArea({
  title,
  id,
  className,
  children,
  ...props
}: TextAreaProps) {
  return (
    <div className={cn(className, "grid h-fit gap-2")}>
      <label htmlFor={id} className="text-white text-lg font-medium">
        <Typography size="sm" className="text-gray-200 p-0">
          {title}
        </Typography>
      </label>
      <textarea
        {...props}
        className="rounded-sm min-h-30 focus:outline focus-within:outline-gray-400/40 bg-slate-950/30 resize-none placeholder:font-light placeholder:text-xs text-gray-200 border-1 border-gray-300/10 px-4 py-2"
      />
      {children}
    </div>
  );
}
