"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const radarData = [
  { subject: "LLMs & RAG", A: 95 },
  { subject: "AI Safety", A: 85 },
  { subject: "Python", A: 90 },
  { subject: "Databases", A: 80 },
  { subject: "Backend (API)", A: 85 },
  { subject: "Data Analytics", A: 80 },
];

function AnimatedCounter({ value, title, isDecimal = false }: { value: number; title: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = end / (duration / 30);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
      <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: "#00d4ff" }}>
        {isDecimal ? count.toFixed(2) : Math.floor(count)}
        {!isDecimal && "+"}
      </div>
      <div className="text-gray-400 font-medium">{title}</div>
    </div>
  );
}

// Simple CSS-based radar chart substitute
function SkillRadar() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
      {radarData.map((item, i) => (
        <div key={i} className="w-full">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-300">{item.subject}</span>
            <span className="text-xs text-gray-500">{item.A}%</span>
          </div>
          <div className="w-full rounded-full h-2 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.A}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 * i, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="w-full py-24 relative overflow-hidden" style={{ background: "#0a0f1e" }}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-10" style={{ background: "#7b2fff" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-10" style={{ background: "#00d4ff" }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#00d4ff" }}>
                Architecting Intelligent Systems
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am an AI/ML Engineer passionate about building scalable, production-ready AI applications. I specialize in developing sophisticated{" "}
                <span className="text-white font-medium">Retrieval-Augmented Generation (RAG)</span> systems, integrating large language models (LLMs) to solve complex real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Beyond just building AI, I focus on{" "}
                <span className="text-white font-medium">AI Safety</span>—ensuring models are governed by robust guardrails, PII masking, and semantic validations. Whether it's a medical-grade knowledge spine or a financial reasoning engine, I build AI that is both powerful and secure.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Retrieval-Augmented Generation", "Large Language Models", "Semantic Search", "Hybrid Retrieval", "Backend Architecture"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium text-gray-300" style={{ background: "rgba(123,47,255,0.15)", border: "1px solid rgba(123,47,255,0.3)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <AnimatedCounter value={2} title="Production RAGs" />
              <AnimatedCounter value={2} title="LLMs Deployed" />
              <AnimatedCounter value={1} title="Internship" />
              <AnimatedCounter value={8.77} title="CGPA" isDecimal />
            </div>
          </motion.div>

          {/* Skill Bars Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[400px] md:h-[500px] glass rounded-3xl p-6 md:p-8 flex items-center justify-center relative group"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,47,255,0.05))" }} />
            <div className="w-full">
              <h4 className="text-center text-lg font-semibold text-white mb-6">Skill Proficiency</h4>
              <SkillRadar />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
