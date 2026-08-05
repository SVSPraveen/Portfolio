"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { subject: 'LLMs & RAG', A: 95, fullMark: 100 },
  { subject: 'AI Safety', A: 85, fullMark: 100 },
  { subject: 'Python', A: 90, fullMark: 100 },
  { subject: 'Databases', A: 80, fullMark: 100 },
  { subject: 'Backend (API)', A: 85, fullMark: 100 },
  { subject: 'Data Analytics', A: 80, fullMark: 100 },
];

function AnimatedCounter({ value, title, isDecimal = false }: { value: number, title: string, isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = 30;
      const totalSteps = duration / incrementTime;
      const step = end / totalSteps;

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
      <div className="text-4xl md:text-5xl font-extrabold text-[#00d4ff] mb-2">
        {isDecimal ? count.toFixed(2) : Math.floor(count)}
        {!isDecimal && "+"}
      </div>
      <div className="text-gray-400 font-medium">{title}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="w-full py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7b2fff] opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d4ff] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] mx-auto rounded-full" />
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
              <h3 className="text-2xl font-semibold mb-4 text-[#00d4ff]">Architecting Intelligent Systems</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am an AI/ML Engineer passionate about building scalable, production-ready AI applications. I specialize in developing sophisticated <span className="text-white font-medium">Retrieval-Augmented Generation (RAG)</span> systems, integrating large language models (LLMs) to solve complex real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond just building AI, I focus on <span className="text-white font-medium">AI Safety</span>—ensuring models are governed by robust guardrails, PII masking, and semantic validations. Whether it's a medical-grade knowledge spine or a financial reasoning engine, I build AI that is both powerful and secure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <AnimatedCounter value={2} title="Production RAGs" />
              <AnimatedCounter value={2} title="LLMs Deployed" />
              <AnimatedCounter value={1} title="Internship" />
              <AnimatedCounter value={8.77} title="CGPA" isDecimal />
            </div>
          </motion.div>

          {/* Radar Chart Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[400px] md:h-[500px] glass rounded-3xl p-4 md:p-8 flex items-center justify-center relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-[#7b2fff]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0f1e', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#00d4ff' }}
                />
                <Radar name="Proficiency" dataKey="A" stroke="#00d4ff" fill="#00d4ff" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
