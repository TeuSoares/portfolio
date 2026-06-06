"use client";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 select-none px-2">
      <h2
        className="text-white font-bold text-2xl sm:text-3xl md:text-[2.2rem] uppercase wrap-break-words relative pb-6 mb-6
        before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-30 before:h-px before:bg-zinc-300/40
        after:content-[''] after:absolute after:-bottom-px after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.75 after:bg-brand"
      >
        {title}
      </h2>
      <span className="block text-zinc-400 text-sm mt-6 mb-12">{subtitle}</span>
    </div>
  );
}
