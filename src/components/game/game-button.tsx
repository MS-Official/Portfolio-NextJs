import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function GameButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";
  const v =
    variant === "ghost"
      ? "border border-border/50 bg-background/10 text-foreground/90 hover:bg-background/25"
      : variant === "secondary"
        ? "border border-border/50 bg-muted/20 text-foreground hover:bg-muted/35"
        : "border border-primary/30 bg-gradient-to-r from-primary/85 via-indigo-400/85 to-cyan-300/85 text-primary-foreground shadow-[0_18px_45px_rgba(99,102,241,0.25)] hover:shadow-[0_22px_60px_rgba(56,189,248,0.22)]";

  return (
    <Link href={href} className={cn(base, v, className)}>
      {children}
    </Link>
  );
}

