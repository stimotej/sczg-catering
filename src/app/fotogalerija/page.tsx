import { getMedia } from "@/lib/data/media";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import {
  PhotoProvider,
  PhotoView,
} from "@/modules/common/components/photo-view";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fotogalerija",
};

export default async function FotogalerijaPage() {
  const media = await getMedia();

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center">
        Fotogalerija
      </h1>
      <PhotoProvider maskOpacity={0.8}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {media.map((img, index) => (
            <PhotoView key={index} src={img.source_url}>
              <div className="overflow-hidden">
                <Image
                  src={img.source_url}
                  alt={clearHtmlFromString(img.alt_text ?? img.title.rendered)}
                  className="w-full h-80 object-cover transition-transform hover:scale-110 cursor-pointer"
                  width={600}
                  height={320}
                />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}
