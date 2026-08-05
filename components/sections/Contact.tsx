"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("priyanshuparihar207@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("9837610363");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("https://formsubmit.co/ajax/priyanshuparihar207@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      
      setIsSuccess(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00d4ff", "#7b2fff", "#ffffff"],
        zIndex: 100
      });
      e.currentTarget.reset();
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7b2fff] opacity-10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00d4ff] opacity-10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00d4ff]/30 text-sm font-medium text-[#00d4ff] mb-8 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00d4ff]"></span>
            </span>
            Currently available for internships & freelance work
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Open to new opportunities, collaborations, and discussions on AI safety and RAG architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Info (Tilt Cards) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-3xl space-y-6 relative h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <button onClick={handleCopyEmail} className="w-full text-left flex items-center gap-4 text-gray-300 hover:text-white group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00d4ff]/50 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all">
                    {copiedEmail ? <CheckCircle2 className="text-[#00d4ff]" /> : <Mail className="group-hover:text-[#00d4ff] transition-colors" />}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">{copiedEmail ? "Copied!" : "Email"}</p>
                    <p className="font-medium">priyanshuparihar207@gmail.com</p>
                  </div>
                </button>
              </Tilt>

              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <button onClick={handleCopyPhone} className="w-full text-left flex items-center gap-4 text-gray-300 hover:text-white group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#7b2fff]/50 group-hover:shadow-[0_0_15px_rgba(123,47,255,0.3)] transition-all">
                    {copiedPhone ? <CheckCircle2 className="text-[#7b2fff]" /> : <span className="font-bold text-xl group-hover:text-[#7b2fff] transition-colors">#</span>}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">{copiedPhone ? "Copied!" : "Phone"}</p>
                    <p className="font-medium">9837610363</p>
                  </div>
                </button>
              </Tilt>

              <div className="pt-6 border-t border-white/10 flex gap-4 mt-8">
                <a href="https://www.linkedin.com/in/priyanshu-parihar-641b3b320" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-transparent hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] transition-all group">
                  <FaLinkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a href="https://github.com/Priyanshu1360" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#333] hover:border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all group">
                  <FaGithub size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form with Glow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Success Toast Overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-50 flex items-center justify-center bg-[#0a0f1e]/80 backdrop-blur-md rounded-3xl"
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-tr from-[#00d4ff] to-[#7b2fff] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,212,255,0.5)]">
                      <CheckCircle2 size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleFormSubmit} className="glass p-8 rounded-3xl space-y-6 relative overflow-hidden group">
              <input type="hidden" name="_subject" value="New Contact Message from Portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="relative z-10">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all hover:border-white/30"
                  placeholder="Write your name..."
                />
              </div>
              <div className="relative z-10">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all hover:border-white/30"
                  placeholder="userEmail@example.com"
                />
              </div>
              <div className="relative z-10">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all hover:border-white/30 resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all group-hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 z-10 relative overflow-hidden"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
