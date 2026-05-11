"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BootSequenceText } from "@/components/game/boot-sequence-text";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data";

const SESSION_KEY = "portfolio_boot_seen_v2";

export function GameBootOverlay({ className }: { className?: string }) {
  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasSeen = window.sessionStorage.getItem(SESSION_KEY) === "1";
    if (hasSeen) return;
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setOpen(true);

    const timeout = window.setTimeout(() => setOpen(false), reduceMotion ? 450 : 2200);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  const lines = useMemo(
    () => [
      "Initializing interface…",
      `Loading profile: ${personalInfo.name}`,
      "Syncing routes: /projects /blog /resume",
      "Calibrating HUD…",
      "Ready.",
    ],
    [],
  );

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={cn(
            "fixed inset-0 z-[100] grid place-items-center",
            "bg-black/80 backdrop-blur-sm",
            className,
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.35 }}
        >
          <motion.div
            className={cn(
              "relative w-[min(720px,92vw)] overflow-hidden rounded-3xl",
              "border border-border/60 bg-background/10 p-6 shadow-premium",
            )}
            initial={{ y: 16, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 8, scale: 0.995, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.18 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div aria-hidden className="absolute inset-0 bg-hud-panel-lines opacity-[0.35]" />
            <div aria-hidden className="absolute inset-0 bg-hud-scanlines opacity-[0.16]" />
            <div className="relative">
              <div className="text-xs font-semibold tracking-[0.22em] text-muted-foreground">
                SYSTEM BOOT
              </div>
              <BootSequenceText
                lines={lines}
                className="mt-4 font-mono text-[12px] leading-relaxed text-foreground/85"
                speedMs={reduceMotion ? 0 : 18}
                lineDelayMs={reduceMotion ? 0 : 140}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

