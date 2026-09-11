import type { ReactNode } from "react";

type LegalPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function LegalPageHeader({ eyebrow, title, description, children }: LegalPageHeaderProps) {
  return (
    <header className="relative mx-auto max-w-4xl pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
          style={{ fontFamily: "var(--font-script), 'Pacifico', cursive" }}
        >
          {eyebrow}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-extrabold uppercase leading-[1.08] text-[#302E2A] sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#77736D] sm:text-base">
          {description}
        </p>
      </div>
      {children}
    </header>
  );
}
