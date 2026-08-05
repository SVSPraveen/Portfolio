"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Alphalens AI",
    category: "Financial Document Intelligence & RAG Platform",
    description: "Built a hybrid RAG platform (dense vector + BM25 search with cross-encoder reranking) for financial PDF analysis, achieving sub-0.1s retrieval latency. Designed LangGraph-based agentic query routing and Self-RAG reflection loops to reduce hallucinations.",
    tech: ["Python", "FastAPI", "Next.js", "Qdrant", "LangGraph", "Guardrails AI", "sentence-transformers", "Docling"],
    github: "https://github.com/Priyanshu1360/Alphalens-AI",
    demo: "https://alphalens-ai-one.vercel.app/",
    color: "from-[#00d4ff] to-blue-600",
    image: "/alphalens_ai_new.jpg"
  },
  {
    title: "Medical-Grade AI Knowledge Spine",
    category: "Healthcare RAG",
    description: "Architected a multi-database AI infrastructure for a medical-grade conversational assistant with immutable audit logging. Built an LLM governance gateway with semantic caching and integrated llm-guard adversarial scanning.",
    tech: ["Python", "PostgreSQL", "Qdrant", "Neo4j", "LLaMA-3.3-70B", "Phi-3.5", "Qwen3-Embedding", "Alembic", "llm-guard"],
    github: "https://github.com/Priyanshu1360/Medical-AI-Knowledge-Spine",
    demo: "https://pharma-spine-ai.vercel.app/",
    color: "from-[#7b2fff] to-purple-800",
    image: "/medical_ai_new.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                scale={1.02}
                transitionSpeed={2000}
                className="w-full"
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="bottom"
                glareBorderRadius="24px"
              >
                <div className="w-full glass rounded-3xl p-1 relative overflow-hidden group">
                  
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="bg-[#0a0f1e]/90 rounded-[22px] p-6 md:p-10 h-full relative z-10 flex flex-col md:flex-row gap-8 items-center border border-white/5">
                    
                    {/* Project Content */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <span className="text-[#00d4ff] text-sm font-bold tracking-wider uppercase mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-2">
                        <a 
                          href={project.demo} 
                          className="flex items-center gap-2 text-white bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] hover:opacity-90 px-5 py-2.5 rounded-xl transition-opacity font-medium text-sm shadow-[0_0_15px_rgba(123,47,255,0.3)]"
                        >
                          <ExternalLink size={18} />
                          Demo Link
                        </a>
                      </div>
                    </div>

                    {/* Project Image Placeholder / Decorative Element */}
                    <div className="w-full md:w-[400px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden relative border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:border-white/20 transition-colors p-4">
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-60 pointer-events-none`} />
                    </div>

                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
