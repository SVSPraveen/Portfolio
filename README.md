# SVS Praveen — AI/ML Engineer & Agentic AI Developer

> **I build AI systems that route intelligently instead of guessing.**  
> Turning production-grade RAG, multi-agent orchestration, and high-performance Python backends into reliable software that actually ships.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js 14](https://img.shields.io/badge/Next.js%2014-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![Qdrant](https://img.shields.io/badge/Qdrant-DC2626?style=flat-square&logo=qdrant&logoColor=white)](https://qdrant.tech/)

---

## 👤 About Me

- 📍 **Location:** Mumbai, India
- 🎓 **Focus:** AI/ML Systems, Production RAG Pipelines, Multi-Agent Architecture & High-Throughput Python Backends
- 💼 **Experience:** AI/ML Engineer Intern @ MobcoderAI (Onsite)
- 🤝 **Open For:** AI/ML Engineering Roles, Python Backend Opportunities, GenAI Internships, RAG Systems Work, and Applied ML Collaborations

I break complex, messy data problems into specialized, deterministic components. Whether building multi-agent routers that dispatch financial queries to domain specialists or clinical RAG pipelines with jailbreak-proof guardrails, my focus is architectural reliability — systems that fail closed, score their own hallucinations, and run efficiently under real-world conditions.

---

## 🛠️ Technical Stack & Core Competencies

| Domain | Technologies & Frameworks |
|---|---|
| **AI / GenAI / Agents** | LangChain, LangGraph, Model Context Protocol (MCP), Llama 3.3 70B, MedCPT, HyDE, LoRA Fine-tuning, Ollama, Groq |
| **Vector DBs & Search** | Qdrant Cloud, ChromaDB, BM25 Sparse Search, Cross-Encoder Reranking, Reciprocal Rank Fusion (RRF), FAISS |
| **Backend & Databases** | Python 3.11+, FastAPI, Node.js, Express, PostgreSQL, Redis (Caching & Session RBAC), DuckDB, SQLite |
| **ML & Analytics** | PyTorch, CatBoost, LightGBM, XGBoost, MLflow, RapidFuzz |
| **Cloud & DevOps** | Docker, AWS Bedrock, Oracle Cloud (OCI), GitHub Actions, Vercel, REST APIs |
| **Frontend & Web** | React 18, Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Playwright |

---

## 🚀 Work Experience

### **AI/ML Engineer Intern** — *MobcoderAI* (Noida, UP — Onsite)  
*Apr 2026 – Jul 2026*

- **SEC Filing Search Optimization:** Improved retrieval accuracy from **62% to ~95% (NDCG@5)** across SEC 10-K/10-Q filings by architecting a hybrid BM25 + dense-vector search pipeline with Cross-Encoder re-ranking on Qdrant Cloud.
- **Multi-Agent Orchestration:** Reduced multi-agent query response times to **< 5 seconds** across 100+ SEC filings by designing a parallel routing system in LangGraph using Llama 3.3 70B and the Model Context Protocol (MCP).
- **Deterministic LLM Evaluation:** Lowered evaluation costs significantly while maintaining high faithfulness scores by developing a deterministic RapidFuzz + PyTorch scoring pipeline tracked in MLflow.
- **Fine-Tuning & Caching:** Fine-tuned Llama 3.1 8B with LoRA and integrated Redis semantic caching into an AWS Bedrock GraphRAG pipeline, eliminating repeat-query latency and terminology errors.

---

## 🔬 Featured Projects

### 1. 🏥 [RespiRAG](https://github.com/SVSPraveen/RespiRAG) — *Clinical AI RAG System*
A production-grade, zero-hallucination RAG system for Non-Small Cell Lung Cancer (NSCLC) designed for oncologists and pharmacists.
- **Pipeline:** Governed RAG over 600+ FDA drug labels and 3,900+ pages of NCCN guidelines using HyDE query expansion, MedCPT embeddings, and Cross-Encoder reranking.
- **Security:** Role-based access (Patient/HCP/Admin) with JWT RBAC, Redis session blacklisting, and regex prompt-injection guardrails.
- **Tech:** `Python`, `FastAPI`, `React`, `Qdrant`, `MedCPT`, `PostgreSQL`, `Redis`, `Docker`

### 2. 📈 [Finance RAG Copilot](https://github.com/SVSPraveen/Finance-RAG-Copilot) — *Multi-Agent SEC Analyzer*
An enterprise multi-agent RAG engine for SEC 10-K/10-Q filing analysis.
- **Orchestration:** Multi-agent router (Financial Analyst, Comparison, Decomposition, Risk, Trend agents) executing parallel retrieval via Qdrant Cloud.
- **Self-Eval & Guardrails:** Zero-cost deterministic evaluation layer scoring Faithfulness and Groundedness with a 5-state visual guardrail system.
- **Tech:** `Python`, `Streamlit`, `Qdrant Cloud`, `BM25`, `Llama 3.3 70B`, `PostgreSQL`, `RapidFuzz`

### 3. 🤖 [SPrav Job AI](https://github.com/SVSPraveen/SPrav-Job-AI) — *Agentic Discovery & Execution Engine*
A local-first AI orchestration system (SPrav MOE) that automates job discovery and ATS resume tailoring.
- **Automation:** Credential-free scrapers (Indeed, HN, Wellfound) + Playwright automated application submission with Human Review queues.
- **Privacy:** Local XOR credential encryption and self-hosted Master Recovery Key.
- **Tech:** `Python`, `FastAPI`, `React`, `SQLite`, `Playwright`, `Ollama`, `Groq`

### 4. 🚢 [ShipForesight](https://github.com/SVSPraveen/ShipForesight) — *Logistics ML Predictive Engine*
An AI-powered logistics platform predicting shipment delays before dispatch.
- **Performance:** 3-stage zero-inflated pipeline (CatBoost + LightGBM + XGBoost) achieving **84.7% accuracy / 0.891 AUC-ROC** enriched via DuckDB.
- **Multilingual Explanations:** Plain-language explanations in English, Hindi, Marathi, Gujarati, and Tamil via LangChain + Groq.
- **Tech:** `Python`, `FastAPI`, `React`, `LightGBM`, `XGBoost`, `DuckDB`, `LangChain`

---

## 💼 Client Work

### **Ajeevan Samarpan Parivar** — *NGO Website & Donor Platform*
- Independently built and deployed a production React application with a Node.js/Express backend for an active NGO.
- Integrated **Razorpay** for end-to-end real-money donation transactions and **MongoDB** for secure contact logging.

---

## 🏅 Certifications

- **Cloud Architecture:** Oracle OCI Multicloud Architect Professional, Oracle OCI Networking Professional, Oracle OCI Foundation Associate, Google Cloud Computing Foundations
- **Web & Full-Stack Development:** The Complete Full-Stack Web Development Bootcamp (Udemy)
- **Cybersecurity & Identity:** Cisco Ethical Hacker, IBM Cybersecurity Analyst, Saviynt Identity Security for AI Age

---

## 🌐 Portfolio Website Architecture

This repository contains SVS Praveen's personal developer portfolio, built with Next.js 14:

- **Deterministic Intent Router:** A custom client-side router in the Hero section modeling an agentic orchestrator.
- **Dynamic Styling & Animations:** Crafted with Vanilla CSS custom properties, Tailwind CSS, and Framer Motion micro-interactions.
- **Ambient Particle Backdrop:** Fixed low-z-index interactive background layer (`z-[-20]`).
- **Live Integrations:** Real-time GitHub contribution calendar fetch & Web3Forms contact submission handling.

### Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/SVSPraveen/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open http://localhost:3000 in your browser
```

---

## 📬 Contact & Connect

- 💼 **LinkedIn:** [linkedin.com/in/svs-praveen-s](https://www.linkedin.com/in/svs-praveen-s/)
- 🐙 **GitHub:** [github.com/SVSPraveen](https://github.com/SVSPraveen)
- 📧 **Email:** [svspraveens@gmail.com](mailto:svspraveens@gmail.com)
- 📄 **Resume:** Available in `public/resume.pdf`

---
© SVS Praveen. Built with purpose, precision, and zero fluff.
