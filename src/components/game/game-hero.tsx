"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Radar, Send, Sparkles } from "lucide-react";

import { personalInfo } from "@/data";
import { GameButton } from "@/components/game/game-button";
import { PlayerProfileCard } from "@/components/game/player-profile-card";

export function GameHero() {
  const socials = [
    { icon: Github, href: personalInfo.contact.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.contact.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.contact.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-96px)] overflow-hidden py-8 sm:py-10 lg:py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="max-w-[46rem]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border/55 bg-background/10 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
            >
              <Radar className="h-3.5 w-3.5 text-primary/90" />
              <span>Interactive Portfolio Interface</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="text-foreground/90">Profile:</span>{" "}
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
              <span className="text-foreground/90">Role:</span>{" "}
              <span className="font-medium text-foreground/90">{personalInfo.title}</span>
              <span className="mx-2 text-muted-foreground/60">•</span>
              <span className="line-clamp-3">{personalInfo.summary}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:flex 2xl:flex-wrap 2xl:items-center [&>a]:w-full 2xl:[&>a]:w-auto"
            >
              <GameButton href="#about" variant="primary">
                <Sparkles className="h-4 w-4" />
                View Profile <ArrowRight className="h-4 w-4" />
              </GameButton>
              <GameButton href="#experience" variant="secondary">
                <Radar className="h-4 w-4" />
                View Experience
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
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/55 bg-background/10 text-muted-foreground backdrop-blur transition-colors hover:border-border/75 hover:bg-background/20 hover:text-foreground"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="lg:justify-self-end">
            <PlayerProfileCard className="w-full max-w-[520px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
