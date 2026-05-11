"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Building2, Calendar, ChevronDown, LinkIcon, MapPin } from "lucide-react";

import type { Experience } from "@/types";
import { cn, formatStartEndDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ExperienceNode({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative pl-10 sm:pl-12"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
        <div className="absolute h-10 w-10 rounded-full bg-primary/15 blur-md" />
        <div className="relative grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-background/25 shadow-[0_0_0_4px_rgba(99,102,241,0.12)]">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        </div>
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/55 bg-background/18 backdrop-blur-xl",
          "shadow-[0_1px_0_hsl(var(--border)/0.35),0_30px_100px_rgba(0,0,0,0.55)]",
        )}
      >
        <div aria-hidden className="absolute inset-0 bg-hud-panel-lines opacity-[0.32]" />

        <div className="relative p-6 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border/55 bg-background/15">
                {experience.logo ? (
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Building2 className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border/55 bg-background/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
                    ROLE {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-border/55 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground">
                    {experience.type}
                  </span>
                </div>

                <h3 className="mt-3 text-pretty text-lg font-semibold tracking-tight sm:text-xl">
                  {experience.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {experience.company}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary/65" />
                    {experience.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary/65" />
                    {formatStartEndDate(experience.startDate, experience.endDate)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:justify-end">
              {experience.companyUrl ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 rounded-full border-border/55 bg-background/10 backdrop-blur hover:bg-background/20"
                  asChild
                >
                  <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Company
                  </a>
                </Button>
              ) : null}

              <Button
                variant="secondary"
                size="sm"
                className="h-9 rounded-full bg-muted/20 backdrop-blur hover:bg-muted/30"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
              >
                {expanded ? "Hide Details" : "View Details"}
                <ChevronDown
                  className={cn(
                    "ml-2 h-4 w-4 transition-transform",
                    expanded ? "rotate-180" : "",
                  )}
                />
              </Button>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {experience.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border/55 bg-background/10 px-3 py-1 text-[11px] text-foreground/90 backdrop-blur"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {expanded ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border/40 bg-background/10"
            >
              <div className="p-6 sm:p-7">
                <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
                  Responsibilities
                </h4>
                <ul className="mt-3 grid gap-3">
                  {experience.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span className="text-muted-foreground">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
