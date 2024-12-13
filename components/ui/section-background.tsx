"use client";

import { cn } from "@/lib/utils";
import { gradients } from "@/lib/styles/gradients";

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
  gradient?: keyof typeof gradients.radial;
}

export function SectionBackground({
  children,
  className,
  gradient = "primary"
}: SectionBackgroundProps) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <div className={cn("absolute inset-0", gradients.radial[gradient])} />
      <div className="relative">{children}</div>
    </section>
  );
}