import type { ReactNode } from "react";
import { HudPanel } from "@/components/game/hud-panel";

export function ContactActionPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <HudPanel className="p-6 sm:p-7">
      <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
        {title}
      </div>
      <div className="mt-6">{children}</div>
    </HudPanel>
  );
}

