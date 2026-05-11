"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Code,
  ExternalLink,
  Github,
  Info,
  Sparkles,
} from "lucide-react";
import { ImageIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RelatedBlogLinks } from "@/components/blog/related-blog-links";
import { TiltCard } from "@/components/ux/tilt-card";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/types";

export interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: index * 0.08 },
    },
  };

  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <TiltCard className="h-full overflow-hidden group border-border/50 bg-background/10 shadow-[0_1px_0_hsl(var(--border)/0.35),0_30px_100px_rgba(0,0,0,0.55)]">
        <div className="relative h-52 overflow-hidden rounded-t-2xl border-b border-border/40 bg-background/10">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/15 group-hover:to-secondary/20 transition-colors duration-500">
              <div className="flex flex-col items-center gap-3">
                <ImageIcon
                  className="h-12 w-12 opacity-40 transition-opacity group-hover:opacity-60"
                  aria-label="Project placeholder"
                  width={48}
                  height={48}
                />
                <div className="text-sm font-medium text-muted-foreground/50">
                  Project Preview
                </div>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-hud-scanlines opacity-[0.12]" />

          <div className="absolute left-3 top-3 rounded-full border border-border/50 bg-background/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground backdrop-blur">
            CASE FILE
          </div>
          <div className="absolute right-3 top-3">
            <span
              className={`px-2 py-1 text-xs rounded-full backdrop-blur-sm border border-border/40 ${
                project.status === "Completed"
                  ? "bg-green-500/15 text-green-400"
                  : project.status === "In Progress"
                    ? "bg-sky-500/15 text-sky-300"
                    : project.status === "Maintaining"
                      ? "bg-violet-500/15 text-violet-300"
                      : "bg-muted/30 text-muted-foreground"
              }`}
            >
              {project.status || "Unknown"}
            </span>
          </div>
        </div>

        <div className="relative p-5 sm:p-6">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-hud-panel-lines opacity-[0.22]" />
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-lg">
              {project.title}
            </h3>
            {project.date ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-border/40 bg-background/25 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur">
                <Calendar className="h-3 w-3" />
                {formatDate(project.date, "short")}
              </span>
            ) : null}
          </div>

          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStacks.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-border/40 bg-background/25 px-3 py-1 text-[11px] text-foreground/90 backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {tech}
              </span>
            ))}
            {project.techStacks.length > 4 ? (
              <span className="rounded-full border border-border/40 bg-background/15 px-3 py-1 text-[11px] text-muted-foreground backdrop-blur">
                +{project.techStacks.length - 4}
              </span>
            ) : null}
          </div>

          <div className="mt-5 flex items-center gap-2">
            {project.github ? (
              <Button
                variant="outline"
                size="sm"
                className="h-9 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-4 w-4" />
                  Code
                </a>
              </Button>
            ) : null}

            {project.demo ? (
              <Button size="sm" className="h-9 rounded-full" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-4 w-4" />
                  Demo
                </a>
              </Button>
            ) : null}

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto h-9 rounded-full text-xs gap-1.5 hover:bg-muted/40"
                >
                  <span>Details</span>
                  <Info className="h-3.5 w-3.5" />
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px] md:max-w-[620px]">
                <DialogHeader>
                  <DialogTitle className="text-xl flex items-center gap-2">
                    {project.title}
                    <Badge
                      className={`ml-2 text-xs ${
                        project.status === "Completed"
                          ? "bg-green-500/15 text-green-400"
                          : project.status === "In Progress"
                            ? "bg-sky-500/15 text-sky-300"
                            : project.status === "Maintaining"
                              ? "bg-violet-500/15 text-violet-300"
                              : "bg-muted/30 text-muted-foreground"
                      }`}
                    >
                      {project.status || "Unknown"}
                    </Badge>
                  </DialogTitle>
                  <DialogDescription className="text-base mt-2">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 grid gap-6">
                  {project.date ? (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Created: {formatDate(project.date)}</span>
                    </div>
                  ) : null}

                  {project.image ? (
                    <div className="relative w-full h-52 overflow-hidden rounded-xl border border-border/40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Code className="h-4 w-4" /> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStacks.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-muted/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.blogSlugs && project.blogSlugs.length > 0 ? (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium flex items-center gap-2">
                        <Sparkles className="h-4 w-4" /> Related Articles
                      </h4>
                      <RelatedBlogLinks blogSlugs={project.blogSlugs} />
                    </div>
                  ) : null}
                </div>

                <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3">
                  {project.github ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  ) : null}
                  {project.demo ? (
                    <Button size="sm" className="w-full sm:w-auto" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </a>
                    </Button>
                  ) : null}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
