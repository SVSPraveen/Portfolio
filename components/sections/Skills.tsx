'use client';

import { motion, Variants } from 'framer-motion';
import { Brain, Search, Database, LineChart, Layers, ShieldCheck } from 'lucide-react';

const skillsData = [
  {
    id: "agentic-orchestration",
    icon: Brain,
    title: 'Agentic AI & Orchestration',
    skills: ['LangGraph', 'LangChain', 'Agentic RAG', 'Multi-Agent Systems', 'Model Context Protocol (MCP)', 'Self-RAG', 'CRAG', 'LoRA Fine-tuning'],
  },
  {
    id: "retrieval-search",
    icon: Search,
    title: 'Retrieval & Search',
    skills: ['Hybrid Search (BM25 + Dense)', 'Cross-Encoder Re-ranking', 'Semantic Caching', 'Sentence-Transformers', 'HuggingFace Transformers'],
  },
  {
    id: "llms-vector-db",
    icon: Database,
    title: 'LLMs & Vector Databases',
    skills: ['Qdrant', 'pgvector', 'Pinecone', 'MedCPT', 'Groq', 'Ollama', 'vLLM', 'AWS Bedrock', 'Llama 3.x', 'Qwen 2.5/3'],
  },
  {
    id: "ml-evaluation",
    icon: LineChart,
    title: 'ML & Evaluation',
    skills: ['Scikit-learn', 'LightGBM', 'XGBoost', 'MLflow', 'RAGAS', 'RapidFuzz', 'NDCG', 'Hallucination Detection'],
  },
  {
    id: "fullstack-backend",
    icon: Layers,
    title: 'Full Stack & Backend',
    skills: ['FastAPI', 'React 18', 'TypeScript', 'PostgreSQL', 'MongoDB', 'DuckDB', 'Redis', 'SQLAlchemy', 'Docker'],
  },
  {
    id: "cloud-security",
    icon: ShieldCheck,
    title: 'Cloud & Security',
    skills: ['AWS', 'Oracle OCI', 'GCP', 'Kubernetes', 'OAuth2', 'JWT', 'Prometheus', 'Linux'],
  },
];

import { useProjectHighlight } from '@/lib/ProjectHighlightContext';
import { skillProjectMap } from '@/lib/skillProjectMap';

export default function Skills() {
  const { setHighlightedProjectIds } = useProjectHighlight();

  const getCardVariants = (index: number): Variants => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut', delay: index * 0.05 } 
    }
  });

  return (
    <section id="skills" className="py-24 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            A stack built for production-grade AI applications.
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={getCardVariants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => {
                  setHighlightedProjectIds(skillProjectMap[category.id]);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-white/70 backdrop-blur-md rounded-2xl border border-cardBorder shadow-sm p-6 hover:-translate-y-0.5 hover:shadow-md hover:border-accent cursor-pointer transition-all duration-200 flex flex-col"
              >
                {/* Icon Badge */}
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-textPrimary mb-4">
                  {category.title}
                </h3>
                
                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="rounded-full border border-cardBorder px-3 py-1.5 text-sm text-textSecondary bg-bgAlt"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
