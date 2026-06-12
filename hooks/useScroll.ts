"use client";

import { useCallback } from "react";

export function useScroll() {
  const NAVBAR_OFFSET = -80;

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);

      if (element) {
        const y =
          element.getBoundingClientRect().top + window.scrollY + NAVBAR_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    [NAVBAR_OFFSET],
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { scrollToSection, scrollToTop };
}
