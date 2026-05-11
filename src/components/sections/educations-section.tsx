"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, TimerReset } from "lucide-react";

import { educations } from "@/data";
import { formatStartEndDate } from "@/lib/utils";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { HudPanel } from "@/components/game/hud-panel";
import { Button } from "@/components/ui/button";

export function EducationsSection() {
  return (
    <SectionWrapper
      id="education"
      eyebrow={
        <>
          <GraduationCap className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground/80">Training Path</span>
        </>
      }
      title="Academy Levels"
      description="A clean progression view of your education and training milestones."
    >
      <div className="mx-auto max-w-6xl space-y-6">
        {educations.map((edu, idx) => (
          <motion.div
            key={`${edu.institution}-${idx}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
          >
            <HudPanel className="p-6 sm:p-7">
              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
                      LEVEL {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground">
                      <TimerReset className="h-3.5 w-3.5 text-primary/75" />
                      {formatStartEndDate(edu.startDate, edu.endDate)}
                    </span>
                  </div>

                  <h3 className="mt-3 text-pretty text-lg font-semibold tracking-tight sm:text-xl">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.institution}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary/70" />
                      {edu.location}
                    </span>
                    {edu.cgpa ? <span>CGPA: {edu.cgpa}</span> : null}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>

                  {edu.techStacks?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.techStacks.slice(0, 14).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] text-foreground/90 backdrop-blur"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-3 lg:items-end">
                  {edu.logo ? (
                    <div className="rounded-2xl border border-border/50 bg-background/10 p-3">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={160}
                        height={64}
                        className="h-10 w-auto opacity-80"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-2">
                    {edu.documents?.[0]?.url && edu.documents[0].url !== "#" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
                        asChild
                      >
                        <a href={edu.documents[0].url} target="_blank" rel="noopener noreferrer">
                          Certificate
                        </a>
                      </Button>
                    ) : null}
                    {edu.documents?.[0]?.Turl && edu.documents[0].Turl !== "#" ? (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="h-9 rounded-full bg-muted/20 backdrop-blur hover:bg-muted/30"
                        asChild
                      >
                        <a href={edu.documents[0].Turl} target="_blank" rel="noopener noreferrer">
                          Transcript
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </HudPanel>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

