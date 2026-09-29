"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "./ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import ProfileImage from "./ui/ProfileImage";

type TabType = "bio" | "experience" | "education";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("bio");
  const t = useTranslations("About");

  const entryYear = 2019;
  const journeyYears = new Date().getFullYear() - entryYear;

  const experiencesData = [
    {
      title: t("experiences.0.title"),
      business: "CRM Soluções",
      period: t("experiences.0.period"),
      isCurrent: false,
      description: [
        t("experiences.0.description.0"),
        t("experiences.0.description.1"),
        t("experiences.0.description.2"),
        t("experiences.0.description.3"),
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
      title: t("experiences.1.title"),
      business: "KaBuM!",
      period: t("experiences.1.period"),
      isCurrent: true,
      description: [
        t("experiences.1.description.0"),
        t("experiences.1.description.1"),
        t("experiences.1.description.2"),
        t("experiences.1.description.3"),
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
      title: t("education.0.title"),
      business: "Senac",
      period: t("education.0.period"),
      isCurrent: false,
      description: [
        t("education.0.description.0"),
        t("education.0.description.1"),
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
      title: t("education.1.title"),
      business: "Uninter",
      period: t("education.1.period"),
      isCurrent: true,
      description: [
        t("education.1.description.0"),
        t("education.1.description.1"),
        t("education.1.description.2"),
      ],
    },
  ];

  return (
    <section
      id="about"
      className="bg-bg-primary py-24 border-b border-white/10"
    >
      <div className="max-w-285 mx-auto px-4">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 max-w-275 mx-auto">
          <ProfileImage />

          <div className="flex-1 w-full text-zinc-300">
            <div className="flex w-full mb-8 border-b border-white/5 pb-px justify-between sm:justify-start sm:gap-2">
              {(["bio", "experience", "education"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`flex-1 sm:flex-none text-center px-2 py-2.5 sm:px-5 font-medium text-[0.85rem] sm:text-[0.9rem] relative transition-all duration-300 cursor-pointer capitalize whitespace-nowrap ${
                    activeTab === tab
                      ? "text-brand font-bold"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {t(`tabs.${tab}`)}

                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand rounded-full animate-fadeIn" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-62.5 transition-all duration-300">
              {activeTab === "bio" && (
                <div className="space-y-4 text-[0.95rem] leading-relaxed text-zinc-300 animate-fadeIn">
                  <p>{t("bio.p1", { years: journeyYears })}</p>
                  <p>{t("bio.p2")}</p>
                  <p>{t("bio.p3")}</p>
                  <p>{t("bio.p4")}</p>
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
