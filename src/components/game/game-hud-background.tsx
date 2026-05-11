export function GameHudBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-hud-space" />
      <div className="absolute inset-0 bg-hud-grid opacity-[0.32] dark:opacity-[0.28]" />
      <div className="absolute inset-0 bg-hud-noise opacity-[0.14] dark:opacity-[0.22]" />

      <div className="absolute inset-0 bg-hud-scanlines opacity-[0.14] dark:opacity-[0.18]" />
      <div className="absolute inset-0 bg-hud-vignette" />

      <div className="absolute -bottom-40 left-1/2 h-[820px] w-[1200px] -translate-x-1/2 bg-hud-floor opacity-[0.85]" />

      <div className="absolute -top-28 -left-28 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_35%,rgba(56,189,248,0.35),rgba(56,189,248,0.08),transparent_65%)] blur-2xl animate-hud-orb1" />
      <div className="absolute top-20 -right-40 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(168,85,247,0.34),rgba(168,85,247,0.08),transparent_65%)] blur-2xl animate-hud-orb2" />
      <div className="absolute -bottom-56 right-1/3 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(34,197,94,0.20),rgba(34,197,94,0.06),transparent_70%)] blur-2xl animate-hud-orb3" />
    </div>
  );
}

