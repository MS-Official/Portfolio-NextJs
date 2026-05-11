"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { personalInfo } from "@/data";
import { HudPanel } from "@/components/game/hud-panel";
import { cn } from "@/lib/utils";

export function PlayerProfileCard({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
      className={cn("relative w-full", className)}
    >
      <HudPanel className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary/90">
              PROFILE PANEL
            </p>
            <p className="mt-1 truncate text-sm font-medium text-foreground/90">
              {personalInfo.fullname}
            </p>
          </div>
          <div className="rounded-full border border-border/55 bg-background/10 px-3 py-1 text-[11px] text-muted-foreground">
            STATUS: AVAILABLE
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-[120px_1fr]">
          <div className="relative h-[120px] w-[120px] overflow-hidden rounded-2xl border border-border/55 bg-background/10">
            <Image
              src={personalInfo.profilePicture}
              alt={`${personalInfo.name} profile`}
              fill
              className="object-cover"
              priority
            />
            <div aria-hidden className="absolute inset-0 bg-hud-scanlines opacity-[0.14]" />
          </div>

          <div className="space-y-3">
            {[
              { k: "Role", v: personalInfo.title },
              { k: "Location", v: personalInfo.contact.location },
              { k: "Email", v: personalInfo.contact.email },
            ].map((row) => (
              <div
                key={row.k}
                className="flex items-start justify-between gap-4 rounded-xl border border-border/55 bg-background/10 px-4 py-3"
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

        <div className="mt-6 rounded-2xl border border-border/55 bg-background/10 p-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
            CONSOLE
          </p>
          <div className="mt-2 font-mono text-[12px] leading-relaxed text-muted-foreground">
            <div>
              <span className="text-cyan-300">init</span>{" "}
              <span className="text-foreground/70">--profile</span>{" "}
              <span className="text-violet-300">portfolio</span>
            </div>
            <div className="mt-1">
              <span className="text-foreground/70">ready:</span>{" "}
              <span className="text-emerald-300">true</span>
            </div>
            <div>
              <span className="text-foreground/70">routes:</span>{" "}
              <span className="text-emerald-300">/projects /blog /resume</span>
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
              "rounded-full border border-border/55 bg-background/10 px-3 py-1",
              "transition-colors hover:bg-background/20 hover:text-foreground",
            )}
          >
            Open Resume
          </Link>
        </div>
      </HudPanel>
    </motion.div>
  );
}
