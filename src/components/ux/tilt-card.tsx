"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function TiltCard({
  className,
  children,
  tilt = 10,
}: {
  className?: string;
  children: ReactNode;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rx = useSpring(y, { stiffness: 200, damping: 22 });
  const ry = useSpring(x, { stiffness: 200, damping: 22 });

  const rotateX = useMotionTemplate`${rx}deg`;
  const rotateY = useMotionTemplate`${ry}deg`;

  const isTiltAllowed = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative rounded-2xl border border-border/40 bg-card/50 backdrop-blur-xl shadow-premium",
        "transition-[border-color,box-shadow,transform] will-change-transform",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity",
        "before:bg-[radial-gradient(700px_220px_at_var(--mx,50%)_var(--my,30%),rgba(99,102,241,0.18),transparent_55%)]",
        "hover:border-border/70 hover:shadow-premium-hover hover:before:opacity-100",
        className,
      )}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        if (!isTiltAllowed()) return;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
        x.set((px - 0.5) * tilt * 2);
        y.set((0.5 - py) * tilt * 2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="relative" style={{ transform: "translateZ(0.01px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
