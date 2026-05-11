"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AchievementBadge({
  title,
  subtitle,
  meta,
  index = 0,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.5, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/55 bg-background/10 p-4 backdrop-blur",
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-hud-panel-lines opacity-[0.28]" />
      <div
        aria-hidden
        className="absolute -left-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-70"
      />
      <div
        aria-hidden
        className="absolute -inset-x-20 -top-16 h-24 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground/90">{title}</p>
            {subtitle ? <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p> : null}
          </div>
          {meta ? (
            <span className="shrink-0 rounded-full border border-border/55 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground">
              {meta}
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] text-muted-foreground">Status: Verified</span>
        </div>
      </div>
    </motion.div>
  );
}
