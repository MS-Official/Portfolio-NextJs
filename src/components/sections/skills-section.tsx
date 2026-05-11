"use client";

import { Cpu, Hexagon, Layers3, Wand2 } from "lucide-react";

import { skills as skillsData } from "@/data";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { HudPanel } from "@/components/game/hud-panel";
import { SkillTree } from "@/components/game/skill-tree";
import { AnimatedSkillBar } from "@/components/game/animated-skill-bar";

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
          <span className="font-medium text-foreground/80">Skills System</span>
        </>
      }
      title="Skills Matrix"
      description="A structured view of core skills, tools, and strengths."
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Hexagon className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
                SKILLS OVERVIEW
              </h3>
            </div>

            <div className="mt-6">
              <SkillTree groups={groups} />
            </div>
          </HudPanel>

          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
                HIGHLIGHTED PROFICIENCY
              </h3>
            </div>

            <div className="mt-6 grid gap-4">
              {technicalSkills.map((s, idx) => (
                <AnimatedSkillBar key={s.name} label={s.name} value={s.level} index={idx} />
              ))}
            </div>
          </HudPanel>
        </div>

        <div className="space-y-6">
          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Wand2 className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
                STRENGTHS (SOFT SKILLS)
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
              LANGUAGES
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
        </div>
      </div>
    </SectionWrapper>
  );
}
