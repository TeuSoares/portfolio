"use client";

import { IconType } from "react-icons";
import {
  FaReact,
  FaPython,
  FaPhp,
  FaLaravel,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import SectionTitle from "./ui/SectionTitle";

interface Skill {
  name: string;
  Icon: IconType;
  colorClass: string;
}

const SKILLS_DATA: Skill[] = [
  { name: "Next.js", Icon: SiNextdotjs, colorClass: "text-zinc-100" },
  { name: "React.js", Icon: FaReact, colorClass: "text-cyan-400" },
  { name: "Vue.js", Icon: SiVuedotjs, colorClass: "text-emerald-400" },
  { name: "TypeScript", Icon: SiTypescript, colorClass: "text-blue-400" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, colorClass: "text-sky-400" },
  { name: "PHP", Icon: FaPhp, colorClass: "text-indigo-400" },
  { name: "Laravel", Icon: FaLaravel, colorClass: "text-red-500" },
  { name: "Python", Icon: FaPython, colorClass: "text-amber-400" },
  { name: "MySQL", Icon: SiMysql, colorClass: "text-sky-500" },
  { name: "PostgreSQL", Icon: SiPostgresql, colorClass: "text-blue-400" },
  { name: "Docker", Icon: FaDocker, colorClass: "text-blue-400" },
  { name: "Git", Icon: FaGitAlt, colorClass: "text-orange-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-secondary py-24">
      <div className="max-w-285 mx-auto px-4">
        <SectionTitle
          title="Conhecimentos"
          subtitle="Principais tecnologias e ferramentas que utilizo"
        />

        <div className="flex flex-wrap justify-center gap-6 max-w-225 mx-auto">
          {SKILLS_DATA.map((skill, idx) => {
            const SkillIcon = skill.Icon;
            return (
              <div
                key={idx}
                className="w-28 h-28 md:w-32 md:h-32 bg-bg-primary/40 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 group hover:border-brand hover:bg-bg-primary"
              >
                <SkillIcon
                  size={40}
                  className={`transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] ${skill.colorClass}`}
                />

                <span className="text-zinc-300 text-xs md:text-sm font-medium transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
