import AboutUs from '../components/home/AboutUs';

interface AboutPageProps {
  setCurrentPage: (page: 'home' | 'about') => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  return (
    <div className="w-full flex flex-col">
      {/* Inner Banner Section with brand blue theme gradient background */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-[#009DE1] via-[#006FA0] to-[#003E5C] overflow-hidden flex items-center">
        
        {/* Soft radial overlay glow matching top-left corner light */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center relative z-10">
          {/* Left Side: Title & Breadcrumbs */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
              About Us
            </h1>
            
            {/* Breadcrumb links */}
            <div className="text-white/80 text-xs sm:text-sm font-semibold tracking-wider mt-3 flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage('home')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-white/40">/</span>
              <span className="text-white">About Us</span>
            </div>
          </div>

          {/* Right Side: Subtle Watermark Icon (Business Gear Success) */}
          <div className="hidden md:block select-none pointer-events-none transform translate-x-4">
            <svg 
              className="w-48 h-48 lg:w-56 lg:h-56 text-white opacity-[0.09]" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Gear Outline */}
              <circle cx="35" cy="45" r="18" strokeDasharray="3 3" />
              <circle cx="35" cy="45" r="14" />
              <path d="M35,22 L35,27 M35,63 L35,68 M12,45 L17,45 M53,45 L58,45 M19,29 L23,33 M47,57 L51,61 M19,61 L23,57 M47,29 L51,33" />
              {/* Person outline with raised arm */}
              <circle cx="68" cy="22" r="5" />
              <path d="M68,27 L68,48 M68,32 L78,22 M68,32 L60,34 M68,48 L63,60 M68,48 L73,60" />
              {/* Steps rising */}
              <path d="M35,75 L45,75 L45,63 L57,63 L57,51 L68,51" />
            </svg>
          </div>
        </div>

        {/* Diagonal border layout decoration at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"></div>
      </section>

      {/* About Us Content Section (Renders the photo cards, details and stats) */}
      <AboutUs showHeader={false} />
    </div>
  );
}
