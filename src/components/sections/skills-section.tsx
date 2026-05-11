"use client";

import { motion } from "framer-motion";
import { Cpu, Hexagon, Layers3, Wand2 } from "lucide-react";

import { skills as skillsData } from "@/data";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { HudPanel } from "@/components/game/hud-panel";

const technicalSkills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 78 },
  { name: "JavaScript", level: 82 },
  { name: "PHP", level: 70 },
  { name: "Go", level: 55 },
  { name: "TypeScript", level: 72 },
  { name: "Flutter", level: 55 },
];

const softSkills = [
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Fast Learner",
  "Effective Communication",
  "Curiosity & Continuous Learning",
  "Critical Thinking",
  "Attention to Detail",
  "Accountability & Ownership",
  "Creativity & Innovation",
  "Emotional Intelligence",
  "Self-Motivation",
  "Resilience in High-Pressure Environments",
  "Conflict Resolution",
  "Decision Making",
  "Strategic Thinking",
  "Goal-Oriented Mindset",
  "Organizational Skills",
  "Presentation Skills",
  "Client & Stakeholder Management",
  "Cross-Cultural Communication",
  "Growth Mindset",
  "Empathy & Active Listening",
  "Initiative & Proactiveness",
  "Flexibility to Change",
  "Open-Mindedness",
  "Prioritization",
  "Mentoring & Coaching",
];

const groups = [
  { title: "Languages", items: skillsData.languages },
  { title: "Frameworks", items: skillsData.frameworks },
  { title: "Databases", items: skillsData.databases },
  { title: "Tools", items: skillsData.tools },
];

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow={
        <>
          <Layers3 className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground/80">Ability System</span>
        </>
      }
      title="Ability Tree + Power Stats"
      description="A game-style view of technical abilities, tools, and soft-skill modifiers."
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 space-y-6"
        >
          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Hexagon className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
                ABILITY TREE
              </h3>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {groups.map((g) => (
                <div key={g.title} className="rounded-2xl border border-border/50 bg-background/10 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                      {g.title.toUpperCase()}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      {g.items.length} unlocked
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((x) => (
                      <span
                        key={x}
                        className="relative rounded-2xl border border-border/50 bg-background/10 px-3 py-1.5 text-[11px] text-foreground/90 backdrop-blur transition-transform hover:-translate-y-0.5"
                      >
                        <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-sm border border-border/60 bg-primary/20" />
                        <span className="pl-2">{x}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </HudPanel>

          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
                POWER STATS
              </h3>
            </div>

            <div className="mt-6 grid gap-4">
              {technicalSkills.map((s, idx) => (
                <div key={s.name} className="rounded-2xl border border-border/50 bg-background/10 px-4 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-medium text-foreground/90">
                      {s.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {s.level}%
                    </div>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-muted/20">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300/80 via-indigo-300/80 to-violet-300/80"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: idx * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </HudPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Wand2 className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
                MODIFIERS (SOFT SKILLS)
              </h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {softSkills.map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  className="rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground backdrop-blur transition-colors hover:bg-background/20 hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </HudPanel>

          <HudPanel className="p-6 sm:p-7">
            <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
              COMMS (LANGUAGES)
            </div>
            <div className="mt-5 grid gap-3">
              {(skillsData.spokenLanguages ?? []).map((lang) => (
                <div
                  key={lang}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border/50 bg-background/10 px-4 py-3"
                >
                  <span className="text-sm font-medium text-foreground/90">
                    {lang}
                  </span>
                  <span className="rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground">
                    Enabled
                  </span>
                </div>
              ))}
            </div>
          </HudPanel>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

