'use client';

import { useState } from 'react';
import { Mail, Download, Sparkles, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to a real backend (e.g. Formspree or a Next.js API route) later.
  };

  return (
    <section id="contact" className="py-24 px-4 w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
        <span className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
          Let's build intelligent systems that recruiters remember.
        </h2>
        <p className="text-lg text-textSecondary max-w-3xl">
          Open to AI/ML engineering roles, Python backend opportunities, GenAI internships, RAG systems work, and applied machine learning collaborations.
        </p>

        {/* TODO: replace PLACEHOLDER_LINKEDIN_URL with real values */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="PLACEHOLDER_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cardBorder text-textSecondary hover:border-accent hover:text-accent transition-colors font-medium"
          >
            <FaLinkedin className="w-5 h-5" color="currentColor" />
            LinkedIn
          </a>
          <a
            href="https://github.com/SVSPraveen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cardBorder text-textSecondary hover:border-accent hover:text-accent transition-colors font-medium"
          >
            <FaGithub className="w-5 h-5" color="currentColor" />
            GitHub
          </a>
          <a
            href="mailto:svspraveens@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cardBorder text-textSecondary hover:border-accent hover:text-accent transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cardBorder text-textSecondary hover:border-accent hover:text-accent transition-colors font-medium"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full bg-white/70 backdrop-blur-md rounded-2xl border border-cardBorder shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <h3 className="text-xl font-bold text-textPrimary">Quick Chat / Discussion on AI Applications</h3>
        </div>
        <p className="text-textSecondary mb-6">
          Fill out the form below and I'll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-textPrimary text-left">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-white focus:outline-none focus:ring-2 focus:ring-accent text-textPrimary placeholder:text-textSecondary/50"
              placeholder="Your name"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-textPrimary text-left">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-white focus:outline-none focus:ring-2 focus:ring-accent text-textPrimary placeholder:text-textSecondary/50"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-textPrimary text-left">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-white focus:outline-none focus:ring-2 focus:ring-accent text-textPrimary placeholder:text-textSecondary/50 resize-y"
              placeholder="How can we collaborate?"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 w-full md:w-auto md:self-end px-8 py-3 rounded-xl gradient-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
