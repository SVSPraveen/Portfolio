"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Code, User, Download, FileText } from "lucide-react";

const profile = {
  initials: "SP",
  name: "Seshanagottu Venkata Sujith Praveen",
  shortName: "SVS Praveen",
  role: "AI/ML Engineer | Agentic AI & RAG Systems | Python Backend",
  location: "Mumbai, India",
  email: "svspraveens@gmail.com",
  github: "https://github.com/SVSPraveen",
  linkedin: "https://www.linkedin.com/in/svs-praveen-s/",
  resume: "https://drive.google.com/file/d/1gW_Uwv_GZ9TCkX_5I2UzWAbvZOlKg44c/view?usp=sharing",
  paper: "https://ijamred.com/volume1/issue4/IJAMRED-V1I4P56.pdf",
};

const focusAreas = [
  "AI/ML Engineer",
  "RAG Systems Builder",
  "Agentic AI Developer",
  "LLM Engineer",
  "Python Backend Dev",
];

const stats = [
  { label: "Cross-Domain AI", sub: "Healthcare, Finance & Legal" },
  { label: "RAG Pipelines", sub: "Production-grade integration" },
  { label: "Hybrid Search", sub: "BM25 + Dense vector retrieval" },
  { label: "Backend", sub: "Python APIs and databases" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1229 40%, #12082a 100%)" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7b2fff 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen pt-24 pb-12 gap-12">

        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 rounded-full blur-xl opacity-60" style={{ background: "linear-gradient(135deg, #00d4ff, #7b2fff)" }} />
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center relative z-10 text-4xl font-extrabold text-white border-4"
              style={{
                background: "linear-gradient(135deg, #7b2fff, #00d4ff)",
                borderColor: "#0a0f1e",
                boxShadow: "0 0 30px rgba(123,47,255,0.5)",
              }}
            >
              {profile.initials}
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border mb-6 text-sm font-medium"
            style={{ borderColor: "rgba(0,212,255,0.3)", color: "#00d4ff" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff]" />
            </span>
            Available for opportunities
          </motion.div>

          <h2 className="text-lg text-gray-400 mb-2 font-medium tracking-wider uppercase">Hello, I am</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            <span className="text-white">SVS </span>
            <span style={{ background: "linear-gradient(135deg, #00d4ff, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Praveen
            </span>
          </h1>

          <div className="text-xl md:text-2xl font-bold h-[36px] mb-6 text-gray-300">
            <Typewriter
              words={focusAreas}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
            AI/ML Engineer passionate about building production-grade{" "}
            <span className="text-white font-medium">RAG systems</span>,{" "}
            <span className="text-white font-medium">Agentic AI</span> pipelines, and{" "}
            <span className="text-white font-medium">LLM applications</span> that solve real-world problems.
          </p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7b2fff)", boxShadow: "0 4px 15px rgba(123,47,255,0.4)" }}
            >
              View My Work
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full font-semibold text-white border transition-all hover:bg-white/10 hover:-translate-y-1 glass flex items-center gap-2"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href={profile.paper}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full font-semibold text-gray-300 border transition-all hover:bg-white/10 hover:-translate-y-1 glass flex items-center gap-2"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <FileText size={16} />
              Research Paper
            </a>
          </motion.div>

          {/* Social links */}
          <div className="flex gap-4 mt-8">
            <a href={profile.github} target="_blank" rel="noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center glass border transition-all hover:bg-white/10 hover:scale-110"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}>
              <Code size={20} className="text-gray-300" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center glass border transition-all hover:bg-[#0077b5] hover:scale-110"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}>
              <User size={20} className="text-gray-300" />
            </a>
          </div>
        </motion.div>

        {/* Right: Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p className="font-bold text-white text-lg mb-1">{s.label}</p>
              <p className="text-sm text-gray-400">{s.sub}</p>
            </motion.div>
          ))}

          {/* Terminal-style card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="col-span-2 glass rounded-2xl p-6 font-mono text-sm"
            style={{ border: "1px solid rgba(0,212,255,0.2)" }}
          >
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-[#00d4ff]">$ whoami</p>
            <p className="text-gray-300 mt-1">→ <span className="text-white">SVS Praveen</span> — AI/ML Engineer</p>
            <p className="text-[#00d4ff] mt-2">$ specialization</p>
            <p className="text-gray-300 mt-1">→ Agentic RAG · LLMs · Python Backend</p>
            <p className="text-[#00d4ff] mt-2">$ location</p>
            <p className="text-gray-300 mt-1">→ {profile.location}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-1 bg-gray-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
