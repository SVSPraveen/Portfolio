'use client';

import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Lock } from 'lucide-react';

export default function ClientWork() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    }
  };

  return (
    <section id="client-work" className="py-24 px-4 w-full relative overflow-hidden">
      {/* Background Subtle Glow Accent */}
      <div className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
            Client Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center max-w-2xl">
            Real client, real payments, delivered solo.
          </h2>
        </div>

        {/* Client Work Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full bg-white/80 backdrop-blur-md rounded-2xl border border-cardBorder/80 border-l-4 border-l-accent shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 p-6 md:p-8 flex flex-col"
        >
          {/* Title */}
          <h3 className="text-2xl font-bold text-textPrimary mb-3">
            Ajeevan Samarpan Parivar — NGO Website & Donor Platform
          </h3>
          
          {/* Description */}
          <p className="text-textSecondary leading-relaxed mb-6 text-base md:text-lg">
            Independently designed and built a full-stack website for an NGO from the ground up — starting with a 5-day throwaway prototype to meet an urgent launch deadline, then rebuilding it as a production React application with a Node.js/Express backend over the following weeks.
          </p>

          {/* Bullets */}
          <ul className="flex flex-col gap-3 mb-8">
            <li className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Integrated Razorpay for donation payments, handling real transactions end-to-end.</span>
            </li>
            <li className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Used MongoDB for structured contact-form and donation logging.</span>
            </li>
            <li className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Built a custom admin dashboard where the NGO could view and manage every contact submission and donation record without needing developer help.</span>
            </li>
            <li className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Delivered solo, end-to-end, in under 3 months — from prototype to production.</span>
            </li>
          </ul>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cardBorder px-3 py-1.5 text-sm bg-bg text-textSecondary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Private Project Badge */}
          <div className="flex items-center gap-1.5 mt-auto">
            <Lock className="w-4 h-4 text-textSecondary" />
            <span className="text-xs text-textSecondary font-medium uppercase tracking-wider">Private client project</span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
