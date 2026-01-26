"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Cpu,
  Code,
  Palette,
  FileText,
  Wrench,
  Users,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Electronics Engineering",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      "Circuit Design & Analysis",
      "Power Supply Systems (DC/AC)",
      "Solar PV Systems",
      "Battery Systems & Charge Controllers",
      "Electrical Testing & Troubleshooting",
      "CAD & Simulation Software",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Software Development",
    icon: <Code className="w-5 h-5" />,
    skills: [
      "HTML, CSS, JavaScript",
      "Website Development",
      "Domain Management",
      "Responsive Web Design",
      "Technical Problem-Solving",
    ],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Graphic Design",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      "Visual Design",
      "Brand Identity",
      "Digital Graphics",
      "Layout Design",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Technical Operations",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      "Machine Operations",
      "Automotive Assembly",
      "Vehicle Electrical Installation",
      "Industrial Printing",
      "Preventive Maintenance",
    ],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Content Writing",
    icon: <FileText className="w-5 h-5" />,
    skills: [
      "Technical Writing",
      "Content Creation",
      "Documentation",
      "Audience-Focused Materials",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Professional Skills",
    icon: <Users className="w-5 h-5" />,
    skills: [
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Project Coordination",
      "Quality Assurance",
    ],
    color: "from-accent/20 to-accent/5",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.7_0.18_250_/_0.05),transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Skills
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated Border Glow */}
      <div 
        className={`absolute -inset-px rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} 
      />
      
      <div className={`relative glow-card rounded-xl p-6 h-full ${isHovered ? 'animate-border-glow' : ''}`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:shadow-[0_0_15px_oklch(0.7_0.18_250_/_0.4)] transition-shadow">
            {category.icon}
          </div>
          <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">{category.title}</h3>
        </div>
        
        {/* Skills List */}
        <ul className="space-y-2.5">
          {category.skills.map((skill, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground flex items-center gap-3 group/item"
              style={{ 
                animationDelay: isVisible ? `${(index * 100) + (i * 50)}ms` : '0ms'
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_oklch(0.7_0.18_250_/_0.6)] transition-all" />
              <span className="group-hover/item:text-foreground transition-colors">{skill}</span>
            </li>
          ))}
        </ul>
        
        {/* Skill Count Badge */}
        <div className="absolute top-4 right-4 px-2 py-1 text-xs font-mono text-primary/60 bg-primary/5 rounded border border-primary/10">
          {category.skills.length} skills
        </div>
      </div>
    </div>
  );
}
