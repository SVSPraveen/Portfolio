import React, { useMemo, useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Rocket,
  Search,
  Send,
  ServerCog,
  Sparkles,
  Sun,
  X,
  // Custom icons added for interactive sections
  Terminal as TerminalIcon,
  Cpu,
  Play,
  RefreshCw,
  Sliders,
  HelpCircle,
  Check,
  ChevronRight,
  GitBranch,
} from 'lucide-react';
import './styles.css';

// Custom AI Technology Image Assets
import heroBg from './assets/hero_neural_network.png';
import respiragVisual from './assets/respirag_visual.png';
import financeVisual from './assets/finance_visual.png';
import spravVisual from './assets/sprav_visual.png';
import shipforesightVisual from './assets/shipforesight_visual.png';
import agentAvatar from './assets/Praveen_avatar.jpg';

const profile = {
  initials: 'SP',
  name: 'Seshanagottu Venkata Sujith Praveen',
  role: 'AI/ML Engineer | Agentic AI & RAG Systems | Python Backend',
  location: 'Mumbai, India',
  email: 'svspraveens@gmail.com',
  github: 'https://github.com/SVSPraveen',
  linkedin: 'https://www.linkedin.com/in/svs-praveen-s/',
  resume: 'https://drive.google.com/file/d/1gW_Uwv_GZ9TCkX_5I2UzWAbvZOlKg44c/view?usp=sharing',
  paper: 'https://ijamred.com/volume1/issue4/IJAMRED-V1I4P56.pdf',
};

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Client Work', '#client-work'],
  ['Contact', '#contact'],
];

const focusAreas = [
  'Retrieval-Augmented Generation',
  'Large Language Models',
  'Semantic Search',
  'Hybrid Retrieval',
  'Backend Architecture',
];

const stats = [
  ['Cross-Domain AI', 'Healthcare, Finance & Legal'],
  ['RAG Pipelines', 'Production-grade integration'],
  ['Hybrid Search', 'BM25 + Dense vector retrieval'],
  ['Backend', 'Python APIs and databases'],
];

const skillGroups = [
  {
    id: 'Agentic AI',
    title: 'Agentic AI & Orchestration',
    icon: Bot,
    skills: ['LangGraph', 'LangChain', 'Agentic RAG', 'Multi-Agent Systems', 'Model Context Protocol (MCP)', 'Self-RAG', 'CRAG', 'LoRA Fine-tuning'],
  },
  {
    id: 'Retrieval & Search',
    title: 'Retrieval & Search',
    icon: Search,
    skills: ['Hybrid Search (BM25 + Dense)', 'Cross-Encoder Re-ranking', 'Semantic Caching', 'Sentence-Transformers', 'HuggingFace Transformers'],
  },
  {
    id: 'LLMs & Vector DBs',
    title: 'LLMs & Vector Databases',
    icon: Database,
    skills: ['Qdrant', 'pgvector', 'Pinecone', 'MedCPT', 'Groq', 'Ollama', 'vLLM', 'AWS Bedrock', 'Llama 3.x', 'Qwen 2.5/3'],
  },
  {
    id: 'ML & Evaluation',
    title: 'ML & Evaluation',
    icon: Cpu,
    skills: ['Scikit-learn', 'LightGBM', 'XGBoost', 'MLflow', 'RAGAS', 'RapidFuzz', 'NDCG', 'Hallucination Detection'],
  },
  {
    id: 'Full Stack & Backend',
    title: 'Full Stack & Backend',
    icon: ServerCog,
    skills: ['FastAPI', 'React 18', 'TypeScript', 'PostgreSQL', 'MongoDB', 'DuckDB', 'Redis', 'SQLAlchemy', 'Docker'],
  },
  {
    id: 'Cloud & Security',
    title: 'Cloud & Security',
    icon: BriefcaseBusiness,
    skills: ['AWS', 'Oracle OCI', 'GCP', 'Kubernetes', 'OAuth2', 'JWT', 'Prometheus', 'Linux'],
  },
];

const skillGroupInspectorData = {
  'Agentic AI': {
    commands: '$ agent-cli inspect --group orchestration',
    lines: [
      '[SYSTEM] Loading orchestration profile...',
      '- LangGraph: Multi-agent orchestration with parallel routing and MCP tool-calling.',
      '- LangChain: Structured output parsing and agent chaining.',
      '- Self-RAG / CRAG: Self-reflective retrieval correction loops.',
      '[SUCCESS] Agentic pipelines ready.'
    ]
  },
  'Retrieval & Search': {
    commands: '$ search-cli inspect --group retrieval',
    lines: [
      '[SYSTEM] Loading retrieval configuration...',
      '- Hybrid Search: BM25 sparse + dense vector fusion.',
      '- Cross-Encoder Re-ranking: Precision reordering of top-k candidates.',
      '- Semantic Caching: Redis-backed repeat-query elimination.',
      '[SUCCESS] Retrieval stack verified.'
    ]
  },
  'LLMs & Vector DBs': {
    commands: '$ llm-cli status --group models',
    lines: [
      '[SYSTEM] Connecting to LLM and vector endpoints...',
      '- Qdrant, pgvector, Pinecone: Production vector storage and search.',
      '- Groq, Ollama, vLLM, AWS Bedrock: Cloud and local inference.',
      '- Llama 3.x, Qwen 2.5/3, MedCPT: Domain and general-purpose models.',
      '[SUCCESS] All endpoints reachable.'
    ]
  },
  'ML & Evaluation': {
    commands: '$ ml-cli run --group evaluation',
    lines: [
      '[SYSTEM] Loading evaluation harness...',
      '- LightGBM, XGBoost, Scikit-learn: Classical ML pipelines.',
      '- MLflow: Experiment tracking and model versioning.',
      '- RAGAS, RapidFuzz, NDCG: Deterministic RAG evaluation metrics.',
      '[SUCCESS] Evaluation suite passed.'
    ]
  },
  'Full Stack & Backend': {
    commands: '$ api-cli check --group backend',
    lines: [
      '[SYSTEM] Validating backend services...',
      '- FastAPI, React 18, TypeScript: Full-stack application layer.',
      '- PostgreSQL, MongoDB, DuckDB, Redis: Polyglot persistence.',
      '- SQLAlchemy, Docker: ORM and containerized deployment.',
      '[SUCCESS] Backend services operational.'
    ]
  },
  'Cloud & Security': {
    commands: '$ cloud-cli audit --group infra',
    lines: [
      '[SYSTEM] Auditing cloud and security posture...',
      '- AWS, Oracle OCI, GCP: Multi-cloud deployment experience.',
      '- Kubernetes: Container orchestration at scale.',
      '- OAuth2, JWT, Prometheus: Auth and observability.',
      '[SUCCESS] Infrastructure audit clean.'
    ]
  }
};

const experiences = [
  {
    role: 'AI/ML Engineer Intern',
    company: 'MobcoderAI',
    period: 'Apr 2026 – Jul 2026',
    icon: Sparkles,
    points: [
      'Built a parallel hybrid retrieval pipeline combining dense vector search and BM25 sparse search against Qdrant, fusing results via Reciprocal Rank Fusion and reranking with a CrossEncoder model for higher-precision financial document search.',
      'Designed a multi-agent query system that routes each request to a specialized agent (single-company analysis, multi-company comparison, multi-hop decomposition, risk analysis, or trend analysis) based on query intent, rather than a single general-purpose model handling every case.',
      'Implemented an intent-planning layer that rewrites and decomposes complex multi-part queries into parallel sub-queries before retrieval, narrowing search scope and improving relevance on complex filings.',
    ],
  },
];

const recentGitLogs = [
  { time: 'Aug 2026', repo: 'CloudOPS', type: 'commit', desc: 'Started a new cloud infrastructure project.' },
  { time: 'Jul 2026', repo: 'SPrav-Job-AI', type: 'commit', desc: '105 commits — core agentic job-search pipeline.' },
  { time: 'Jul 2026', repo: 'ShipForesight', type: 'commit', desc: '19 commits — delay prediction ML pipeline.' },
  { time: 'Jul 2026', repo: 'RespiRAG', type: 'commit', desc: '3 commits — clinical RAG refinements.' },
];

const projectFilters = ['All', 'RAG', 'Backend', 'AI'];

