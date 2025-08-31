import { getPostsByCategoryId } from "@/lib/data/posts";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import { cn } from "@/lib/utils/cn";
import { ponudaPicaCategoryId } from "@/lib/utils/constants";
import { buttonClassName } from "@/modules/common/components/button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cjenici",
};

export default async function CjeniciPage() {
  const posts = await getPostsByCategoryId(ponudaPicaCategoryId);

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center">
        Cjenici
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
        {posts.map((post) => (
          <li key={post.id}>
            <Image
              src={post.image_url}
              alt={clearHtmlFromString(post.title.rendered)}
              className="w-full h-[350px] object-cover"
              width={600}
              height={350}
            />
            <Link
              href={post.meta.link}
              className={cn(buttonClassName, "mx-auto mt-6")}
            >
              {clearHtmlFromString(post.title.rendered)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
