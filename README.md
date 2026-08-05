# Praveen — AI/ML Engineer Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A production-styled portfolio for an AI/ML Engineer specializing in **Agentic AI**, **Retrieval-Augmented Generation (RAG)**, and **scalable Python backends**. Built as a fully custom React application — not a template — featuring an interactive AI copilot, per-project architecture diagrams with real system internals, and a live GitHub activity feed.

> **Live site:** _Add your deployed URL here once hosted_

---

## About

This portfolio belongs to **Seshanagottu Venkata Sujith Praveen**, an AI/ML Engineer based in Mumbai, India. His work focuses on production-grade LLM applications — multi-agent orchestration (LangGraph, MCP), hybrid retrieval pipelines (BM25 + dense + cross-encoder reranking), and RAG systems deployed across healthcare, finance, and logistics domains.

---

## Featured Projects

| Project | Domain | Key Result |
|---|---|---|
| <a href="https://github.com/SVSPraveen/RespiRAG" target="_blank" rel="noopener noreferrer">RespiRAG</a> | Clinical Oncology AI | Zero-hallucination RAG for NSCLC — role-gated, LLM-as-judge verified |
| <a href="https://github.com/SVSPraveen/Finance-RAG-Copilot" target="_blank" rel="noopener noreferrer">Finance RAG Copilot</a> | Financial Analysis | SEC 10-K/10-Q retrieval; NDCG@5 improved from 62% → ~95% |
| <a href="https://github.com/SVSPraveen/SPrav-Job-AI" target="_blank" rel="noopener noreferrer">SPrav Job AI</a> | Agentic Automation | End-to-end job discovery, resume tailoring, and auto-apply via Playwright |
| <a href="https://github.com/SVSPraveen/ShipForesight" target="_blank" rel="noopener noreferrer">ShipForesight</a> | Logistics ML | 3-stage delay prediction (84.7% accuracy, 1.24-day MAE) with multilingual AI explanations |

---

## Portfolio Features

- **Interactive AI Copilot** — a floating chat widget grounded strictly in real profile data (projects, experience, skills), with keyword intent detection and zero hallucinated answers outside its indexed knowledge.
- **AI Agent Console** — a terminal-style hero widget simulating a grounded RAG query flow with animated log output.
- **RAG Pipeline Simulator** — a step-through visualization of chunking, hybrid retrieval, reranking, and grounded generation stages.
- **Custom Architecture Diagrams** — each project ships its own hand-built, clickable SVG pipeline diagram (not a generic template), with a detail panel that surfaces real metrics per node on click.
- **CLI Skill Inspector** — an interactive terminal panel that renders per-category technical depth on demand.
- **Live GitHub Heatmap** — fetched from the public GitHub Events API; no fake data, no third-party APIs.
- **Dark / Light theme toggle**, custom cursor, scroll-triggered section animations, and micro-interactions throughout.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19, Vite 7 |
| Styling | Vanilla CSS with CSS custom properties (design-token system) |
| Icons | lucide-react |
| Data | Static JS objects in `src/main.jsx` — no CMS, no backend required |
| Deployment | Any static host — GitHub Pages, Vercel, Netlify |

---

## Project Structure

```
my-portfolio/
├── src/
│   ├── main.jsx          # All components, data objects, and app logic
│   ├── styles.css         # Design tokens and all component styling
│   └── assets/            # Only actively imported images (6 files)
├── index.html             # SEO meta tags and page title
├── package.json
└── vite.config.js
```

---

## Customizing Content

All editable content lives in clearly named data constants near the top of [`src/main.jsx`](./src/main.jsx). No component logic needs to be touched to update content.

| Section | Data Variable |
|---|---|
| Contact info, links, resume URL | `profile` |
| Hero rotating roles & stats | `roles`, `stats` |
| Skills & CLI inspector content | `skillGroups`, `skillGroupInspectorData` |
| Work experience timeline | `experiences` |
| Featured projects | `projects` |
| Client / freelance work | `clientWork` |
| Certifications | `certifications` |
| AI Copilot answer templates | `assistantAnswers`, `terminalFallbacks`, `chatbotFallbacks` |
| Recent activity logs | `recentGitLogs` |

---

## Running Locally

Requires <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js ≥ 18</a>.

```bash
npm install
npm run dev
```

Open <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer">http://localhost:5173</a>.

## Building for Production

```bash
npm run build
```

Outputs a fully static build to `dist/` — deploy directly to GitHub Pages, Vercel, or Netlify with zero configuration.

---

## Notes

- The GitHub activity heatmap uses GitHub's **public** Events API. Activity on private repositories will not appear — this is a constraint of the API, not of the portfolio.
- No API keys or secrets are required to run or build this project. A `.env` file is supported but git-ignored. **Do not commit tokens to this repository.**

---

## Contact

| | |
|---|---|
| **Email** | <a href="mailto:svspraveens@gmail.com">svspraveens@gmail.com</a> |
| **LinkedIn** | <a href="https://www.linkedin.com/in/svs-praveen-s/" target="_blank" rel="noopener noreferrer">linkedin.com/in/svs-praveen-s</a> |
| **GitHub** | <a href="https://github.com/SVSPraveen" target="_blank" rel="noopener noreferrer">github.com/SVSPraveen</a> |
| **Resume** | <a href="https://drive.google.com/file/d/1gW_Uwv_GZ9TCkX_5I2UzWAbvZOlKg44c/view?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive</a> |