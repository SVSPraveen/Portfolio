import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SVS Praveen — AI/ML Engineer & Agentic AI Developer",
  description: "AI/ML Engineer specializing in agentic AI, production-grade RAG systems, and scalable backends. Building intent-routing systems, multi-agent orchestration, and applied machine learning across healthcare, finance, and logistics.",
  keywords: ["AI Engineer", "ML Engineer", "RAG", "Agentic AI", "LangGraph", "LangChain", "Python", "FastAPI", "Portfolio"],
  authors: [{ name: "Seshanagottu Venkata Sujith Praveen" }],
  openGraph: {
    title: "SVS Praveen — AI/ML Engineer & Agentic AI Developer",
    description: "Building intent-routing systems, multi-agent orchestration, and production-grade RAG.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
