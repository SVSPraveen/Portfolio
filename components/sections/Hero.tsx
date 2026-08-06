'use client';

import { motion, Variants } from 'framer-motion';
import { Sparkles, ArrowUpRight, Download, Mail } from 'lucide-react';
import IntentRouter from '@/components/ui/IntentRouter';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Background radial gradient */}
      <div 
        className="pointer-events-none absolute inset-0 z-[-1]"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.04) 30%, transparent 70%)'
        }}
      />

      <div className="mx-auto max-w-4xl px-4 py-24 md:py-32 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-semibold tracking-wider text-accent uppercase">
              AI/ML ENGINEER BUILDING PRACTICAL GENAI SYSTEMS
            </span>
          </motion.div>

          {/* Headings */}
          <motion.h1 variants={itemVariants} className="flex flex-col items-center mb-6">
            <span className="text-6xl md:text-7xl font-extrabold text-gradient-accent mb-2">
              SVS Praveen
            </span>
            <span className="text-lg md:text-xl font-normal text-textSecondary">
              Seshanagottu Venkata Sujith Praveen
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="max-w-2xl text-base md:text-lg text-textSecondary mb-10 leading-relaxed">
            I build AI systems that route intelligently instead of guessing. Turning production-grade RAG, multi-agent orchestration, and scalable backends into systems that actually ship.
          </motion.p>

          {/* Router */}
          <motion.div variants={itemVariants} className="w-full mb-12">
            <IntentRouter />
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-accent text-white font-medium hover:opacity-90 transition-opacity min-w-[160px]"
            >
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              View Projects
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-accent text-accent font-medium hover:bg-bgAlt transition-colors min-w-[160px]"
            >
              <Download className="w-5 h-5" />
              View Resume
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-accent text-accent font-medium hover:bg-bgAlt transition-colors min-w-[160px]"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
