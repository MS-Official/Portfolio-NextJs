"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FileText, Menu } from "lucide-react";

import { navItems } from "@/constants/navItems";
import { personalInfo } from "@/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import { MobilePauseMenu } from "@/components/game/mobile-pause-menu";

const getIcon = (iconName: string, className: string = "h-4 w-4") => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export function GameNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const isHome = pathname === "/";
  const hashSections = useMemo(
    () =>
      navItems
        .filter((x) => x.href.includes("#"))
        .map((x) => x.href.split("#")[1]),
    [],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollableHeight = Math.max(1, scrollHeight - clientHeight);
    setScrollProgress(scrollTop / scrollableHeight);
  });

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      let current = "home";
      let maxScore = 0;

      for (const id of hashSections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const visible = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
        );
        const score = visible - Math.abs(rect.top) * 0.25;
        if (score > maxScore) {
          maxScore = score;
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hashSections, isHome]);

  const isActive = (href: string) => {
    if (href.includes("#")) return isHome && activeSection === href.split("#")[1];
    return pathname === href || pathname.startsWith(href);
  };

  const onNav = (href: string) => {
    setMobileOpen(false);
    router.push(href);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed left-0 right-0 top-0 z-[999]",
          "px-3 py-3 sm:px-5",
        )}
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div
          className={cn(
            "relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl",
            "border border-cyan-200/20 bg-black/88 text-foreground",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_70px_rgba(0,0,0,0.75),0_0_45px_rgba(56,189,248,0.10)]",
            scrolled ? "backdrop-blur-2xl" : "backdrop-blur-xl",
          )}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-hud-panel-lines opacity-[0.18]" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
          <div className="relative">
            <div
              className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-cyan-300/70 via-indigo-300/70 to-violet-300/70"
              style={{ width: `${Math.min(1, Math.max(0, scrollProgress)) * 100}%` }}
            />

            <div className="flex min-h-14 items-center justify-between gap-3 px-3 py-2 sm:min-h-16 sm:px-4">
              <Link
                href="/"
                className="flex min-w-0 shrink-0 items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <div className="relative">
                  <Avatar className="h-9 w-9 border border-border/55 bg-background/10">
                    <AvatarImage
                      src={personalInfo.profilePicture}
                      alt={`${personalInfo.name}'s profile picture`}
                    />
                    <AvatarFallback className="bg-primary/10 text-xs">
                      {personalInfo.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background bg-emerald-400" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold tracking-tight text-foreground/90 sm:text-base">
                    {personalInfo.name}
                  </div>
                  <div className="hidden truncate text-[11px] text-muted-foreground sm:block">
                    {personalInfo.title}
                  </div>
                </div>
              </Link>

              <nav className="relative hidden min-w-0 flex-1 items-center justify-center gap-1 px-1 md:flex">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => onNav(item.href)}
                      className={cn(
                        "relative inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-2 text-[11px] transition-colors 2xl:gap-2 2xl:px-3 2xl:text-xs",
                        "border border-transparent",
                        active
                          ? "bg-white/8 text-foreground border-white/18"
                          : "text-muted-foreground hover:bg-white/6 hover:text-foreground",
                      )}
                    >
                      {active ? (
                        <motion.span
                          layoutId="nav-active-indicator"
                          className="pointer-events-none absolute inset-0 rounded-full border border-primary/40 bg-primary/12"
                          transition={{ type: "spring", stiffness: 320, damping: 30 }}
                        />
                      ) : null}
                      <span
                        className={cn(
                          "relative hidden h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-white/5 2xl:inline-flex",
                          active ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {getIcon(item.icon, "h-4 w-4")}
                      </span>
                      <span className="relative font-medium">{item.name}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2">
                <div className="hidden sm:block">
                  <ThemeToggle />
                </div>
                <div className="hidden sm:block">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-9 rounded-full border-white/16 bg-white/5 backdrop-blur hover:bg-white/8"
                    asChild
                  >
                    <Link href="/resume">
                      <FileText className="mr-2 h-4 w-4" />
                      Resume
                    </Link>
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full md:hidden hover:bg-white/6"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <MobilePauseMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavigate={onNav}
        isActive={isActive}
      />
    </>
  );
}
