import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AboutUs from '../components/home/AboutUs';

// Import images from assets
import aboutMain from '../assets/about_main.png';
import aboutInt1 from '../assets/about_int1.png';
import aboutInt2 from '../assets/about_int2.png';
import aboutManufacturing from '../assets/about_manufacturing_worker.png';
import workplaceCollaboration from '../assets/workplace_collaboration.png';

interface AboutPageProps {
  setCurrentPage: (page: 'home' | 'about' | 'products') => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  // Accordion State for Values
  const [activeValueId, setActiveValueId] = useState('partnership');

  const valueItems = [
    {
      id: 'partnership',
      title: 'Partnership',
      description: 'We thrive on meaningful partnerships uniting with communities, artisans, and industry leaders to co-create lasting, sustainable impact.',
      image: aboutMain,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
          <mask id="mask0_783_291" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="40" height="40">
            <path d="M44 4H4V44H44V4Z" fill="white"></path>
          </mask>
          <g mask="url(#mask0_783_291)">
            <path d="M17.3335 17.3333C17.3335 9.96953 23.303 4 30.6668 4C38.0307 4 44.0002 9.96953 44.0002 17.3333H17.3335Z" fill="currentColor"></path>
            <path d="M30.6667 30.6667C30.6667 38.0306 24.6972 44.0001 17.3333 44.0001C9.96953 44.0001 4 38.0306 4 30.6667H30.6667Z" fill="currentColor"></path>
            <path d="M30.6665 17.3333C38.0303 17.3333 43.9998 23.3028 43.9998 30.6666C43.9998 38.0304 38.0303 43.9999 30.6665 43.9999V17.3333Z" fill="currentColor"></path>
            <path d="M17.3333 30.6667C9.96953 30.6667 4 24.6972 4 17.3333C4 9.96953 9.96953 4 17.3333 4V30.6667Z" fill="currentColor"></path>
          </g>
        </svg>
      )
    },
    {
      id: 'commitment',
      title: 'Commitment',
      description: 'We are committed to delivering the highest level of product quality, durability, and customer service in all our industrial sectors.',
      image: aboutInt1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
          <mask id="mask0_783_302" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="40" height="40">
            <path d="M44 4H4V44H44V4Z" fill="white"></path>
          </mask>
          <g mask="url(#mask0_783_302)">
            <path fillRule="evenodd" clipRule="evenodd" d="M19 36.0707V44H29V36.0711L34.6066 41.6777L41.6777 34.6066L36.0711 29H44V19H36.0707L41.6772 13.3934L34.6061 6.32239L29 11.9285V4H19V11.9289L13.3934 6.32233L6.32233 13.3934L11.9289 19H4V29H11.9285L6.32183 34.6067L13.3929 41.6777L19 36.0707ZM29 19H19V29H29V19Z" fill="currentColor"></path>
          </g>
        </svg>
      )
    },
    {
      id: 'accountability',
      title: 'Accountability',
      description: 'We take full responsibility for our manufacturing processes, ensuring compliance with global safety standards and environmental regulations.',
      image: aboutInt2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
          <mask id="mask0_912_296" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="40" height="40">
            <path d="M44 4H4V44H44V4Z" fill="white"></path>
          </mask>
          <g mask="url(#mask0_912_296)">
            <path d="M24 24H44V4C32.9543 4 24 12.9543 24 24Z" fill="currentColor"></path>
            <path d="M44 44H24V24C35.0457 24 44 32.9543 44 44Z" fill="currentColor"></path>
            <path d="M4 4H24V24C12.9543 24 4 15.0457 4 4Z" fill="currentColor"></path>
            <path d="M24 24H4V44C15.0457 44 24 35.0457 24 24Z" fill="currentColor"></path>
          </g>
        </svg>
      )
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'We continuously invest in research and development to engineer cutting-edge electrical components and distribution systems.',
      image: aboutManufacturing,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
          <mask id="mask0_912_325" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="40" height="40">
            <path d="M44 4H4V44H44V4Z" fill="white"></path>
          </mask>
          <g mask="url(#mask0_912_325)">
            <path d="M4 29.833L44 29.833V18.1663L4 18.1663V29.833Z" fill="currentColor"></path>
            <path d="M24 15.6667C15.2759 15.6667 7.71437 10.9253 4 4L44 4C40.2857 10.9253 32.7241 15.6667 24 15.6667Z" fill="currentColor"></path>
            <path d="M24 32.333C32.7241 32.333 40.2857 37.0744 44 43.9997H4C7.71437 37.0744 15.2759 32.333 24 32.333Z" fill="currentColor"></path>
          </g>
        </svg>
      )
    }
  ];

  const activeValue = valueItems.find(v => v.id === activeValueId) || valueItems[0];

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

      {/* Our Values Interactive Accordion Section */}
      <section className="py-12 sm:py-20 bg-white w-full border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start max-h-[700px] mx-auto">

            {/* Left Column: Values Accordion (7 cols) */}
            <div className="lg:col-span-7 text-left flex flex-col justify-center">
              {/* Tag / Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009DE1]"></span>
                <span className="text-[#009DE1] font-bold text-xs uppercase tracking-widest">
                  Our Values
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003E5C] tracking-tight mb-8 font-sans">
                Committed to excellence in every detail.
              </h2>

              {/* Accordion Rows */}
              <div className="space-y-4">
                {valueItems.map((item) => {
                  const isActive = item.id === activeValueId;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setActiveValueId(item.id)}
                      onClick={() => setActiveValueId(item.id)}
                      className={`border-b border-slate-200 pb-4 transition-all duration-300 cursor-pointer group`}
                    >
                      {/* Accordion Header Row */}
                      <div className="flex items-center justify-between gap-4 py-2">
                        <div className="flex items-center gap-4">
                          <div className={`${isActive ? 'text-[#009DE1]' : 'text-slate-400 group-hover:text-[#009DE1]'} transition-colors duration-300`}>
                            {item.icon}
                          </div>
                          <span className={`text-base sm:text-lg lg:text-xl font-bold transition-colors duration-300 font-sans ${isActive ? 'text-[#009DE1]' : 'text-slate-800 group-hover:text-[#009DE1]'
                            }`}>
                            {item.title}
                          </span>
                        </div>
                        {isActive && (
                          <ArrowUpRight className="w-6 h-6 text-[#009DE1] animate-in fade-in slide-in-from-bottom-2 duration-300" />
                        )}
                      </div>

                      {/* Accordion Description Content */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[150px] opacity-100 mt-3 pl-16' : 'max-h-0 opacity-0 pl-16'
                        }`}>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Values Dynamic Image (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 relative group">
                <img
                  key={activeValue.id}
                  src={activeValue.image}
                  alt={activeValue.title}
                  className="w-full h-full object-cover transform scale-100 transition-all duration-700 ease-out group-hover:scale-105 animate-in fade-in duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="py-12 sm:py-20 bg-slate-50 w-full border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-center">

            {/* Left Column: Image (5 cols) */}
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-slate-100 bg-white">
                <img
                  src={workplaceCollaboration}
                  alt="Workplace Collaboration"
                  className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Text Content (7 cols) */}
            <div className="md:col-span-7 text-left flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003E5C] tracking-tight mb-4 font-sans leading-tight">
                Join a workplace fueled by Innovation and Creativity
              </h2>

              <h3 className="text-base sm:text-lg font-semibold text-[#009DE1] mb-4">
                Be part of a team where Innovation meets Imagination
              </h3>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
                We're a dynamic group of strategists, creatives, and data-driven minds, passionate about turning bold ideas into impactful results for our stakeholders.
              </p>

              <div>
                <button
                  onClick={() => setCurrentPage('products')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#009DE1] hover:bg-[#009DE1]/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  Careers
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
