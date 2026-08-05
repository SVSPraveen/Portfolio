"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Database, CreditCard, BarChart2, Clock } from "lucide-react";

const clientWork = {
  title: "Ajeevan Samarpan Parivar — NGO Website & Donor Platform",
  description:
    "Independently designed and built a full-stack website for an NGO from the ground up — starting with a 5-day throwaway prototype to meet an urgent launch deadline, then rebuilding it as a production React application with a Node.js/Express backend over the following weeks.",
  points: [
    {
      icon: CreditCard,
      text: "Integrated Razorpay for donation payments, handling real transactions end-to-end.",
    },
    {
      icon: Database,
      text: "Used MongoDB for structured contact-form and donation logging.",
    },
    {
      icon: BarChart2,
      text: "Built a custom admin dashboard where the NGO could view and manage every contact submission and donation record without needing developer help.",
    },
    {
      icon: Clock,
      text: "Delivered solo, end-to-end, in under 3 months — from prototype to production.",
    },
  ],
  stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
};

export default function ClientWork() {
  return (
    <section id="client-work" className="w-full py-24 relative overflow-hidden" style={{ background: "rgba(10,15,30,0.8)" }}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 opacity-10" style={{ background: "#7b2fff" }} />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 opacity-10" style={{ background: "#00d4ff" }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Client Work</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }} />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Real-world freelance project delivered end-to-end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Accent border glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,47,255,0.05))" }} />

            {/* NGO badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl" style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                <Globe size={24} style={{ color: "#00d4ff" }} />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full" style={{ color: "#00d4ff", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                Freelance / NGO
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{clientWork.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">{clientWork.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {clientWork.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="p-2 rounded-xl h-fit" style={{ background: "rgba(0,212,255,0.1)" }}>
                    <point.icon size={18} style={{ color: "#00d4ff" }} />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{point.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-sm text-gray-500 mr-2 self-center">Stack:</span>
              {clientWork.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium text-gray-300" style={{ background: "rgba(123,47,255,0.15)", border: "1px solid rgba(123,47,255,0.3)" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
