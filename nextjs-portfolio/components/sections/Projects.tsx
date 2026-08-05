"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "RespiRAG",
    category: "RAG",
    signal: "Clinical AI",
    description:
      "A production-grade, zero-hallucination RAG system for Non-Small Cell Lung Cancer (NSCLC), built for real oncologists, pharmacists, and clinical nurses.",
    features: [
      "Combined biomedical MedCPT embeddings with HyDE query expansion and cross-encoder reranking to ground every answer in verified FDA labels and NCCN clinical guidelines.",
      "Built an LLM-as-a-Judge verification layer that audits every generated answer against retrieved context before it reaches the user, rejecting unsupported claims.",
      "Implemented role-based access (Patient / HCP / Admin) with JWT refresh-token rotation, Redis session blacklisting, and a hardened governance layer blocking jailbreaks.",
      "Added document version control that flags superseded clinical literature and a Redis citation cache.",
    ],
    stack: ["Python", "FastAPI", "React", "Qdrant", "MedCPT", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/SVSPraveen/RespiRAG",
    color: "from-[#00d4ff] to-blue-600",
    accent: "#00d4ff",
  },
  {
    title: "Finance RAG Copilot",
    category: "RAG",
    signal: "Financial AI",
    description:
      "An enterprise-grade, multi-agent RAG pipeline that analyzes SEC financial filings (10-K/10-Q) with zero hallucination.",
    features: [
      "Built a multi-agent router (Financial Analyst, Comparison, Decomposition, Risk Analyzer, Trend Agent) that classifies each query and dispatches to a specialized agent.",
      "Combined dense and BM25 sparse retrieval with Reciprocal Rank Fusion and cross-encoder reranking against Qdrant Cloud for accurate multi-document financial search.",
      "Engineered a zero-cost deterministic self-evaluation layer scoring Faithfulness, Groundness, Hallucination Rate, and Citation Accuracy on every response.",
      "Designed a 5-state visual guardrail system that flags unverified numbers and hard-blocks out-of-scope questions.",
    ],
    stack: ["Python", "Streamlit", "Qdrant Cloud", "BM25", "Llama 3.3", "PostgreSQL", "RapidFuzz"],
    github: "https://github.com/SVSPraveen/Finance-RAG-Copilot",
    color: "from-[#7b2fff] to-purple-800",
    accent: "#7b2fff",
  },
  {
    title: "SPrav Job AI",
    category: "Backend",
    signal: "Agentic AI",
    description:
      "A local-first AI orchestration system that discovers jobs, tailors ATS-optimized resumes, and executes applications end to end.",
    features: [
      "Built credential-free scrapers covering Indeed, Hacker News, Y Combinator, and Wellfound, feeding a daemon-driven discovery pipeline.",
      "Designed a Mixture-of-Experts-style routing model that scores job fit, then tailors a resume and cold email only for genuinely matching roles.",
      "Implemented a zero-trust local auth system with XOR-encrypted credential storage and a self-hosted Master Recovery Key.",
      "Automated application submission via Playwright for ATS platforms, with a Human Review queue and 1-click send flow.",
    ],
    stack: ["Python", "FastAPI", "React", "SQLite", "Playwright", "Ollama", "Groq"],
    github: "https://github.com/SVSPraveen/SPrav-Job-AI",
    color: "from-emerald-400 to-teal-600",
    accent: "#10b981",
  },
  {
    title: "ShipForesight",
    category: "AI",
    signal: "Logistics AI",
    description:
      "An AI-powered logistics platform that predicts shipment delays before dispatch using a 3-stage ML pipeline, with plain-language multilingual explanations.",
    features: [
      "Built a 3-stage zero-inflated pipeline: CatBoost + LightGBM + XGBoost ensemble classifier predicts delay risk; regressor estimates delay days; reason classifier explains why.",
      "Achieved 84.7% accuracy / 0.891 AUC-ROC on delay prediction, with a DuckDB feature store enriching predictions using real vendor on-time-rate and route history.",
      "Integrated live multi-modal routing (Truck, Ocean, Air, Train) with real routing APIs.",
      "Generated plain-language, multilingual (English, Hindi, Marathi, Gujarati, Tamil) explanations via LangChain + Groq.",
    ],
    stack: ["Python", "FastAPI", "React", "LightGBM", "XGBoost", "DuckDB", "LangChain"],
    github: "https://github.com/SVSPraveen/ShipForesight",
    color: "from-orange-400 to-amber-600",
    accent: "#f59e0b",
  },
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="w-full glass rounded-3xl overflow-hidden group relative"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Accent top bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

      <div className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Content */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full" style={{ color: project.accent, background: `${project.accent}20`, border: `1px solid ${project.accent}40` }}>
                {project.signal}
              </span>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{project.category}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium text-gray-300" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Expandable features */}
            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 overflow-hidden"
                >
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                      {f}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white px-5 py-2.5 rounded-xl transition-all glass text-sm font-medium"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Code size={16} />
                View on GitHub
              </a>
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl transition-all"
                style={{ color: project.accent }}
              >
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {expanded ? "Hide Details" : "See Details"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 relative overflow-hidden" style={{ background: "#0a0f1e" }}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }} />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Production-grade AI systems built across healthcare, finance, logistics, and job automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
