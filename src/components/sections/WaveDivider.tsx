import { cn } from "@/lib/utils";

const wavePaths = {
  soft: "M0,58 C190,118 355,18 545,49 C735,80 844,133 1040,78 C1215,29 1322,33 1440,62 L1440,140 L0,140 Z",
  swell: "M0,82 C170,22 342,28 510,84 C700,147 855,128 1014,65 C1180,0 1310,34 1440,76 L1440,140 L0,140 Z",
  drift: "M0,45 C155,74 280,138 480,103 C665,70 738,14 925,38 C1124,64 1268,128 1440,88 L1440,140 L0,140 Z",
  valley: "M0,88 C185,133 338,113 500,50 C668,-15 824,38 984,92 C1160,151 1305,94 1440,42 L1440,140 L0,140 Z",
} as const;

type WaveVariant = keyof typeof wavePaths;

export function WaveDivider({ fill, flip = false, variant = "soft", className }: { fill: string; flip?: boolean; variant?: WaveVariant; className?: string }) {
  return (
    <svg viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true" focusable="false" className={cn("pointer-events-none block h-20 w-full sm:h-28 lg:h-36", flip && "rotate-180", className)}>
      <path d={wavePaths[variant]} fill={fill} />
    </svg>
  );
}
