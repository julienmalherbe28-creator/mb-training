"use client";

import { useRef, useEffect } from "react";
import { fadeUpStagger } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  className?: string;
}

// Anime tous les enfants directs quand le conteneur entre dans le viewport.
export default function ScrollReveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeUpStagger(ref, ":scope > *");
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
