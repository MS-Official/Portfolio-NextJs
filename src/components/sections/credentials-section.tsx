"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Languages } from "lucide-react";

import { certifications, skills as skillsData } from "@/data";
import { formatDate } from "@/lib/utils";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { HudPanel } from "@/components/game/hud-panel";

export function CredentialsSection() {
  return (
    <SectionWrapper
      id="credentials"
      eyebrow={
        <>
          <BadgeCheck className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground/80">Achievements</span>
        </>
      }
      title="Badges & Communication Abilities"
      description="Certifications appear as unlocked achievements; languages show communication capabilities."
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2"
        >
          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
                UNLOCKED BADGES
              </h3>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert, idx) => (
                <div
                  key={`${cert.name}-${idx}`}
                  className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/10 p-4 backdrop-blur"
                >
                  <div aria-hidden className="absolute inset-0 bg-hud-panel-lines opacity-[0.28]" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground/90">
                          {cert.name}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {cert.issuingOrganization}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground">
                        {formatDate(cert.issueDate, "short")}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-[11px] text-muted-foreground">
                        Status: Unlocked
                      </span>
                    </div>
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
        >
          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
                COMMS
              </h3>
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

