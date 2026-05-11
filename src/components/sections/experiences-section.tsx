"use client";

import { Radar } from "lucide-react";

import { experiences } from "@/data";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { CareerProgressMap } from "@/components/game/career-progress-map";

export function ExperiencesSection() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow={
        <>
          <Radar className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground/80">Career Progress</span>
        </>
      }
      title="Experience Timeline"
      description="A structured view of roles, responsibilities, outcomes, and core technologies."
    >
      <CareerProgressMap items={experiences} />
    </SectionWrapper>
  );
}
