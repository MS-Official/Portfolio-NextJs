"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Languages } from "lucide-react";

import { certifications, skills as skillsData } from "@/data";
import { formatDate } from "@/lib/utils";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { HudPanel } from "@/components/game/hud-panel";
import { AchievementBadge } from "@/components/game/achievement-badge";

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
      title="Certifications & Languages"
      description="Verified certifications and spoken languages."
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
                CERTIFICATIONS
              </h3>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert, idx) => (
                <AchievementBadge
                  key={`${cert.name}-${idx}`}
                  title={cert.name}
                  subtitle={cert.issuingOrganization}
                  meta={formatDate(cert.issueDate, "short")}
                  index={idx}
                />
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
                LANGUAGES
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