const projects = [
  {
    title: 'RespiRAG',
    category: 'RAG',
    diagramType: 'router-flow',
    bannerImage: respiragVisual,
    description: 'A production-grade, zero-hallucination RAG system for Non-Small Cell Lung Cancer (NSCLC), built for real oncologists, pharmacists, and clinical nurses.',
    features: [
      'Combined biomedical MedCPT embeddings with HyDE query expansion and cross-encoder reranking to ground every answer in verified FDA labels and NCCN clinical guidelines.',
      'Built an LLM-as-a-Judge verification layer that audits every generated answer against retrieved context before it reaches the user, rejecting unsupported claims.',
      'Implemented role-based access (Patient / HCP / Admin) with JWT refresh-token rotation, Redis session blacklisting, and a hardened governance layer blocking jailbreaks and lethal-dose queries.',
      'Added document version control that flags superseded clinical literature and a Redis citation cache to cut redundant vector-DB and LLM calls.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Qdrant', 'MedCPT', 'PostgreSQL', 'Redis', 'Docker'],
    signal: 'Clinical AI',
    github: 'https://github.com/SVSPraveen/RespiRAG',
    architecture: [
      { name: 'Governance Engine', desc: 'Blocks jailbreaks and out-of-scope clinical questions before retrieval' },
      { name: 'HyDE + MedCPT Retrieval', desc: 'Biomedical embeddings search Qdrant for verified clinical chunks' },
      { name: 'Cross-Encoder Reranking', desc: 'Rejects any chunk scoring below the relevance threshold' },
      { name: 'LLM-as-Judge Verifier', desc: 'Second LLM pass audits the answer against retrieved context' },
      { name: 'Role-Aware Response', desc: 'Formats output differently for Patient vs HCP vs Admin' },
    ]
  },
  {
    title: 'Finance RAG Copilot',
    category: 'RAG',
    diagramType: 'dual-stream',
    bannerImage: financeVisual,
    description: 'An enterprise-grade, multi-agent RAG pipeline that analyzes SEC financial filings (10-K/10-Q) with zero hallucination.',
    features: [
      'Built a multi-agent router (Financial Analyst, Comparison, Decomposition, Risk Analyzer, Trend Agent) that classifies each query and dispatches it to a specialized agent.',
      'Combined dense and BM25 sparse retrieval with Reciprocal Rank Fusion and cross-encoder reranking against Qdrant Cloud for accurate multi-document financial search.',
      'Engineered a zero-cost deterministic self-evaluation layer scoring Faithfulness, Groundness, Hallucination Rate, and Citation Accuracy on every response — no LLM judge required.',
      'Designed a 5-state visual guardrail system that flags unverified numbers, warns on low-confidence answers, and hard-blocks out-of-scope questions.',
    ],
    stack: ['Python', 'Streamlit', 'Qdrant Cloud', 'BM25', 'Llama 3.3', 'PostgreSQL', 'RapidFuzz'],
    signal: 'Financial AI',
    github: 'https://github.com/SVSPraveen/Finance-RAG-Copilot',
    architecture: [
      { name: 'Ingestion', desc: 'Docling + PyMuPDF extract tables and narrative chunks from SEC PDFs' },
      { name: 'Intent Planning', desc: 'Groq LLM classifies and decomposes complex multi-company queries' },
      { name: 'Hybrid Retrieval', desc: 'Parallel dense + BM25 search against Qdrant, fused via RRF' },
      { name: 'Reranking', desc: 'Cross-encoder rescoring of fused context' },
      { name: 'Deterministic Evaluation', desc: 'RapidFuzz-based faithfulness and groundness scoring, no LLM judge' },
    ]
  },
  {
    title: 'SPrav Job AI',
    category: 'Backend',
    diagramType: 'service-grid',
    bannerImage: spravVisual,
    description: 'A local-first AI orchestration system (SPrav MOE) that discovers jobs, tailors ATS-optimized resumes, and executes applications end to end.',
    features: [
      'Built credential-free scrapers covering Indeed, Hacker News, Y Combinator, and Wellfound, feeding a daemon-driven discovery pipeline.',
      'Designed a Mixture-of-Experts-style routing model that scores job fit, then tailors a resume and cold email only for genuinely matching roles.',
      'Implemented a zero-trust local auth system with XOR-encrypted credential storage and a self-hosted Master Recovery Key, avoiding any external auth server.',
      'Automated application submission via Playwright for ATS platforms, with a Human Review queue and a 1-click send flow for startup outreach.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'SQLite', 'Playwright', 'Ollama', 'Groq'],
    signal: 'Agentic AI',
    github: 'https://github.com/SVSPraveen/SPrav-Job-AI',
    architecture: [
      { name: 'Discovery', desc: 'Stealth scrapers pull job postings without login credentials' },
      { name: 'Extraction', desc: 'Unstructured postings converted into structured JSON' },
      { name: 'Fit Scoring', desc: 'Mixture-of-Experts model scores job match against your profile' },
      { name: 'Tailoring', desc: 'Local/cloud LLM drafts a custom resume and cold email' },
      { name: 'Execution', desc: 'Playwright auto-applies or queues for one-click human review' },
    ]
  },
  {
    title: 'ShipForesight',
    category: 'AI',
    diagramType: 'tier-stack',
    bannerImage: shipforesightVisual,
    description: 'An AI-powered logistics platform that predicts shipment delays before dispatch using a 3-stage ML pipeline, with plain-language multilingual explanations.',
    features: [
      'Built a 3-stage zero-inflated pipeline: an ensemble classifier (CatBoost + LightGBM + XGBoost) predicts delay risk, a regressor estimates delay days, and a reason classifier explains why.',
      'Achieved 84.7% accuracy / 0.891 AUC-ROC on delay prediction, with a DuckDB feature store enriching predictions using real vendor on-time-rate and route history.',
      'Integrated live multi-modal routing (Truck, Ocean, Air, Train) with real routing APIs, including automatic detection of non-viable routes like train-across-ocean.',
      'Generated plain-language, multilingual (English, Hindi, Marathi, Gujarati, Tamil) explanations of each prediction via LangChain + Groq.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'LightGBM', 'XGBoost', 'DuckDB', 'LangChain'],
    signal: 'Logistics AI',
    github: 'https://github.com/SVSPraveen/ShipForesight',
    architecture: [
      { name: 'Ensemble Classifier', desc: 'CatBoost + LightGBM + XGBoost soft-vote on delay probability' },
      { name: 'Delay Regressor', desc: 'LightGBM estimates delay days once risk is confirmed' },
      { name: 'Reason Classifier', desc: 'Identifies top-3 probable causes of the predicted delay' },
      { name: 'DuckDB Enrichment', desc: 'Adjusts probability using real vendor and route reliability data' },
      { name: 'LLM Explainer', desc: 'Groq generates a multilingual plain-language explanation' },
    ]
  },
];

const clientWork = {
  title: 'Ajeevan Samarpan Parivar — NGO Website & Donor Platform',
  description: 'Independently designed and built a full-stack website for an NGO from the ground up — starting with a 5-day throwaway prototype to meet an urgent launch deadline, then rebuilding it as a production React application with a Node.js/Express backend over the following weeks.',
  points: [
    'Integrated Razorpay for donation payments, handling real transactions end-to-end.',
    'Used MongoDB for structured contact-form and donation logging.',
    'Built a custom admin dashboard where the NGO could view and manage every contact submission and donation record without needing developer help.',
    'Delivered solo, end-to-end, in under 3 months — from prototype to production.',
  ],
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
};

const certifications = [
  'Oracle OCI Multicloud Architect Professional',
  'Oracle OCI Networking Professional',
  'Oracle OCI Foundation Associate',
  'Google Cloud Computing Foundations',
  'Cisco Ethical Hacker',
  'IBM Cybersecurity Analyst',
  'Saviynt Identity Security for AI Age',
];

const assistantAnswers = {
  projects: `**Featured Projects by Praveen:**
1. **RespiRAG** — Clinical Precision AI for Oncology
   - *Core Stack:* Python, FastAPI, React, Qdrant, MedCPT, PostgreSQL, Redis, Docker.
   - *Feature:* A zero-hallucination RAG system for NSCLC oncology with role-based access, HyDE retrieval, and an LLM-as-judge verifier.
2. **Finance RAG Copilot**
   - *Core Stack:* Python, Streamlit, Qdrant Cloud, BM25, Llama 3.3, PostgreSQL, RapidFuzz.
   - *Feature:* A multi-agent RAG pipeline analyzing SEC 10-K/10-Q filings with deterministic, zero-cost self-evaluation.
3. **SPrav Job AI**
   - *Core Stack:* Python, FastAPI, React, SQLite, Playwright, Ollama, Groq.
   - *Feature:* A local-first agentic system that discovers jobs, tailors resumes, and auto-applies end to end.
4. **ShipForesight**
   - *Core Stack:* Python, FastAPI, React, LightGBM, XGBoost, DuckDB, LangChain.
   - *Feature:* A 3-stage ML pipeline predicting shipment delays with multilingual AI explanations.`,

  experience: `**Praveen's Experience:**
- **AI/ML Engineer Intern at MobcoderAI** (Apr 2026 – Jul 2026):
  - Improved SEC-filing retrieval accuracy from 62% to ~95% (NDCG@5) with a hybrid BM25 + dense-vector pipeline and Cross-Encoder re-ranking on Qdrant Cloud.
  - Designed a multi-agent orchestration system in LangGraph with parallel routing on Llama 3.3 70B, using MCP for standardized tool-calling.
  - Built a deterministic RapidFuzz + PyTorch scoring pipeline tracked in MLflow to lower LLM evaluation costs.
  - Fine-tuned Llama 3.1 8B with LoRA and added Redis semantic caching to a GraphRAG pipeline on AWS Bedrock.`,

  skills: `**Technical Capabilities:**
- **Agentic AI & Orchestration:** LangGraph, LangChain, Agentic RAG, Multi-Agent Systems, Model Context Protocol (MCP), Self-RAG, CRAG, LoRA Fine-tuning
- **Retrieval & Search:** Hybrid Search (BM25 + Dense), Cross-Encoder Re-ranking, Semantic Caching, Sentence-Transformers, HuggingFace Transformers
- **LLMs & Vector Databases:** Qdrant, pgvector, Pinecone, MedCPT, Groq, Ollama, vLLM, AWS Bedrock, Llama 3.x, Qwen 2.5/3
- **ML & Evaluation:** Scikit-learn, LightGBM, XGBoost, MLflow, RAGAS, RapidFuzz, NDCG, Hallucination Detection
- **Full Stack & Backend:** FastAPI, React 18, TypeScript, PostgreSQL, MongoDB, DuckDB, Redis, SQLAlchemy, Docker
- **Cloud & Security:** AWS, Oracle OCI, GCP, Kubernetes, OAuth2, JWT, Prometheus, Linux`,

  general: `**Praveen — Overview:**
- **Specialization:** AI/ML Engineer focused on Agentic AI, RAG systems, and production LLM applications.
- **Education:** B.Tech in Computer Science & Engineering, Amity University (2022–2026).
- **Based in:** Mumbai, India.
- **Featured Projects:**
  1. *RespiRAG* (Clinical AI, zero-hallucination RAG).
  2. *Finance RAG Copilot* (SEC filing analysis).
  3. *SPrav Job AI* (agentic job-search automation).
  4. *ShipForesight* (logistics delay prediction).
- **Experience:** AI/ML Engineer Intern at MobcoderAI.
- **Certifications:** 7 professional certifications spanning Oracle OCI multicloud architecture, Google Cloud, Cisco, IBM, and Saviynt security.

*Tip: Click one of the pre-set buttons to inspect detailed logs for specific topics!*`
};

const quickQuestions = [
  {
    label: "Explore Projects",
    query: "Tell me about your RAG and Generative AI projects.",
    topic: "projects",
    logs: [
      "[Agent] Directing query to projects index...",
      "[Retrieval] Searching Vector Store (Qdrant) with hybrid filters...",
      "[Retrieval] Retrieved document chunks for RespiRAG & Finance RAG Copilot...",
      "[Reranking] Re-sorting hits using Cross-Encoder...",
      "[LLM] Context assembly completed. Generating grounded answer..."
    ]
  },
  {
    label: "View Internships",
    query: "Tell me about your internship experience.",
    topic: "experience",
    logs: [
      "[Agent] Fetching career timeline index...",
      "[Retrieval] Retrieving MobcoderAI internship records...",
      "[Reranking] Prioritizing AI & Python production engineering workflows...",
      "[LLM] Synthesis complete. Generating summary of intern impact..."
    ]
  },
  {
    label: "Summarize Skills",
    query: "What are your core technical skills and tools?",
    topic: "skills",
    logs: [
      "[Agent] Pulling skill-vectors from competence matrix...",
      "[Retrieval] Matching vector databases, backend frameworks, and LLM tooling...",
      "[LLM] Consolidating skills profile and production capabilities..."
    ]
  }
];

const diagramNodeDetails = {
  respirag: {
    'Governance gate': { stat: '6-message window', detail: 'Deny patterns are checked against the last 6 messages of conversation, not just the current one — why it matters: blocks multi-turn jailbreak attempts that build up gradually instead of asking outright.' },
    'Hybrid retrieval': { stat: '0.15 relevance threshold', detail: 'MedCPT biomedical embeddings search Qdrant, then any chunk scoring below 0.15 on the cross-encoder is rejected outright — why it matters: the system would rather say nothing than guess with weak evidence.' },
    'LLM-as-judge verify': { stat: 'Independent second LLM call', detail: 'A separate LLM audits the draft answer against the retrieved context before it ships — why it matters: catches hallucinations the first model introduced, not just retrieval gaps.' },
    'Grounded answer': { stat: 'Numbered citations', detail: 'Every claim ships with a source-verified citation and document version metadata — why it matters: a clinician can check the exact source in seconds, not trust a black box.' },
  },
  finance: {
    'Dense retrieval': { stat: 'all-MiniLM-L6-v2, 384-dim', detail: 'Semantic embeddings catch meaning-based matches even when exact keywords differ — why it matters: finds the right SEC filing section even when the question is phrased differently than the filing.' },
    'Sparse BM25 search': { stat: 'Keyword-exact matching', detail: 'Runs in parallel with dense search to catch exact terms dense embeddings can miss — why it matters: financial data has precise terms (ticker symbols, line-item names) where exact match beats semantic similarity.' },
    'RRF fusion + rerank': { stat: 'Reciprocal Rank Fusion + cross-encoder', detail: 'Combines both retrieval paths mathematically, then a cross-encoder rescores the merged results — why it matters: neither method alone is reliable on messy financial tables, fusion catches what either would miss.' },
    'Grounded answer': { stat: '4-metric self-evaluation', detail: 'Every answer is scored on Faithfulness, Groundness, Hallucination Rate, and Citation Accuracy with zero LLM judge, just deterministic math — why it matters: no extra cost or bias from using an LLM to grade an LLM.' },
  },
  sprav: {
    'Discovery': { stat: 'Credential-free scraping', detail: 'Stealth scrapers pull postings from Indeed, HN, YC, and Wellfound without logging into any account — why it matters: zero risk of account bans or credential leaks during automated discovery.' },
    'Extraction': { stat: 'Structured JSON output', detail: 'Converts unstructured job description text into clean structured fields — why it matters: every downstream step operates on reliable data instead of re-parsing raw text.' },
    'Fit scoring': { stat: 'Mixture-of-Experts routing', detail: 'A deep-thinking model calculates a mathematical fit score against your actual background — why it matters: only genuinely matching roles get a tailored application, not spray-and-pray.' },
    'Tailoring': { stat: 'Single-source-of-truth guarantee', detail: 'Every generated resume bullet must trace back to a verified entry in your knowledge base — why it matters: the system highlights real skill gaps instead of hallucinating false proficiency.' },
    'Execution': { stat: 'Playwright automation', detail: 'Auto-applies via ATS platforms like Greenhouse and Lever, with a human review queue for anything uncertain — why it matters: full automation where it is safe, a human checkpoint where it is not.' },
  },
  shipforesight: {
    'Ensemble classifier': { stat: '84.7% accuracy, 0.891 AUC-ROC', detail: 'CatBoost, LightGBM, and XGBoost vote together on delay probability — why it matters: three different model families catch different error patterns than any single model would.' },
    'DuckDB enrichment': { stat: '106+ routes, 50+ vendors profiled', detail: 'Adjusts the raw ML probability using real vendor on-time-rate and route history — why it matters: a model trained on general patterns still needs real-world context to be trustworthy for a specific vendor.' },
    'Delay regressor': { stat: '1.24 day MAE', detail: 'Only triggers once the classifier confirms delay risk above 50% — why it matters: prevents the model from randomly assigning delay days to shipments that are actually on track.' },
    'Reason classifier': { stat: '78.2% accuracy on root cause', detail: 'Identifies the top 3 probable causes with confidence scores — why it matters: a delay prediction without a reason is just an alarm; this tells you what to actually fix.' },
    'LLM explainer': { stat: '5 languages', detail: 'Groq generates the explanation in English, Hindi, Marathi, Gujarati, or Tamil — why it matters: logistics teams on the ground are not always English-first, so the AI output has to reach them too.' },
  },
};

function RespiRAGDiagram() {
  const [selectedNode, setSelectedNode] = useState(null);
  const details = diagramNodeDetails.respirag;
  const handleNodeClick = (nodeName) => setSelectedNode(nodeName === selectedNode ? null : nodeName);
  return (
    <div className="project-diagram-wrapper">
      <p className="diagram-hint">Tap any node below for the real numbers behind it</p>
      <svg width="100%" viewBox="0 0 680 510" role="img">
        <title>RespiRAG architecture</title>
        <desc>A query passes through a governance gate that either denies it or routes it to hybrid retrieval, an LLM-as-judge verification step, and finally a grounded answer.</desc>
        <defs><marker id="arrow1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
        <g onClick={() => handleNodeClick('Clinical query')} style={{ cursor: 'pointer' }} className={selectedNode === 'Clinical query' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="240" y="40" width="200" height="44" rx="8" fill="var(--panel)" stroke="var(--line)" strokeWidth={selectedNode === 'Clinical query' ? '1.5' : '0.5'}/>
          <text x="340" y="62" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14">Clinical query</text>
          <circle cx="430" cy="50" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="84" x2="340" y2="130" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow1)"/>
        <g onClick={() => handleNodeClick('Governance gate')} style={{ cursor: 'pointer' }} className={selectedNode === 'Governance gate' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="130" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--yellow)" strokeWidth={selectedNode === 'Governance gate' ? '1.5' : '0.5'}/>
          <text x="340" y="150" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Governance gate</text>
          <text x="340" y="170" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Pass / deflect / deny</text>
          <circle cx="440" cy="140" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="186" x2="340" y2="206" stroke="var(--line)" strokeWidth="0.5"/>
        <path d="M340 206 L130 206 L130 230" fill="none" stroke="var(--line)" strokeWidth="0.5" markerEnd="url(#arrow1)"/>
        <line x1="340" y1="206" x2="340" y2="230" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow1)"/>
        <g onClick={() => handleNodeClick('Denied')} style={{ cursor: 'pointer' }} className={selectedNode === 'Denied' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="40" y="230" width="180" height="44" rx="8" fill="var(--panel)" stroke="var(--red)" strokeWidth={selectedNode === 'Denied' ? '1.5' : '0.5'}/>
          <text x="130" y="246" textAnchor="middle" dominantBaseline="central" fill="var(--red)" fontSize="14" fontWeight="500">Denied</text>
          <text x="130" y="262" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Blocked as unsafe</text>
          <circle cx="210" cy="240" r="4" fill="var(--cyan)" />
        </g>
        <g onClick={() => handleNodeClick('Hybrid retrieval')} style={{ cursor: 'pointer' }} className={selectedNode === 'Hybrid retrieval' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="230" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--cyan)" strokeWidth={selectedNode === 'Hybrid retrieval' ? '1.5' : '0.5'}/>
          <text x="340" y="250" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Hybrid retrieval</text>
          <text x="340" y="270" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">MedCPT, Qdrant, rerank</text>
          <circle cx="440" cy="240" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="286" x2="340" y2="330" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow1)"/>
        <g onClick={() => handleNodeClick('LLM-as-judge verify')} style={{ cursor: 'pointer' }} className={selectedNode === 'LLM-as-judge verify' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="330" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--cyan)" strokeWidth={selectedNode === 'LLM-as-judge verify' ? '1.5' : '0.5'}/>
          <text x="340" y="350" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">LLM-as-judge verify</text>
          <text x="340" y="370" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Checks against context</text>
          <circle cx="440" cy="340" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="386" x2="340" y2="430" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow1)"/>
        <g onClick={() => handleNodeClick('Grounded answer')} style={{ cursor: 'pointer' }} className={selectedNode === 'Grounded answer' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="430" width="220" height="44" rx="8" fill="var(--panel)" stroke="var(--line)" strokeWidth={selectedNode === 'Grounded answer' ? '1.5' : '0.5'}/>
          <text x="340" y="452" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Grounded answer</text>
          <circle cx="440" cy="440" r="4" fill="var(--cyan)" />
        </g>
      </svg>
      {selectedNode && details[selectedNode] && (
        <div className="diagram-detail-panel">
          <div className="diagram-detail-stat">{details[selectedNode].stat}</div>
          <p className="diagram-detail-text">{details[selectedNode].detail}</p>
        </div>
      )}
    </div>
  );
}

function FinanceRAGDiagram() {
  const [selectedNode, setSelectedNode] = useState(null);
  const details = diagramNodeDetails.finance;
  const handleNodeClick = (nodeName) => setSelectedNode(nodeName === selectedNode ? null : nodeName);
  return (
    <div className="project-diagram-wrapper">
      <p className="diagram-hint">Tap any node below for the real numbers behind it</p>
      <svg width="100%" viewBox="0 0 680 410" role="img">
        <title>Finance RAG Copilot architecture</title>
        <desc>A query splits into parallel dense and sparse retrieval, which merge via reciprocal rank fusion and reranking into a grounded answer.</desc>
        <defs><marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
        <g onClick={() => handleNodeClick('Filing query')} style={{ cursor: 'pointer' }} className={selectedNode === 'Filing query' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="240" y="40" width="200" height="44" rx="8" fill="var(--panel)" stroke="var(--line)" strokeWidth={selectedNode === 'Filing query' ? '1.5' : '0.5'}/>
          <text x="340" y="62" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14">Filing query</text>
          <circle cx="430" cy="50" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="84" x2="340" y2="104" stroke="var(--line)" strokeWidth="0.5"/>
        <path d="M340 104 L180 104 L180 130" fill="none" stroke="var(--line)" strokeWidth="0.5" markerEnd="url(#arrow2)"/>
        <path d="M340 104 L500 104 L500 130" fill="none" stroke="var(--line)" strokeWidth="0.5" markerEnd="url(#arrow2)"/>
        <g onClick={() => handleNodeClick('Dense retrieval')} style={{ cursor: 'pointer' }} className={selectedNode === 'Dense retrieval' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="70" y="130" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--blue)" strokeWidth={selectedNode === 'Dense retrieval' ? '1.5' : '0.5'}/>
          <text x="180" y="150" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Dense retrieval</text>
          <text x="180" y="170" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Embeddings via Qdrant</text>
          <circle cx="280" cy="140" r="4" fill="var(--cyan)" />
        </g>
        <g onClick={() => handleNodeClick('Sparse BM25 search')} style={{ cursor: 'pointer' }} className={selectedNode === 'Sparse BM25 search' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="390" y="130" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--cyan)" strokeWidth={selectedNode === 'Sparse BM25 search' ? '1.5' : '0.5'}/>
          <text x="500" y="150" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Sparse BM25 search</text>
          <text x="500" y="170" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Keyword lexical match</text>
          <circle cx="600" cy="140" r="4" fill="var(--cyan)" />
        </g>
        <line x1="180" y1="186" x2="180" y2="206" stroke="var(--line)" strokeWidth="0.5"/>
        <line x1="500" y1="186" x2="500" y2="206" stroke="var(--line)" strokeWidth="0.5"/>
        <path d="M180 206 L340 206" fill="none" stroke="var(--line)" strokeWidth="0.5"/>
        <path d="M500 206 L340 206" fill="none" stroke="var(--line)" strokeWidth="0.5"/>
        <line x1="340" y1="206" x2="340" y2="230" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow2)"/>
        <g onClick={() => handleNodeClick('RRF fusion + rerank')} style={{ cursor: 'pointer' }} className={selectedNode === 'RRF fusion + rerank' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="230" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--violet)" strokeWidth={selectedNode === 'RRF fusion + rerank' ? '1.5' : '0.5'}/>
          <text x="340" y="250" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">RRF fusion + rerank</text>
          <text x="340" y="270" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Cross-encoder reranking</text>
          <circle cx="440" cy="240" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="286" x2="340" y2="330" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow2)"/>
        <g onClick={() => handleNodeClick('Grounded answer')} style={{ cursor: 'pointer' }} className={selectedNode === 'Grounded answer' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="330" width="220" height="44" rx="8" fill="var(--panel)" stroke="var(--line)" strokeWidth={selectedNode === 'Grounded answer' ? '1.5' : '0.5'}/>
          <text x="340" y="352" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Grounded answer</text>
          <circle cx="440" cy="340" r="4" fill="var(--cyan)" />
        </g>
      </svg>
      {selectedNode && details[selectedNode] && (
        <div className="diagram-detail-panel">
          <div className="diagram-detail-stat">{details[selectedNode].stat}</div>
          <p className="diagram-detail-text">{details[selectedNode].detail}</p>
        </div>
      )}
    </div>
  );
}

function SpravJobDiagram() {
  const [selectedNode, setSelectedNode] = useState(null);
  const details = diagramNodeDetails.sprav;
  const handleNodeClick = (nodeName) => setSelectedNode(nodeName === selectedNode ? null : nodeName);
  return (
    <div className="project-diagram-wrapper">
      <p className="diagram-hint">Tap any node below for the real numbers behind it</p>
      <svg width="100%" viewBox="0 0 680 300" role="img">
        <title>SPrav Job AI architecture</title>
        <desc>A five-stage pipeline: discovery, extraction, fit scoring, tailoring, and execution.</desc>
        <defs><marker id="arrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
        <g onClick={() => handleNodeClick('Discovery')} style={{ cursor: 'pointer' }} className={selectedNode === 'Discovery' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="40" y="60" width="180" height="56" rx="8" fill="var(--panel)" stroke="var(--line)" strokeWidth={selectedNode === 'Discovery' ? '1.5' : '0.5'}/>
          <text x="130" y="80" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Discovery</text>
          <text x="130" y="100" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Scrapes job boards</text>
          <circle cx="210" cy="70" r="4" fill="var(--cyan)" />
        </g>
        <line x1="220" y1="88" x2="250" y2="88" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow3)"/>
        <g onClick={() => handleNodeClick('Extraction')} style={{ cursor: 'pointer' }} className={selectedNode === 'Extraction' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="250" y="60" width="180" height="56" rx="8" fill="var(--panel)" stroke="var(--line)" strokeWidth={selectedNode === 'Extraction' ? '1.5' : '0.5'}/>
          <text x="340" y="80" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Extraction</text>
          <text x="340" y="100" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">To structured JSON</text>
          <circle cx="420" cy="70" r="4" fill="var(--cyan)" />
        </g>
        <line x1="430" y1="88" x2="460" y2="88" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow3)"/>
        <g onClick={() => handleNodeClick('Fit scoring')} style={{ cursor: 'pointer' }} className={selectedNode === 'Fit scoring' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="460" y="60" width="180" height="56" rx="8" fill="var(--panel)" stroke="var(--line)" strokeWidth={selectedNode === 'Fit scoring' ? '1.5' : '0.5'}/>
          <text x="550" y="80" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Fit scoring</text>
          <text x="550" y="100" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Match score calc</text>
          <circle cx="630" cy="70" r="4" fill="var(--cyan)" />
        </g>
        <path d="M550 116 L550 150 L220 150 L220 200" fill="none" stroke="var(--line)" strokeWidth="0.5" markerEnd="url(#arrow3)"/>
        <g onClick={() => handleNodeClick('Tailoring')} style={{ cursor: 'pointer' }} className={selectedNode === 'Tailoring' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="110" y="200" width="220" height="56" rx="8" fill="var(--panel)" stroke="var(--line)" strokeWidth={selectedNode === 'Tailoring' ? '1.5' : '0.5'}/>
          <text x="220" y="220" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Tailoring</text>
          <text x="220" y="240" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Drafts resume and email</text>
          <circle cx="320" cy="210" r="4" fill="var(--cyan)" />
        </g>
        <line x1="330" y1="228" x2="410" y2="228" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow3)"/>
        <g onClick={() => handleNodeClick('Execution')} style={{ cursor: 'pointer' }} className={selectedNode === 'Execution' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="410" y="200" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--cyan)" strokeWidth={selectedNode === 'Execution' ? '1.5' : '0.5'}/>
          <text x="520" y="220" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Execution</text>
          <text x="520" y="240" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Submits the application</text>
          <circle cx="620" cy="210" r="4" fill="var(--cyan)" />
        </g>
      </svg>
      {selectedNode && details[selectedNode] && (
        <div className="diagram-detail-panel">
          <div className="diagram-detail-stat">{details[selectedNode].stat}</div>
          <p className="diagram-detail-text">{details[selectedNode].detail}</p>
        </div>
      )}
    </div>
  );
}

function ShipForesightDiagram() {
  const [selectedNode, setSelectedNode] = useState(null);
  const details = diagramNodeDetails.shipforesight;
  const handleNodeClick = (nodeName) => setSelectedNode(nodeName === selectedNode ? null : nodeName);
  return (
    <div className="project-diagram-wrapper">
      <p className="diagram-hint">Tap any node below for the real numbers behind it</p>
      <svg width="100%" viewBox="0 0 680 430" role="img">
        <title>ShipForesight architecture</title>
        <desc>A three-stage ML cascade for delay prediction, enriched by a DuckDB feature store, feeding into an LLM explainer.</desc>
        <defs><marker id="arrow4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
        <g onClick={() => handleNodeClick('Ensemble classifier')} style={{ cursor: 'pointer' }} className={selectedNode === 'Ensemble classifier' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="40" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--blue)" strokeWidth={selectedNode === 'Ensemble classifier' ? '1.5' : '0.5'}/>
          <text x="340" y="60" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Ensemble classifier</text>
          <text x="340" y="80" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Soft-voting ensemble</text>
          <circle cx="440" cy="50" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="96" x2="340" y2="140" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow4)"/>
        <path d="M440 118 L340 118" fill="none" stroke="var(--line)" strokeWidth="0.5" markerEnd="url(#arrow4)"/>
        <g onClick={() => handleNodeClick('DuckDB enrichment')} style={{ cursor: 'pointer' }} className={selectedNode === 'DuckDB enrichment' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="440" y="93" width="190" height="50" rx="8" fill="var(--panel-strong)" stroke="var(--yellow)" strokeWidth={selectedNode === 'DuckDB enrichment' ? '1.5' : '0.5'}/>
          <text x="535" y="110" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">DuckDB enrichment</text>
          <text x="535" y="128" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Route + vendor stats</text>
          <circle cx="620" cy="103" r="4" fill="var(--cyan)" />
        </g>
        <g onClick={() => handleNodeClick('Delay regressor')} style={{ cursor: 'pointer' }} className={selectedNode === 'Delay regressor' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="140" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--blue)" strokeWidth={selectedNode === 'Delay regressor' ? '1.5' : '0.5'}/>
          <text x="340" y="160" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Delay regressor</text>
          <text x="340" y="180" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Estimates delay in days</text>
          <circle cx="440" cy="150" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="196" x2="340" y2="240" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow4)"/>
        <g onClick={() => handleNodeClick('Reason classifier')} style={{ cursor: 'pointer' }} className={selectedNode === 'Reason classifier' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="240" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--blue)" strokeWidth={selectedNode === 'Reason classifier' ? '1.5' : '0.5'}/>
          <text x="340" y="260" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">Reason classifier</text>
          <text x="340" y="280" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Top-3 likely causes</text>
          <circle cx="440" cy="250" r="4" fill="var(--cyan)" />
        </g>
        <line x1="340" y1="296" x2="340" y2="340" stroke="var(--cyan)" strokeWidth="1" markerEnd="url(#arrow4)"/>
        <g onClick={() => handleNodeClick('LLM explainer')} style={{ cursor: 'pointer' }} className={selectedNode === 'LLM explainer' ? 'diagram-node-active' : 'diagram-node'}>
          <rect x="230" y="340" width="220" height="56" rx="8" fill="var(--panel-strong)" stroke="var(--cyan)" strokeWidth={selectedNode === 'LLM explainer' ? '1.5' : '0.5'}/>
          <text x="340" y="360" textAnchor="middle" dominantBaseline="central" fill="var(--text)" fontSize="14" fontWeight="500">LLM explainer</text>
          <text x="340" y="380" textAnchor="middle" dominantBaseline="central" fill="var(--muted)" fontSize="12">Multilingual explanation</text>
          <circle cx="440" cy="350" r="4" fill="var(--cyan)" />
        </g>
      </svg>
      {selectedNode && details[selectedNode] && (
        <div className="diagram-detail-panel">
          <div className="diagram-detail-stat">{details[selectedNode].stat}</div>
          <p className="diagram-detail-text">{details[selectedNode].detail}</p>
        </div>
      )}
    </div>
  );
}

function Typewriter() {
  const roles = [
    'AI/ML Developer',
    'GenAI Engineer',
    'RAG Developer',
    'FastAPI Developer'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    const tick = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          timer = setTimeout(tick, 100);
          return;
        }
      }

      const speed = isDeleting ? 30 : 60;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, isDeleting ? 30 : 60);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="typewriter-badge">
      <span className="typewriter-prefix">specialization: </span>
      <span className="typewriter-text">{displayText}</span>
      <span className="typewriter-caret">|</span>
    </div>
  );
}

