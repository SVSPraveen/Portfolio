import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ClientWork from "@/components/sections/ClientWork";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import GithubContributions from "@/components/ui/GithubContributions";
import { ProjectHighlightProvider } from "@/lib/ProjectHighlightContext";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ProjectHighlightProvider>
        <Skills />
        <Experience />
        <Projects />
      </ProjectHighlightProvider>
      <ClientWork />
      <Certifications />
      
      <section className="py-24 px-4 w-full">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-textPrimary">Open Source & Activity</h2>
        </div>
        <GithubContributions />
        <div className="max-w-4xl mx-auto mt-6 flex items-center justify-center gap-2 text-sm text-textSecondary">
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span>SPrav AI — Ongoing — Building a local, multi-agent AI engine from scratch.</span>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
