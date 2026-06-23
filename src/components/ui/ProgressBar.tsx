interface ProgressBarProps { startLabel?: string; endLabel?: string; className?: string; }
export default function ProgressBar({ startLabel = "Départ", endLabel = "Votre arrivée", className = "" }: ProgressBarProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="font-inter text-xs text-white/60 whitespace-nowrap">{startLabel}</span>
      <div className="relative flex-1 h-px bg-white/20">
        <span className="absolute left-1/3 -top-1 -translate-x-1/2">
          <span data-progress-dot className="block w-3 h-3 rounded-full bg-brand-orange transition-all" />
        </span>
      </div>
      <span className="font-inter text-xs text-white/60 whitespace-nowrap">{endLabel}</span>
    </div>
  );
}
