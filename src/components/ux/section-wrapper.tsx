"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          {eyebrow ? (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-pretty text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
