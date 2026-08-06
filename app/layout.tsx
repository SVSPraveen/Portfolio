import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AmbientParticles from "@/components/ui/AmbientParticles";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://svspraveen.vercel.app'),
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-bg text-textPrimary overflow-x-hidden`}
      >
        {/* Global Edge-to-Edge Floating Ambient Particles */}
        <AmbientParticles />

        {/* Global Edge-to-Edge Ambient Background Grid & Glows */}
        <div 
          className="pointer-events-none fixed inset-0 z-[-1] w-full h-full opacity-60"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.14) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        <div 
          className="pointer-events-none fixed top-[15%] -left-32 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[140px] z-[-1]"
        />
        <div 
          className="pointer-events-none fixed top-[50%] -right-32 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] z-[-1]"
        />
        <div 
          className="pointer-events-none fixed top-[80%] -left-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px] z-[-1]"
        />

        {children}
      </body>
    </html>
  );
}
