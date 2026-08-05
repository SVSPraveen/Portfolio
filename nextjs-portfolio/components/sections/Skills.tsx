"use client";

import { motion } from "framer-motion";
import { Brain, Code, Database, Server, Shield, BarChart2 } from "lucide-react";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    icon: <Brain size={28} />,
    color: "#00d4ff",
    skills: [
      { name: "RAG & Self-RAG", level: 95 },
      { name: "LangGraph & LangSmith", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "NLP & Agentic Workflows", level: 88 },
      { name: "Sentence-Transformers", level: 92 },
    ],
  },
  {
    title: "Languages",
    icon: <Code size={28} />,
    color: "#7b2fff",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Databases & Vector Stores",
    icon: <Database size={28} />,
    color: "#00d4ff",
    skills: [
      { name: "PostgreSQL & MongoDB", level: 88 },
      { name: "Qdrant & pgvector", level: 92 },
      { name: "Pinecone", level: 85 },
      { name: "DuckDB & Redis", level: 82 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Server size={28} />,
    color: "#7b2fff",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "REST APIs", level: 90 },
      { name: "Docker & SQLAlchemy", level: 85 },
    ],
  },
  {
    title: "AI Safety & Governance",
    icon: <Shield size={28} />,
    color: "#00d4ff",
    skills: [
      { name: "Guardrails AI", level: 90 },
      { name: "llm-guard", level: 88 },
      { name: "PII Masking", level: 95 },
      { name: "Semantic Caching", level: 88 },
    ],
  },
  {
    title: "Cloud & Infra",
    icon: <BarChart2 size={28} />,
    color: "#7b2fff",
    skills: [
      { name: "AWS & Oracle OCI", level: 82 },
      { name: "GCP", level: 78 },
      { name: "Kubernetes & Docker", level: 80 },
      { name: "MLflow", level: 85 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 relative overflow-hidden" style={{ background: "rgba(10,15,30,0.5)", backdropFilter: "blur(4px)" }}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Technical Arsenal</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }} />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and methodologies I use to engineer robust AI solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-6 rounded-3xl relative group overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: "0 0 0 0 rgba(0,212,255,0)" }}
              whileHover={{ boxShadow: "0 10px 30px rgba(0,212,255,0.1)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, #00d4ff, #7b2fff)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
