/**
 * Intent Routing Table — Hero Section Intent Router
 *
 * This file is the routing table that powers the Intent Router widget in the
 * Hero section. Each intent maps a user query (typed or clicked) to a section
 * of the portfolio by scoring keyword matches.
 *
 * The matching pattern here intentionally mirrors the multi-agent router
 * architecture used in this developer's actual RAG/agent projects — where an
 * orchestrator scores candidate routes and dispatches to the highest-confidence
 * downstream agent or retrieval chain.
 */

export interface Intent {
  id: string;
  label: string;
  sectionId: string;
  keywords: string[];
}

export const intents: Intent[] = [
  {
    id: "about",
    label: "About Me",
    sectionId: "about",
    keywords: [
      "about", "who are you", "background", "bio", "tell me about yourself", 
      "introduction", "education", "college", "university", "degree", 
      "location", "where are you based", "mumbai", "india", "summary", 
      "who is praveen", "profile", "overview"
    ],
  },
  {
    id: "skills",
    label: "Technical Skills",
    sectionId: "skills",
    keywords: [
      "skills", "tech stack", "tools", "technologies", "langchain", "langgraph", 
      "python", "fastapi", "pytorch", "tensorflow", "vector db", "chromadb", 
      "pinecone", "qdrant", "faiss", "rag", "llm", "agent", "multi-agent", 
      "docker", "sql", "postgresql", "git", "what do you know", "stack", 
      "competencies", "coding", "languages", "frameworks"
    ],
  },
  {
    id: "experience",
    label: "Work Experience",
    sectionId: "experience",
    keywords: [
      "experience", "internship", "work history", "job", "mobcoder", "career", 
      "work", "company", "roles", "previous work", "ai engineer", "software engineer", 
      "employment", "positions"
    ],
  },
  {
    id: "projects",
    label: "Featured Projects",
    sectionId: "projects",
    keywords: [
      "projects", "show me your projects", "rag projects", "what have you built", 
      "github", "portfolio work", "built", "repos", "code", "demos", "apps", 
      "applications", "sprav job ai", "governed ragflow", "ragflow", "job ai",
      "financial agent", "clinical rag", "systems", "work samples"
    ],
  },
  {
    id: "client-work",
    label: "Client Work",
    sectionId: "client-work",
    keywords: [
      "client work", "freelance", "ngo", "paid project", "real client", "client", 
      "contract", "services", "consulting", "client projects"
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    sectionId: "certifications",
    keywords: [
      "certifications", "certs", "courses", "oracle", "aws certified", 
      "credentials", "certificates", "licenses", "achievements", "education certificates"
    ],
  },
  {
    id: "contact",
    label: "Contact & Resume",
    sectionId: "contact",
    keywords: [
      "contact", "hire me", "email", "reach out", "connect", "linkedin", 
      "get in touch", "hire", "resume", "cv", "download resume", "pdf", 
      "available", "opportunity", "salary", "interview", "message", "phone"
    ],
  },
];

/**
 * Score a single intent against a normalized query.
 * A keyword scores 1 point if the query contains the keyword as a substring,
 * OR if the keyword contains the query as a substring — checking both directions.
 */
function scoreIntent(intent: Intent, normalizedQuery: string): number {
  return intent.keywords.reduce((score, keyword) => {
    const normalizedKeyword = keyword.toLowerCase();
    if (
      normalizedKeyword.includes(normalizedQuery) ||
      normalizedQuery.includes(normalizedKeyword)
    ) {
      return score + 1;
    }
    return score;
  }, 0);
}

/**
 * Return the top `limit` intents matching the query, sorted by score descending.
 * Returns an empty array if the query is blank or no intents match.
 */
export function getSuggestions(query: string, limit: number = 4): Intent[] {
  const normalized = query.toLowerCase().trim();
  if (normalized === "") return [];

  return intents
    .map((intent) => ({ intent, score: scoreIntent(intent, normalized) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ intent }) => intent);
}

/**
 * Return the single best-matching intent, or null if nothing scores above 0.
 */
export function matchIntent(query: string): Intent | null {
  const normalized = query.toLowerCase().trim();
  if (normalized === "") return null;

  let bestIntent: Intent | null = null;
  let bestScore = 0;

  for (const intent of intents) {
    const score = scoreIntent(intent, normalized);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return bestIntent;
}
