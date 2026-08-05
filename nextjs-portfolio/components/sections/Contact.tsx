"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Code, User, MapPin } from "lucide-react";

const EMAIL = "svspraveens@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/svs-praveen-s/";
const GITHUB = "https://github.com/SVSPraveen";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      setIsSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 relative overflow-hidden" style={{ background: "#0a0f1e" }}>
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 opacity-10" style={{ background: "#7b2fff" }} />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 opacity-10" style={{ background: "#00d4ff" }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          {/* Live status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#00d4ff" }} />
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#00d4ff" }} />
            </span>
            Currently available for internships & freelance work
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Let&apos;s Connect</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }} />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Open to new opportunities, collaborations, and discussions on AI safety and RAG architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-3xl space-y-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <button
                onClick={handleCopyEmail}
                className="w-full text-left flex items-center gap-4 text-gray-300 hover:text-white group p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", ...(copiedEmail ? { borderColor: "rgba(0,212,255,0.5)" } : {}) }}>
                  {copiedEmail ? <CheckCircle2 style={{ color: "#00d4ff" }} /> : <Mail className="group-hover:text-[#00d4ff] transition-colors" />}
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">{copiedEmail ? "Copied!" : "Email (click to copy)"}</p>
                  <p className="font-medium">{EMAIL}</p>
                </div>
              </button>

              <button
                className="w-full text-left flex items-center gap-4 text-gray-300 hover:text-white group p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all"
                onClick={() => {}}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <MapPin className="text-gray-400 group-hover:text-[#7b2fff] transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </button>

              <div className="pt-6 flex gap-4 mt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <a href={LINKEDIN} target="_blank" rel="noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#0077b5] hover:scale-110 group"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <User size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a href={GITHUB} target="_blank" rel="noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-gray-800 hover:scale-110 group"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Code size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-50 flex items-center justify-center rounded-3xl backdrop-blur-md"
                  style={{ background: "rgba(10,15,30,0.85)" }}
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #00d4ff, #7b2fff)", boxShadow: "0 0 30px rgba(0,212,255,0.5)" }}>
                      <CheckCircle2 size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleFormSubmit} className="glass p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <input type="hidden" name="_subject" value="New Contact Message from SVS Praveen Portfolio" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text" id="name" name="name" required
                  className="w-full rounded-xl px-4 py-3 text-white focus:outline-none transition-all hover:border-white/30"
                  style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}
                  placeholder="Write your name..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email" id="email" name="email" required
                  className="w-full rounded-xl px-4 py-3 text-white focus:outline-none transition-all hover:border-white/30"
                  style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}
                  placeholder="user@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message" name="message" required rows={4}
                  className="w-full rounded-xl px-4 py-3 text-white focus:outline-none transition-all hover:border-white/30 resize-none"
                  style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7b2fff)", boxShadow: "0 4px 15px rgba(123,47,255,0.3)" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
