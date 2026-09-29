"use client";

import { Mail, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionTitle from "./ui/SectionTitle";
import { useScroll } from "../hooks/useScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { scrollToTop } = useScroll();
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="bg-bg-secondary w-full">
      <div className="max-w-155 mx-auto text-center py-24 px-4">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <p className="text-zinc-300 text-[1rem] leading-relaxed mb-8">
          {t("description")}
        </p>

        <div className="inline-block mt-4">
          <a
            href="mailto:mateussoares115@hotmail.com"
            className="text-white bg-brand hover:bg-brand-hover rounded-[20px] px-4 py-2.5 md:px-6 md:py-3 font-bold text-sm md:text-[1rem] transition-colors duration-300 shadow-md inline-flex items-center gap-2 justify-center"
          >
            <span className="hidden min-[300px]:block shrink-0">
              <Mail size={18} />
            </span>
            {t("ctaButton")}
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-zinc-500 text-[0.9rem]">
        <div className="max-w-285 mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div>
            Copyright © <span>{currentYear}</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-zinc-400 font-medium">Mateus Soares</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="hidden min-[300px]:flex bg-brand hover:bg-brand-hover text-white w-8 h-8 md:w-10 md:h-10 rounded-[5px] cursor-pointer transition-colors duration-300 items-center justify-center focus:outline-none shrink-0"
              aria-label={t("ariaLabelTop")}
            >
              <ChevronUp className="size-4 md:size-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
