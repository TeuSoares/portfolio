"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dispara assim que qualquer pedaço do elemento cruzar a linha da tela
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        // 0 significa: assim que a pontinha superior do card entrar na tela, já ativa.
        threshold: 0,
        // 0px garante que cliques na navbar que scrollam direto para o bloco ativem o efeito na hora
        rootMargin: "0px 0px 0px 0px",
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      // Mantemos a duração longa (1300ms) para que, mesmo disparando logo no início,
      // o card termine de aparecer de forma muito suave e flutuante enquanto continuas a rolar.
      className={`transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : "opacity-0 -translate-x-2 translate-y-3 scale-[0.99]"
      }`}
    >
      {children}
    </div>
  );
}
