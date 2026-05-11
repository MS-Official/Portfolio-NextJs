"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SkillTree({
  groups,
}: {
  groups: { title: string; items: string[] }[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map((g, groupIndex) => (
        <motion.div
          key={g.title}
          className="rounded-2xl border border-border/55 bg-background/10 p-4"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={reduceMotion ? undefined : { once: true, margin: "-120px" }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 0.5, delay: groupIndex * 0.05, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
              {g.title.toUpperCase()}
            </div>
            <div className="text-[11px] text-muted-foreground">{g.items.length} items</div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {g.items.map((x, i) => (
              <motion.span
                key={x}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={reduceMotion ? undefined : { once: true, margin: "-120px" }}
                transition={reduceMotion ? undefined : { duration: 0.35, delay: i * 0.01 }}
                className={cn(
                  "relative rounded-2xl border border-border/55 bg-background/10 px-3 py-1.5 text-[11px]",
                  "text-foreground/90 backdrop-blur",
                )}
              >
                <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-sm border border-border/70 bg-primary/20" />
                <span className="pl-2">{x}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
