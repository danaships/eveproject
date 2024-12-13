"use client";

import { cn } from "@/lib/utils";
import { gradients } from "@/lib/styles/gradients";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientCard({ children, className }: GradientCardProps) {
  return (
    <div className="relative">
      <div className={cn("absolute inset-0 rounded-2xl blur-3xl", gradients.linear.card)} />
      <div className={cn(
        "relative rounded-2xl",
        gradients.overlay.card,
        className
      )}>
        {children}
      </div>
    </div>
  );
}