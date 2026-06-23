"use client";
import type { RefObject } from "react";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export async function revealText(elements: Element[], delay = 0): Promise<any> {
  if (prefersReducedMotion()) return;
  const { gsap } = await import("gsap");
  return gsap.fromTo(elements, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out", delay });
}

export async function drawUnderline(svgPath: SVGPathElement | null): Promise<void> {
  if (!svgPath || prefersReducedMotion()) return;
  const { gsap } = await import("gsap");
  const length = svgPath.getTotalLength();
  gsap.set(svgPath, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });
  gsap.to(svgPath, { strokeDashoffset: 0, duration: 0.8, ease: "power2.out", delay: 0.5 });
}

export async function fadeUpStagger(container: RefObject<Element | null>, selector = "[data-animate]"): Promise<void> {
  if (!container.current || prefersReducedMotion()) return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  const items = container.current.querySelectorAll(selector);
  gsap.fromTo(items, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: container.current, start: "top 80%", once: true } });
}

export async function scrollProgress(track: RefObject<HTMLElement | null>): Promise<void> {
  if (!track.current || prefersReducedMotion()) return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  const dot = track.current.querySelector("[data-progress-dot]");
  if (!dot) return;
  gsap.to(dot, { left: "100%", ease: "none", scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true } });
}

export async function connectLine(line: SVGElement | null, trigger: Element | null): Promise<void> {
  if (!line || !trigger || prefersReducedMotion()) return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(line, { scaleY: 0, transformOrigin: "top center" }, { scaleY: 1, duration: 1, ease: "power2.inOut", scrollTrigger: { trigger, start: "top 70%", once: true } });
}
