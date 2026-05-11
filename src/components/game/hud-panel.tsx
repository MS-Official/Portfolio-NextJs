"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HudPanel({
  children,
  className,
  glow = true,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  tone?: "default" | "muted" | "danger" | "success";
}) {
  const toneClass =
    tone === "muted"
      ? "bg-background/20"
      : tone === "danger"
        ? "bg-red-500/5"
        : tone === "success"
          ? "bg-emerald-500/5"
          : "bg-background/25";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "relative rounded-2xl border border-border/50 backdrop-blur-xl",
        "shadow-[0_1px_0_hsl(var(--border)/0.35),0_30px_100px_rgba(0,0,0,0.55)]",
        "overflow-hidden",
        toneClass,
        className,
      )}
    >
      {glow ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
        >
          <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.22),transparent_70%)] blur-2xl" />
          <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.22),transparent_70%)] blur-2xl" />
        </div>
      ) : null}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hud-panel-lines opacity-[0.30]"
      />

      <div className="relative">{children}</div>
    </motion.div>
  );
}

