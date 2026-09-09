import Image from "next/image";

interface ImageHeroProps {
  image: string;
  lines: [string, string];
}

export function ImageHero({ image, lines }: ImageHeroProps) {
  return (
    <div className="w-full py-6 sm:py-8 lg:py-10">
      <div className="relative isolate flex h-[clamp(160px,33.33vw,480px)] w-full items-center overflow-hidden">
        <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover object-center" />
        <div className="w-1/2 pl-5 pr-2 sm:pl-8 lg:pl-[5.2vw]">
          <h1 className="font-heading text-[clamp(22px,4.8vw,76px)] font-normal uppercase leading-[1.08] tracking-tight text-black">
            {lines.map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
        </div>
      </div>
    </div>
  );
}
