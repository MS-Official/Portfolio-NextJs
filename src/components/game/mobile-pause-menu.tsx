"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { navItems } from "@/constants/navItems";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HudPanel } from "@/components/game/hud-panel";

export function MobilePauseMenu({
  open,
  onClose,
  onNavigate,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  isActive: (href: string) => boolean;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="absolute inset-x-3 top-3 sm:inset-x-6 sm:top-4"
            initial={{ y: -14, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -8, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <HudPanel className="p-0" glow={false}>
              <div className="relative overflow-hidden rounded-2xl">
                <div aria-hidden className="absolute inset-0 bg-hud-panel-lines opacity-[0.34]" />
                <div className="relative">
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="text-xs font-semibold tracking-[0.22em] text-muted-foreground">
                      MENU
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full hover:bg-white/6"
                      onClick={onClose}
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="grid gap-1 px-3 pb-4">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => onNavigate(item.href)}
                        className={cn(
                          "group flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3.5 text-left",
                          "border border-transparent transition-colors",
                          isActive(item.href)
                            ? "border-white/18 bg-white/7"
                            : "hover:bg-white/6",
                        )}
                      >
                        <div className="min-w-0">
                          <div className="truncate text-[15px] font-medium text-foreground/90">
                            {item.name}
                          </div>
                          <div className="mt-0.5 truncate text-[11px] text-muted-foreground">
                            {item.href.startsWith("/#") ? "Section" : "Page"}
                          </div>
                        </div>
                        <span
                          aria-hidden
                          className={cn(
                            "h-2 w-2 rounded-full",
                            isActive(item.href)
                              ? "bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.18)]"
                              : "bg-muted-foreground/40 group-hover:bg-muted-foreground/60",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </HudPanel>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
