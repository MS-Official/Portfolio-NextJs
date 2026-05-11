"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Calendar,
  ChevronDown,
  LinkIcon,
  MapPin,
  Shield,
  Swords,
} from "lucide-react";

import type { Experience } from "@/types";
import { formatStartEndDate } from "@/lib/utils";
import { HudPanel } from "@/components/game/hud-panel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function MissionCard({
  mission,
  index,
}: {
  mission: Experience;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
    >
      <HudPanel className="p-0">
        <div className="relative">
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-background/20">
                {mission.logo ? (
                  <Image
                    src={mission.logo}
                    alt={mission.company}
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
                  <p className="text-xs font-semibold tracking-wide text-primary/90">
                    MISSION {String(index + 1).padStart(2, "0")}
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-background/10 text-[11px] capitalize"
                  >
                    <Shield className="mr-1 h-3 w-3 text-primary/80" />
                    {mission.type}
                  </Badge>
                </div>

                <h3 className="mt-2 text-pretty text-lg font-semibold tracking-tight sm:text-xl">
                  {mission.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Swords className="h-3.5 w-3.5 text-primary/75" />
                    {mission.company}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary/65" />
                    {mission.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary/65" />
                    {formatStartEndDate(mission.startDate, mission.endDate)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:justify-end">
              {mission.companyUrl ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
                  asChild
                >
                  <a href={mission.companyUrl} target="_blank" rel="noopener noreferrer">
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
                {expanded ? "Hide Intel" : "View Intel"}
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                />
              </Button>
            </div>
          </div>

          <div className="px-6 pb-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {mission.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {mission.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] text-foreground/90 backdrop-blur"
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
                <div className="p-6">
                  <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
                    Mission Objectives
                  </h4>
                  <ul className="mt-3 grid gap-3">
                    {mission.responsibilities.map((r, i) => (
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
      </HudPanel>
    </motion.div>
  );
}

