"use client";

import { useEffect, useMemo, useState } from "react";

export function BootSequenceText({
  lines,
  className,
  speedMs = 22,
  lineDelayMs = 220,
}: {
  lines: string[];
  className?: string;
  speedMs?: number;
  lineDelayMs?: number;
}) {
  const [out, setOut] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setOut(lines);
      return;
    }

    let mounted = true;
    let lineIndex = 0;
    let charIndex = 0;
    const next = () => {
      if (!mounted) return;
      const currentLine = lines[lineIndex] ?? "";

      if (charIndex === 0) {
        setOut((prev) => [...prev, ""]);
      }

      setOut((prev) => {
        const copy = [...prev];
        copy[lineIndex] = (copy[lineIndex] ?? "") + currentLine[charIndex];
        return copy;
      });

      charIndex += 1;
      if (charIndex >= currentLine.length) {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex >= lines.length) return;
        window.setTimeout(next, lineDelayMs);
        return;
      }
      window.setTimeout(next, speedMs);
    };

    next();
    return () => {
      mounted = false;
    };
  }, [lines, lineDelayMs, reduceMotion, speedMs]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setCursor((v) => !v), 520);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className={className}>
      {out.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
      <span className={cursor ? "opacity-100" : "opacity-0"}>▍</span>
    </div>
  );
}