function ScrambleText({ text, trigger, duration = 500, delay = 0 }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    let isMounted = true;
    let start = null;
    const originalText = text;
    const length = originalText.length;

    const delayTimeout = setTimeout(() => {
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const fraction = Math.min(progress / duration, 1);

        const resolvedCount = Math.floor(fraction * length);

        let result = '';
        for (let i = 0; i < length; i++) {
          if (i < resolvedCount) {
            result += originalText[i];
          } else if (originalText[i] === ' ') {
            result += ' ';
          } else {
            result += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        if (isMounted) {
          setDisplayText(result);
        }

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          if (isMounted) {
            setDisplayText(originalText);
          }
        }
      };

      requestAnimationFrame(step);
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(delayTimeout);
    };
  }, [trigger, text, duration, delay]);

  return <span>{displayText}</span>;
}

function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) return;

    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.skill-card') ||
        target.closest('.project-card') ||
        target.closest('.heatmap-cell') ||
        target.closest('.quick-question-btn') ||
        target.closest('.theme-toggle') ||
        target.closest('.arch-toggle-btn') ||
        target.classList.contains('clickable');

      if (isInteractive) {
        if (dotRef.current) dotRef.current.classList.add('hovered');
        if (ringRef.current) ringRef.current.classList.add('hovered');
      } else {
        if (dotRef.current) dotRef.current.classList.remove('hovered');
        if (ringRef.current) ringRef.current.classList.remove('hovered');
      }
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId;
    const updateTrail = () => {
      const speed = 0.15;
      const dx = mouseX - trailX;
      const dy = mouseY - trailY;

      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        trailX += dx * speed;
        trailY += dy * speed;
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;
        }
      }
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    updateTrail();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-ring"
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
      />
    </>
  );
}

