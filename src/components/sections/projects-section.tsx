"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Archive, ArrowRight } from "lucide-react";

import { projects } from "@/data";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SectionWrapper } from "@/components/ux/section-wrapper";

const grid = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow={
        <>
          <Archive className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground/80">Mission Archive</span>
        </>
      }
      title="Case Files"
      description="Each project is stored as a mission file: preview, stack, timeline, and actions."
    >
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          className="rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
          asChild
        >
          <Link href="/projects">
            See All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
