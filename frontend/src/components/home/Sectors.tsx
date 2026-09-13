import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectorCardProps {
  icon: React.ComponentType;
  title: string;
}

const SectorCard = ({ icon: Icon, title }: SectorCardProps) => {
  return (
    <div 
      className="p-[1.5px] bg-slate-200 hover:bg-brand-blue rounded-tr-[2rem] rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-none transition-all duration-300 group hover:-translate-y-1.5 shadow-sm hover:shadow-xl cursor-pointer"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 32px 100%, 0 calc(100% - 32px))'
      }}
    >
      <div 
        className="bg-white rounded-tr-[30px] rounded-tl-[30px] rounded-br-[30px] rounded-bl-none p-6 sm:p-8 flex flex-row items-center gap-6 text-left h-full min-h-[140px]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 31px 100%, 0 calc(100% - 31px))'
        }}
      >
        <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 shrink-0">
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Soft background shapes */}
            <div className="absolute inset-0 bg-[#E6F5FC] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-60"></div>
            <div className="absolute inset-0 bg-[#FFF0EB] rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 opacity-60"></div>
            
            {/* The custom SVG icon */}
            <Icon />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-slate-800 font-bold text-sm sm:text-base lg:text-md group-hover:text-brand-blue transition-colors duration-300 leading-snug">
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

// 12 Custom Styled SVG Icons matching the brand's original two-color detailed vector aesthetic
const FactoryIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 80V45L35 60V45L55 60V30H70V80H15Z" stroke="#009DE1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="#009DE1" fillOpacity="0.1" />
    <path d="M60 20C60 15, 63 12, 60 7" stroke="#FF5E2B" strokeWidth="4" strokeLinecap="round" />
    <path d="M65 20C65 13, 68 10, 65 5" stroke="#FF5E2B" strokeWidth="3" strokeLinecap="round" />
    <circle cx="80" cy="50" r="8" stroke="#FF5E2B" strokeWidth="4" fill="white" />
    <line x1="80" y1="36" x2="80" y2="42" stroke="#FF5E2B" strokeWidth="3" />
    <line x1="80" y1="58" x2="80" y2="64" stroke="#FF5E2B" strokeWidth="3" />
    <line x1="66" y1="50" x2="72" y2="50" stroke="#FF5E2B" strokeWidth="3" />
    <line x1="88" y1="50" x2="94" y2="50" stroke="#FF5E2B" strokeWidth="3" />
  </svg>
);

const ShipIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 65 L20 80 H80 L90 65 H10Z" stroke="#009DE1" strokeWidth="5" fill="#009DE1" fillOpacity="0.1" strokeLinejoin="round" />
    <path d="M5 85 C25 82, 40 88, 60 85 C80 82, 90 88, 95 85" stroke="#009DE1" strokeWidth="3" strokeLinecap="round" />
    <rect x="25" y="45" width="22" height="15" stroke="#FF5E2B" strokeWidth="4" fill="#FF5E2B" fillOpacity="0.1" rx="2" />
    <rect x="53" y="45" width="22" height="15" stroke="#FF5E2B" strokeWidth="4" fill="#FF5E2B" fillOpacity="0.1" rx="2" />
    <rect x="39" y="26" width="22" height="15" stroke="#FF5E2B" strokeWidth="4" fill="#FF5E2B" fillOpacity="0.1" rx="2" />
    <line x1="36" y1="45" x2="36" y2="60" stroke="#FF5E2B" strokeWidth="2" />
    <line x1="64" y1="45" x2="64" y2="60" stroke="#FF5E2B" strokeWidth="2" />
    <line x1="50" y1="26" x2="50" y2="41" stroke="#FF5E2B" strokeWidth="2" />
  </svg>
);

const MiningIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="75" x2="70" y2="35" stroke="#009DE1" strokeWidth="6" strokeLinecap="round" />
    <path d="M45 25 C55 35, 75 50, 80 60" stroke="#FF5E2B" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M45 25 C35 15, 20 8, 10 10" stroke="#FF5E2B" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M15 80 V55 C15 35, 85 35, 85 55 V80" stroke="#009DE1" strokeWidth="4" strokeDasharray="6 4" fill="none" />
  </svg>
);

const CampingIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 65 H70 C80 65, 85 60, 85 50 V35 C85 25, 75 25, 65 25 H20 C15 25, 15 30, 15 35 Z" stroke="#009DE1" strokeWidth="5" fill="#009DE1" fillOpacity="0.1" strokeLinejoin="round" />
    <circle cx="35" cy="65" r="10" stroke="#FF5E2B" strokeWidth="5" fill="white" />
    <circle cx="35" cy="65" r="3" fill="#FF5E2B" />
    <rect x="50" y="32" width="20" height="15" stroke="#009DE1" strokeWidth="3" rx="2" />
    <line x1="25" y1="25" x2="25" y2="65" stroke="#FF5E2B" strokeWidth="4" />
    <path d="M15 55 H5 L0 65" stroke="#009DE1" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="35" width="22" height="45" stroke="#009DE1" strokeWidth="4" fill="#009DE1" fillOpacity="0.1" />
    <rect x="42" y="48" width="22" height="32" stroke="#009DE1" strokeWidth="4" fill="#009DE1" fillOpacity="0.1" />
    <line x1="26" y1="35" x2="26" y2="80" stroke="#009DE1" strokeWidth="2" />
    <line x1="15" y1="50" x2="37" y2="50" stroke="#009DE1" strokeWidth="2" />
    <line x1="15" y1="65" x2="37" y2="65" stroke="#009DE1" strokeWidth="2" />
    <line x1="53" y1="48" x2="53" y2="80" stroke="#009DE1" strokeWidth="2" />
    <line x1="42" y1="64" x2="64" y2="64" stroke="#009DE1" strokeWidth="2" />
    <path d="M80 80 V20 L60 10 M80 20 H45 L50 26 H80" stroke="#FF5E2B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="53" y1="20" x2="53" y2="35" stroke="#FF5E2B" strokeWidth="2" />
    <circle cx="53" cy="38" r="3" fill="#FF5E2B" />
  </svg>
);

const FoodIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 40 L50 25 L80 40 V75 L50 90 L20 75 Z" stroke="#009DE1" strokeWidth="4" fill="#009DE1" fillOpacity="0.1" strokeLinejoin="round" />
    <path d="M50 25 V90" stroke="#009DE1" strokeWidth="3" />
    <path d="M20 40 L50 55 L80 40" stroke="#009DE1" strokeWidth="3" />
    <path d="M38 31 L50 37 L62 31" stroke="#FF5E2B" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 37 V60" stroke="#FF5E2B" strokeWidth="4" strokeLinecap="round" />
    <path d="M10 20 H30 V10" stroke="#FF5E2B" strokeWidth="3" strokeLinecap="round" />
    <path d="M90 20 H70 V10" stroke="#FF5E2B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const AgricultureIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="80" x2="90" y2="80" stroke="#009DE1" strokeWidth="4" strokeLinecap="round" />
    <line x1="20" y1="88" x2="80" y2="88" stroke="#009DE1" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 80 V20" stroke="#FF5E2B" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 50 C40 45, 42 35, 50 35 C58 35, 60 45, 50 50" fill="#FF5E2B" />
    <path d="M50 38 C40 33, 42 23, 50 23 C58 23, 60 33, 50 38" fill="#FF5E2B" />
    <path d="M50 62 C40 57, 42 47, 50 47 C58 47, 60 57, 50 62" fill="#FF5E2B" />
    <path d="M50 74 C40 69, 42 59, 50 59 C58 59, 60 69, 50 74" fill="#FF5E2B" />
    <path d="M50 65 C30 65, 25 55, 20 50" stroke="#009DE1" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 55 C70 55, 75 45, 80 40" stroke="#009DE1" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const MilitaryIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20 H80 V45 C80 65, 50 85, 50 85 C50 85, 20 65, 20 45 Z" stroke="#009DE1" strokeWidth="5" fill="#009DE1" fillOpacity="0.1" strokeLinejoin="round" />
    <circle cx="50" cy="45" r="16" stroke="#FF5E2B" strokeWidth="4" fill="white" />
    <circle cx="50" cy="45" r="4" fill="#FF5E2B" />
    <line x1="50" y1="23" x2="50" y2="35" stroke="#FF5E2B" strokeWidth="3" />
    <line x1="50" y1="55" x2="50" y2="67" stroke="#FF5E2B" strokeWidth="3" />
    <line x1="28" y1="45" x2="40" y2="45" stroke="#FF5E2B" strokeWidth="3" />
    <line x1="60" y1="45" x2="72" y2="45" stroke="#FF5E2B" strokeWidth="3" />
  </svg>
);

const PropertiesIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="20" width="30" height="60" stroke="#009DE1" strokeWidth="4" fill="#009DE1" fillOpacity="0.1" />
    <line x1="30" y1="20" x2="30" y2="80" stroke="#009DE1" strokeWidth="2" />
    <rect x="22" y="28" width="6" height="6" fill="#FF5E2B" />
    <rect x="32" y="28" width="6" height="6" fill="#FF5E2B" />
    <rect x="22" y="42" width="6" height="6" fill="#FF5E2B" />
    <rect x="32" y="42" width="6" height="6" fill="#FF5E2B" />
    <rect x="22" y="56" width="6" height="6" fill="#FF5E2B" />
    <rect x="32" y="56" width="6" height="6" fill="#FF5E2B" />
    <path d="M45 80 V50 L60 38 L75 50 L90 38 V80 Z" stroke="#FF5E2B" strokeWidth="4" fill="#FF5E2B" fillOpacity="0.1" strokeLinejoin="round" />
    <circle cx="67" cy="60" r="6" stroke="#FF5E2B" strokeWidth="3" fill="white" />
  </svg>
);

const PowerIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 85 L45 20 H55 L70 85" stroke="#009DE1" strokeWidth="4" strokeLinecap="round" />
    <line x1="40" y1="50" x2="60" y2="50" stroke="#009DE1" strokeWidth="4" />
    <line x1="35" y1="70" x2="65" y2="70" stroke="#009DE1" strokeWidth="4" />
    <line x1="45" y1="20" x2="55" y2="50" stroke="#009DE1" strokeWidth="2" />
    <line x1="55" y1="20" x2="45" y2="50" stroke="#009DE1" strokeWidth="2" />
    <line x1="45" y1="50" x2="65" y2="70" stroke="#009DE1" strokeWidth="2" />
    <line x1="55" y1="50" x2="35" y2="70" stroke="#009DE1" strokeWidth="2" />
    <line x1="20" y1="35" x2="80" y2="35" stroke="#009DE1" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 10 L40 45 H53 L45 80 L65 35 H52 Z" stroke="#FF5E2B" strokeWidth="3" fill="#FF5E2B" fillOpacity="0.8" strokeLinejoin="round" />
  </svg>
);

const OilIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 L40 35 L60 80" stroke="#009DE1" strokeWidth="4" strokeLinecap="round" fill="#009DE1" fillOpacity="0.05" />
    <line x1="30" y1="57" x2="50" y2="57" stroke="#009DE1" strokeWidth="4" />
    <line x1="10" y1="80" x2="90" y2="80" stroke="#009DE1" strokeWidth="4" />
    <path d="M20 35 L70 35" stroke="#009DE1" strokeWidth="6" strokeLinecap="round" />
    <path d="M70 25 C75 25, 78 35, 75 45 Z" fill="#009DE1" />
    <line x1="75" y1="45" x2="75" y2="75" stroke="#009DE1" strokeWidth="2" />
    <path d="M80 80 C90 80, 92 65, 80 50 C68 65, 70 80, 80 80 Z" stroke="#FF5E2B" strokeWidth="4" fill="#FF5E2B" fillOpacity="0.2" />
    <path d="M80 75 C85 75, 86 67, 80 58 C74 67, 75 75, 80 75 Z" fill="#FF5E2B" />
  </svg>
);

const FilmIcon = () => (
  <svg className="w-9 h-9 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="35" width="60" height="45" stroke="#009DE1" strokeWidth="4" fill="#009DE1" fillOpacity="0.1" rx="4" />
    <path d="M15 35 L75 20" stroke="#FF5E2B" strokeWidth="6" strokeLinecap="round" />
    <line x1="25" y1="32" x2="30" y2="22" stroke="#FF5E2B" strokeWidth="4" />
    <line x1="45" y1="28" x2="50" y2="18" stroke="#FF5E2B" strokeWidth="4" />
    <line x1="65" y1="24" x2="70" y2="14" stroke="#FF5E2B" strokeWidth="4" />
    <circle cx="35" cy="58" r="8" stroke="#009DE1" strokeWidth="3" fill="white" />
    <circle cx="55" cy="58" r="8" stroke="#009DE1" strokeWidth="3" fill="white" />
    <path d="M80 50 L83 56 L90 57 L85 62 L86 69 L80 65 L74 69 L75 62 L70 57 L77 56 Z" fill="#FF5E2B" />
  </svg>
);

const sectorsData = [
  {
    title: "Chemical & Heavy Industry",
    icon: FactoryIcon
  },
  {
    title: "Installation Containers, Shipyards & Shipping Lines",
    icon: ShipIcon
  },
  {
    title: "Mining & Tunnelling",
    icon: MiningIcon
  },
  {
    title: "Camping & Caravanning",
    icon: CampingIcon
  },
  {
    title: "Building & Construction Industry",
    icon: BuildingIcon
  },
  {
    title: "Food Processing & Packaging",
    icon: FoodIcon
  },
  {
    title: "Agriculture & Farming",
    icon: AgricultureIcon
  },
  {
    title: "Military Applications",
    icon: MilitaryIcon
  },
  {
    title: "Industrial & Commercial Properties",
    icon: PropertiesIcon
  },
  {
    title: "Power Generation & Distribution",
    icon: PowerIcon
  },
  {
    title: "Oil & Gas (Non-Hazardous Areas)",
    icon: OilIcon
  },
  {
    title: "Film, TV & Outdoor Events",
    icon: FilmIcon
  }
];

const Sectors = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/30" id="sectors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column: Title and Button */}
          <div className="flex flex-col items-start text-left">
            <span className="self-start text-[#009DE1] font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-4">
              OUR SECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-blue tracking-tight mb-6">
              Our Sectors, Our Versatile Customers
            </h2>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-slate-300 hover:border-brand-blue hover:bg-brand-blue hover:text-white text-slate-700 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:-translate-y-0.5 group hover:shadow-lg"
            >
              Know More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Right Column: Description Content */}
          <div className="text-left lg:border-l lg:border-slate-200 lg:pl-8">
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              At Shree Industries, we have expanded our abilities & polished our skill sets to serve diverse sectors. Our customized manufacturing helps clients from several industries optimize their operations.
            </p>
          </div>
        </div>

        {/* 12 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectorsData.map((sector, index) => (
            <SectorCard 
              key={index}
              title={sector.title}
              icon={sector.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
