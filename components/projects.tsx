"use client";

import React, { useEffect, useRef, useState } from "react";
import { Zap, Globe, ArrowUpRight, MonitorSmartphone } from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
  icon: React.ReactNode;
  featured?: boolean;
  previewType?: "web" | "app";
  appScreenshots?: { src: string; alt: string }[];
  previewImage?: string;
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
  {
    title: "Nova Edge Website Design",
    description: "Web Design Project",
    details: [
      "Designed and developed a modern promotional website with a clean brand-focused layout.",
      "Optimized sections for product storytelling and conversion-oriented CTA placement.",
      "Deployed the experience on Vercel for fast global delivery.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    link: "https://nova-edge-website-design.vercel.app/",
    icon: <Globe className="w-6 h-6" />,
    previewType: "web",
  },
  {
    title: "Commax Mobile App",
    description: "Product Landing Website",
    details: [
      "Built a focused landing page to present mobile app value, core features, and onboarding flow.",
      "Structured content hierarchy for fast scanning on desktop and mobile devices.",
      "Published as a production-ready web experience with responsive behavior.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://v0-commax-mobile-app.vercel.app/",
    icon: <Globe className="w-6 h-6" />,
    previewType: "web",
  },
  {
    title: "Chakamit",
    description: "Business Website",
    details: [
      "Created a polished business-facing website with clear service communication.",
      "Focused on readability, section rhythm, and confidence-building presentation.",
      "Deployed and configured for stable public access.",
    ],
    technologies: ["React", "Tailwind CSS", "UI/UX", "Vercel"],
    link: "https://chakamit.vercel.app/",
    icon: <Globe className="w-6 h-6" />,
    previewType: "web",
  },
  {
    title: "Flixorb",
    description: "Web Platform",
    details: [
      "Built and deployed a modern web experience with a clean, user-focused interface.",
      "Structured sections for clear navigation and improved content discovery.",
      "Optimized for responsive behavior across desktop and mobile devices.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    link: "https://flixorb.vercel.app/",
    icon: <Globe className="w-6 h-6" />,
    previewType: "web",
    previewImage: "/images/projects/clueinterview/flixorb.png",
  },
  {
    title: "ClueInterview Web",
    description: "Interview Assistant Website",
    details: [
      "Built a web entry point for ClueInterview with guided onboarding and download access.",
      "Focused on communicating product purpose and user flow quickly.",
      "Hosted on Vercel for accessible distribution.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    link: "https://clueinterview.vercel.app/",
    icon: <Globe className="w-6 h-6" />,
    previewType: "web",
  },
  {
    title: "Superteam Acedemy",
    description: "Web Platform",
    details: [
      "Built and deployed a focused web experience with clear learning-oriented structure.",
      "Designed sections for discoverability, readability, and straightforward navigation.",
      "Optimized for responsiveness and smooth access across devices.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    link: "https://superteamacademy.vercel.app/",
    icon: <Globe className="w-6 h-6" />,
    previewType: "web",
  },
  {
    title: "ClueInterview Desktop App",
    description: "Desktop Application Preview",
    details: [
      "Real-time interview session interface with AI-assisted conversation support.",
      "Dedicated profile, history, and settings screens for workflow continuity.",
      "Stealth visibility and transparency controls designed for practical day-to-day use.",
    ],
    technologies: ["Electron", "React", "TypeScript", "AI Integration"],
    link: "https://clueinterview.vercel.app/",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    previewType: "app",
    appScreenshots: [
      { src: "/images/projects/clueinterview/settings.png", alt: "ClueInterview settings screen" },
      { src: "/images/projects/clueinterview/profile.png", alt: "ClueInterview profile screen" },
      { src: "/images/projects/clueinterview/session.png", alt: "ClueInterview live session screen" },
      { src: "/images/projects/clueinterview/history.png", alt: "ClueInterview history screen" },
    ],
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
        
        <div className="grid gap-6 md:grid-cols-2">
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
      onMouseMove={project.previewType === "web" ? undefined : handleMouseMove}
      className={`group relative overflow-hidden rounded-xl transition-all duration-700 h-full ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${project.featured ? 'md:col-span-2' : ''}`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Spotlight Effect */}
      {project.previewType !== "web" && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.7 0.18 250 / 0.15), transparent 40%)`,
          }}
        />
      )}
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl p-px bg-gradient-to-br from-primary/50 via-transparent to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0">
        <div className="h-full w-full rounded-xl bg-card" />
      </div>
      
      <div className="relative z-10 glow-card rounded-xl p-6 md:p-8 h-full">
        {project.previewType === "web" && project.link ? (
          <div className="h-full flex flex-col">
            <div className="relative z-30 flex items-center justify-between gap-3 mb-4">
              <h3 className="text-foreground font-semibold text-xl group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                Open <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative z-20 overflow-hidden rounded-md border border-border/80 pointer-events-auto flex-1 min-h-[420px]">
              {project.previewImage ? (
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className="w-full h-[420px] md:h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <iframe
                  src={project.link}
                  title={`${project.title} live preview`}
                  loading="lazy"
                  className="w-full h-[420px] md:h-full bg-background pointer-events-auto"
                  referrerPolicy="no-referrer-when-downgrade"
                  scrolling="yes"
                />
              )}
            </div>
          </div>
        ) : (
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
              {project.previewType === "app" && project.appScreenshots && (
                <div className="mb-6 rounded-lg border border-border/80 bg-card/60 p-3">
                  <div className="mb-2 text-xs uppercase tracking-wider text-primary/80">
                    App Screens
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {project.appScreenshots.map((shot, i) => (
                      <div key={i} className="overflow-hidden rounded-md border border-border/80 bg-secondary/30">
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          className="h-44 w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
        )}
      </div>
    </div>
  );

  if (project.link && project.previewType !== "web") {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
