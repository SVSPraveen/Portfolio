import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seshanagottu Venkata Sujith Praveen | AI/ML Engineer",
  description:
    "Portfolio of SVS Praveen — AI/ML Engineer specializing in Agentic AI, RAG Systems, LLMs, and Python Backend. Based in Mumbai, India.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "RAG Systems",
    "LangGraph",
    "LangChain",
    "Agentic AI",
    "Python",
    "FastAPI",
    "Qdrant",
    "LLM",
  ],
  authors: [{ name: "Seshanagottu Venkata Sujith Praveen" }],
  openGraph: {
    title: "SVS Praveen | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in production RAG systems, Agentic AI, and LLM applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen" style={{ background: "#0a0f1e", color: "#e2e8f0" }}>
        {children}
      </body>
    </html>
  );
}
