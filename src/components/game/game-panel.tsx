import type { ReactNode } from "react";
import { HudPanel } from "@/components/game/hud-panel";

export function GamePanel({
  children,
  className,
  glow,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <HudPanel className={className} glow={glow}>
      {children}
    </HudPanel>
  );
}