const terminalFallbacks = [
  {
    logs: [
      "[Agent] Processing custom query parameters...",
      "[Retrieval] Searching local document index...",
      "[WARNING] Query outside retrieval index. Document similarity distance exceeds threshold.",
      "[LLM] Grounding check failed. Initializing helpful index redirect..."
    ],
    text: "System Notice: Query out of index bounds.\n\nTo maintain strict grounding and prevent LLM hallucinations, I decline answering questions outside my indexed domain. Here is a quick overview of the key systems Praveen has engineered:\n- **RAG & Search**: Hybrid BM25 + dense retrieval with cross-encoder reranking.\n- **Agentic Systems**: Multi-agent orchestration with LangGraph and MCP tool-calling.\n- **Projects**: *RespiRAG*, *Finance RAG Copilot*, and *ShipForesight*.\n\nPlease choose one of the 'Ask Agent' quick buttons below or query one of these topics!"
  },
  {
    logs: [
      "[Agent] Querying local document collections...",
      "[Retrieval] No high-confidence matches found in vector store.",
      "[WARNING] Low similarity score. Aborting response generation to prevent hallucination.",
      "[LLM] Fallback handler activated. Redirecting to core milestones..."
    ],
    text: "System Notice: That query falls outside my indexed knowledge. To remain strictly grounded in facts, I decline to answer out-of-scope queries. However, I can help you inspect Praveen's core professional milestones:\n- **MobcoderAI**: Improved SEC-filing retrieval accuracy to ~95% and built multi-agent RAG pipelines with LangGraph.\n- **Core Stack**: Python, FastAPI, React, Qdrant, PostgreSQL, LangGraph, Groq.\n\nTry querying his internship or programming skills!"
  },
  {
    logs: [
      "[Agent] Directing query to local RAG indexes...",
      "[Retrieval] Query pattern mismatch. Similarity threshold not met.",
      "[WARNING] Declining query to maintain grounded factual answer constraints.",
      "[LLM] Dispatching helpful topic catalog..."
    ],
    text: "System Notice: Query index match not found. To prevent hallucinations, I only provide grounded information based on Praveen's professional repository. Here are some interesting topics you can query instead:\n- **Generative AI Engineering**: Sentence Transformers, semantic chunking, BM25 matching, and LLM orchestration (LangChain/LangGraph).\n\nSelect one of the 'Ask Agent' quick question buttons below to explore his works!"
  },
  {
    logs: [
      "[Agent] Processing search queries...",
      "[Retrieval] Sparse index returned 0 hits. Dense index similarity too low.",
      "[WARNING] Potential hallucination risk detected. Blocking out-of-bounds response.",
      "[LLM] Displaying database index directory..."
    ],
    text: "System Notice: Information Retrieval Warning: Out of indexed bounds. As a local RAG assistant, I cannot answer questions outside Praveen's career profile. To help you find what you need, here are the main indexed collections:\n- **Vector Indexes**: Qdrant databases storing semantic embeddings of AI projects.\n- **Relational Databases**: PostgreSQL schemas for audit logging and filing metadata.\n- **API Endpoints**: FastAPI backends for high-throughput client requests.\n\nPlease try another query related to his tech stack or projects!"
  },
  {
    logs: [
      "[Agent] Searching local index buffers...",
      "[Retrieval] Mismatch in index lookup values.",
      "[WARNING] No grounded documents retrieved. Halting inference.",
      "[LLM] Streaming index topic checklist..."
    ],
    text: "System Notice: Sorry, I couldn't retrieve matching context for that query. I am grounded strictly in Praveen's resume and portfolio, so I decline to hallucinate on general knowledge. Here is a list of topics I have fully indexed:\n1. **Projects**: *RespiRAG*, *Finance RAG Copilot*, *SPrav Job AI*, *ShipForesight*.\n2. **Work Experience**: MobcoderAI (AI/ML Engineer Intern).\n3. **Core Stack**: Python, FastAPI, React, Qdrant, LangGraph, PostgreSQL.\n\nFeel free to ask a question about these topics!"
  }
];

