"use client";

import type { Project } from "@/types";
import { ProjectCard } from "@/components/project-card";

export function ProjectGameCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return <ProjectCard project={project} index={index} />;
}

