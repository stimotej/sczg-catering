"use client";

import { cn } from "@/lib/utils/cn";
import DisplayHTML from "@/modules/common/components/display-html";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBackground({
  title,
  subtitle,
  imageUrl,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
}) {
  const pathname = usePathname();
  return (
    <div className="w-full relative">
      <Image
        src={imageUrl}
        alt={title}
        className={cn(
          "w-full object-cover",
          pathname === "/" ? "h-[360px] sm:h-[540px] md:h-[680px]" : "h-[104px]"
        )}
        width={1149}
        height={pathname === "/" ? 680 : 104}
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      {pathname === "/" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <DisplayHTML
            as="h1"
            html={title}
            className="font-display-title text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.01] text-white bg-black/50"
          />
          <DisplayHTML
            as="p"
            html={subtitle}
            className="mt-6 font-display sm:text-lg md:text-xl lg:text-2xl text-white bg-black/50"
          />
        </div>
      )}
    </div>
  );
}
