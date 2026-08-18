'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Client Work', id: 'client-work' },
  { label: 'Certifications', id: 'certifications' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  
  // Keep track of DOM nodes for the desktop nav buttons to measure them
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    // Add hero to the observed list so we can null out the active indicator when at the very top
    const sectionIdsToTrack = ['hero', ...navItems.map(item => item.id)];
    
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length === 0) return;

        // Find the entry closest to the top of the viewport
        const topmost = intersecting.reduce((prev, current) => {
          return current.boundingClientRect.top < prev.boundingClientRect.top ? current : prev;
        });

        if (topmost.target.id === 'hero') {
          setActiveSectionId(null);
        } else {
          setActiveSectionId(topmost.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIdsToTrack.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full bg-bg/90 backdrop-blur-md border-b border-cardBorder z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => scrollTo('hero')}
          className="text-xl font-bold text-gradient-accent"
        >
          SPrav
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          
          <div className="relative flex items-center gap-5 lg:gap-6">
            {navItems.map((item) => {
              const isActive = activeSectionId === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    if (el) buttonRefs.current.set(item.id, el);
                  }}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm transition-colors duration-150 py-1 ${
                    isActive 
                      ? 'text-accent font-semibold' 
                      : 'font-medium text-textSecondary hover:text-accent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            {/* Animated Pill Indicator */}
            {activeSectionId && buttonRefs.current.has(activeSectionId) && (
              <motion.div
                layoutId="navIndicator"
                className="absolute bottom-0 h-[2px] bg-accent rounded-full"
                initial={false}
                animate={{
                  left: buttonRefs.current.get(activeSectionId)?.offsetLeft || 0,
                  width: buttonRefs.current.get(activeSectionId)?.offsetWidth || 0,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            )}
          </div>

          {/* Social Icon Buttons (GitHub & LinkedIn) */}
          <div className="flex items-center gap-2 pl-2 border-l border-cardBorder/80">
            <a
              href="https://github.com/SVSPraveen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-bgAlt border border-cardBorder text-textSecondary hover:text-accent hover:border-accent/40 hover:bg-white transition-all duration-150 shadow-sm"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/svs-praveen-s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-bgAlt border border-cardBorder text-textSecondary hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-white transition-all duration-150 shadow-sm"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="bg-accent text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-accentHover transition-colors duration-150 shadow-sm"
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="https://github.com/SVSPraveen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-bgAlt border border-cardBorder text-textSecondary hover:text-accent"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/svs-praveen-s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-bgAlt border border-cardBorder text-textSecondary hover:text-[#0A66C2]"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-textSecondary hover:text-accent focus:outline-none ml-1 p-1"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-cardBorder shadow-lg overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {[...navItems, { label: 'Contact', id: 'contact' }].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left py-3 border-b border-cardBorder/50 last:border-none text-textSecondary hover:text-accent font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Social Buttons in Drawer */}
              <div className="flex items-center gap-3 pt-3 pb-1 border-t border-cardBorder/60 mt-2">
                <a
                  href="https://github.com/SVSPraveen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-bgAlt border border-cardBorder text-textSecondary hover:text-accent font-medium text-sm transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/svs-praveen-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-bgAlt border border-cardBorder text-textSecondary hover:text-[#0A66C2] font-medium text-sm transition-all"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

