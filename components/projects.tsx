"use client";

import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Zap, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Solar-Powered Printer System",
    description: "Academic Final-Year Engineering Project",
    details: [
      "Designed and constructed a solar-powered printing system as an alternative energy solution.",
      "Integrated photovoltaic (PV) panels, charge controller, battery storage, and power regulation circuitry.",
      "Conducted system testing, performance evaluation, and fault analysis.",
    ],
    technologies: ["PV Systems", "Power Electronics", "Circuit Design", "Energy Conversion"],
    icon: <Zap className="w-6 h-6" />,
    featured: true,
  },
  {
    title: "Personal Portfolio Website",
    description: "Web Development Project",
    details: [
      "Designed, developed, and deployed a personal portfolio website to showcase projects and skills.",
      "Implemented responsive web design for cross-device compatibility.",
      "Managed domain configuration and ongoing content updates for holakinc.com.ng.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Web Hosting"],
    link: "https://holakinc.com.ng",
    icon: <Globe className="w-6 h-6" />,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background Effect */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const CardContent = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${project.featured ? 'md:col-span-2' : ''}`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.7 0.18 250 / 0.15), transparent 40%)`,
        }}
      />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl p-px bg-gradient-to-br from-primary/50 via-transparent to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="h-full w-full rounded-xl bg-card" />
      </div>
      
      <div className="relative glow-card rounded-xl p-6 md:p-8">
        <div className="flex items-start gap-5">
          <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20 animate-glow-pulse">
            {project.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-foreground font-semibold text-xl group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              {project.link && (
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              )}
              {project.featured && (
                <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded border border-primary/30">
                  Featured
                </span>
              )}
            </div>
            <p className="text-sm text-primary/80 mb-4 font-medium">{project.description}</p>
            <ul className="text-muted-foreground text-sm space-y-3 mb-6">
              {project.details.map((detail, i) => (
                <li key={i} className="leading-relaxed flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