const chatbotFallbacks = [
  "I couldn't find matching data in my retrieval index for that query. To ensure all responses remain strictly factual and grounded, I only answer questions related to Praveen's profile.\n\nHere is what you can ask me about:\n- **AI & RAG Systems**: My hybrid retrieval pipelines, vector indexes (Qdrant), and reranking configurations.\n- **Python Backend**: API architectures built with FastAPI and database management.\n- **Featured Projects**: *RespiRAG*, *Finance RAG Copilot*, or *SPrav Job AI*.\n\nFeel free to select one of the Quick Queries below or try another question!",

  "That query falls outside my indexed knowledge base. I stay grounded strictly in facts to prevent hallucinations, so I decline to answer general queries.\n\nInstead, I can tell you about Praveen's core professional milestones:\n- **MobcoderAI**: Engineered production-grade RAG systems and hybrid search vector indexes.\n- **Core Stack**: Python, FastAPI, React, Qdrant, PostgreSQL, LangGraph, Groq.\n\nTry clicking one of the suggestions below to explore!",

  "Query index match not found. To avoid hallucinated answers, I only provide grounded responses based on Praveen's professional records.\n\nHere are some of the main topics I can help you with:\n- **GenAI Engineering**: Chunking strategies, semantic search, hybrid retrieval, and LLM prompt engineering.\n\nFeel free to choose one of the quick questions below to inspect further!",

  "Information Retrieval Notice: Query out of bounds. I am grounded strictly in Praveen's career profile to prevent hallucinations.\n\nTo find relevant information, try asking about his indexed collections:\n- **Vector Databases**: Qdrant semantic indexes for AI models.\n- **Relational Databases**: PostgreSQL backend schemas and query optimization.\n- **API Frameworks**: FastAPI microservices.\n\nPlease select one of the Quick Queries below!",

  "I couldn't retrieve matching context for that question. I decline to hallucinate on general knowledge to maintain grounded factual answers.\n\nHere are the topics I have fully indexed and can answer:\n1. **Projects**: *RespiRAG*, *Finance RAG Copilot*, *SPrav Job AI*, *ShipForesight*.\n2. **Experience**: MobcoderAI (AI/ML Engineer Intern).\n3. **Core Stack**: Python, FastAPI, React, Qdrant, LangGraph, PostgreSQL.\n\nFeel free to select one of the suggestions below!"
];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I am Praveen's AI Copilot. Ask me anything about his skills, experience, projects, or publication!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestions = [
    { label: "AI & RAG Projects", query: "Tell me about your RAG and Generative AI projects." },
    { label: "Work Experience", query: "Tell me about your role at Mobcoder AI" },
    { label: "Internships", query: "Tell me about your internship at Apana Time Tech" },
    { label: "Technical Skills", query: "What is your core programming and database stack?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (e, customQuery = null) => {
    if (e) e.preventDefault();
    const queryText = customQuery || input;
    if (!queryText.trim() || isTyping) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: 'user',
        text: queryText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setInput('');
    setIsTyping(true);

    const responseText = getPreciseGroundedResponse(queryText);

    setTimeout(() => {
      const finalResponse = responseText || chatbotFallbacks[Math.floor(Math.random() * chatbotFallbacks.length)];
      const msgId = Date.now();

      setMessages((prev) => [
        ...prev,
        {
          id: msgId,
          sender: 'bot',
          text: '',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);

      let i = 0;
      let currentText = "";
      const interval = setInterval(() => {
        const chunkSize = Math.floor(Math.random() * 3) + 2;
        if (i < finalResponse.length) {
          currentText += finalResponse.substring(i, i + chunkSize);
          setMessages((prev) => prev.map(m => m.id === msgId ? { ...m, text: currentText } : m));
          i += chunkSize;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 25);
    }, 800);
  };

  return (
    <div className="chatbot-widget-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-avatar-wrapper">
              <img src={agentAvatar} alt="Praveen AI Assistant" className="chatbot-avatar-img" />
              <span className="chatbot-status-dot" />
            </div>
            <div className="chatbot-header-info">
              <h4>Praveen's AI Copilot</h4>
              <p>Active / Grounded</p>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Chat">
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages-area">
            {messages.map((msg, index) => (
              <div className={`chatbot-msg-row ${msg.sender}`} key={index}>
                {msg.sender === 'bot' && (
                  <div className="chatbot-avatar-wrapper" style={{ width: '28px', height: '28px', flexShrink: 0 }}>
                    <img src={agentAvatar} alt="Bot" className="chatbot-avatar-img" />
                  </div>
                )}
                <div className="msg-content-wrapper">
                  <div className="msg-bubble">
                    {msg.text.split('\n').map((line, idx) => {
                      let content = line;
                      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
                      let match;
                      const parts = [];
                      let lastIndex = 0;

                      while ((match = linkRegex.exec(line)) !== null) {
                        const index = match.index;
                        if (index > lastIndex) {
                          parts.push(line.substring(lastIndex, index));
                        }
                        parts.push(
                          <a href={match[2]} target="_blank" rel="noreferrer" key={index} className="clickable">
                            {match[1]}
                          </a>
                        );
                        lastIndex = linkRegex.lastIndex;
                      }

                      if (lastIndex < line.length) {
                        parts.push(line.substring(lastIndex));
                      }

                      const finalNode = parts.map((part, pidx) => {
                        if (typeof part !== 'string') return part;
                        const boldParts = part.split('**');
                        return boldParts.map((bPart, bidx) => {
                          if (bidx % 2 === 1) return <strong key={bidx}>{bPart}</strong>;
                          return bPart;
                        });
                      });

                      return <p key={idx} style={{ margin: '4px 0' }}>{finalNode}</p>;
                    })}
                  </div>
                  <span className="msg-timestamp">{msg.timestamp}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-typing-row">
                <div className="chatbot-avatar-wrapper" style={{ width: '28px', height: '28px', flexShrink: 0 }}>
                  <img src={agentAvatar} alt="Bot" className="chatbot-avatar-img" />
                </div>
                <div className="typing-dot-animation">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-suggestions">
            <span className="chatbot-suggestions-title">Quick Queries:</span>
            <div className="chatbot-suggestions-list">
              {suggestions.map((sug, idx) => (
                <button
                  key={idx}
                  className="chatbot-suggestion-btn"
                  onClick={(e) => handleSendMessage(e, sug.query)}
                  disabled={isTyping}
                >
                  {sug.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about Praveen's profile..."
              disabled={isTyping}
            />
            <button type="submit" className="chatbot-send-btn" disabled={!input.trim() || isTyping}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        className={`chatbot-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? <X size={24} /> : <Bot size={28} />}
      </button>
    </div>
  );
}

// Helpers for dynamic GitHub integration
const generateMockGithubData = () => {
  const data = [];
  const activities = [
  "Tuned MedCPT retrieval threshold in RespiRAG",
  "Added deterministic groundness scoring to Finance RAG Copilot",
  "Improved Playwright reliability in SPrav Job AI",
  "Fixed DuckDB vendor enrichment lookup in ShipForesight",
  "Refactored LangGraph multi-agent routing logic",
  "Committed unit tests for hybrid retrieval evaluator",
  "Updated PostgreSQL audit logging schema",
  "Tuned Cross-Encoder reranking thresholds"
];
  const today = new Date();
  for (let i = 55; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dayStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const count = i % 7 === 0 || i % 11 === 0 ? 0 : Math.floor(Math.random() * 8);
    const activity = count > 0 ? activities[i % activities.length] : null;
    data.push({
      date: dayStr,
      count,
      activity: activity ? `${count} commits: ${activity}` : 'No public contributions'
    });
  }
  return data;
};


const fetchGitHubEvents = async (username) => {
  const cacheKey = `github_events_${username}`;
  const cacheTimeKey = `github_events_time_${username}`;
  const cacheExpiry = 5 * 60 * 1000; // 5 minutes

  try {
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);

    if (cachedData && cachedTime && Date.now() - Number(cachedTime) < cacheExpiry) {
      return JSON.parse(cachedData);
    }

    const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100&t=${Date.now()}`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(cacheTimeKey, String(Date.now()));
    return data;
  } catch (error) {
    console.warn("Failed to fetch real GitHub activity, using fallbacks:", error);
    return null;
  }
};

const getRelativeTimeString = (dateStr) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffHrs < 1) {
    const diffMins = Math.floor(diffMs / (1000 * 60));
    return diffMins <= 1 ? "Just now" : `${diffMins} minutes ago`;
  }
  if (diffHrs < 24) {
    return diffHrs === 1 ? "1 hour ago" : `${diffHrs} hours ago`;
  }
  if (diffDays === 1) {
    return "Yesterday";
  }
  return `${diffDays} days ago`;
};

const detectGroundedIntent = (queryText) => {
  if (!queryText) return null;
  const clean = queryText.toLowerCase().trim().replace(/-/g, " ").replace(/[.,\/#!$%\^&\*;:{}=\_\`~()?]/g, "");
  const words = clean.split(/\s+/);

  const contactKeywords = ['contact', 'email', 'linkedin', 'github', 'hire', 'reach', 'social', 'phone', 'mail', 'address', 'message', 'hiring'];
  if (words.some(w => contactKeywords.includes(w)) || clean.includes('get in touch') || clean.includes('how to connect') || clean.includes('talk to')) {
    return 'contact';
  }

  const resumeKeywords = ['resume', 'cv', 'biodata', 'profile'];
  if (words.some(w => resumeKeywords.includes(w)) || clean.includes('resume pdf') || clean.includes('download resume')) {
    return 'resume';
  }

  const projectKeywords = ['project', 'projects', 'portfolio', 'finance', 'rag', 'pipeline', 'respirag', 'clinical', 'oncology', 'nsclc', 'shipforesight', 'logistics', 'shipment', 'delay', 'sprav', 'job', 'playwright', 'qdrant', 'bm25', 'reranker'];
  if (
    words.some(w => projectKeywords.includes(w)) ||
    clean.includes('what has he built') ||
    clean.includes('what did he make') ||
    clean.includes('finance rag') ||
    clean.includes('projects built') ||
    clean.includes('projects developed') ||
    clean.includes('projects created') ||
    clean.includes('apps you made') ||
    clean.includes('systems you made')
  ) {
    return 'projects';
  }

  const experienceKeywords = ['experience', 'intern', 'internship', 'internships', 'job', 'mobcoder', 'career', 'employment', 'timeline', 'company', 'companies'];
  if (words.some(w => experienceKeywords.includes(w)) || clean.includes('where did he work') || clean.includes('work experience') || clean.includes('work history') || clean.includes('work at')) {
    return 'experience';
  }

  const skillKeywords = ['skill', 'skills', 'stack', 'languages', 'python', 'fastapi', 'react', 'postgresql', 'mongodb', 'database', 'databases', 'langchain', 'langgraph', 'ollama', 'groq', 'llama', 'ai', 'ml', 'nlp', 'vector', 'embeddings', 'retrieval', 'hybrid'];
  if (words.some(w => skillKeywords.includes(w)) || clean.includes('tech stack') || clean.includes('what does he know') || clean.includes('technical skills') || clean.includes('what tools')) {
    return 'skills';
  }

  const generalKeywords = ['hello', 'hi', 'hey', 'praveen', 'yourself', 'overview', 'summary', 'background', 'mumbai', 'university', 'education', 'degree', 'college', 'qualification'];
  if (
    words.some(w => generalKeywords.includes(w)) ||
    clean.includes('who is praveen') ||
    clean.includes('who is svs') ||
    clean.includes('who are you') ||
    clean.includes('who is this') ||
    clean.includes('about you') ||
    clean.includes('about yourself') ||
    clean.includes('introduce yourself')
  ) {
    return 'general';
  }

  return null;
};

const getPreciseGroundedResponse = (queryText) => {
  if (!queryText) return null;
  const clean = queryText.toLowerCase().trim().replace(/-/g, " ").replace(/[.,\/#!$%\^&\*;:{}=\_\`~()?]/g, "");

  if (clean.includes('respirag') || clean.includes('clinical') || clean.includes('oncology') || clean.includes('nsclc')) {
    const proj = projects.find(p => p.title === 'RespiRAG');
    return `**RespiRAG**\n**Description:** ${proj.description}\n\n**Stack:** ${proj.stack.join(', ')}\n\n**GitHub:** [Repository](${proj.github})`;
  }
  if (clean.includes('finance') || clean.includes('sec') || clean.includes('filing')) {
    const proj = projects.find(p => p.title === 'Finance RAG Copilot');
    return `**Finance RAG Copilot**\n**Description:** ${proj.description}\n\n**Stack:** ${proj.stack.join(', ')}\n\n**GitHub:** [Repository](${proj.github})`;
  }
  if (clean.includes('sprav') || clean.includes('job ai') || clean.includes('resume tailor') || clean.includes('job search')) {
    const proj = projects.find(p => p.title === 'SPrav Job AI');
    return `**SPrav Job AI**\n**Description:** ${proj.description}\n\n**Stack:** ${proj.stack.join(', ')}\n\n**GitHub:** [Repository](${proj.github})`;
  }
  if (clean.includes('shipforesight') || clean.includes('logistics') || clean.includes('shipment') || clean.includes('delay')) {
    const proj = projects.find(p => p.title === 'ShipForesight');
    return `**ShipForesight**\n**Description:** ${proj.description}\n\n**Stack:** ${proj.stack.join(', ')}\n\n**GitHub:** [Repository](${proj.github})`;
  }

  if (clean.includes('mobcoder') && (clean.includes('how') || clean.includes('why') || clean.includes('challenge') || clean.includes('hard') || clean.includes('difficult'))) {
    return "The trickiest part of the MobcoderAI work was getting hybrid retrieval to actually agree with itself — dense and sparse search rank documents completely differently, so fusing them with Reciprocal Rank Fusion and then reranking with a CrossEncoder took real tuning to get right on messy SEC filing tables.";
  }
  if (clean.includes('mobcoder') && (clean.includes('team') || clean.includes('who else') || clean.includes('alone') || clean.includes('solo'))) {
    return "That work was done as part of my AI/ML Engineer Intern role at MobcoderAI — I can share more about the technical architecture, but I'll leave team specifics for a direct conversation. Feel free to reach out via the Contact section!";
  }
  if (clean.includes('mobcoder') && (clean.includes('stack') || clean.includes('technology') || clean.includes('tools') || clean.includes('tech'))) {
    return "The core stack for that work was Python, Qdrant for vector search, BM25 for sparse retrieval, a CrossEncoder for reranking, and Groq-hosted Llama models for the agent routing and generation layer.";
  }

  if (clean.includes('mobcoder')) {
    const exp = experiences.find(e => e.company.toLowerCase().includes('mobcoder'));
    return `**${exp.role} at ${exp.company} (${exp.period})**\n${exp.points.map(pt => `- ${pt}`).join('\n')}`;
  }

  if (clean.includes('langgraph') || clean.includes('langchain') || clean.includes('agentic') || clean.includes('multi agent') || clean.includes('mcp')) {
    const group = skillGroups.find(g => g.id === 'Agentic AI');
    return `**Agentic AI & Orchestration:**\nPraveen works with **${group.skills.join(', ')}**.`;
  }
  if (clean.includes('bm25') || clean.includes('hybrid search') || clean.includes('rerank') || clean.includes('cross encoder')) {
    const group = skillGroups.find(g => g.id === 'Retrieval & Search');
    return `**Retrieval & Search:**\nPraveen designs retrieval strategies using **${group.skills.join(', ')}**.`;
  }
  if (clean.includes('qdrant') || clean.includes('pinecone') || clean.includes('groq') || clean.includes('ollama') || clean.includes('llama') || clean.includes('vector database')) {
    const group = skillGroups.find(g => g.id === 'LLMs & Vector DBs');
    return `**LLMs & Vector Databases:**\nPraveen works with **${group.skills.join(', ')}**.`;
  }
  if (clean.includes('lightgbm') || clean.includes('xgboost') || clean.includes('scikit') || clean.includes('machine learning') || clean.includes('mlflow')) {
    const group = skillGroups.find(g => g.id === 'ML & Evaluation');
    return `**ML & Evaluation:**\nPraveen is experienced in **${group.skills.join(', ')}**.`;
  }
  if (clean.includes('fastapi') || clean.includes('react') || clean.includes('postgresql') || clean.includes('mongodb') || clean.includes('backend') || clean.includes('python')) {
    const group = skillGroups.find(g => g.id === 'Full Stack & Backend');
    return `**Full Stack & Backend:**\nPraveen builds with **${group.skills.join(', ')}**.`;
  }
  if (clean.includes('aws') || clean.includes('oracle') || clean.includes('oci') || clean.includes('gcp') || clean.includes('cloud') || clean.includes('kubernetes') || clean.includes('security')) {
    const group = skillGroups.find(g => g.id === 'Cloud & Security');
    return `**Cloud & Security:**\nPraveen has experience with **${group.skills.join(', ')}**.`;
  }

  const intent = detectGroundedIntent(queryText);
  if (intent && intent !== 'contact' && intent !== 'resume') {
    return assistantAnswers[intent];
  } else if (intent === 'contact') {
    return "You can reach out to Praveen at:\n- **Email**: " + profile.email + "\n- **LinkedIn**: [LinkedIn Profile](" + profile.linkedin + ")";
  } else if (intent === 'resume') {
    return "Sure! You can review or download Praveen's professional resume here: [Google Drive Resume](" + profile.resume + ").";
  }

  return null;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeFilter, setActiveFilter] = useState('All');

  const [visibleSections, setVisibleSections] = useState({});
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.15,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (id) {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            setActiveSection(id);
          } else {
            setVisibleSections((prev) => ({ ...prev, [id]: false }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.section, .contact-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    return () => {
      if (activeIntervalRef.current) {
        clearInterval(activeIntervalRef.current);
      }
      activeTimeoutsRef.current.forEach((tId) => clearTimeout(tId));
    };
  }, []);

  const handleScrollToId = (e, id) => {
    if (e) e.preventDefault();
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      setVisibleSections((prev) => ({ ...prev, [targetId]: false }));

      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(targetId);

      setTimeout(() => {
        setVisibleSections((prev) => ({ ...prev, [targetId]: true }));
      }, 150);
    }
  };

  // Terminal Console states:
  const [activeConsoleTab, setActiveConsoleTab] = useState('console'); // 'console' or 'pipeline'
  const [queryInput, setQueryInput] = useState('');
  const [consoleLogs, setConsoleLogs] = useState([
    "[System] Console initialized. Ready to query Praveen's profile index."
  ]);
  const [consoleAnswer, setConsoleAnswer] = useState(
    "Select a quick question below or type custom queries (e.g. 'projects', 'skills') to simulate a full RAG retrieval workflow."
  );
  const [isTyping, setIsTyping] = useState(false);
  const activeIntervalRef = useRef(null);
  const activeTimeoutsRef = useRef([]);

  // RAG Pipeline Simulation states:
  const [simStep, setSimStep] = useState(0); // 0: Raw text, 1: Chunking, 2: Hybrid Retrieval, 3: Reranker, 4: Grounded Gen
  const [isSimulating, setIsSimulating] = useState(false);
  const [retrievalType, setRetrievalType] = useState('both'); // 'dense', 'sparse', 'both'

  // Skill Inspector states:
  const [activeSkillGroup, setActiveSkillGroup] = useState('Agentic AI');

  // Project architecture states:
  const [openArch, setOpenArch] = useState({});

  // GitHub dynamic activity details states:
  const [githubContributions, setGithubContributions] = useState([]);
  const [hoveredContribution, setHoveredContribution] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const loadGitHubActivity = async () => {
      const username = 'SVSPraveen';
      const events = await fetchGitHubEvents(username);

      if (events && Array.isArray(events)) {
        // 1. Process Heatmap Data — count derived directly from events
        const contributions = [];
        const today = new Date();
        for (let i = 55; i >= 0; i--) {
          const d = new Date(today);
          d.setDate(today.getDate() - i);

          const dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
          const dayStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

          const dayEvents = events.filter(ev => {
            if (!ev.created_at) return false;
            return ev.created_at.slice(0, 10) === dateStr;
          });
          const count = dayEvents.length;

          contributions.push({
            timeKey: d.toDateString(),
            date: dayStr,
            count: count,
            activity: count > 0 ? `${count} contribution${count > 1 ? 's' : ''}` : 'No public contributions'
          });
        }

        // Aggregate event counts and descriptions
        events.forEach(event => {
          if (!event.created_at) return;
          const eventDate = new Date(event.created_at);
          eventDate.setHours(0, 0, 0, 0);
          const eventDateString = eventDate.toDateString();

          const foundDay = contributions.find(c => c.timeKey === eventDateString);
          if (foundDay) {
            // Count is accurate from heatmap API, just append text
            let desc = '';
            if (event.type === 'PushEvent' && event.payload?.commits?.[0]) {
              desc = event.payload.commits[0].message;
            } else if (event.type === 'PullRequestEvent') {
              desc = `${event.payload?.action || 'opened'} PR: ${event.payload?.pull_request?.title || ''}`;
            } else if (event.type === 'IssuesEvent') {
              desc = `${event.payload?.action || 'opened'} Issue: ${event.payload?.issue?.title || ''}`;
            } else if (event.type === 'CreateEvent') {
              desc = `Created ${event.payload?.ref_type || 'ref'} ${event.payload?.ref || ''}`;
            } else {
              desc = `${event.type.replace('Event', '')} activity`;
            }

            if (foundDay.activity.includes('contribution')) {
              foundDay.activity += `: ${desc}`;
            } else if (!foundDay.activity.includes(desc)) {
              foundDay.activity += `, ${desc}`;
            }
          }
        });

        // Format tooltip texts
        contributions.forEach(c => {
          if (c.activity.length > 80) {
            c.activity = c.activity.substring(0, 77) + '...';
          }
        });

        setGithubContributions(contributions);

      }
    };

    loadGitHubActivity();
  }, []);

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const closeMenu = () => setIsMenuOpen(false);
  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');

    // Strict email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/svspraveens@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert("Thank you! Your message has been sent successfully. Praveen will get back to you soon.");
        event.target.reset();
      } else {
        alert("Oops! Something went wrong. Please email directly at svspraveens@gmail.com.");
      }
    } catch (error) {
      alert("Oops! Connection failed. Please email directly at svspraveens@gmail.com.");
    } finally {
      setIsSending(false);
    }
  };

  // Helper for typing/streaming effect
  const streamResponse = (text, logs) => {
    setIsTyping(true);
    setConsoleAnswer('');
    setConsoleLogs([]);

    // Clear any existing streaming interval
    if (activeIntervalRef.current) {
      clearInterval(activeIntervalRef.current);
      activeIntervalRef.current = null;
    }

    // Clear any pending timeouts
    activeTimeoutsRef.current.forEach((tId) => clearTimeout(tId));
    activeTimeoutsRef.current = [];

    let logDelay = 0;
    logs.forEach((logLine, index) => {
      const tId = setTimeout(() => {
        setConsoleLogs((prev) => [...prev, logLine]);
      }, logDelay);
      activeTimeoutsRef.current.push(tId);
      logDelay += 350;
    });

    const mainTimeoutId = setTimeout(() => {
      let charIndex = 0;
      // We will parse the simple markdown for formatting in display, 
      // but type character-by-character.
      const interval = setInterval(() => {
        if (charIndex >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
          if (activeIntervalRef.current === interval) {
            activeIntervalRef.current = null;
          }
          return;
        }
        const nextChar = text[charIndex];
        setConsoleAnswer((prev) => prev + (nextChar || ''));
        charIndex++;
      }, 10);

      activeIntervalRef.current = interval;
    }, logDelay + 100);
    activeTimeoutsRef.current.push(mainTimeoutId);
  };

  const handleQuickQuestion = (item) => {
    if (isTyping) return;
    setQueryInput(item.query);
    streamResponse(assistantAnswers[item.topic], item.logs);
  };

  const handleCustomQuery = (e) => {
    e.preventDefault();
    if (!queryInput.trim() || isTyping) return;

    const responseText = getPreciseGroundedResponse(queryInput);
    let logs = [
      "[Agent] Processing custom query parameters...",
      "[Retrieval] Converting query string into semantic vectors...",
      "[Retrieval] Searching local document index...",
      "[LLM] Context assembled. Formatting response..."
    ];

    if (responseText) {
      streamResponse(responseText, logs);
    } else {
      const randomIndex = Math.floor(Math.random() * terminalFallbacks.length);
      const fallback = terminalFallbacks[randomIndex];
      streamResponse(fallback.text, fallback.logs);
    }
  };

  // Toggle project architecture
  const toggleArch = (title) => {
    setOpenArch((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // GitHub activity is dynamically loaded on mount and updated via states.

  return (
    <main className={`app ${theme}`}>
      <CustomCursor />
      <Chatbot />
      <div className="background-effects" style={{ '--bg-image': `url(${heroBg})` }} aria-hidden="true">
        <span className="grid-plane" />
        <span className="neural-line line-one" />
        <span className="neural-line line-two" />
        <span className="pulse-dot dot-one" />
        <span className="pulse-dot dot-two" />
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label={`${profile.name} home`}
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('top');
          }}
        >
          <span>{profile.initials}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                href={href}
                key={label}
                className={isActive ? 'active-nav-link' : ''}
                onClick={(e) => handleScrollToId(e, href)}
              >
                {label}
                {isActive && <span className="nav-link-dot" />}
              </a>
            );
          })}
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
        <a className="nav-cta" href="#contact" onClick={(e) => handleScrollToId(e, '#contact')}>
          <Mail size={18} aria-hidden="true" />
          Contact
        </a>
        <button
          className="icon-button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        {isMenuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  href={href}
                  key={label}
                  className={isActive ? 'active-nav-link' : ''}
                  onClick={(e) => {
                    closeMenu();
                    handleScrollToId(e, href);
                  }}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        )}
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            AI/ML Engineer building practical GenAI systems
          </p>
          <h1 id="hero-title">Architecting Production-Grade GenAI &amp; Scalable AI Backends</h1>
          <p className="hero-copy">
            <span className="name-highlight">{profile.name}</span> is an AI/ML Engineer specializing in cross-domain AI Applications, Large Language
            Models, Hybrid Retrieval, and scalable backend architectures.
          </p>
          <Typewriter />
          <div className="hero-actions">
            <a className="primary-button" href="#projects" onClick={(e) => handleScrollToId(e, '#projects')}>
              View Projects
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-button" href={profile.resume} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              View Resume
            </a>
            <a className="ghost-button" href="#contact" onClick={(e) => handleScrollToId(e, '#contact')}>
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="AI system overview">
          <div className="console-wrapper glass-card">
            <div className="console-tabs">
              <button
                className={`console-tab-btn ${activeConsoleTab === 'console' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('console')}
              >
                <TerminalIcon size={14} />
                AI Agent Console
              </button>
              <button
                className={`console-tab-btn ${activeConsoleTab === 'pipeline' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('pipeline')}
              >
                <Cpu size={14} />
                RAG Pipeline Simulator
              </button>
            </div>

            {activeConsoleTab === 'console' ? (
              <div className="terminal-panel">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="terminal-title">agent@praveen-ai: ~</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-logs">
                    {consoleLogs.map((log, index) => (
                      <div className="log-line" key={index}>{log}</div>
                    ))}
                    {isTyping && <div className="log-line animate-pulse">[Agent] Querying vector data. Please wait...</div>}
                  </div>
                  <div className="terminal-response">
                    <p className="response-prefix">Response:</p>
                    <div className="response-content">
                      {consoleAnswer.startsWith("###") || consoleAnswer.includes("- ") || consoleAnswer.includes("**") ? (
                        <div className="markdown-sim">
                          {consoleAnswer.split('\n').map((line, idx) => {
                            const renderBold = (text) => {
                              const parts = text.split('**');
                              if (parts.length === 1) return text;
                              return parts.map((part, i) => (i % 2 === 1 ? <strong key={i} style={{ color: '#fff' }}>{part}</strong> : part));
                            };

                            if (line.startsWith('###')) {
                              return <h4 key={idx}>{renderBold(line.replace('###', '').trim())}</h4>;
                            }
                            if (line.startsWith('- ') || line.startsWith('* ')) {
                              return <li key={idx}>{renderBold(line.substring(2))}</li>;
                            }
                            if (line.match(/^\d+\./)) {
                              return <div className="num-item" key={idx}>{renderBold(line)}</div>;
                            }
                            return <p key={idx}>{renderBold(line)}</p>;
                          })}
                        </div>
                      ) : (
                        <p>{consoleAnswer.split('**').map((part, i) => (i % 2 === 1 ? <strong key={i} style={{ color: '#fff' }}>{part}</strong> : part))}</p>
                      )}
                      {isTyping && <span className="terminal-cursor" />}
                    </div>
                  </div>
                </div>

                <div className="terminal-quick-links">
                  <span className="quick-label">Ask Agent:</span>
                  <div className="quick-btns">
                    {quickQuestions.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickQuestion(item)}
                        disabled={isTyping}
                        className="quick-question-btn"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleCustomQuery} className="terminal-input-bar">
                  <span className="terminal-prompt">&gt;</span>
                  <input
                    type="text"
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                    placeholder="Type a custom query (e.g. 'projects')..."
                    disabled={isTyping}
                  />
                  <button type="submit" disabled={isTyping || !queryInput.trim()} aria-label="Send Query">
                    <Send size={14} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="pipeline-panel">
                <div className="pipeline-steps-nav">
                  {['1. Chunking', '2. Retrieval', '3. Reranking', '4. Generation'].map((label, idx) => (
                    <button
                      key={idx}
                      className={`pipeline-nav-btn ${simStep === idx ? 'active' : ''}`}
                      onClick={() => setSimStep(idx)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="pipeline-body">
                  {simStep === 0 && (
                    <div className="pipeline-step-view">
                      <h4>Document Chunking & Processing</h4>
                      <p className="step-desc">Ingested files are split semantically to keep contextual topics within singular vector windows.</p>

                      <div className="raw-text-box">
                        <h5>Raw Document:</h5>
                        <p>
                          "Large Language Models require external context. <span className="chunk-split-marker">|</span> Retrieval-Augmented Generation addresses this. <span className="chunk-split-marker">|</span> It retrieves relevant text chunks and appends them to the prompt."
                        </p>
                      </div>

                      <div className="action-row">
                        <button className="primary-button compact" onClick={() => {
                          setIsSimulating(true);
                          setTimeout(() => {
                            setIsSimulating(false);
                            setSimStep(1);
                          }, 1000);
                        }}>
                          {isSimulating ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
                          Run Chunk Splitter
                        </button>
                      </div>
                    </div>
                  )}

                  {simStep === 1 && (
                    <div className="pipeline-step-view">
                      <h4>Hybrid Search In Action</h4>
                      <p className="step-desc">We fetch text nodes via Vector distance matching (semantic) AND BM25 keyterm counts (sparse).</p>

                      <div className="search-methods-grid">
                        <div className="method-box dense">
                          <h5>Dense Search (Qdrant Vector DB)</h5>
                          <div className="retrieval-list">
                            <div className="retrieved-item active">
                              <span>Match: 89%</span>
                              <p>"Retrieval-Augmented Generation addresses this..."</p>
                            </div>
                            <div className="retrieved-item">
                              <span>Match: 52%</span>
                              <p>"It retrieves relevant text chunks..."</p>
                            </div>
                          </div>
                        </div>

                        <div className="method-box sparse">
                          <h5>Sparse Search (BM25 Index)</h5>
                          <div className="retrieval-list">
                            <div className="retrieved-item active">
                              <span>Score: 4.21</span>
                              <p>"Large Language Models require external context..."</p>
                            </div>
                            <div className="retrieved-item">
                              <span>Score: 1.84</span>
                              <p>"Retrieval-Augmented Generation addresses this..."</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="action-row">
                        <button className="secondary-button" onClick={() => setSimStep(0)}>Back</button>
                        <button className="primary-button compact" onClick={() => {
                          setIsSimulating(true);
                          setTimeout(() => {
                            setIsSimulating(false);
                            setSimStep(2);
                          }, 1000);
                        }}>
                          {isSimulating ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
                          Merge via Reciprocal Rank Fusion
                        </button>
                      </div>
                    </div>
                  )}

                  {simStep === 2 && (
                    <div className="pipeline-step-view">
                      <h4>Cross-Encoder BGE Reranker</h4>
                      <p className="step-desc">A deep cross-attention neural model scores query compatibility directly against each chunk to reorder relevance.</p>

                      <div className="rerank-simulation">
                        <div className="rerank-item raw-first">
                          <span className="badge">Rank #1 (Raw RRF)</span>
                          <span className="score">RRF Rank: 1</span>
                          <p>"Large Language Models require external context..."</p>
                          <ChevronRight size={14} className="rerank-arrow" />
                          <span className="new-rank badge-cyan">Rank #2 (BGE Score: 0.61)</span>
                        </div>
                        <div className="rerank-item raw-second">
                          <span className="badge">Rank #2 (Raw RRF)</span>
                          <span className="score">RRF Rank: 2</span>
                          <p>"Retrieval-Augmented Generation addresses this..."</p>
                          <ChevronRight size={14} className="rerank-arrow" />
                          <span className="new-rank badge-green">Rank #1 (BGE Score: 0.94)</span>
                        </div>
                      </div>

                      <div className="action-row">
                        <button className="secondary-button" onClick={() => setSimStep(1)}>Back</button>
                        <button className="primary-button compact" onClick={() => {
                          setIsSimulating(true);
                          setTimeout(() => {
                            setIsSimulating(false);
                            setSimStep(3);
                          }, 1000);
                        }}>
                          {isSimulating ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
                          Apply Grounded Generation
                        </button>
                      </div>
                    </div>
                  )}

                  {simStep === 3 && (
                    <div className="pipeline-step-view">
                      <h4>Context-Grounded LLM Generation</h4>
                      <p className="step-desc">The LLM receives the system instruction, user query, and verified source documents to formulate a factual answer.</p>

                      <div className="prompt-template-preview">
                        <h6>System Prompt:</h6>
                        <pre className="code-font">
                          {"Answer the Query based ONLY on the Context:\n\n[Context]\nRef[1]: \"Retrieval-Augmented Generation addresses this...\"\n\n[Query]\n\"How does RAG resolve context limitations?\""}
                        </pre>
                        <h6>Generated Output:</h6>
                        <div className="llm-output-box">
                          <p className="streaming-output">
                            "RAG addresses LLM context limitations by retrieving specific relevant text chunks and appending them directly to the prompt template before inference <span className="ref-citation">[Ref 1]</span>."
                          </p>
                        </div>
                      </div>

                      <div className="action-row">
                        <button className="secondary-button" onClick={() => setSimStep(2)}>Back</button>
                        <button className="primary-button compact" onClick={() => setSimStep(0)}>
                          <RefreshCw size={14} />
                          Restart Simulator
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>
      </section>

      <section className="stats" aria-label="Portfolio highlights">
        {stats.map(([metric, label]) => (
          <div className="glass-card stat-card" key={metric}>
            <strong>{metric}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className={`section about-section ${visibleSections['about'] ? 'section-scan-active' : ''}`} id="about" aria-labelledby="about-title">
        <div className="scan-line" />
        <div className="section-heading">
          <p className="section-kicker">
            <ScrambleText text="About Me" trigger={visibleSections['about']} />
          </p>
          <h2 id="about-title">
            <ScrambleText text="An AI engineer who thinks in systems, not demos." trigger={visibleSections['about']} />
          </h2>
        </div>
        <div className="about-copy glass-card">
          <p>
            Dedicated <span className="name-highlight">GenAI Engineer</span> specializing in architecting cross-domain AI applications and scalable backend systems. My expertise spans building sophisticated multi-agent clinical decision support systems for the medical domain, alongside complex hybrid RAG pipelines for legal and financial document analysis.
          </p>
          <p>
            With a strong focus on LLM orchestration, I am committed to bridging advanced AI algorithms with high-performance, user-centric applications to deliver measurable impact across diverse industries.
          </p>
        </div>
      </section>

      <section className={`section skills-section ${visibleSections['skills'] ? 'section-scan-active' : ''}`} id="skills" aria-labelledby="skills-title">
        <div className="scan-line" />
        <div className="section-heading">
          <p className="section-kicker">
            <ScrambleText text="Skills" trigger={visibleSections['skills']} />
          </p>
          <h2 id="skills-title">
            <ScrambleText text="A stack built for production-grade AI applications." trigger={visibleSections['skills']} />
          </h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map(({ id, title, icon: Icon, skills }) => (
            <article
              className={`skill-card glass-card ${activeSkillGroup === id ? 'selected-skill-card' : ''}`}
              key={title}
              onClick={() => setActiveSkillGroup(id)}
            >
              <div className="card-icon">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <span style={{ '--level': `${72 + index * 4}%` }} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CLI Skill Inspector Panel */}
        <div className="skills-cli-wrapper glass-card">
          <div className="cli-header">
            <div className="cli-dots">
              <span className="cli-dot red" />
              <span className="cli-dot yellow" />
              <span className="cli-dot green" />
            </div>
            <span className="cli-title">Skill Inspector - bash</span>
          </div>
          <div className="cli-body code-font">
            <div className="cli-command-line">
              <span className="cli-prompt">praveen-pc:~$</span>
              <span className="cli-entered-command"> {skillGroupInspectorData[activeSkillGroup]?.commands}</span>
            </div>
            <div className="cli-output">
              {skillGroupInspectorData[activeSkillGroup]?.lines.map((line, index) => (
                <div
                  key={index}
                  className={`cli-output-line ${line.startsWith('[SUCCESS]') ? 'cli-success' : line.startsWith('[SYSTEM]') ? 'cli-system' : 'cli-details'}`}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
          <div className="cli-hint">
            *Click on any skill category card above to inspect specific architecture configs in the terminal.*
          </div>
        </div>
      </section>

      <section className={`section experience-section ${visibleSections['experience'] ? 'section-scan-active' : ''}`} id="experience" aria-labelledby="experience-title">
        <div className="scan-line" />
        <div className="section-heading">
          <p className="section-kicker">
            <ScrambleText text="Experience" trigger={visibleSections['experience']} />
          </p>
          <h2 id="experience-title">
            <ScrambleText text="Hands-on work across AI pipelines and scalable Python systems." trigger={visibleSections['experience']} />
          </h2>
        </div>
        <div className="experience-list">
          {experiences.map(({ role, company, period, icon: Icon, points }) => (
            <article className="experience-card glass-card" key={company}>
              <div className="experience-topline">
                <div className="card-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <p>{period}</p>
                  <h3>{role}</h3>
                  <span className="company-badge">{company}</span>
                </div>
              </div>
              <ul>
                {points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={`section projects-section ${visibleSections['projects'] ? 'section-scan-active' : ''}`} id="projects" aria-labelledby="projects-title">
        <div className="scan-line" />
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">
              <ScrambleText text="Featured Projects" trigger={visibleSections['projects']} />
            </p>
            <h2 id="projects-title">
              <ScrambleText text="RAG, retrieval, backend, and applied AI work." trigger={visibleSections['projects']} />
            </h2>
          </div>
          <div className="filter-tabs" aria-label="Project filters">
            {projectFilters.map((filter) => (
              <button
                className={activeFilter === filter ? 'active' : ''}
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, idx) => {
            const isArchOpen = openArch[project.title];
            return (
              <article className="project-card glass-card" key={project.title}>
                <div className="project-card-banner" style={{ backgroundImage: `url(${project.bannerImage})` }} />
                <div className="project-card-content">
                  <div className="project-top-row">
                    <div className="project-signal">
                      <Layers3 size={18} aria-hidden="true" />
                      {project.signal}
                    </div>
                    <button
                      className={`arch-toggle-btn ${isArchOpen ? 'active' : ''}`}
                      onClick={() => toggleArch(project.title)}
                      aria-label="View system architecture diagram"
                    >
                      <Sliders size={14} />
                      {isArchOpen ? 'Hide Diagram' : 'See how it works'}
                    </button>
                  </div>

                  <h3>{project.title}</h3>

                  {isArchOpen ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                      {project.title === 'RespiRAG' && <RespiRAGDiagram />}
                      {project.title === 'Finance RAG Copilot' && <FinanceRAGDiagram />}
                      {project.title === 'SPrav Job AI' && <SpravJobDiagram />}
                      {project.title === 'ShipForesight' && <ShipForesightDiagram />}

                      <div className="project-arch-container">
                        <p className="arch-header">Pipeline Steps:</p>
                        <div className="arch-vertical-flow">
                          {project.architecture.map((step, sidx) => (
                            <div className="arch-v-step" key={sidx}>
                              <span className="step-num">{sidx + 1}</span>
                              <div className="step-info">
                                <h6>{step.name}</h6>
                                <p>{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="project-desc-container">
                      <p>{project.description}</p>
                      {project.features && (
                        <ul style={{ paddingLeft: '20px', margin: '10px 0 15px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {project.features.map((feature, fidx) => (
                            <li style={{ fontSize: '0.92rem', color: '#b3b3b3', listStyleType: 'disc' }} key={fidx}>{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={project.github || profile.github} target="_blank" rel="noreferrer">
                      <Github size={17} aria-hidden="true" />
                      GitHub
                    </a>
                    <a href="#contact" onClick={(e) => handleScrollToId(e, '#contact')}>
                      <Rocket size={17} aria-hidden="true" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`section client-work-section ${visibleSections['client-work'] ? 'section-scan-active' : ''}`} id="client-work" aria-labelledby="client-work-title">
        <div className="scan-line" />
        <div className="section-heading">
          <p className="section-kicker">
            <ScrambleText text="Client Work" trigger={visibleSections['client-work']} />
          </p>
          <h2 id="client-work-title">
            <ScrambleText text="Real client, real payments, delivered solo." trigger={visibleSections['client-work']} />
          </h2>
        </div>
        <div className="about-copy glass-card">
          <h3 style={{ margin: '0 0 12px', fontSize: '1.1rem', color: 'var(--text)' }}>{clientWork.title}</h3>
          <p>{clientWork.description}</p>
          <ul style={{ paddingLeft: '20px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {clientWork.points.map((point, idx) => (
              <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--muted)', listStyleType: 'disc' }}>{point}</li>
            ))}
          </ul>
          <div className="tag-list">
            {clientWork.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={`section certifications-section ${visibleSections['certifications'] ? 'section-scan-active' : ''}`} id="certifications" aria-labelledby="certifications-title">
        <div className="scan-line" />
        <div className="section-heading">
          <p className="section-kicker">
            <ScrambleText text="Certifications" trigger={visibleSections['certifications']} />
          </p>
          <h2 id="certifications-title">
            <ScrambleText text="Continuous learning across GenAI, Python, Django, and databases." trigger={visibleSections['certifications']} />
          </h2>
        </div>
        <div className="cert-grid">
          {certifications.map((certification) => (
            <article className="cert-card glass-card" key={certification}>
              <Award size={24} aria-hidden="true" />
              <h3>{certification}</h3>
              <p>Verified course completion and practical skill development.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`section github-section ${visibleSections['github'] ? 'section-scan-active' : ''}`} id="github" aria-labelledby="github-title">
        <div className="scan-line" />
        <div className="github-activity-wrapper glass-card">
          <div className="github-activity-left">
            <p className="section-kicker">
              <ScrambleText text="GitHub Activity" trigger={visibleSections['github']} />
            </p>
            <h2 id="github-title">
              <ScrambleText text="Consistent engineering practice, visible through shipped work." trigger={visibleSections['github']} />
            </h2>

            <div className="activity-heatmap-container">
              {githubContributions.length === 0 ? (
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Loading live activity from GitHub...</p>
              ) : (
                <div className="contribution-grid" aria-label="GitHub contribution activity preview">
                  {githubContributions.map((day, index) => {
                    let level = '0';
                    if (day.count > 0 && day.count <= 2) level = '1';
                    else if (day.count > 2 && day.count <= 4) level = '2';
                    else if (day.count > 4 && day.count <= 6) level = '3';
                    else if (day.count > 6) level = '4';

                    return (
                      <span
                        className={`heatmap-cell level-${level}`}
                        key={`activity-${index}`}
                        onMouseEnter={() => setHoveredContribution(day)}
                        onMouseLeave={() => setHoveredContribution(null)}
                      />
                    );
                  })}
                </div>
              )}
              <div className="heatmap-legend">
                <span>Less</span>
                <span className="legend-cell level-0" />
                <span className="legend-cell level-1" />
                <span className="legend-cell level-2" />
                <span className="legend-cell level-3" />
                <span className="legend-cell level-4" />
                <span>More</span>
              </div>
              {hoveredContribution && (
                <div className="heatmap-tooltip glass-card code-font">
                  <strong>{hoveredContribution.date}:</strong> {hoveredContribution.activity}
                </div>
              )}
            </div>
          </div>

          <div className="github-commits-panel">
            <h4 className="commits-title">
              <GitBranch size={16} />
              Recent Logs
            </h4>
            {recentGitLogs.length === 0 ? (
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>No recent public activity found — check back soon.</p>
            ) : (
              <div className="commits-list">
                {recentGitLogs.map((log, idx) => (
                  <div className="commit-log-item" key={idx}>
                    <div className="commit-meta">
                      <span className="commit-repo">{log.repo}</span>
                      <span className="commit-time">{log.time}</span>
                    </div>
                    <p className="commit-desc">{log.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={`contact-section ${visibleSections['contact'] ? 'section-scan-active' : ''}`} id="contact" aria-labelledby="contact-title">
        <div className="scan-line" />
        <div className="contact-panel glass-card">
          <p className="section-kicker">
            <ScrambleText text="Contact" trigger={visibleSections['contact']} />
          </p>
          <h2 id="contact-title">
            <ScrambleText text="Let's build intelligent systems that recruiters remember." trigger={visibleSections['contact']} />
          </h2>
          <p>
            Open to AI/ML engineering roles, Python backend opportunities, GenAI internships,
            RAG systems work, and applied machine learning collaborations.
          </p>
          <div className="contact-actions">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
        <form className="contact-form glass-card" aria-label="Contact form" onSubmit={handleContactSubmit}>
          <div style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} style={{ color: 'var(--primary)' }} />
              Quick Chat / Discussion on AI Applications
            </h3>
            <p style={{ margin: '6px 0 0', fontSize: '0.85rem', color: 'var(--muted)' }}>Fill out the form below and I'll get back to you shortly.</p>
          </div>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about the role or project" required />
          </label>
          <button className="primary-button" type="submit" disabled={isSending}>
            {isSending ? (
              <RefreshCw size={18} className="animate-spin" />
            ) : (
              <Send size={18} aria-hidden="true" />
            )}
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      <footer>
        <span className="name-highlight">{profile.name}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #E0A458', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', color: '#E0A458', background: 'rgba(224, 164, 88, 0.08)' }}>
          <span style={{ width: '8px', height: '8px', background: '#E0A458', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #E0A458' }}></span>
          {profile.location}
        </span>
        <span>
          <BriefcaseBusiness size={16} aria-hidden="true" />
          AI systems, RAG pipelines, and Python backends built with purpose.
        </span>
      </footer>
    </main>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
