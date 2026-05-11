import ResumeViewerWithFallback from "@/app/resume/resume-viewer-fallback";
import ResumeDocument from "./resume-document";
import { domainPath, personalInfo } from "@/data";
import { Metadata } from "next";
import { HudPanel } from "@/components/game/hud-panel";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: `${personalInfo.name} | Resume`,
  description: `Professional resume of ${personalInfo.fullname}, showcasing experience, skills, and education.`,
  keywords: [
    "resume",
    "Mahdiya Shurafa",
    "software engineer",
    "professional resume",
    "experience",
    "skills",
    "education"
  ],
  authors: [{ name: personalInfo.name, url: domainPath }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} | Resume`,
    description: `Professional resume of ${personalInfo.fullname}, showcasing experience, skills, and education.`,
    url: `${domainPath}/resume`,
    siteName: `${personalInfo.name}'s Resume`,
    images: [
      {
        url: '/images/projects/portfolio.jpg',
        width: 1200,
        height: 630,
        alt: `Resume | ${personalInfo.fullname}`,
      }
    ],
    type: "website"
  },
  twitter: {
    title: `${personalInfo.name} | Resume`,
    description: `Professional resume of ${personalInfo.fullname}, showcasing experience, skills, and education.`,
    images: ['/images/projects/portfolio.jpg'],
    card: "summary_large_image",
    creator: personalInfo.name,
  },
  alternates: {
    canonical: `${domainPath}/resume`,
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Resume",
      name: `${personalInfo.name}'s Resume`,
      url: `${domainPath}/resume`,
      author: {
        "@type": "Person",
        name: personalInfo.name,
      },
    }),
  },
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <HudPanel className="p-6 sm:p-7" glow={false}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/10 px-3 py-1.5 text-xs text-muted-foreground">
              <FileText className="h-3.5 w-3.5 text-primary/90" />
              <span>RESUME VIEWER</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 md:text-4xl">
              Resume
            </h1>
            <p className="mt-4 text-muted-foreground max-w-3xl">
              Professional resume of {personalInfo.fullname}, showcasing experience, skills, and education.
            </p>
          </HudPanel>

          <HudPanel className="p-4 sm:p-5" glow={false}>
            <ResumeViewerWithFallback document={<ResumeDocument />} />
          </HudPanel>
        </div>
      </div>
    </div>
  );
} 
