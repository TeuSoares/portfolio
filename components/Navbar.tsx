"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useScroll } from "../hooks/useScroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollToSection } = useScroll();

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
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-bg-primary/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10"
          : "py-5 bg-bg-primary border-b border-white/15"
      }`}
    >
      <div className="max-w-285 mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/img/assets/logo.png"
              alt="logo"
              width={110}
              height={28}
              style={{ width: "auto" }}
              className="h-7 w-auto object-contain"
              priority
            />
          </a>

          <button
            className="text-zinc-400 hover:text-brand md:hidden focus:outline-none cursor-pointer transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-8 text-[0.95rem] font-medium list-none text-zinc-300 items-center">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, "home")}
                className="cool-link-effect hover:text-white transition-colors duration-300 relative py-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScrollTo(e, "about")}
                className="cool-link-effect hover:text-white transition-colors duration-300 relative py-1"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleScrollTo(e, "skills")}
                className="cool-link-effect hover:text-white transition-colors duration-300 relative py-1"
              >
                Conhecimentos
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="cool-link-effect hover:text-white transition-colors duration-300 relative py-1"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="cool-link-effect hover:text-white transition-colors duration-300 relative py-1"
              >
                Contato
              </a>
            </li>
          </ul>

          <div className="w-px h-5 bg-white/10" />

          <ul className="flex gap-5 list-none text-zinc-400 items-center">
            <li>
              <a
                href="https://www.linkedin.com/in/mateus-soares-santos/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 hover:scale-110 transition-all duration-300 block"
              >
                <FaLinkedinIn size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TeuSoares"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 transition-all duration-300 block"
              >
                <FaGithub size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="mx-4 mt-2 p-6 bg-bg-secondary/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
          <ul className="flex flex-col gap-4 text-[1.1rem] font-medium text-zinc-300 list-none">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, "home")}
                className="hover:text-white transition-colors duration-300 block py-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScrollTo(e, "about")}
                className="hover:text-white transition-colors duration-300 block py-1"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleScrollTo(e, "skills")}
                className="hover:text-white transition-colors duration-300 block py-1"
              >
                Conhecimentos
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="hover:text-white transition-colors duration-300 block py-1"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="hover:text-white transition-colors duration-300 block py-1"
              >
                Contato
              </a>
            </li>

            <li className="flex gap-6 pt-4 mt-2 border-t border-white/5 text-zinc-400">
              <a
                href="https://www.linkedin.com/in/mateus-soares-santos/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://github.com/TeuSoares"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://instagram.com/mateusoaresz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
