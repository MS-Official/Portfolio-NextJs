"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedSkillBar({
  label,
  value,
  index = 0,
}: {
  label: string;
  value: number;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-2xl border border-border/55 bg-background/10 px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-medium text-foreground/90">{label}</div>
        <div className="text-xs text-muted-foreground">{value}%</div>
      </div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-muted/20">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300/80 via-indigo-300/80 to-violet-300/80"
          initial={reduceMotion ? false : { width: 0 }}
          whileInView={reduceMotion ? undefined : { width: `${value}%` }}
          viewport={reduceMotion ? undefined : { once: true }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 0.9,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
          style={reduceMotion ? { width: `${value}%` } : undefined}
        />
      </div>
    </div>
  );
}
