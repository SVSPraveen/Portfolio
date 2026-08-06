'use client';

import { motion, Variants } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
  const leftVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 } 
    }
  };

  return (
    <section id="about" className="py-24 px-4 w-full relative overflow-hidden">
      {/* Background Subtle Glow Accent */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-12">
          <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            An AI engineer who thinks in systems, not demos.
          </h2>
        </div>

        {/* Two-column layout with equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (Main Narrative) */}
          <motion.div
            className="md:col-span-7 lg:col-span-8 h-full bg-white/80 backdrop-blur-md rounded-2xl border border-cardBorder/80 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 p-6 md:p-8 flex flex-col justify-center gap-6"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-textSecondary leading-relaxed text-base md:text-lg">
              I keep building the same pattern at different scales — a router that reads intent and dispatches to the right specialist instead of forcing one model to do everything. You&apos;ll see it in a multi-agent system that routes financial queries to specialized analysis agents, and in the very intent router at the top of this page. It&apos;s not a coincidence; it&apos;s how I think about hard problems — break them into the smallest correct piece, then route to it deliberately.
            </p>
            <p className="text-textSecondary leading-relaxed text-base md:text-lg">
              I care as much about what happens when things go wrong as when they go right. Every system I ship fails closed, not open — from role-based access and jailbreak-resistant guardrails in a clinical RAG system, to a hallucination-detection layer that scores every AI-generated answer before it reaches a user. My focus is architecting cross-domain AI applications and scalable backend systems that hold up under real conditions, not just demo conditions.
            </p>
          </motion.div>

          {/* Right Column (Sidebar Quick Info) */}
          <motion.div
            className="md:col-span-5 lg:col-span-4 h-full bg-white/80 backdrop-blur-md rounded-2xl border border-cardBorder/80 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            
            {/* Fact 1 */}
            <div className="flex-1 flex items-center gap-4 p-5 md:p-6 border-b border-cardBorder/70">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-textSecondary font-semibold uppercase tracking-wider mb-0.5">Education</span>
                <span className="text-xs md:text-sm font-bold text-textPrimary leading-snug">
                  B.Tech, CSE — Amity University, Noida (2022–2026), CGPA 7.4
                </span>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="flex-1 flex items-center gap-4 p-5 md:p-6 border-b border-cardBorder/70">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-textSecondary font-semibold uppercase tracking-wider mb-0.5">Location</span>
                <span className="text-xs md:text-sm font-bold text-textPrimary">
                  Mumbai, India
                </span>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="flex-1 flex items-center gap-4 p-5 md:p-6 border-b border-cardBorder/70">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-textSecondary font-semibold uppercase tracking-wider mb-0.5">Status</span>
                <span className="text-xs md:text-sm font-bold text-textPrimary leading-snug">
                  Open to Opportunities / Actively Looking
                </span>
              </div>
            </div>

            {/* Fact 4 */}
            <div className="flex-1 flex items-center gap-4 p-5 md:p-6">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-textSecondary font-semibold uppercase tracking-wider mb-0.5">Focus</span>
                <span className="text-xs md:text-sm font-bold text-textPrimary leading-snug">
                  Agentic AI, RAG Systems, Scalable Backends
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
