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
    <section id="about" className="py-24 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-12">
          <span className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            An AI engineer who thinks in systems, not demos.
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Main Narrative) */}
          <motion.div
            className="md:col-span-7 lg:col-span-8 bg-white/70 backdrop-blur-md rounded-2xl border border-cardBorder shadow-sm p-6 md:p-8 flex flex-col gap-6"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-textSecondary leading-relaxed text-base md:text-lg">
              I keep building the same pattern at different scales — a router that reads intent and dispatches to the right specialist instead of forcing one model to do everything. You'll see it in a multi-agent system that routes financial queries to specialized analysis agents, and in the very intent router at the top of this page. It's not a coincidence; it's how I think about hard problems — break them into the smallest correct piece, then route to it deliberately.
            </p>
            <p className="text-textSecondary leading-relaxed text-base md:text-lg">
              I care as much about what happens when things go wrong as when they go right. Every system I ship fails closed, not open — from role-based access and jailbreak-resistant guardrails in a clinical RAG system, to a hallucination-detection layer that scores every AI-generated answer before it reaches a user. My focus is architecting cross-domain AI applications and scalable backend systems that hold up under real conditions, not just demo conditions.
            </p>
          </motion.div>

          {/* Right Column (Sidebar) */}
          <motion.div
            className="md:col-span-5 lg:col-span-4 bg-white/70 backdrop-blur-md rounded-2xl border border-cardBorder shadow-sm flex flex-col"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            
            {/* Fact 1 */}
            <div className="flex gap-4 p-6 border-b border-cardBorder">
              <div className="mt-1">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-textSecondary mb-1">Education</span>
                <span className="text-sm font-medium text-textPrimary leading-snug">
                  B.Tech, Computer Science & Engineering — Amity University, Noida (2022–2026), CGPA 7.4
                </span>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="flex gap-4 p-6 border-b border-cardBorder">
              <div className="mt-1">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-textSecondary mb-1">Location</span>
                <span className="text-sm font-medium text-textPrimary">
                  Mumbai, India
                </span>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="flex gap-4 p-6 border-b border-cardBorder">
              <div className="mt-1">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-textSecondary mb-1">Status</span>
                <span className="text-sm font-medium text-textPrimary leading-snug">
                  Open to opportunities / Actively looking
                </span>
              </div>
            </div>

            {/* Fact 4 */}
            <div className="flex gap-4 p-6">
              <div className="mt-1">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-textSecondary mb-1">Focus</span>
                <span className="text-sm font-medium text-textPrimary leading-snug">
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
