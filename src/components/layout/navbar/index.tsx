"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";

import { navItems } from "@/constants/navItems";
import { personalInfo } from "@/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HudPanel } from "@/components/game/hud-panel";
import { Icons } from "@/components/icons";

const getIcon = (iconName: string, className: string = "h-4 w-4") => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export default function Navbar() {
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
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
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
    if (href.includes("#")) {
      return isHome && activeSection === href.split("#")[1];
    }
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
          "fixed left-0 right-0 top-0 z-50",
          "px-3 pt-3 sm:px-6 sm:pt-4",
        )}
        initial={false}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.25 }}
      >
        <HudPanel
          glow={false}
          className={cn(
            "mx-auto max-w-6xl",
            "border-border/50",
            scrolled ? "bg-background/30" : "bg-background/18",
          )}
        >
          <div className="relative">
            <div
              className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-cyan-300/70 via-indigo-300/70 to-violet-300/70"
              style={{ width: `${Math.min(1, Math.max(0, scrollProgress)) * 100}%` }}
            />

            <div className="flex h-14 items-center justify-between gap-3 px-3 sm:h-16 sm:px-4">
              <Link
                href="/"
                className="flex min-w-0 items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <div className="relative">
                  <Avatar className="h-9 w-9 border border-border/50 bg-background/10">
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

              <nav className="hidden items-center gap-1 lg:flex">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => onNav(item.href)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs transition-colors",
                      "border border-transparent",
                      isActive(item.href)
                        ? "bg-background/25 text-foreground border-border/60"
                        : "text-muted-foreground hover:bg-background/15 hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/40 bg-background/10",
                        isActive(item.href) ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {getIcon(item.icon, "h-4 w-4")}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <div className="hidden sm:block">
                  <ThemeToggle />
                </div>
                <div className="hidden sm:block">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-9 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
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
                  className="h-9 w-9 rounded-full lg:hidden hover:bg-background/15"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </HudPanel>
      </motion.header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/55 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm p-3"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <HudPanel className="h-full p-0">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border/40 px-4 py-4">
                    <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                      NAVIGATION HUD
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full hover:bg-background/15"
                      onClick={() => setMobileOpen(false)}
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex-1 overflow-auto px-4 py-5">
                    <div className="grid gap-2">
                      {navItems.map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => onNav(item.href)}
                          className={cn(
                            "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors",
                            isActive(item.href)
                              ? "border-border/70 bg-background/20"
                              : "border-border/40 bg-background/10 hover:bg-background/18",
                          )}
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-background/10">
                            {getIcon(item.icon, "h-5 w-5")}
                          </span>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-foreground/90">
                              {item.name}
                            </div>
                            <div className="truncate text-[11px] text-muted-foreground">
                              {item.href}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-border/40 px-4 py-4">
                    <ThemeToggle />
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-9 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
                      asChild
                    >
                      <Link href="/resume" onClick={() => setMobileOpen(false)}>
                        <FileText className="mr-2 h-4 w-4" />
                        Resume
                      </Link>
                    </Button>
                  </div>
                </div>
              </HudPanel>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

