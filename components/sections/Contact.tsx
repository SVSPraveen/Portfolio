'use client';

import { useState } from 'react';
import { Mail, Download, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '8860f8d8-eca1-4b55-98a0-d48df5124186',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New message from portfolio contact form — ' + formData.name,
          from_name: 'Portfolio Contact Form',
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 w-full relative overflow-hidden">
      {/* Background Subtle Glow Accent */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/5 blur-[140px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
          Contact Me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
          Let&apos;s build intelligent systems that recruiters remember.
        </h2>
        <p className="text-lg text-textSecondary max-w-3xl">
          Open to AI/ML engineering roles, Python backend opportunities, GenAI internships, RAG systems work, and applied machine learning collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/svs-praveen-s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cardBorder/80 bg-white/60 backdrop-blur-sm text-textSecondary hover:border-accent hover:text-accent transition-all duration-200 font-medium shadow-sm hover:shadow"
          >
            <FaLinkedin className="w-5 h-5" color="currentColor" />
            LinkedIn
          </a>
          <a
            href="https://github.com/SVSPraveen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cardBorder/80 bg-white/60 backdrop-blur-sm text-textSecondary hover:border-accent hover:text-accent transition-all duration-200 font-medium shadow-sm hover:shadow"
          >
            <FaGithub className="w-5 h-5" color="currentColor" />
            GitHub
          </a>
          <a
            href="mailto:svspraveens@gmail.com?subject=AI%2FML%20Engineering%20Opportunity%20—%20Portfolio%20Inquiry"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cardBorder/80 bg-white/60 backdrop-blur-sm text-textSecondary hover:border-accent hover:text-accent transition-all duration-200 font-medium shadow-sm hover:shadow"
          >
            <Mail className="w-5 h-5" />
            Email Directly
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cardBorder/80 bg-white/60 backdrop-blur-sm text-textSecondary hover:border-accent hover:text-accent transition-all duration-200 font-medium shadow-sm hover:shadow"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full bg-white/80 backdrop-blur-md rounded-2xl border border-cardBorder/80 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 p-6 md:p-8">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <h3 className="text-xl font-bold text-textPrimary">Quick Chat / Discussion on AI Applications</h3>
        </div>
        <p className="text-textSecondary mb-6">
          Fill out the form below or reach out directly at <a href="mailto:svspraveens@gmail.com" className="text-accent font-medium hover:underline">svspraveens@gmail.com</a>.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-textPrimary text-left">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
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
              onChange={(e) => handleInputChange('email', e.target.value)}
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
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-white focus:outline-none focus:ring-2 focus:ring-accent text-textPrimary placeholder:text-textSecondary/50 resize-y"
              placeholder="How can we collaborate?"
            />
          </div>

          {submitStatus === 'success' ? (
            <div className="mt-2 flex items-center justify-center gap-2 w-full md:w-auto md:self-end px-6 py-3 rounded-xl bg-successGreen/10 text-successGreen font-medium border border-successGreen/20">
              <CheckCircle2 className="w-5 h-5" />
              Message sent! I&apos;ll get back to you soon.
            </div>
          ) : (
            <div className="mt-2 flex flex-col gap-3 w-full md:w-auto md:self-end">
              {submitStatus === 'error' && (
                <div className="text-sm text-textSecondary bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center flex flex-col gap-2">
                  <span className="text-red-600 font-medium">Unable to send message through the online form right now.</span>
                  <a
                    href={`mailto:svspraveens@gmail.com?subject=Contact%20from%20Portfolio&body=${encodeURIComponent(`Hi Praveen,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                    className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-accent hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    Click here to send directly via your email client →
                  </a>
                </div>
              )}
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className={`flex items-center justify-center gap-2 w-full px-8 py-3 rounded-xl gradient-accent text-white font-medium transition-opacity ${
                  submitStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                <Send className={`w-5 h-5 ${submitStatus === 'submitting' ? 'opacity-70' : ''}`} />
                {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
