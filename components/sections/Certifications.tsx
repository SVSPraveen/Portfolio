"use client";

import { motion } from "framer-motion";
import { Award, Code2, Monitor, Trophy } from "lucide-react";

const certs = [
  {
    title: "Oracle Certified AI Foundations Associate",
    issuer: "Oracle",
    link: "https://hostwebs.site/ZT3FPH",
    icon: <Award className="text-[#00d4ff]" size={28} />,
    color: "from-[#00d4ff]/20 to-transparent",
    border: "group-hover:border-[#00d4ff]/50"
  },
  {
    title: "OOSC Conference",
    issuer: "IIT Kanpur (Sep 2025)",
    link: "https://hostwebs.site/LkOnu0",
    icon: <Trophy className="text-[#7b2fff]" size={28} />,
    color: "from-[#7b2fff]/20 to-transparent",
    border: "group-hover:border-[#7b2fff]/50"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/fcc4b5f6ac4-a0f1-4b5a-94d1-5c05f889fb42/responsive-web-design",
    icon: <Monitor className="text-[#00d4ff]" size={28} />,
    color: "from-[#00d4ff]/20 to-transparent",
    border: "group-hover:border-[#00d4ff]/50"
  },
  {
    title: "Basic CSS",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/35afcd7a3e72",
    icon: <Code2 className="text-[#7b2fff]" size={28} />,
    color: "from-[#7b2fff]/20 to-transparent",
    border: "group-hover:border-[#7b2fff]/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-24 relative overflow-hidden bg-[#0a0f1e]/50">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Certifications & Events</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certs.map((cert, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`glass p-6 rounded-3xl flex items-center gap-6 group transition-all duration-300 block w-full hover:-translate-y-1 ${cert.border}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} border border-white/10 flex items-center justify-center shrink-0`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gradient transition-all">{cert.title}</h3>
                  <p className="text-gray-400 font-medium">{cert.issuer}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
