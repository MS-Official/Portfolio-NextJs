"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, UserCircle2 } from "lucide-react";

import { personalInfo } from "@/data";
import { HudPanel } from "@/components/game/hud-panel";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow={
        <>
          <UserCircle2 className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground/80">Operator Brief</span>
        </>
      }
      title="Professional Summary"
      description="A concise operator dossier built directly from your portfolio profile."
      className="bg-transparent"
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_1.45fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <HudPanel className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                  PROFILE ID
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {personalInfo.fullname}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {personalInfo.title}
                </p>
              </div>
              <div className="rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground">
                VERIFIED
              </div>
            </div>

            <div className="mt-6 relative overflow-hidden rounded-2xl border border-border/50 bg-background/10">
              <Image
                src={personalInfo.profilePicture}
                alt="About profile image"
                width={900}
                height={900}
                className="h-[280px] w-full object-cover sm:h-[340px]"
              />
              <div aria-hidden className="absolute inset-0 bg-hud-scanlines opacity-[0.14]" />
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <Button
                variant="outline"
                className="h-10 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
                asChild
              >
                <Link href="/resume">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
              <div className="text-xs text-muted-foreground">
                {personalInfo.contact.location}
              </div>
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
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
              SUMMARY LOG
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {personalInfo.summary}
            </p>

            <div className="mt-6 rounded-2xl border border-border/50 bg-background/10 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                QUICK LINKS
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { label: "Projects", href: "/#projects" },
                  { label: "Missions", href: "/#experience" },
                  { label: "Abilities", href: "/#skills" },
                  { label: "Contact", href: "/#contact" },
                ].map((x) => (
                  <Link
                    key={x.label}
                    href={x.href}
                    className="rounded-full border border-border/50 bg-background/10 px-3 py-1 text-xs text-foreground/90 transition-colors hover:bg-background/20"
                  >
                    {x.label}
                  </Link>
                ))}
              </div>
            </div>
          </HudPanel>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

