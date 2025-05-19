"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const skills = [
  { name: "Java", level: 85 },              // Used in hospital system, 2D game
  { name: "JavaScript", level: 85 },        // Used in most web projects
  { name: "Next.js (React)", level: 80 },   // Used in QR-Barcode Generator, Team Codeme
  { name: "Python", level: 75 },            // Used in QR Code & Barcode Generators
  { name: "Git", level: 75 },               // Used consistently across all dev work
  { name: "PHP", level: 70 },               // Used in ShoeLand and ClassTask7_Nature
  { name: "MySQL", level: 70 },             // Used in hospital and SRMS systems
  { name: "C++", level: 60 },               // Coursework and possible mini projects
  { name: "Linux", level: 60 },             // Academic and development environment
  { name: "TypeScript", level: 50 },        // Not clearly reflected in your repos
  { name: "Gin (Go)", level: 30 },          // Not used in your current projects
  { name: "Flutter", level: 20 }            // Mentioned in studies, but no direct projects
]
.sort((a, b) => b.level - a.level)
.slice(0, 5); // Top 5 most proficient

const softSkills = [
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Fast Learner",
  "Effective Communication",
  "Curiosity & Continuous Learning",
  "Critical Thinking",
  "Attention to Detail",
  "Accountability & Ownership",
  "Creativity & Innovation",
  "Emotional Intelligence",
  "Self-Motivation",
  "Resilience in High-Pressure Environments",
  "Conflict Resolution",
  "Decision Making",
  "Strategic Thinking",
  "Goal-Oriented Mindset",
  "Organizational Skills",
  "Presentation Skills",
  "Client & Stakeholder Management",
  "Cross-Cultural Communication",
  "Growth Mindset",
  "Empathy & Active Listening",
  "Initiative & Proactiveness",
  "Flexibility to Change",
  "Open-Mindedness",
  "Prioritization",
  "Mentoring & Coaching"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I&apos;ve mastered throughout my professional journey.
          </p>
        </motion.div>
        
        <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="technical" className="text-foreground cursor-pointer">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft" className="text-foreground cursor-pointer">Soft Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={fadeIn} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="soft">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {softSkills.map((skill, index) => (
                <motion.div key={index} variants={fadeIn} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 