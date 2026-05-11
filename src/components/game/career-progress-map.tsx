"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Experience } from "@/types";
import { ExperienceNode } from "@/components/game/experience-node";

export function CareerProgressMap({ items }: { items: Experience[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        aria-hidden
        className="absolute left-5 top-7 hidden h-[calc(100%-28px)] w-px sm:left-[22px] sm:block"
      >
        <motion.div
          className="h-full w-px bg-gradient-to-b from-cyan-300/50 via-indigo-300/40 to-violet-300/35"
          initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
          whileInView={reduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
          viewport={reduceMotion ? undefined : { once: true, margin: "-120px" }}
          transition={reduceMotion ? undefined : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
        />
        <div className="absolute inset-0 bg-hud-scanlines opacity-[0.08]" />
      </div>

      <div className="grid gap-6">
        {items.map((experience, index) => (
          <ExperienceNode
            key={`${experience.company}-${experience.title}-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
