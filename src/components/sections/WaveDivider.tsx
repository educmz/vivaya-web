import { cn } from "@/lib/utils";

export function WaveDivider({ fill, flip = false, className }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" className={cn("block h-14 w-full sm:h-20", flip && "rotate-180", className)}>
      <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,48 L1440,120 L0,120 Z" fill={fill} />
    </svg>
  );
}
