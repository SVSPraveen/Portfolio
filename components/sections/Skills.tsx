"use client";

import { motion } from "framer-motion";
import { 
  Brain, Code, Database, Server, ShieldCheck, LineChart 
} from "lucide-react";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    icon: <Brain className="text-[#00d4ff] mb-4" size={32} />,
    skills: [
      { name: "RAG & Self-RAG", level: 95 },
      { name: "LangGraph & LangSmith", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "NLP & Agentic Workflows", level: 88 },
      { name: "Qwen3 & Sentence-Transformers", level: 92 },
    ],
  },
  {
    title: "Languages",
    icon: <Code className="text-[#7b2fff] mb-4" size={32} />,
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "HTML & CSS", level: 85 },
    ],
  },
  {
    title: "Databases & Vector Stores",
    icon: <Database className="text-[#00d4ff] mb-4" size={32} />,
    skills: [
      { name: "PostgreSQL & MongoDB", level: 88 },
      { name: "Qdrant", level: 92 },
      { name: "Neo4j (Knowledge Graph)", level: 85 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="text-[#7b2fff] mb-4" size={32} />,
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "AI Safety & Governance",
    icon: <ShieldCheck className="text-[#00d4ff] mb-4" size={32} />,
    skills: [
      { name: "Guardrails AI", level: 90 },
      { name: "llm-guard", level: 88 },
      { name: "PII Masking", level: 95 },
      { name: "Prompt-Injection Defense", level: 85 },
      { name: "Semantic Caching", level: 88 },
    ],
  },
  {
    title: "Data Visualization & Analytics",
    icon: <LineChart className="text-[#7b2fff] mb-4" size={32} />,
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Pandas & NumPy", level: 92 },
    ],
  },
  {
    title: "Tools",
    icon: <Code className="text-[#00d4ff] mb-4" size={32} />,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 relative overflow-hidden bg-[#0a0f1e]/50">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] mx-auto rounded-full" />
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
              className="glass p-6 rounded-3xl relative group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,212,255,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl">
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
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden relative">
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
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
