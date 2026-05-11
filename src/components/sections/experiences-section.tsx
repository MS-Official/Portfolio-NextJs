"use client";

import { motion } from "framer-motion";
import { Radar, Sparkles } from "lucide-react";

import { experiences } from "@/data";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { MissionCard } from "@/components/game/mission-card";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export function ExperiencesSection() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow={
        <>
          <Radar className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground/80">Career Map</span>
        </>
      }
      title="Mission Timeline"
      description="A career quest map: each checkpoint is a mission with objectives, stack, and outcomes."
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <MissionCard key={`${exp.company}-${index}`} mission={exp} index={index} />
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary/80" />
          <span>Tap “View Intel” to expand mission objectives.</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
