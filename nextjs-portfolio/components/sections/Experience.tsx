"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Engineer Intern",
    company: "MobcoderAI",
    period: "Apr 2026 – Jul 2026",
    points: [
      "Built a parallel hybrid retrieval pipeline combining dense vector search and BM25 sparse search against Qdrant, fusing results via Reciprocal Rank Fusion and reranking with a CrossEncoder model — improved SEC-filing retrieval accuracy from 62% to ~95% (NDCG@5).",
      "Designed a multi-agent query system in LangGraph that routes each request to a specialized agent (single-company analysis, multi-company comparison, multi-hop decomposition, risk analysis, or trend analysis) using MCP for standardized tool-calling.",
      "Implemented an intent-planning layer that rewrites and decomposes complex multi-part queries into parallel sub-queries before retrieval, narrowing search scope and improving relevance on complex filings.",
      "Fine-tuned Llama 3.1 8B with LoRA and added Redis semantic caching to a GraphRAG pipeline on AWS Bedrock.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 relative overflow-hidden" style={{ background: "rgba(10,15,30,0.5)" }}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Experience</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }} />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 opacity-50" style={{ background: "linear-gradient(to bottom, #00d4ff, #7b2fff, transparent)" }} />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex flex-col md:flex-row items-start md:justify-between w-full mb-12 pl-16 md:pl-0"
            >
              {/* Left side: date */}
              <div className="hidden md:flex md:w-[45%] justify-end pr-8 pt-4">
                <span className="font-semibold text-lg tracking-wide uppercase" style={{ color: "#00d4ff" }}>
                  {exp.period}
                </span>
              </div>

              {/* Timeline icon */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: "#0a0f1e",
                    border: "4px solid #00d4ff",
                    boxShadow: "0 0 20px rgba(0,212,255,0.4)",
                  }}
                >
                  <Briefcase size={20} className="text-white" />
                </div>
              </div>

              {/* Right side: card */}
              <div className="w-full md:w-[45%] md:pl-8">
                <div className="glass p-6 md:p-8 rounded-3xl hover:bg-white/5 transition-colors group">
                  <span className="md:hidden font-semibold text-sm tracking-wide uppercase mb-2 block" style={{ color: "#00d4ff" }}>
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles size={20} style={{ color: "#00d4ff" }} />
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <h4 className="text-lg text-gray-400 mb-4 font-medium">{exp.company}</h4>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00d4ff" }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
