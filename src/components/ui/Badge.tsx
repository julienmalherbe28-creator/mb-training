interface BadgeProps { children: React.ReactNode; className?: string; }
export default function Badge({ children, className = "" }: BadgeProps) {
  return <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-inter font-medium ${className}`}>{children}</span>;
}
