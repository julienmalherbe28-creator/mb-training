"use client";
import { useState } from "react";

export interface AccordionItem { question: string; answer: string; }
interface AccordionProps { items: AccordionItem[]; className?: string; }

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className={`divide-y divide-gray-200 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button onClick={() => setOpenIndex(isOpen ? null : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 py-5 text-left font-inter font-semibold text-brand-dark hover:text-brand-orange transition-colors duration-150">
              <span>{item.question}</span>
              <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
              <p className="font-inter text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
