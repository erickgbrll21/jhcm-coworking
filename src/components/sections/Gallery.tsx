import Image, { type StaticImageData } from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type GalleryImage = {
  src: string | StaticImageData;
  alt: string;
};

type Props = { images: GalleryImage[] };

export function Gallery({ images }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((img, i) => {
        const staticSrc = typeof img.src === "object" ? img.src : null;
        const blurDataURL = staticSrc?.blurDataURL;

        return (
          <Reveal
            key={img.alt}
            delay={i * 0.05}
            className={i % 5 === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8 group h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                placeholder={blurDataURL ? "blur" : undefined}
                blurDataURL={blurDataURL}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
