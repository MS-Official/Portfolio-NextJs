"use client";

import { motion } from "framer-motion";
import { HudPanel } from "@/components/game/hud-panel";
import { Archive } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  },
};

export function ProjectsPageHeader() {
  return (
    <motion.div className="mb-10" initial="hidden" animate="visible" variants={container}>
      <HudPanel className="p-6 sm:p-7" glow={false}>
        <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/10 px-3 py-1.5 text-xs text-muted-foreground">
          <Archive className="h-3.5 w-3.5 text-primary/90" />
          <span>Project Library</span>
        </motion.div>

        <motion.h1
          className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300"
          variants={item}
        >
          Projects Portfolio
        </motion.h1>

        <motion.p className="mt-4 max-w-3xl text-muted-foreground text-base sm:text-lg" variants={item}>
          Browse through my complete collection of projects. Each one represents a unique challenge
          and demonstrates different skills and technologies I&apos;ve mastered.
        </motion.p>
      </HudPanel>
    </motion.div>
  );
} 
