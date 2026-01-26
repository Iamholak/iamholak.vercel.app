"use client";

import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Sep 2025 — Present",
    title: "SIWES Intern",
    company: "GAC Motors / Lagride",
    description: [
      "Works on Trim-Line for vehicle assembly, ensuring quality and precision in production.",
      "Conducted daily vehicle inspections at LAGRIDE (Alausa), ensuring compliance with quality standards and safety requirements.",
      "Assisted the Fleet Management Department, supporting fleet operations and maintenance coordination.",
    ],
    skills: ["Vehicle Assembly", "Quality Control", "Fleet Management", "Inspection"],
  },
  {
    period: "Mar 2024 — Jul 2024",
    title: "SIWES Intern",
    company: "GAC Motors",
    description: [
      "Contributed to automotive trim line assembly operations, installing vehicle lighting systems, dash cameras, and in-car multimedia systems.",
      "Performed mechanical assembly and disassembly tasks using pneumatic and power tools.",
      "Followed SOPs, quality control standards, and safety regulations.",
    ],
    skills: ["Automotive Assembly", "Electrical Installation", "Power Tools", "SOPs"],
  },
  {
    period: "Jan 2022 — Apr 2023",
    title: "Machine Operator",
    company: "Lagnes Prints",
    description: [
      "Operated and monitored large-format industrial printing machines for banners, stickers, and related materials.",
      "Performed preventive maintenance, troubleshooting, and machine calibration.",
      "Applied knowledge of electro-mechanical systems and heat press finishing.",
    ],
    skills: ["Industrial Machines", "Maintenance", "QA/QC", "Troubleshooting"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Section Background Effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Experience
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-[76px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8 pl-6 md:pl-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-[76px] w-3 h-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_15px_oklch(0.7_0.18_250_/_0.6)] group-hover:scale-150 transition-transform" />
      
      <div className="text-sm text-muted-foreground font-mono hidden md:block">
        {experience.period}
      </div>
      
      <div className="glow-card rounded-xl p-6">
        <p className="text-sm text-muted-foreground font-mono md:hidden mb-2">
          {experience.period}
        </p>
        <h3 className="text-foreground font-medium text-lg group-hover:text-primary transition-colors mb-1 flex items-center gap-2">
          {experience.title}
          <span className="text-muted-foreground">·</span>
          <span className="text-primary">{experience.company}</span>
          {experience.companyUrl && (
            <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </h3>
        <ul className="text-muted-foreground text-sm space-y-2 mt-4 mb-5">
          {experience.description.map((desc, i) => (
            <li key={i} className="leading-relaxed flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
              {desc}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
