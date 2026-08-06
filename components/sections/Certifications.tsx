'use client';

import { motion } from 'framer-motion';
import { Cloud, ShieldCheck, Award } from 'lucide-react';

const cloudCerts = [
  "Oracle OCI Multicloud Architect Professional",
  "Oracle OCI Networking Professional",
  "Oracle OCI Foundation Associate",
  "Google Cloud Computing Foundations"
];

const securityCerts = [
  "Cisco Ethical Hacker",
  "IBM Cybersecurity Analyst",
  "Saviynt Identity Security for AI Age"
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center max-w-2xl">
            Continuous learning across GenAI, Python, Django, and databases.
          </h2>
        </div>

        {/* Cloud Certifications */}
        <div className="w-full mt-4">
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-textPrimary">Cloud Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cloudCerts.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/70 backdrop-blur-md rounded-2xl border border-cardBorder shadow-sm p-5 flex flex-col hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <Award className="w-6 h-6 text-accent mb-3 flex-shrink-0" />
                <h4 className="text-base font-semibold text-textPrimary leading-snug mb-2 flex-grow">
                  {cert}
                </h4>
                <p className="text-sm text-textSecondary">
                  Verified course completion and practical skill development.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Certifications */}
        <div className="w-full mt-12">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-textPrimary">Security Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityCerts.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/70 backdrop-blur-md rounded-2xl border border-cardBorder shadow-sm p-5 flex flex-col hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <Award className="w-6 h-6 text-accent mb-3 flex-shrink-0" />
                <h4 className="text-base font-semibold text-textPrimary leading-snug mb-2 flex-grow">
                  {cert}
                </h4>
                <p className="text-sm text-textSecondary">
                  Verified course completion and practical skill development.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
