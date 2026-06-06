"use client";

import Badge, { BadgeVariant } from "./Badge";

interface TechListProps {
  technologies: string[];
  variant?: BadgeVariant;
  showBorder?: boolean;
  showTitle?: boolean;
}

export default function TechList({
  technologies,
  variant = "clean",
  showBorder = true,
  showTitle = true,
}: TechListProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div
      className={`mt-4 w-full ${showBorder ? "pt-3 border-t border-white/5" : ""}`}
    >
      {showTitle && (
        <span className="text-zinc-400 font-medium text-[0.85rem] block mb-2">
          Tecnologias:
        </span>
      )}
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((skill) => (
          <Badge key={skill} variant={variant}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
