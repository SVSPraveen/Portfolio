"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 relative overflow-hidden bg-[#0a0f1e]/50">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#7b2fff] to-transparent opacity-50" />

          {/* Experience Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center md:justify-between w-full mb-12 pl-16 md:pl-0"
          >
            {/* Left side (Date for Desktop, empty for mobile handled by flex) */}
            <div className="hidden md:flex md:w-[45%] justify-end pr-8">
              <span className="text-[#00d4ff] font-semibold text-lg tracking-wide uppercase">March 2026 – Present</span>
            </div>

            {/* Timeline Icon */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#0a0f1e] border-4 border-[#00d4ff] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                <Briefcase size={20} className="text-white" />
              </div>
            </div>

            {/* Right side (Card Content) */}
            <div className="w-full md:w-[45%] md:pl-8">
              <div className="glass p-6 md:p-8 rounded-3xl hover:bg-white/5 transition-colors group">
                <span className="md:hidden text-[#00d4ff] font-semibold text-sm tracking-wide uppercase mb-2 block">March 2026 – Present</span>
                <h3 className="text-2xl font-bold text-white mb-1">AI/ML Engineer Intern</h3>
                <h4 className="text-lg text-gray-400 mb-4 font-medium">Mobcoder</h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-3">
                  Built and deployed <span className="text-[#00d4ff] font-semibold">two production-grade RAG platforms</span> spanning the financial and healthcare domains.
                </p>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                  Worked across the AI stack — retrieval pipelines, agentic orchestration, vector/graph databases, and safety guardrails — to ship secure, low-latency conversational AI systems.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
