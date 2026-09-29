"use client";

import { useState } from "react";
import Image from "next/image";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";
import SectionTitle from "./ui/SectionTitle";
import VideoModal from "./ui/VideoModal";
import TechList from "./ui/TechList";

interface Project {
  title: string;
  description: string;
  imgSrc: string;
  skills: string[];
  repoUrl?: string;
  videoUrl?: string;
}

export default function Projects() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, url: "" });
  const t = useTranslations("Projects");

  const projectsData: Project[] = [
    {
      title: t("items.musicWebsite.title"),
      description: t("items.musicWebsite.description"),
      imgSrc: "/img/projects/siteMusic.png",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PHP",
        "Laravel",
        "MySQL",
      ],
      repoUrl: "https://github.com/TeuSoares/music-website",
    },
    {
      title: t("items.wolfGames.title"),
      description: t("items.wolfGames.description"),
      imgSrc: "/img/projects/WolfGames.png",
      skills: ["React.js", "TypeScript", "Context API", "PHP", "MySQL", "JWT"],
      repoUrl: "https://github.com/TeuSoares/wolf_games/",
      videoUrl: "https://www.youtube.com/embed/XLFm07fELYM",
    },
    {
      title: t("items.userManager.title"),
      description: t("items.userManager.description"),
      imgSrc: "/img/projects/crud_users.png",
      skills: ["React.js", "TypeScript", "React Query", "PHP", "MySQL"],
      repoUrl: "https://github.com/TeuSoares/crud_users/",
    },
    {
      title: t("items.reservations.title"),
      description: t("items.reservations.description"),
      imgSrc: "/img/projects/reservation.png",
      skills: [
        "Nuxt.js",
        "TypeScript",
        "Tailwind CSS",
        "Laravel",
        "Docker",
        "MySQL",
      ],
      repoUrl: "https://github.com/TeuSoares/reservation-management/",
    },
    {
      title: t("items.spotfolio.title"),
      description: t("items.spotfolio.description"),
      imgSrc: "/img/projects/spotfolio.png",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zod",
        "React Query",
        "Laravel",
        "Docker",
        "MySQL",
      ],
      videoUrl: "https://www.youtube.com/embed/iqe1uEbtHyI",
    },
    {
      title: t("items.customerManager.title"),
      description: t("items.customerManager.description"),
      imgSrc: "/img/projects/customer_management.png",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "PHP",
        "JWT",
        "Docker",
        "MySQL",
      ],
      repoUrl: "https://github.com/TeuSoares/customer-management",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-bg-primary py-24 border-b border-white/10"
    >
      <div className="max-w-285 mx-auto px-4">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              onOpenVideo={(url) => setModalConfig({ isOpen: true, url })}
            />
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={modalConfig.isOpen}
        videoUrl={modalConfig.url}
        onClose={() => setModalConfig({ isOpen: false, url: "" })}
      />
    </section>
  );
}

function ProjectCard({
  project,
  onOpenVideo,
}: {
  project: Project;
  onOpenVideo: (url: string) => void;
}) {
  const t = useTranslations("Projects.buttons");

  return (
    <div className="w-full max-w-90 min-h-125 p-7 rounded-[5px] border border-white/30 transition-all duration-300 group hover:border-brand bg-bg-secondary flex flex-col justify-between">
      <div className="flex flex-col grow">
        <div className="h-37.5 w-full relative overflow-hidden rounded-[5px] shrink-0 border border-white/30">
          <Image
            src={project.imgSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover"
          />
        </div>

        <h3 className="text-zinc-100 text-xl font-bold mt-3">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-[0.88rem] leading-relaxed line-clamp-4 grow my-2">
          {project.description}
        </p>

        <TechList
          technologies={project.skills}
          variant="brand"
          showBorder={false}
          showTitle={false}
        />
      </div>

      <div className="flex flex-col min-[380px]:flex-row gap-3 mt-4 w-full">
        {project.videoUrl && (
          <button
            type="button"
            onClick={() => onOpenVideo(project.videoUrl!)}
            className="group/btn w-full min-[380px]:flex-1 text-white bg-transparent border border-white rounded-[5px] py-2 text-[0.88rem] md:text-[0.95rem] font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-brand hover:border-brand transition-all duration-300"
          >
            <FaYoutube
              size={18}
              className="text-red-500 group-hover/btn:text-white transition-colors duration-300"
            />
            {t("video")}
          </button>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn w-full min-[380px]:flex-1 text-white bg-transparent border border-white rounded-[5px] py-2 text-[0.88rem] md:text-[0.95rem] font-medium flex items-center justify-center gap-2 hover:bg-brand hover:border-brand transition-all duration-300 text-center"
          >
            <FaGithub
              size={18}
              className="text-zinc-400 group-hover/btn:text-white transition-colors duration-300"
            />
            {t("repository")}
          </a>
        )}
      </div>
    </div>
  );
}
