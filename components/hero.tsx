"use client";

import React from "react"

import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.25_0.03_250_/_0.3)_1px,transparent_1px),linear-gradient(90deg,oklch(0.25_0.03_250_/_0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Name and Navigation */}
          <div className={`lg:sticky lg:top-24 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Profile Image */}
            <div className="mb-8 relative inline-block">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glow-card animate-glow-pulse">
                <Image
                  src="/images/profile.jpg"
                  alt="Kasali Olawale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-primary/50">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-foreground font-medium">Available</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              <span className="inline-block">Kasali</span>{" "}
              <span className="inline-block text-primary animate-text-glow">Olawale</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary animate-shimmer" />
              Electronics Engineer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              I build innovative technical solutions, visually engaging designs,
              and high-quality engineering systems.
            </p>

            {/* Navigation */}
            <nav className="space-y-3 mb-12">
              <NavLink href="#about" label="ABOUT" delay={0} />
              <NavLink href="#experience" label="EXPERIENCE" delay={1} />
              <NavLink href="#projects" label="PROJECTS" delay={2} />
              <NavLink href="#skills" label="SKILLS" delay={3} />
            </nav>

            {/* Social Links */}
            <div className={`flex items-center gap-5 ${mounted ? 'animate-fade-in-up stagger-5' : 'opacity-0'}`}>
              <SocialLink href="https://linkedin.com/in/kasali-olawale-habeeb" label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="mailto:Olawalekasali1@gmail.com" label="Email">
                <Mail className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://holakinc.com.ng" label="Portfolio Website">
                <ExternalLink className="w-5 h-5" />
              </SocialLink>
              <Link
                href="/resume.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-[0_0_20px_oklch(0.7_0.18_250_/_0.5)] transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </Link>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className={`space-y-6 ${mounted ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            <div className="glow-card rounded-xl p-6 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m a multidisciplinary professional passionate about crafting
                innovative solutions across{" "}
                <span className="text-primary font-medium">
                  electronics engineering
                </span>
                ,{" "}
                <span className="text-primary font-medium">
                  software development
                </span>
                , and{" "}
                <span className="text-primary font-medium">
                  graphic design
                </span>
                . My work lies at the intersection of technical precision and
                creative problem-solving.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently, I&apos;m completing my internship at{" "}
                <span className="text-foreground font-medium">GAC Motors</span> and{" "}
                <span className="text-foreground font-medium">Lagride</span>, where
                I work on automotive trim line assembly, vehicle inspections, and
                fleet management operations.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I hold a{" "}
                <span className="text-foreground font-medium">
                  National Diploma in Electrical Electronics Engineering
                </span>{" "}
                from Yaba College of Technology. My hands-on experience spans
                circuit design, power systems, automotive operations, and web
                development.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <ContactCard icon={<MapPin className="w-5 h-5" />} label="Location" value="Lagos, Nigeria" />
              <ContactCard icon={<Phone className="w-5 h-5" />} label="Phone" value="+234 901 7981 964" />
              <ContactCard 
                icon={<Mail className="w-5 h-5" />} 
                label="Email" 
                value="Olawalekasali1@gmail.com"
                href="mailto:Olawalekasali1@gmail.com" 
              />
              <ContactCard 
                icon={<ExternalLink className="w-5 h-5" />} 
                label="Website" 
                value="holakinc.com.ng"
                href="https://holakinc.com.ng" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function NavLink({ href, label, delay }: { href: string; label: string; delay: number }) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all stagger-${delay + 1}`}
    >
      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all" />
      <span className="text-xs tracking-widest font-medium group-hover:text-primary transition-colors">{label}</span>
    </Link>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_oklch(0.7_0.18_250_/_0.3)] transition-all"
      aria-label={label}
    >
      {children}
    </Link>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="glow-card p-4 rounded-lg flex items-center gap-4 group">
      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}>
        {content}
      </Link>
    );
  }

  return content;
}
