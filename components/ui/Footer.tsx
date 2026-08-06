'use client';

import { MapPin, ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-white/80 backdrop-blur-md border-t border-cardBorder/60 py-10 px-4 relative overflow-hidden">
      {/* Top Gradient Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Brand & Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-2 text-center md:text-left items-center md:items-start">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-gradient-accent">
                SVS Praveen
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold">
                Portfolio
              </span>
            </div>
            
            <p className="text-xs text-textSecondary font-medium">
              Seshanagottu Venkata Sujith Praveen — AI/ML Engineer & Agentic AI Developer
            </p>

            <div className="flex items-center gap-3 mt-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] text-textSecondary bg-bgAlt px-2.5 py-1 rounded-full border border-cardBorder">
                <MapPin className="w-3 h-3 text-accent" />
                <span>Mumbai, India</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-textPrimary bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-medium">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Available for Roles</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-2">
            <h5 className="text-[11px] font-bold text-textPrimary uppercase tracking-widest">
              Quick Links
            </h5>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-xs text-textSecondary font-medium">
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-accent transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-accent transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-accent transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('client-work')} className="hover:text-accent transition-colors">
                Client Work
              </button>
              <button onClick={() => scrollToSection('certifications')} className="hover:text-accent transition-colors">
                Certifications
              </button>
            </div>
          </div>

          {/* Column 3: Social & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/SVSPraveen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white border border-cardBorder text-textPrimary hover:bg-accent hover:text-white hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/svs-praveen-s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white border border-cardBorder text-textPrimary hover:bg-accent hover:text-white hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:svspraveens@gmail.com"
                aria-label="Email Praveen"
                className="p-2.5 rounded-xl bg-white border border-cardBorder text-textPrimary hover:bg-accent hover:text-white hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-cardBorder/60 text-xs text-textSecondary">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} SVS Praveen. Designed & built with Next.js 14, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-cardBorder text-textPrimary hover:border-accent hover:text-accent transition-colors duration-200 shadow-sm"
          >
            <span className="font-semibold text-xs">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-accent" />
          </button>
        </div>

      </div>
    </footer>
  );
}
