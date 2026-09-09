import Image from "next/image";

export function AboutBanner() {
  return (
    <div className="w-full py-6 sm:py-8 lg:py-10">
      <div className="relative isolate flex h-[clamp(160px,33.33vw,480px)] w-full items-center overflow-hidden">
        <Image
          src="/images/about/about-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="w-1/2 pl-[max(12px,calc((100vw-1280px)/2+12px))] pr-2 sm:pl-[max(24px,calc((100vw-1280px)/2+24px))] lg:pl-[max(40px,calc((100vw-1280px)/2+40px))]">
          <h1 className="font-heading text-[clamp(22px,4.8vw,76px)] font-normal uppercase leading-[1.08] tracking-tight text-black">
            <span className="block">HECHO PARA</span>
            <span className="block">DISFRUTAR</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
