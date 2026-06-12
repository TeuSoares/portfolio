"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useScroll } from "../hooks/useScroll";

export default function Hero() {
  const { scrollToSection } = useScroll();

  return (
    <div
      id="home"
      className="relative h-screen w-full flex items-center bg-bg-primary overflow-hidden"
    >
      <Image
        src="/img/assets/background.jpg"
        alt="Background Banner"
        fill
        priority
        className="object-cover object-center z-0 select-none"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/70 to-bg-primary z-10" />

      <div className="max-w-285 mx-auto px-6 w-full text-center z-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-zinc-300 mb-3 text-[1rem] uppercase tracking-[0.2em] font-medium">
            Olá, eu sou
          </h3>

          <h1 className="text-brand mb-4 text-5xl md:text-[5rem] font-extrabold leading-none tracking-tight drop-shadow-sm">
            Mateus Soares
          </h1>

          <h2 className="text-zinc-300 text-lg md:text-[1.2rem] max-w-xl mx-auto mb-6 font-normal leading-relaxed">
            Transformando Ideias em Realidade Através do Código
            <span className="text-brand font-bold">.</span>
          </h2>

          <button
            onClick={() => scrollToSection("about")}
            className="border border-white text-white rounded-[5px] px-10 py-3 mt-4 font-semibold text-[0.95rem] bg-transparent hover:bg-brand hover:border-brand hover:shadow-[0_0_20px_rgba(var(--brand-rgb),0.3)] transition-all duration-300 cursor-pointer inline-flex items-center gap-2.5 justify-center mx-auto focus:outline-none group"
          >
            Saiba Mais
            <ArrowDown
              size={18}
              className="animate-bounce group-hover:translate-y-0.5 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
