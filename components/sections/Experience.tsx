'use client';

import { motion, Variants } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    }
  };

  return (
    <section id="experience" className="py-24 px-4 w-full relative overflow-hidden">
      {/* Background Subtle Glow Accent */}
      <div className="pointer-events-none absolute top-1/3 right-10 w-[500px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center max-w-2xl">
            Hands-on work across AI pipelines and scalable Python systems.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 w-full max-w-4xl flex flex-col gap-8">
          
          {/* Single Timeline Entry */}
          <div className="flex gap-4 md:gap-8">
            
            {/* Timeline Icon */}
            <div className="flex flex-col items-center mt-1">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 z-10">
                <Sparkles className="w-5 h-5" />
              </div>
              {/* Vertical line for future entries */}
              <div className="w-px h-full bg-cardBorder mt-2 hidden md:block"></div>
            </div>

            {/* Content Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl border border-cardBorder/80 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 p-6 md:p-8 flex flex-col"
            >
              <span className="text-sm text-textSecondary mb-2">Apr 2026 – Jul 2026</span>
              <h3 className="text-xl font-bold text-textPrimary">AI/ML Engineer Intern</h3>
              <span className="text-accent font-medium text-sm mb-4">MobcoderAI, Noida, UP (Onsite)</span>
              
              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Improved SEC-filing retrieval accuracy from 62% to ~95% (NDCG@5) by building a hybrid BM25 + dense-vector search pipeline with Cross-Encoder re-ranking on Qdrant Cloud.</span>
                </li>
                <li className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Reduced query response time to under 5 seconds across 100+ SEC 10-K/10-Q filings by designing a multi-agent orchestration system in LangGraph with parallel routing on Llama 3.3 70B, using MCP for standardized tool-calling between agents.</span>
                </li>
                <li className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Lowered LLM evaluation costs significantly while maintaining high faithfulness scores by building a deterministic RapidFuzz + PyTorch scoring pipeline tracked in MLflow.</span>
                </li>
                <li className="flex gap-3 items-start text-textSecondary leading-relaxed text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Reduced terminology errors and eliminated repeat-query latency by fine-tuning Llama 3.1 8B with LoRA and adding Redis semantic caching to a GraphRAG pipeline on AWS Bedrock.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {['LangGraph', 'Qdrant Cloud', 'Llama 3.3', 'MLflow', 'AWS Bedrock', 'Redis'].map(tech => (
                  <span key={tech} className="rounded-full border border-cardBorder px-3 py-1.5 text-sm text-textSecondary bg-bgAlt">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
