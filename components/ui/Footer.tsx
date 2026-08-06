import { MapPin, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-bgAlt border-t border-cardBorder py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="text-textSecondary text-sm font-medium">
          Seshanagottu Venkata Sujith Praveen
        </div>
        
        {/* Right Side */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-textSecondary text-sm bg-bg px-3 py-1.5 rounded-full border border-cardBorder">
            <MapPin className="w-4 h-4" />
            Mumbai, India
          </div>
          <div className="flex items-center gap-2 text-textSecondary text-sm">
            <Briefcase className="w-4 h-4" />
            AI systems, RAG pipelines, and Python backends built with purpose.
          </div>
        </div>

      </div>
    </footer>
  );
}
