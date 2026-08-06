'use client';

import { motion } from 'framer-motion';
import { Cloud, ShieldCheck, Award, ExternalLink, Code2 } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  pdfUrl?: string; // Path inside public/certificates/
}

const cloudCerts: Certification[] = [
  {
    id: 'oracle-multicloud-architect',
    title: 'Oracle OCI Multicloud Architect Professional',
    issuer: 'Oracle Cloud Infrastructure',
    pdfUrl: '/certificates/oracle-multicloud-architect.pdf',
  },
  {
    id: 'oracle-networking-professional',
    title: 'Oracle OCI Networking Professional',
    issuer: 'Oracle Cloud Infrastructure',
    pdfUrl: '/certificates/oracle-networking-professional.pdf',
  },
  {
    id: 'oracle-foundation-associate',
    title: 'Oracle OCI Foundation Associate',
    issuer: 'Oracle Cloud Infrastructure',
    pdfUrl: '/certificates/oracle-foundation-associate.pdf',
  },
  {
    id: 'google-cloud-foundations',
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    pdfUrl: '/certificates/google-cloud-foundations.pdf',
  },
];

const webDevCerts: Certification[] = [
  {
    id: 'udemy-fullstack-web-dev',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    pdfUrl: '/certificates/udemy-fullstack-web-dev.pdf',
  },
];

const securityCerts: Certification[] = [
  {
    id: 'cisco-ethical-hacker',
    title: 'Cisco Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    // pdfUrl: '/certificates/cisco-ethical-hacker.pdf', // TODO: Uncomment when cisco-ethical-hacker.pdf is added to public/certificates/
  },
  {
    id: 'ibm-cybersecurity-analyst',
    title: 'IBM Cybersecurity Analyst',
    issuer: 'IBM',
    // pdfUrl: '/certificates/ibm-cybersecurity-analyst.pdf', // TODO: Uncomment when ibm-cybersecurity-analyst.pdf is added to public/certificates/
  },
  {
    id: 'saviynt-identity-security',
    title: 'Saviynt Identity Security for AI Age',
    issuer: 'Saviynt',
    pdfUrl: '/certificates/saviynt-identity-security.pdf',
  },
];

export default function Certifications() {
  const renderCard = (cert: Certification, index: number) => {
    const isClickable = Boolean(cert.pdfUrl);

    const CardWrapper = isClickable ? 'a' : 'div';
    const wrapperProps = isClickable
      ? {
          href: cert.pdfUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {};

    return (
      <motion.div
        key={cert.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true, amount: 0.2 }}
        className="h-full flex flex-col"
      >
        <CardWrapper
          {...wrapperProps}
          className={`h-full bg-white/80 backdrop-blur-md rounded-2xl border border-cardBorder/80 shadow-sm p-5 flex flex-col transition-all duration-300 ${
            isClickable
              ? 'hover:-translate-y-1 hover:shadow-md hover:border-accent/40 cursor-pointer group'
              : 'opacity-90'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <Award className="w-6 h-6 text-accent flex-shrink-0" />
            {isClickable ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:underline">
                View Certificate
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            ) : (
              <span className="text-[11px] font-medium text-textSecondary/70 bg-bgAlt px-2.5 py-0.5 rounded-full border border-cardBorder">
                Upload Pending
              </span>
            )}
          </div>

          <h4 className="text-base font-semibold text-textPrimary leading-snug mb-1.5 flex-grow">
            {cert.title}
          </h4>

          <p className="text-xs font-medium text-accent/80 mb-2">
            {cert.issuer}
          </p>

          <p className="text-xs text-textSecondary leading-relaxed">
            {isClickable
              ? 'Click to view official certificate PDF.'
              : 'Certificate document will be linked soon.'}
          </p>
        </CardWrapper>
      </motion.div>
    );
  };

  return (
    <section id="certifications" className="py-24 px-4 w-full relative overflow-hidden">
      {/* Background Subtle Glow Accent */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-[500px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center max-w-2xl">
            Continuous learning across GenAI, Cloud Architecture, and Security.
          </h2>
        </div>

        {/* Cloud Certifications */}
        <div className="w-full mt-4">
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-textPrimary">Cloud Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cloudCerts.map((cert, index) => renderCard(cert, index))}
          </div>
        </div>

        {/* Web Development Certifications */}
        <div className="w-full mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-textPrimary">Web Development & Full-Stack Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {webDevCerts.map((cert, index) => renderCard(cert, index))}
          </div>
        </div>

        {/* Security Certifications */}
        <div className="w-full mt-12">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-textPrimary">Security & Identity Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityCerts.map((cert, index) => renderCard(cert, index))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
