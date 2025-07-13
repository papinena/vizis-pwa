import type { TextareaHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "appearance-none resize-none w-full rounded-lg flex-1 border border-gray-200",
        className
      )}
    />
  );
}
