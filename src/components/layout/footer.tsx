import { Github, Mail, Linkedin } from "lucide-react";
import dayjs from "dayjs";
import { personalInfo } from "@/data";
import { cn } from "@/lib/utils";

export default function Footer() {
  const socialLinks = [
    { href: personalInfo.contact.github, icon: Github, label: "GitHub Profile" },
    { href: personalInfo.contact.linkedin, icon: Linkedin, label: "LinkedIn Profile" },
    { href: `mailto:${personalInfo.contact.email}`, icon: Mail, label: "Send Email" },
  ];

  return (
    <footer className="relative border-t border-border/30 bg-background/10 py-10 backdrop-blur">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hud-panel-lines opacity-[0.20]" />
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {dayjs().year()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="mt-5 flex justify-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }, index) => (
            <a
              key={index}
              href={href}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/55 bg-background/12 text-muted-foreground backdrop-blur",
                "transition-colors hover:border-border/80 hover:bg-background/20 hover:text-foreground",
              )}
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
} 
