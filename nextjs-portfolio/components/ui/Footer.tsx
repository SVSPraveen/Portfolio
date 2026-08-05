"use client";

import { Code, User, Mail, Heart } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Code, href: "https://github.com/SVSPraveen", label: "GitHub" },
  { icon: User, href: "https://www.linkedin.com/in/svs-praveen-s/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:svspraveens@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-12 relative overflow-hidden"
      style={{ background: "#060b18", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span
              className="text-2xl font-extrabold"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #7b2fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SVS Praveen
            </span>
            <p className="text-gray-500 text-sm mt-1">AI/ML Engineer · Mumbai, India</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Icon size={18} className="text-gray-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p>© {year} Seshanagottu Venkata Sujith Praveen. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
