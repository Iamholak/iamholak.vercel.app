"use client";

import React from "react"

import { Mail, Linkedin, ExternalLink, ArrowUp, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-primary mb-6 uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Contact
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
              If you&apos;d like to discuss a project, job opportunity, or just
              say hello, I&apos;m always open to connect.
            </p>
            <Link
              href="mailto:Olawalekasali1@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-[0_0_25px_oklch(0.7_0.18_250_/_0.5)] transition-all group"
            >
              <Mail className="w-4 h-4 group-hover:animate-pulse" />
              Get in Touch
            </Link>
          </div>
          <div>
            <h2 className="text-sm font-medium tracking-widest text-primary mb-6 uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Links
            </h2>
            <div className="space-y-4">
              <FooterLink
                href="mailto:Olawalekasali1@gmail.com"
                label="Mail"
                value="Olawalekasali1@gmail.com"
              />
              <FooterLink
                href="https://linkedin.com/in/kasali-olawale-habeeb"
                label="LinkedIn"
                value="@kasali-olawale-habeeb"
                external
              />
              <FooterLink
                href="https://holakinc.com.ng"
                label="Website"
                value="holakinc.com.ng"
                external
              />
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-sm font-medium tracking-widest text-primary mb-4 uppercase">
            Certifications
          </h3>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-foreground font-medium">AutoCAD Certification</span>
            <span className="text-muted-foreground">— CADD Academy</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {new Date().getFullYear()} Kasali Olawale. Built with{" "}
            <Heart className="w-4 h-4 text-primary inline animate-pulse" />
          </p>
          <div className="flex items-center gap-4">
            <SocialIcon href="https://linkedin.com/in/kasali-olawale-habeeb" label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="mailto:Olawalekasali1@gmail.com" label="Email">
              <Mail className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://holakinc.com.ng" label="Website">
              <ExternalLink className="w-5 h-5" />
            </SocialIcon>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_oklch(0.7_0.18_250_/_0.3)] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  value,
  external,
}: {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 group">
      <span className="text-sm text-muted-foreground w-20">{label}</span>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
      >
        {value}
        {external && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
      </Link>
    </div>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_oklch(0.7_0.18_250_/_0.3)] transition-all"
      aria-label={label}
    >
      {children}
    </Link>
  );
}
