import { cn } from "@/lib/utils/cn";

export const buttonClassName = cn(
  "px-8 py-3.5 text-xl tracking-normal font-medium text-center uppercase",
  "flex items-center justify-center w-fit text-(--foreground)/80 bg-(--background) border border-(--foreground)/40",
  "transition-colors hover:border-(--foreground)"
);

export default function Button(props: React.ComponentProps<"button">) {
  return <button {...props} className={cn(buttonClassName, props.className)} />;
}
