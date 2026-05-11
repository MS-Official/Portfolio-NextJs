"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Radar,
  Send,
  Sparkles,
} from "lucide-react";

import { personalInfo } from "@/data";
import { HudPanel } from "@/components/game/hud-panel";
import { GameButton } from "@/components/game/game-button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const socials = [
    { icon: Github, href: personalInfo.contact.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.contact.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.contact.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/10 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
            >
              <Radar className="h-3.5 w-3.5 text-primary/90" />
              <span>Career World Online</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="text-foreground/90">Operator:</span>{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              <span className="text-foreground/90">Class:</span>{" "}
              <span className="font-medium text-foreground/90">
                {personalInfo.title}
              </span>
              <span className="mx-2 text-muted-foreground/60">•</span>
              <span className="line-clamp-3">{personalInfo.summary}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <GameButton href="#about" variant="primary">
                <Sparkles className="h-4 w-4" />
                Start Journey <ArrowRight className="h-4 w-4" />
              </GameButton>
              <GameButton href="#experience" variant="secondary">
                <Radar className="h-4 w-4" />
                View Missions
              </GameButton>
              <GameButton href="/resume" variant="ghost">
                <Download className="h-4 w-4" />
                Download Resume
              </GameButton>
              <GameButton href="/#contact" variant="ghost">
                <Send className="h-4 w-4" />
                Contact
              </GameButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 flex items-center gap-3"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/10 text-muted-foreground backdrop-blur transition-colors hover:border-border/70 hover:bg-background/20 hover:text-foreground"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="relative"
          >
            <HudPanel className="p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.18em] text-primary/90">
                    CHARACTER LOADOUT
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-foreground/90">
                    {personalInfo.fullname}
                  </p>
                </div>
                <div className="rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground">
                  STATUS: ACTIVE
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[120px_1fr]">
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-2xl border border-border/50 bg-background/10">
                  <Image
                    src={personalInfo.profilePicture}
                    alt={`${personalInfo.name} profile`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-hud-scanlines opacity-[0.14]"
                  />
                </div>

                <div className="space-y-3">
                  {[
                    { k: "Role", v: personalInfo.title },
                    { k: "Location", v: personalInfo.contact.location },
                    { k: "Email", v: personalInfo.contact.email },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-start justify-between gap-4 rounded-xl border border-border/50 bg-background/10 px-4 py-3"
                    >
                      <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                        {row.k.toUpperCase()}
                      </span>
                      <span className="text-right text-xs text-foreground/90">
                        {row.v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/50 bg-background/10 p-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                  DEV CONSOLE
                </p>
                <div className="mt-2 font-mono text-[12px] leading-relaxed text-muted-foreground">
                  <div>
                    <span className="text-cyan-300">init</span>{" "}
                    <span className="text-foreground/70">--profile</span>{" "}
                    <span className="text-violet-300">operator</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-foreground/70">ready:</span>{" "}
                    <span className="text-emerald-300">true</span>
                  </div>
                  <div>
                    <span className="text-foreground/70">routes:</span>{" "}
                    <span className="text-emerald-300">
                      /projects /blog /resume
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online
                </span>
                <Link
                  href="/resume"
                  className={cn(
                    "rounded-full border border-border/50 bg-background/10 px-3 py-1",
                    "transition-colors hover:bg-background/20 hover:text-foreground",
                  )}
                >
                  Open Profile
                </Link>
              </div>
            </HudPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

