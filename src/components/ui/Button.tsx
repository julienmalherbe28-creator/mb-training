import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";
interface ButtonBaseProps { variant?: Variant; size?: Size; href?: string; }
type ButtonProps = ButtonBaseProps & ((ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }) | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }));

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-orange text-white hover:bg-orange-600 focus-visible:ring-brand-orange",
  secondary: "bg-brand-green text-white hover:bg-green-700 focus-visible:ring-brand-green",
  outline: "border-2 border-white text-white hover:bg-white hover:text-brand-dark focus-visible:ring-white",
};
const sizeClasses: Record<Size, string> = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
const base = "inline-flex items-center justify-center gap-2 rounded-full font-inter font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer";

export default function Button({ variant = "primary", size = "md", href, className = "", children, ...props }: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) return <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</Link>;
  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
