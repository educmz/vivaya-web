import Image from "next/image";

interface ImageHeroProps {
  image: string;
  lines: [string, string];
}

export function ImageHero({ image, lines }: ImageHeroProps) {
  return (
    <div className="w-full pb-6 sm:pb-8 lg:pb-10">
      <div className="relative isolate flex h-[clamp(220px,52vw,320px)] w-full items-center overflow-hidden md:h-[clamp(160px,33.33vw,480px)]">
        <Image src={image} alt="" fill priority sizes="100vw" className="z-0 object-cover object-[40%_center] md:object-center" />
        <div className="relative z-10 w-3/5 pl-[max(24px,calc((100vw-1280px)/2+24px))] pr-3 sm:pl-[max(24px,calc((100vw-1280px)/2+24px))] md:w-1/2 md:pr-2 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))]">
          <h1 className="font-heading text-[clamp(28px,6.4vw,40px)] font-normal uppercase leading-[1.12] tracking-tight text-black md:text-[clamp(22px,4.8vw,76px)] md:leading-[1.08]">
            {lines.map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
        </div>
      </div>
    </div>
  );
}
