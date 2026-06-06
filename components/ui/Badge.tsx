"use client";

import { ReactNode } from "react";

export type BadgeVariant = "clean" | "brand" | "zinc";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

export default function Badge({ children, variant = "clean" }: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    clean: "bg-zinc-800/30 text-zinc-300",
    brand: "bg-brand/20 text-zinc-200",
    zinc: "bg-zinc-800/50 text-zinc-400",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-[0.8rem] tracking-wide font-medium transition-colors duration-300 ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
