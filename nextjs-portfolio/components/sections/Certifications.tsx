"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Shield, Globe, Server, Lock } from "lucide-react";

const certs = [
  {
    title: "Oracle OCI Multicloud Architect Professional",
    issuer: "Oracle",
    icon: Cloud,
    color: "#00d4ff",
  },
  {
    title: "Oracle OCI Networking Professional",
    issuer: "Oracle",
    icon: Server,
    color: "#7b2fff",
  },
  {
    title: "Oracle OCI Foundation Associate",
    issuer: "Oracle",
    icon: Award,
    color: "#00d4ff",
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google",
    icon: Globe,
    color: "#7b2fff",
  },
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco",
    icon: Shield,
    color: "#00d4ff",
  },
  {
    title: "IBM Cybersecurity Analyst",
    issuer: "IBM",
    icon: Lock,
    color: "#7b2fff",
  },
  {
    title: "Saviynt Identity Security for AI Age",
    issuer: "Saviynt",
    icon: Shield,
    color: "#00d4ff",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-24 relative overflow-hidden" style={{ background: "rgba(10,15,30,0.5)" }}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Certifications</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }} />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            7 professional certifications spanning cloud architecture, cybersecurity, and identity management.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-6 rounded-3xl flex items-center gap-5 hover:-translate-y-1 transition-all duration-300 group"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              whileHover={{ borderColor: `${cert.color}50` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}30`,
                }}
              >
                <cert.icon size={24} style={{ color: cert.color }} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 group-hover:text-gradient-accent transition-all leading-tight">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
