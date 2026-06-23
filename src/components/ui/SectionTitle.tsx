interface SectionTitleProps { eyebrow?: string; title: string; accent?: string; subtitle?: string; center?: boolean; className?: string; }
export default function SectionTitle({ eyebrow, title, accent, subtitle, center = false, className = "" }: SectionTitleProps) {
  const align = center ? "text-center items-center" : "";
  return (
    <div className={`flex flex-col gap-3 ${align} ${className}`}>
      {eyebrow && <span className="text-xs font-inter font-semibold tracking-[0.2em] uppercase text-gray-400">{eyebrow}</span>}
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-none">
        {title}{accent && <> <span className="font-caveat text-brand-orange italic">{accent}</span></>}
      </h2>
      {subtitle && <p className="font-inter text-base md:text-lg text-gray-600 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
