export function PanoramicBanner() {
  return (
    <div className="w-full py-6 sm:py-8 lg:py-10">
      {/* Espacio para una imagen panorámica, sin texto ni controles. */}
      <div
        aria-hidden="true"
        className="mx-auto aspect-[4.25/1] max-h-[360px] min-h-[140px] w-full bg-[#E9E5DE]"
      />
    </div>
  );
}
