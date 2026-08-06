'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <nav className="relative w-full bg-bg border-b border-cardBorder z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => scrollTo('hero')}
          className="text-xl font-bold text-gradient-accent"
        >
          SPrav
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          
          <div className="relative flex items-center gap-6">
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

          <button
            onClick={() => scrollTo('contact')}
            className="bg-accent text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-accentHover transition-colors duration-150"
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-textSecondary hover:text-accent focus:outline-none"
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
            <div className="flex flex-col px-4 py-2">
              {[...navItems, { label: 'Contact', id: 'contact' }].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left py-4 border-b border-cardBorder/50 last:border-none text-textSecondary hover:text-accent font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
