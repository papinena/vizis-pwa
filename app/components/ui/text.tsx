import { cn } from "~/lib/utils";

const variants = {
  body: "font-body",
  default: "font-body",
};

export function Text({
  children,
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"p"> & { variant?: keyof typeof variants }) {
  return (
    <p className={cn("", variants[variant], className)} {...props}>
      {children}
    </p>
  );
}
