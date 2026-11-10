'use client';

import { motion, Variants } from 'framer-motion';
import { Brain, Search, Database, LineChart, Layers, ShieldCheck } from 'lucide-react';

const skillsData = [
  {
    id: "agentic-orchestration",
    icon: Brain,
    title: 'Agentic AI & Orchestration',
    skills: [
      'Multi-Agent Orchestration',
      'LangGraph',
      'LangChain',
      'Prompt Engineering',
      'Vision-Language Models (VLM)',
      'Whisper',
      'Model Context Protocol (MCP)',
      'Tool-Calling',
      'Self-RAG',
      'CRAG'
    ],
  },
  {
    id: "retrieval-search",
    icon: Search,
    title: 'Retrieval & Search',
    skills: [
      'Retrieval-Augmented Generation (RAG)',
      'Hybrid Search (BM25 + Dense)',
      'HyDE',
      'Reciprocal Rank Fusion (RRF)',
      'Cross-Encoder Reranking',
      'Semantic Caching',
      'Sentence-Transformers',
      'Hugging Face'
    ],
  },
  {
    id: "llms-vector-db",
    icon: Database,
    title: 'LLMs & Vector Databases',
    skills: [
      'Qdrant',
      'MedCPT',
      'Llama 3.x',
      'Qwen 2.5',
      'Groq',
      'Ollama',
      'OpenAI API',
      'vLLM',
      'DeepSeek-R1/R2'
    ],
  },
  {
    id: "ml-evaluation",
    icon: LineChart,
    title: 'LLM Evaluation & Observability',
    skills: [
      'Faithfulness & Groundedness Evaluation',
      'Hallucination Detection',
      'Citation Accuracy',
      'LLM-as-Judge',
      'MLflow',
      'Evaluation Harnesses',
      'Audit Logging',
      'AST Mutation Testing (DeployProof)',
      'pytest'
    ],
  },
  {
    id: "fullstack-backend",
    icon: Layers,
    title: 'Backend & Data Architecture',
    skills: [
      'Python',
      'FastAPI',
      'REST APIs',
      'PostgreSQL',
      'Redis',
      'SQLAlchemy',
      'TypeScript (Frontend)',
      'React',
      'Docker'
    ],
  },
  {
    id: "cloud-security",
    icon: ShieldCheck,
    title: 'Cloud, DevOps & Security',
    skills: [
      'AWS',
      'Oracle Cloud Infrastructure (OCI)',
      'Docker',
      'Git',
      'GitHub Actions (CI/CD)',
      'JWT Authentication',
      'OAuth2',
      'Linux'
    ],
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
    <section id="skills" className="py-24 px-4 w-full relative overflow-hidden">
      {/* Background Subtle Glow Accent */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
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
                className="bg-white/80 backdrop-blur-md rounded-2xl border border-cardBorder/80 shadow-sm p-6 hover:-translate-y-1 hover:shadow-md hover:border-accent/40 cursor-pointer transition-all duration-300 flex flex-col"
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
