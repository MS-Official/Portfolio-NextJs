"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Globe, Linkedin, Mail, MapPin, Phone, Swords } from "lucide-react";

import { personalInfo } from "@/data";
import { SectionWrapper } from "@/components/ux/section-wrapper";
import { HudPanel } from "@/components/game/hud-panel";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send message");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow={
        <>
          <Swords className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground/80">
            Final Boss CTA
          </span>
        </>
      }
      title="Ready to start a mission together?"
      description="Recruiter, client, or collaborator—send a message and we’ll take it from there."
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <HudPanel className="p-6 sm:p-7">
            <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
              CONTACT CHANNELS
            </div>
            <div className="mt-6 space-y-4">
              {[
                { icon: Mail, label: "Email", value: personalInfo.contact.email, href: `mailto:${personalInfo.contact.email}` },
                { icon: Phone, label: "Phone", value: personalInfo.contact.phone, href: `tel:${personalInfo.contact.phone}` },
                { icon: MapPin, label: "Location", value: personalInfo.contact.location },
                { icon: Linkedin, label: "LinkedIn", value: personalInfo.contact.linkedin, href: personalInfo.contact.linkedin },
                { icon: Globe, label: "Portfolio", value: personalInfo.contact.personalWebsite, href: personalInfo.contact.personalWebsite },
                { icon: Github, label: "GitHub", value: personalInfo.contact.github, href: personalInfo.contact.github },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/10 px-4 py-4"
                >
                  <div className="rounded-xl border border-border/50 bg-background/10 p-3">
                    <Icon className="h-5 w-5 text-primary/85" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                      {label.toUpperCase()}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 block break-words text-sm text-foreground/90 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="mt-1 break-words text-sm text-foreground/90">
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </HudPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <HudPanel className="p-6 sm:p-7">
            <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
              MISSION REQUEST FORM
            </div>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-2xl border border-border/50 bg-background/10 px-4 text-sm text-foreground outline-none backdrop-blur transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-2xl border border-border/50 bg-background/10 px-4 text-sm text-foreground outline-none backdrop-blur transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-2xl border border-border/50 bg-background/10 px-4 py-3 text-sm text-foreground outline-none backdrop-blur transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button
                type="submit"
                className="h-11 w-full rounded-2xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Mission Request"}
              </Button>

              {submitStatus === "success" ? (
                <p className="text-center text-sm text-emerald-400">
                  Mission request sent successfully!
                </p>
              ) : null}
              {submitStatus === "error" ? (
                <p className="text-center text-sm text-red-400">
                  Failed to send request. Please try again.
                </p>
              ) : null}
            </form>
          </HudPanel>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

