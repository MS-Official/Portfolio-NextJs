"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
  
    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
  
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
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together or have questions? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-muted/30 p-3 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.contact.email}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-muted/30 p-3 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href={`tel:${personalInfo.contact.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-muted/30 p-3 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">{personalInfo.contact.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-muted/30 p-3 rounded-full">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a 
                    href={`${personalInfo.contact.linkedin}`} 
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {personalInfo.contact.linkedin}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-muted/30 p-3 rounded-full">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Portfolio</h4>
                  <a
                    href={`${personalInfo.contact.personalWebsite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {personalInfo.contact.personalWebsite}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-muted/30 p-3 rounded-full">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a 
                    href={`${personalInfo.contact.github}`} 
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {personalInfo.contact.github}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg blur-sm opacity-50" />
            <div className="relative bg-background border border-border/40 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted/30 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted/30 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted/30 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-green-500 text-sm text-center">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
