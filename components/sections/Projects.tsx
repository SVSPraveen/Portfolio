'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, CheckCircle2, Rocket, ArrowUpRight, Download } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SiGoogledrive } from 'react-icons/si';

const projectsData = [
  {
    id: "sprav-job-ai",
    category: "AGENTIC CAREER AI",
    tags: ["AI", "Backend", "RAG"],
    title: "SPrav Job AI (Pro v2.4)",
    description: "An autonomous, local-first AI career engine that scans 28,700+ tech company ATS portals (Greenhouse, Lever, Ashby, Workday, SmartRecruiters) and Wellfound, calculates cosine similarity against master PDF resumes, and prepares STAR-tailored applications for 1-click dispatch.",
    bullets: [
      "Scans and monitors 28,700+ real tech ATS company career portals and job feeds with <18ms SQLite query latency and <120MB memory footprint.",
      "Engineers dual-stage matching: dense Sentence-Transformers embedding cosine similarity + multi-criteria LLM rubrics to score genuine role fit.",
      "Generates tailored STAR cover letters and outreach pitches with a 1-click human review dispatch queue, supporting local Ollama models and cloud inference (Gemini / Groq).",
      "Shipped as a 100% private, air-gapped standalone Windows portable application (v2.4 Pro) with zero-trust local XOR credential encryption."
    ],
    tech: ["Python", "FastAPI", "React", "SQLite", "Sentence-Transformers", "Playwright", "Ollama", "Groq"],
    github: "https://github.com/SVSPraveen/SPrav-Job-AI",
    demoStatus: "https://sprav-job-ai.pages.dev/",
    downloadUrl: "https://github.com/SVSPraveen/SPrav-Job-AI/releases",
    driveUrl: "https://drive.google.com/drive/folders/1JOm-Rth1HoB5xZqDva61JG9-aonj4jae?usp=sharing"
  },
  {
    id: "governed-ragflow",
    category: "AGENTIC ORCHESTRATION & GOVERNANCE",
    tags: ["RAG", "AI", "Backend"],
    title: "Governed-RAGFlow",
    description: "A production-grade AI visual orchestration engine combining a drag-and-drop workflow canvas with an asynchronous Python backend, featuring real-time prompt-injection & PII guardrails, semantic multi-agent routing, and self-healing retry loops.",
    bullets: [
      "Built a full-featured visual drag-and-drop pipeline builder in React 18 with live step-by-step execution telemetry, topological graph sorting, and interactive pre-built onboarding templates.",
      "Engineered real-time fail-closed governance guardrails (PII masking, toxicity filtering, and regex/LLM prompt-injection defenses) that short-circuit malicious inputs before LLM execution.",
      "Implemented an adaptive self-healing retrieval architecture with semantic fallback routing that dynamically switches knowledge branches upon detecting low-confidence or irrelevant documents.",
      "Integrated PostgreSQL (Neon) persistence for comprehensive audit trails, token telemetry, latency logging, and deterministic faithfulness evaluations."
    ],
    tech: ["Python", "FastAPI", "React 18", "PostgreSQL", "Neon", "Groq LPU", "LangChain", "Docker"],
    github: "https://github.com/SVSPraveen/Governed-RAGFlow",
    demoStatus: "pending"
  },
  {
    id: "respirag",
    category: "CLINICAL AI",
    tags: ["RAG", "AI", "Backend"],
    title: "RespiRAG",
    description: "A production-grade, zero-hallucination RAG system for Non-Small Cell Lung Cancer (NSCLC), built for real oncologists, pharmacists, and clinical nurses.",
    bullets: [
      "Built a governed RAG pipeline over 600+ FDA drug labels and 3,900+ pages of NCCN clinical guidelines, combining HyDE query expansion, MedCPT biomedical embeddings, and Cross-Encoder re-ranking to reduce hallucinations.",
      "Implemented role-sensitive access (Patient/HCP/Admin) with JWT-based RBAC, refresh-token rotation, Redis session blacklisting, and a regex-based guardrail layer against prompt-injection attempts.",
      "Reduced redundant vector-DB and LLM calls with a Redis citation cache and multi-key Groq rotation with Ollama fallback for graceful rate limiting.",
      "Built a CI/CD-compatible offline evaluation harness and a document version-control system that flags superseded clinical literature."
    ],
    tech: ["Python", "FastAPI", "React 18", "Qdrant", "MedCPT", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/SVSPraveen/RespiRAG",
    demoStatus: "pending"
  },
  {
    id: "finance-rag-copilot",
    category: "FINANCIAL AI",
    tags: ["RAG", "Backend", "AI"],
    title: "Finance RAG Copilot",
    description: "An enterprise-grade, multi-agent RAG pipeline that analyzes SEC financial filings (10-K/10-Q) with zero hallucination.",
    bullets: [
      "Built a multi-agent router (Financial Analyst, Comparison, Decomposition, Risk Analyzer, Trend Agent) that classifies each query and dispatches it to a specialized agent.",
      "Combined dense and BM25 sparse retrieval with Reciprocal Rank Fusion and cross-encoder reranking against Qdrant Cloud for accurate multi-document financial search.",
      "Engineered a zero-cost deterministic self-evaluation layer scoring Faithfulness, Groundedness, Hallucination Rate, and Citation Accuracy on every response — no LLM judge required.",
      "Designed a 5-state visual guardrail system that flags unverified numbers, warns on low-confidence answers, and hard-blocks out-of-scope questions."
    ],
    tech: ["Python", "Streamlit", "Qdrant Cloud", "BM25", "Llama 3.3", "PostgreSQL", "RapidFuzz"],
    github: "https://github.com/SVSPraveen/Finance-RAG-Copilot",
    demoStatus: "pending"
  },
  {
    id: "shipforesight",
    category: "LOGISTICS AI",
    tags: ["AI", "Backend"],
    title: "ShipForesight",
    description: "An AI-powered logistics platform that predicts shipment delays before dispatch using a 3-stage ML pipeline, with plain-language multilingual explanations.",
    bullets: [
      "Built a 3-stage zero-inflated pipeline: an ensemble classifier (CatBoost + LightGBM + XGBoost) predicts delay risk, a regressor estimates delay days, and a reason classifier explains why.",
      "Achieved 84.7% accuracy / 0.891 AUC-ROC on delay prediction, with a DuckDB feature store enriching predictions using real vendor on-time-rate and route history.",
      "Integrated live multi-modal routing (Truck, Ocean, Air, Train) with real routing APIs, including automatic detection of non-viable routes like train-across-ocean.",
      "Generated plain-language, multilingual (English, Hindi, Marathi, Gujarati, Tamil) explanations of each prediction via LangChain + Groq."
    ],
    tech: ["Python", "FastAPI", "React", "LightGBM", "XGBoost", "DuckDB", "LangChain"],
    github: "https://github.com/SVSPraveen/ShipForesight",
    demoStatus: "pending"
  }
];

const filters = ["All", "RAG", "Backend", "AI"];

import { useProjectHighlight } from '@/lib/ProjectHighlightContext';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { highlightedProjectIds, setHighlightedProjectIds } = useProjectHighlight();

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === "All" || project.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 px-4 w-full relative overflow-hidden">
      {/* Background Subtle Glow Accent */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-[600px] h-[350px] bg-accent/5 blur-[140px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center">
            Agentic AI, governed RAG, and production systems.
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-accent text-white"
                  : "border border-cardBorder text-textSecondary hover:border-accent hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
          
          {/* Clear Highlight Pill */}
          {highlightedProjectIds !== null && (
            <button
              onClick={() => setHighlightedProjectIds(null)}
              className="px-5 py-2 rounded-full font-medium transition-colors border border-accent text-accent hover:bg-accent/10 ml-2"
            >
              Clear Highlight
            </button>
          )}
        </div>

        {/* Projects List */}
        <div className="w-full flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isHighlighted = highlightedProjectIds !== null && highlightedProjectIds.includes(project.id);
              const isDimmed = highlightedProjectIds !== null && !highlightedProjectIds.includes(project.id);
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.15 }}
                  className={`w-full bg-white/80 backdrop-blur-md rounded-2xl border shadow-sm p-6 md:p-8 flex flex-col hover:shadow-md hover:border-accent/40 transition-all duration-300 ${
                    isHighlighted ? "ring-2 ring-accent ring-offset-2 border-accent" : "border-cardBorder/80"
                  } ${isDimmed ? "!opacity-40" : ""}`}
                >
                {/* Category & Title */}
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-accent" />
                  <span className="text-sm font-bold tracking-wider text-accent uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-textPrimary mb-3">{project.title}</h3>
                
                {/* Description */}
                <p className="text-textSecondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-3 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="rounded-full border border-cardBorder px-3 py-1.5 text-sm bg-bgAlt text-textSecondary"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cardBorder bg-white/60 text-textSecondary hover:border-accent hover:text-accent transition-colors font-medium text-sm shadow-sm"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>

                  {project.demoStatus === "pending" ? (
                    <button
                      disabled
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cardBorder text-textSecondary opacity-50 cursor-not-allowed font-medium text-sm"
                    >
                      <Rocket className="w-4 h-4" />
                      Demo Coming Soon
                    </button>
                  ) : (
                    <a
                      href={project.demoStatus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl gradient-accent text-white hover:opacity-90 transition-opacity font-medium text-sm shadow-sm"
                    >
                      <Rocket className="w-4 h-4" />
                      Live Demo
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {'downloadUrl' in project && project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all font-medium text-sm shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      Release Download
                    </a>
                  )}

                  {'driveUrl' in project && project.driveUrl && (
                    <a
                      href={project.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all font-medium text-sm shadow-sm"
                    >
                      <SiGoogledrive className="w-4 h-4" />
                      Google Drive (385MB)
                    </a>
                  )}
                </div>
              </motion.div>
            )})}
          </AnimatePresence>
        </div>
        
        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-textSecondary text-sm mb-4 text-center">
            These are the ones I&apos;m proudest of — there&apos;s more experimentation happening in my repos.
          </p>
          <a
            href="https://github.com/SVSPraveen?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-accent text-accent rounded-xl px-6 py-3 font-semibold hover:bg-accent hover:text-white transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
            Explore More on GitHub
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}

