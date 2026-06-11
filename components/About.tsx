"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";

type TabType = "bio" | "experience" | "education";

const experiencesData = [
  {
    title: "Desenvolvedor Web",
    business: "CRM Soluções",
    period: "2023 - 2024 (1 ano)",
    isCurrent: false,
    description: [
      "Implementação de novas features e desenvolvimento de novos sistemas web.",
      "Realizar deploys em ambientes de homologação e produção.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "TypeScript",
      "Vue.js",
      "Next.js",
      "Git",
      "SQL",
      "Linux",
    ],
  },
  {
    title: "Desenvolvedor Full Stack",
    business: "KaBuM!",
    period: "2024 - Atualmente",
    isCurrent: true,
    description: [
      "Manutenção, evolução e otimização de arquitetura de sistema ERP corporativo.",
      "Desenvolvimento de novos projetos e ferramentas internas.",
      "Atendimento às demandas do time de negócios, incluindo a implementação de novas funcionalidades e correções de bugs.",
      "Evolução e manutenção de microsserviços",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React.js",
      "Typescript",
      "Perl",
      "Angular",
      "jQuery",
      "SQL",
      "Git",
      "Linux",
    ],
  },
];

const educationData = [
  {
    title: "Técnico em Informática para Internet",
    business: "Senac",
    period: "2019 - 2020",
    isCurrent: false,
    description: [
      "Fundamentos de desenvolvimento web, engenharia de software e lógica de programação.",
      "Design responsivo, modelagem estruturada de bancos de dados relacionais e versionamento.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache Cordova",
    ],
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    business: "Uninter",
    period: "2025 - 2028 (Previsão de Conclusão)",
    isCurrent: true,
    description: [
      "Desenvolvimento de competências em análise, especificação e gerenciamento de projetos de software.",
      "Aplicação prática de lógica de programação aplicada à resolução de problemas escaláveis de negócio.",
      "Estudo de metodologias ágeis de desenvolvimento, qualidade de código e ciclo de vida de sistemas corporativos.",
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("bio");

  const entryYear = 2019;
  const journeyYears = new Date().getFullYear() - entryYear;

  return (
    <section
      id="about"
      className="bg-bg-primary py-24 border-b border-white/10"
    >
      <div className="max-w-285 mx-auto px-4">
        <SectionTitle title="Sobre mim" subtitle="Conheça-me um pouco mais" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 max-w-275 mx-auto">
          <div className="shrink-0 w-64 h-64 md:w-80 md:h-80 relative select-none">
            <div className="w-full h-full relative rounded-full border border-white/20 p-2 bg-zinc-900/30 backdrop-blur-sm">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image
                  src="/img/assets/profile.png"
                  alt="Foto de perfil de Mateus Soares"
                  fill
                  priority
                  sizes="(max-w-768px) 256px, 320px"
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full text-zinc-300">
            <div className="flex w-full mb-8 border-b border-white/5 pb-px justify-between sm:justify-start sm:gap-2">
              {(["bio", "experience", "education"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`flex-1 sm:flex-none text-center px-2 py-2.5 sm:px-5 font-medium text-[0.85rem] sm:text-[0.9rem] relative transition-all duration-300 cursor-pointer capitalize whitespace-nowrap
        ${
          activeTab === tab
            ? "text-brand font-bold"
            : "text-zinc-400 hover:text-zinc-100"
        }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "bio"
                    ? "Bio"
                    : tab === "experience"
                      ? "Experiência"
                      : "Educação"}

                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand rounded-full animate-fadeIn" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-62.5 transition-all duration-300">
              {activeTab === "bio" && (
                <div className="space-y-4 text-[0.95rem] leading-relaxed text-zinc-300 animate-fadeIn">
                  <p>
                    Entusiasta da tecnologia desde pequeno, há {journeyYears}{" "}
                    anos venho me dedicando ao universo da programação e
                    desenvolvimento de software.
                  </p>
                  <p>
                    Tenho experiência no desenvolvimento de aplicações web de
                    ponta a ponta, sempre priorizando qualidade, segurança e
                    manutenibilidade do código.
                  </p>
                  <p>
                    Atualmente, atuo como desenvolvedor full stack, contribuindo
                    ativamente para a resolução de desafios técnicos, propondo
                    melhorias e apoiando outros desenvolvedores, sempre com foco
                    no crescimento da empresa.
                  </p>
                  <p>
                    Meus objetivos nos próximos anos são ajudar outras empresas
                    a crescerem, construindo produtos de qualidade, visando a
                    entrega de resultados para seus usuários e também lançando
                    meus próprios produtos que agreguem valor para o mercado.
                  </p>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6 animate-fadeIn">
                  {experiencesData
                    .slice(0)
                    .reverse()
                    .map((item, index) => (
                      <TimelineItem
                        key={index}
                        title={item.title}
                        business={item.business}
                        period={item.period}
                        description={item.description}
                        technologies={item.technologies}
                        isCurrent={item.isCurrent}
                      />
                    ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-6 animate-fadeIn">
                  {educationData
                    .slice(0)
                    .reverse()
                    .map((item, index) => (
                      <TimelineItem
                        key={index}
                        title={item.title}
                        business={item.business}
                        period={item.period}
                        description={item.description}
                        technologies={item.technologies || []}
                        isCurrent={item.isCurrent}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
