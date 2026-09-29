"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useScroll } from "../hooks/useScroll";
import SocialLinks from "./ui/SocialLinks";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScroll();

  const t = useTranslations("Navbar");

  const NAV_LINKS = [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "skills", label: t("skills") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-bg-primary/80 backdrop-blur-md border-b border-white/10" : "py-5 bg-bg-primary border-b border-white/15"}`}
    >
      <div className="max-w-285 mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#home" onClick={(e) => handleScrollTo(e, "home")}>
            <Image
              src="/img/assets/logo.png"
              alt="logo"
              width={110}
              height={28}
              style={{ width: "auto" }}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>
          <button
            className="md:hidden text-zinc-400 hover:text-brand"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-[0.95rem] font-medium text-zinc-300">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleScrollTo(e, id)}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-px h-5 bg-white/10" />
          <SocialLinks className="gap-5 text-zinc-400" />
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="mx-4 mt-2 p-6 bg-bg-secondary/95 backdrop-blur-lg border border-white/10 rounded-2xl">
          <ul className="flex flex-col gap-4 font-medium text-zinc-300">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleScrollTo(e, id)}
                  className="block py-1 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-white/5">
              <SocialLinks className="gap-6 text-zinc-400" iconSize={20} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
