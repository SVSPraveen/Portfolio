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
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
            Open Source & Activity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            GitHub activity and contribution graph.
          </h2>
        </div>
        <GithubContributions />
        <div className="max-w-4xl mx-auto mt-6 flex items-center justify-center gap-2 text-sm text-textSecondary">
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span>SPrav AI — Ongoing — Building a local, multi-agent AI engine from scratch.</span>
        </div>
        
        {/* GitHub Profile Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/SVSPraveen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-accent text-accent rounded-xl px-6 py-3 font-semibold hover:bg-accent hover:text-white transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
            View GitHub Profile
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
