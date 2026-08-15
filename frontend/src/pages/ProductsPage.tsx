import ProductShowcase from '../components/home/ProductShowcase';

interface ProductsPageProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setCurrentPage: (page: 'home' | 'about' | 'products') => void;
}

export default function ProductsPage({
  selectedCategory,
  setSelectedCategory,
  setCurrentPage
}: ProductsPageProps) {
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
              Our Products
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
              <span className="text-white">Our Products</span>
            </div>
          </div>

          {/* Right Side: Subtle Watermark Switchboard Icon */}
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
              {/* Switchboard Outer Frame */}
              <rect x="20" y="15" width="60" height="70" rx="6" />
              {/* Panel Door Line */}
              <line x1="50" y1="15" x2="50" y2="85" />
              {/* Door Handle */}
              <rect x="47" y="45" width="6" height="10" rx="1" />
              {/* Circuit Breakers inside (small rectangles) */}
              <rect x="28" y="25" width="14" height="8" rx="1" />
              <rect x="28" y="37" width="14" height="8" rx="1" />
              <rect x="28" y="49" width="14" height="8" rx="1" />
              
              <rect x="58" y="25" width="14" height="8" rx="1" />
              <rect x="58" y="37" width="14" height="8" rx="1" />
              <rect x="58" y="49" width="14" height="8" rx="1" />
              {/* Voltmeter Dial */}
              <circle cx="35" cy="70" r="6" />
              <path d="M35,70 L38,66" />
            </svg>
          </div>
        </div>

        {/* Diagonal border layout decoration at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"></div>
      </section>

      <ProductShowcase 
        showHeader={false} 
        activeCategory={selectedCategory}
        setActiveCategory={setSelectedCategory}
      />
    </div>
  );
}
