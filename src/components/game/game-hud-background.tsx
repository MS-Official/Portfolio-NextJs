export function GameHudBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-hud-space" />
      <div className="absolute inset-0 bg-hud-stars opacity-[0.55]" />
      <div className="absolute inset-0 bg-hud-grid opacity-[0.30] dark:opacity-[0.26]" />
      <div className="absolute inset-0 bg-hud-particles opacity-[0.45]" />
      <div className="absolute inset-0 bg-hud-noise opacity-[0.12] dark:opacity-[0.20]" />

      <div className="absolute inset-0 bg-hud-scanlines opacity-[0.14] dark:opacity-[0.18]" />
      <div className="absolute inset-0 bg-hud-vignette" />

      <div className="absolute -bottom-40 left-1/2 h-[820px] w-[1200px] -translate-x-1/2 bg-hud-floor opacity-[0.85]" />

      <div className="absolute left-1/2 top-24 h-[520px] w-[920px] -translate-x-1/2 rounded-[48px] border border-border/20 bg-background/0 opacity-40 blur-[0.2px] animate-hud-float-slow" />
      <div className="absolute -left-16 top-1/3 h-[280px] w-[280px] rotate-12 rounded-[32px] border border-border/15 opacity-30 animate-hud-float-slower" />
      <div className="absolute -right-24 bottom-28 h-[340px] w-[420px] -rotate-6 rounded-[44px] border border-border/15 opacity-30 animate-hud-float-slowest" />

      <div className="absolute -top-28 -left-28 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_35%,rgba(56,189,248,0.35),rgba(56,189,248,0.08),transparent_65%)] blur-2xl animate-hud-orb1" />
      <div className="absolute top-20 -right-40 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(168,85,247,0.34),rgba(168,85,247,0.08),transparent_65%)] blur-2xl animate-hud-orb2" />
      <div className="absolute -bottom-56 right-1/3 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(34,197,94,0.20),rgba(34,197,94,0.06),transparent_70%)] blur-2xl animate-hud-orb3" />
    </div>
  );
}
