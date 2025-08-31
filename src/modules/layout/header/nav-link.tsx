"use client";

import { cn } from "@/lib/utils/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({
  children,
  href,
  className,
  ...props
}: LinkProps & {
  children?: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href={href}
      className={
        className ??
        cn(
          "group text-base font-medium text-(--background) p-4 relative",
          "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:transform after:scale-x-0 after:h-0.5 after:w-[90%] after:bg-white after:transition-transform after:duration-[400ms]",
          pathname === href ? "after:scale-x-100" : "hover:after:scale-x-100"
        )
      }
      aria-current={pathname === href ? "page" : undefined}
      data-active={pathname === href}
    >
      {children}
    </Link>
  );
}
