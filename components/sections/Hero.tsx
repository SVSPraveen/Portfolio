'use client';

import { motion, Variants } from 'framer-motion';
import { Sparkles, Briefcase, FileText, Mail, ArrowDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import IntentRouter from '@/components/ui/IntentRouter';
import HeroIllustration from '@/components/ui/HeroIllustration';

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
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

      {/* SVG Background Illustration (Full-Screen Width Edge-to-Edge) */}
      <div className="pointer-events-none absolute inset-0 z-0 w-full h-full opacity-85">
        <HeroIllustration />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-4 md:py-8 text-center flex flex-col items-center justify-center min-h-[calc(100vh-76px)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full relative z-10"
        >
          {/* Profile Avatar */}
          <motion.div variants={itemVariants} className="mb-3 md:mb-4">
            <Image 
              src="/praveen-avatar-circular.png"
              alt="SVS Praveen"
              width={120}
              height={120}
              className="rounded-full object-cover w-[100px] h-[100px] md:w-[120px] md:h-[120px] ring-4 ring-accent/20 shadow-lg"
              priority
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-2 md:mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-semibold tracking-wider text-accent uppercase">
              AI/ML ENGINEER BUILDING PRACTICAL GENAI SYSTEMS
            </span>
          </motion.div>

          {/* Headings */}
          <motion.h1 variants={itemVariants} className="flex flex-col items-center mb-3">
            <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient-accent mb-1">
              SVS Praveen
            </span>
            <span className="text-sm md:text-base font-normal text-textSecondary">
              Seshanagottu Venkata Sujith Praveen
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="max-w-2xl text-xs md:text-sm text-textSecondary mb-4 md:mb-5 leading-relaxed">
            I build AI systems that route intelligently instead of guessing. Turning production-grade RAG, multi-agent orchestration, and scalable backends into systems that actually ship.
          </motion.p>

          {/* Router */}
          <motion.div variants={itemVariants} className="w-full mb-5 md:mb-6">
            <IntentRouter />
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="group flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl gradient-accent text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity min-w-[150px]"
            >
              <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              View Projects
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-accent text-accent text-sm md:text-base font-medium hover:bg-bgAlt transition-colors min-w-[150px]"
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
              View Resume
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="group flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-accent text-accent text-sm md:text-base font-medium hover:bg-bgAlt transition-colors min-w-[150px]"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              Contact Me
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
