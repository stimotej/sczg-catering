import { getPostById } from "@/lib/data/posts";
import { cn } from "@/lib/utils/cn";
import { pocetnaPostId } from "@/lib/utils/constants";
import DisplayHTML from "@/modules/common/components/display-html";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Home() {
  const post = await getPostById(pocetnaPostId);

  if (!post) notFound();

  return (
    <section className="mx-auto max-w-4xl">
      <DisplayHTML
        className={cn(
          "[&_img]:mx-auto [&_a]:text-blue-500 [&_a]:hover:underline [&_p]:text-base [&_p]:sm:text-lg",
          "[&_h1]:font-semibold [&_h2]:font-semibold [&_h3]:font-semibold [&_h4]:font-semibold [&_h5]:font-semibold [&_h6]:font-semibold",
          "[&_h1]:text-4xl [&_h2]:text-3xl [&_h3]:text-2xl [&_h4]:text-xl [&_h5]:text-lg [&_h6]:text-base",
          "[&_h1]:sm:text-5xl [&_h2]:sm:text-4xl [&_h3]:sm:text-3xl [&_h4]:sm:text-2xl [&_h5]:sm:text-xl [&_h6]:sm:text-lg",
          "[&_h1]:font-display [&_h2]:font-display [&_h3]:font-display [&_h4]:font-display [&_h5]:font-display [&_h6]:font-display"
        )}
        html={post.content.rendered}
      />
    </section>
  );
}
