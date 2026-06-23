import Image from "next/image";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-brand-orange" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function DiagnosticCard({ label, href, className = "" }: { label: string; href: string; className?: string }) {
  return <a href={href} className={`group block p-5 rounded-card border-2 border-gray-200 bg-white hover:border-brand-orange hover:shadow-md transition-all duration-200 font-inter font-semibold text-brand-dark text-center ${className}`}>{label}</a>;
}

export function TestimonialCard({ quote, name, age, city, imageSrc, stars = 5 }: { quote: string; name: string; age?: number; city?: string; imageSrc?: string; stars?: number }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-card shadow-sm border border-gray-100">
      <StarRating count={stars} />
      <blockquote className="font-inter text-base text-gray-700 leading-relaxed">&ldquo;{quote}&rdquo;</blockquote>
      <div className="flex items-center gap-3 mt-auto">
        {imageSrc && <Image src={imageSrc} alt={name} width={40} height={40} className="rounded-full object-cover" />}
        <div>
          <p className="font-inter font-semibold text-sm text-brand-dark">{name}</p>
          {(age || city) && <p className="font-inter text-xs text-gray-400">{[age ? `${age} ans` : "", city].filter(Boolean).join(" · ")}</p>}
        </div>
      </div>
    </div>
  );
}
