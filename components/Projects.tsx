"use client";

import { useState } from "react";
import Image from "next/image";
import { FaYoutube, FaGithub } from "react-icons/fa";
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

const PROJECTS_DATA: Project[] = [
  {
    title: "Site de Músicas",
    description:
      "Sistema de gerenciamento de músicas, onde o usuário pode gerenciar suas músicas favoritas in apenas um lugar.",
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
    title: "Wolf Games",
    description:
      "Um E-Commerce Gamer, onde foi desenvolvido todo o fluxo do usuário da escolha do produto até a compra.",
    imgSrc: "/img/projects/WolfGames.png",
    skills: ["React.js", "TypeScript", "Context API", "PHP", "MySQL", "JWT"],
    repoUrl: "https://github.com/TeuSoares/wolf_games/",
    videoUrl: "https://www.youtube.com/embed/XLFm07fELYM",
  },
  {
    title: "Gerenciador de Usuários",
    description:
      "Um sistema web que realiza todo o fluxo de um usuário: Cadastro, Edição, Atualização, Autenticação e Listagem.",
    imgSrc: "/img/projects/crud_users.png",
    skills: ["React.js", "TypeScript", "React Query", "PHP", "MySQL"],
    repoUrl: "https://github.com/TeuSoares/crud_users/",
  },
  {
    title: "Fazer reservas",
    description:
      "Site de reservas para um restaurante. O usuário pode fazer reservas de mesa e receber a confirmação por e-mail.",
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
    title: "Spotfolio",
    description:
      "Um SaaS onde o usuário pode ter um mini site profissional para divulgar seus links, portfólio e serviços oferecidos.",
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
    title: "Gerenciador de Clientes",
    description:
      "Uma área administrativa para o usuário conseguir gerenciar seus clientes: Cadastro, Edição, Listagem e Exclusão.",
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

export default function Projects() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, url: "" });

  return (
    <section id="projects" className="bg-bg-primary py-24">
      <div className="max-w-285 mx-auto px-4">
        <SectionTitle
          title="Projetos"
          subtitle="Confira alguns dos projetos que já desenvolvi"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
          {PROJECTS_DATA.map((project, idx) => (
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
  return (
    <div className="w-full max-w-90 min-h-125 p-7 rounded-[5px] border border-white/10 transition-all duration-300 group hover:border-brand bg-bg-secondary flex flex-col justify-between">
      <div className="flex flex-col grow">
        <div className="h-37.5 w-full relative overflow-hidden rounded-[5px] shrink-0">
          <Image
            src={project.imgSrc}
            alt={`Mockup do projeto ${project.title}`}
            fill
            sizes="(max-w-360px) 100vw, 360px"
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
            Vídeo
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
            Repositório
          </a>
        )}
      </div>
    </div>
  );
}
