"use client";

import { ReactNode } from "react";
import TechList from "./TechList";

export interface TimelineItemProps {
  title: string;
  business: string;
  period: string;
  description: string[] | ReactNode;
  technologies: string[];
  isCurrent?: boolean;
}

export default function TimelineItem({
  title,
  business,
  period,
  description,
  technologies,
  isCurrent = false,
}: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-brand/20 pl-5 ml-1 group last:pb-0 mb-8">
      <div
        className={`absolute w-3 h-3 rounded-full -left-1.75 top-1.5 ring-4 ring-bg-primary transition-colors duration-300 ${
          isCurrent ? "bg-brand" : "bg-zinc-700"
        }`}
      />

      <h4 className="text-white font-bold text-lg mb-1">{title}</h4>

      <span
        className={`px-2.5 py-0.5 rounded text-xs inline-block mb-3 font-medium ${
          isCurrent
            ? "bg-brand/10 text-brand-hover"
            : "bg-zinc-800 text-zinc-400"
        }`}
      >
        {business} · {period}
      </span>

      {Array.isArray(description) ? (
        <ul className="text-[0.9rem] leading-relaxed text-zinc-400 list-none">
          {description.map((item, index) => (
            <li key={index} className="mb-2">
              • {item}
            </li>
          ))}
        </ul>
      ) : (
        <>{description}</>
      )}

      {technologies.length > 0 && <TechList technologies={technologies} />}
    </div>
  );
}
