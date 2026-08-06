export default function HeroIllustration() {
  return (
    <svg 
      viewBox="0 0 1200 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="heroGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softCenterBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="20" />
        </filter>

        {/* Gradients */}
        <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0.3" />
        </linearGradient>

        <linearGradient id="gradRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
        </linearGradient>

        <radialGradient id="heroCenterAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.22" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* --- CENTER AMBIENT AURA (Behind Avatar/Text) --- */}
      <circle 
        cx="600" cy="250" r="220" 
        fill="url(#heroCenterAura)" 
        filter="url(#softCenterBlur)"
        className="animate-pulse"
        style={{ animationDuration: '7s' }}
      />

      {/* --- LEFT SIDE: HIGH-TECH ROUTING NETWORK --- */}
      <g fill="none">
        {/* Left Curved Fiber Paths */}
        <path d="M -40 100 C 150 80, 260 160, 420 220" stroke="url(#gradLeft)" strokeWidth="2" opacity="0.5" />
        <path d="M -40 100 C 150 80, 260 160, 420 220" stroke="#8B5CF6" strokeWidth="2.5" className="animate-route-flow" filter="url(#heroGlow)" />

        <path d="M -20 380 C 120 400, 280 340, 410 270" stroke="url(#gradLeft)" strokeWidth="2" opacity="0.5" />
        <path d="M -20 380 C 120 400, 280 340, 410 270" stroke="#6366F1" strokeWidth="2" className="animate-route-flow" style={{ animationDelay: '1.2s' }} filter="url(#heroGlow)" />

        <path d="M 60 480 C 180 350, 250 200, 380 120" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.35" />

        {/* Left Synapse Interconnections */}
        <path d="M 120 100 L 220 280 L 360 140" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

        {/* Left Glowing Nodes */}
        <g>
          <circle cx="120" cy="100" r="8" fill="#6366F1" opacity="0.2" className="animate-node-pulse" style={{ transformOrigin: '120px 100px' }} />
          <circle cx="120" cy="100" r="4.5" fill="#8B5CF6" filter="url(#heroGlow)" />
          <circle cx="120" cy="100" r="2" fill="#FFFFFF" />
        </g>
        <g>
          <circle cx="220" cy="280" r="10" fill="#8B5CF6" opacity="0.2" className="animate-node-pulse" style={{ transformOrigin: '220px 280px', animationDelay: '0.9s' }} />
          <circle cx="220" cy="280" r="5" fill="#A855F7" filter="url(#heroGlow)" />
          <circle cx="220" cy="280" r="2" fill="#FFFFFF" />
        </g>
        <g>
          <circle cx="360" cy="140" r="9" fill="#A855F7" opacity="0.2" className="animate-node-pulse" style={{ transformOrigin: '360px 140px', animationDelay: '1.5s' }} />
          <circle cx="360" cy="140" r="4.5" fill="#6366F1" filter="url(#heroGlow)" />
          <circle cx="360" cy="140" r="2" fill="#FFFFFF" />
        </g>
        <g>
          <circle cx="420" cy="220" r="6" fill="#8B5CF6" className="animate-node-pulse" style={{ transformOrigin: '420px 220px', animationDelay: '0.4s' }} />
        </g>
      </g>

      {/* --- RIGHT SIDE: HIGH-TECH ROUTING NETWORK --- */}
      <g fill="none">
        {/* Right Curved Fiber Paths */}
        <path d="M 1240 120 C 1050 90, 940 170, 780 220" stroke="url(#gradRight)" strokeWidth="2" opacity="0.5" />
        <path d="M 1240 120 C 1050 90, 940 170, 780 220" stroke="#EC4899" strokeWidth="2.5" className="animate-route-flow" style={{ animationDelay: '0.7s' }} filter="url(#heroGlow)" />

        <path d="M 1220 390 C 1080 410, 920 350, 790 270" stroke="url(#gradRight)" strokeWidth="2" opacity="0.5" />
        <path d="M 1220 390 C 1080 410, 920 350, 790 270" stroke="#8B5CF6" strokeWidth="2" className="animate-route-flow" style={{ animationDelay: '1.8s' }} filter="url(#heroGlow)" />

        <path d="M 1140 480 C 1020 350, 950 200, 820 120" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.35" />

        {/* Right Synapse Interconnections */}
        <path d="M 1080 110 L 980 290 L 840 140" stroke="#EC4899" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

        {/* Right Glowing Nodes */}
        <g>
          <circle cx="1080" cy="110" r="9" fill="#EC4899" opacity="0.2" className="animate-node-pulse" style={{ transformOrigin: '1080px 110px', animationDelay: '0.3s' }} />
          <circle cx="1080" cy="110" r="5" fill="#EC4899" filter="url(#heroGlow)" />
          <circle cx="1080" cy="110" r="2" fill="#FFFFFF" />
        </g>
        <g>
          <circle cx="980" cy="290" r="10" fill="#8B5CF6" opacity="0.2" className="animate-node-pulse" style={{ transformOrigin: '980px 290px', animationDelay: '1.1s' }} />
          <circle cx="980" cy="290" r="4.5" fill="#8B5CF6" filter="url(#heroGlow)" />
          <circle cx="980" cy="290" r="2" fill="#FFFFFF" />
        </g>
        <g>
          <circle cx="840" cy="140" r="8" fill="#6366F1" opacity="0.2" className="animate-node-pulse" style={{ transformOrigin: '840px 140px', animationDelay: '1.7s' }} />
          <circle cx="840" cy="140" r="4" fill="#A855F7" filter="url(#heroGlow)" />
          <circle cx="840" cy="140" r="2" fill="#FFFFFF" />
        </g>
        <g>
          <circle cx="780" cy="220" r="6" fill="#EC4899" className="animate-node-pulse" style={{ transformOrigin: '780px 220px', animationDelay: '0.6s' }} />
        </g>
      </g>
    </svg>
  );
}
