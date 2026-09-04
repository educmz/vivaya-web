export function VivayaCurveMarquee() {
  return (
    <div className="relative z-20 -mb-20 -mt-20 overflow-hidden" aria-label="Fruta real, frescura y energía natural">
      <svg className="h-[260px] w-[140%] -translate-x-[14%] sm:h-[340px]" viewBox="0 0 1600 340" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-80 270C230 92 565 45 850 104C1137 164 1320 282 1680 125" fill="none" stroke="#FF6A22" strokeWidth="150" />
        <path id="vivaya-marquee-curve" d="M-80 257C230 79 565 32 850 91C1137 151 1320 269 1680 112" fill="none" />
        <text className="font-heading fill-[#FFF7E8] text-[54px] uppercase tracking-[0.03em]">
          <textPath href="#vivaya-marquee-curve" startOffset="0%">
            Fruta real · Frescura que se siente · Energía natural · Fruta real · Frescura que se siente · Energía natural ·
            <animate attributeName="startOffset" from="0%" to="-50%" dur="18s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>
    </div>
  );
}
