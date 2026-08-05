"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-[#00d4ff]/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={120} className="text-[#00d4ff]" />
            </div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7b2fff]/20 text-[#7b2fff] border border-[#7b2fff]/30 mb-4 uppercase tracking-wider">
                2023 – 2027
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">B.Tech, Information Technology</h3>
              <h4 className="text-lg text-gray-400 mb-6 font-medium">M.L.V. Textile & Engineering College, Bhilwara (Raj.)</h4>
              
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 w-fit px-5 py-3 rounded-2xl">
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">CGPA</span>
                <span className="text-2xl font-bold text-gradient">8.77</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-[#00d4ff]/30 transition-colors"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Senior Secondary (12th)</h3>
                <h4 className="text-md text-gray-400 font-medium">S.S.N.V.P. Inter College, Karkauli, Pinahat, Agra (UP)</h4>
              </div>
              <div className="flex items-center gap-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 uppercase tracking-wider">
                  2022 – 2023
                </span>
                <div className="text-xl font-bold text-white">69%</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-[#00d4ff]/30 transition-colors"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Secondary (10th)</h3>
                <h4 className="text-md text-gray-400 font-medium">Manglik Shiksha Kendra, Bamrouli, Fatehabad, Agra (UP)</h4>
              </div>
              <div className="flex items-center gap-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 uppercase tracking-wider">
                  2020 – 2021
                </span>
                <div className="text-xl font-bold text-white">68.7%</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
