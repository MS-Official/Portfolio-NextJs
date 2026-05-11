import type { ReactNode } from "react";
import { GameHudBackground } from "@/components/game/game-hud-background";
import { GameBootOverlay } from "@/components/game/game-boot-overlay";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export function GameShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GameHudBackground />
      <GameBootOverlay />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}

