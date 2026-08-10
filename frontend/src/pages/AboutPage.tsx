import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import AboutUs from '../components/home/AboutUs';

// Import images from assets
import aboutMain from '../assets/about_main.png';
import aboutInt1 from '../assets/about_int1.png';
import aboutInt2 from '../assets/about_int2.png';
import aboutManufacturing from '../assets/about_manufacturing_worker.png';
import workplaceCollaboration from '../assets/workplace_collaboration.png';

// Import new team profile images
import teamVirendra from '../assets/team_virendra.png';
import teamGyan from '../assets/team_gyan.png';
import teamAsmita from '../assets/team_asmita.png';

interface AboutPageProps {
  setCurrentPage: (page: 'home' | 'about' | 'products') => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  // Accordion State for Values
  const [activeValueId, setActiveValueId] = useState('partnership');

  // Slider State for Team
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Team members list
  const teamMembers = [
    {
      name: 'Virendra Singh Shaktawat',
      role: 'Executive Director',
      desc: 'Virendra Singh has over 37 years of proven leadership in logistics, supply chain, and shipping. He leads the Consulting and Trading verticals, combining experience and strategy to build impactful, future-ready business solutions.',
      image: teamVirendra,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Gyan Prakash Gupta',
      role: 'Chairman Emeritus',
      desc: 'Gyan Prakash Gupta, fondly known as "Baba Ji," nurtured our venture with two core ethos: "Live Simple, Think Big" and "Help Everyone Selflessly Within Your Capacity." His unwavering values and visionary spirit laid the foundation for a purpose-driven enterprise.',
      image: teamGyan,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Asmita Goel',
      role: 'Non-Executive Director',
      desc: 'Asmita Goel leads the Heritage Handlooms vertical, combining design sensibility with social impact to preserve traditional crafts, uplift rural artisans, and promote eco-conscious, culturally rooted craftsmanship across the country.',
      image: teamAsmita,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Chief Technology Officer',
      desc: 'Rajesh leads the engineering and technical research departments, bringing over 15 years of experience in designing smart grids, high-performance switchgear mechanisms, and automated manufacturing systems.',
      image: teamVirendra,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Nisha Patel',
      role: 'Head of Operations & Quality',
      desc: 'Nisha Patel oversees our quality control laboratories and production facilities, ensuring that every product manufactured meets strict ISO 9001:2015 specifications and safety standards.',
      image: teamAsmita,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Vikram Malhotra',
      role: 'Head of International Trade',
      desc: 'Vikram leads our global distribution networks and export initiatives, establishing strong trade partnerships across Europe, Middle East, and Asia.',
      image: teamVirendra,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Pooja Sharma',
      role: 'Director of Research & Development',
      desc: 'Pooja directs our product innovation lab, focusing on low-voltage switchgear efficiency, thermal dissipation materials, and smart-grid components.',
      image: teamAsmita,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Devendra Vyas',
      role: 'Financial Controller',
      desc: "Devendra manages the company's financial operations, capital allocation, and budgeting strategies, ensuring lean manufacturing cost structures.",
      image: teamGyan,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Siddharth Mehta',
      role: 'Head of Corporate Sales',
      desc: 'Siddharth leads our domestic corporate partnerships and large-scale industrial contract acquisitions across commercial segments.',
      image: teamVirendra,
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Ananya Sen',
      role: 'Lead Product Designer',
      desc: 'Ananya designs our switchboard enclosures and modular accessories, focusing on premium industrial aesthetics and ergonomic usage.',
      image: teamAsmita,
      linkedin: 'https://linkedin.com'
    }
  ];

  // Screen resize hook to dynamically adjust visible slider cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - visibleCount);
  const canSlide = teamMembers.length > visibleCount;

  // Re-bound slide index on screen resize changes
  useEffect(() => {
    if (slideIndex > maxIndex) {
      setSlideIndex(maxIndex);
    }
  }, [maxIndex, slideIndex]);

  const handlePrev = () => {
    setSlideIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
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
                          <span className={`text-base sm:text-lg lg:text-xl font-bold transition-colors duration-300 font-sans ${
                            isActive ? 'text-[#009DE1]' : 'text-slate-800 group-hover:text-[#009DE1]'
                          }`}>
                            {item.title}
                          </span>
                        </div>
                        {isActive && (
                          <ArrowUpRight className="w-6 h-6 text-[#009DE1] animate-in fade-in slide-in-from-bottom-2 duration-300" />
                        )}
                      </div>

                      {/* Accordion Description Content */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? 'max-h-[150px] opacity-100 mt-3 pl-16' : 'max-h-0 opacity-0 pl-16'
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

      {/* Leadership Team Responsive Slider Section */}
      <section className="py-12 sm:py-20 bg-[#003E5C] w-full text-center relative overflow-hidden">
        {/* Decorative subtle background overlay circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009DE1]"></span>
              <span className="text-[#009DE1] font-bold text-xs uppercase tracking-widest">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
              Leadership
            </h2>
          </div>

          {/* Slider Container with absolute buttons */}
          <div className="relative w-full px-2 sm:px-6">
            {canSlide && (
              <>
                {/* Left Prev Button */}
                <div className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-0 lg:-translate-x-4 z-20">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#009DE1] hover:bg-[#009DE1]/90 text-white border border-[#009DE1] cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg shadow-[#009DE1]/30"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>

                {/* Right Next Button */}
                <div className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 translate-x-0 lg:translate-x-4 z-20">
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#009DE1] hover:bg-[#009DE1]/90 text-white border border-[#009DE1] cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg shadow-[#009DE1]/30"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}

            {/* Slider Content Wrapper */}
            <div className="overflow-hidden w-full relative rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${slideIndex * (100 / visibleCount)}%)`,
                  width: `${(teamMembers.length / visibleCount) * 100}%` 
                }}
              >
                {teamMembers.map((member, i) => (
                  <div 
                    key={i} 
                    style={{ width: `${100 / teamMembers.length}%` }}
                    className="px-3 sm:px-4 shrink-0 flex"
                  >
                    {/* Individual Team Card */}
                    <div className="bg-white rounded-3xl border border-slate-100 p-5 sm:p-8 flex flex-col justify-between text-left shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 relative w-full h-full">
                      {/* LinkedIn profile link (top right overlay) */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-[#009DE1] text-slate-500 hover:text-white flex items-center justify-center transition-colors duration-300"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}

                      {/* Card Content */}
                      <div>
                        {/* Circle profile picture */}
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#009DE1] mb-6">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Name and Designation */}
                        <h4 className="text-lg sm:text-xl font-bold text-[#003E5C] tracking-tight mb-1 font-sans">
                          {member.name}
                        </h4>
                        <p className="text-slate-500 font-semibold text-xs sm:text-sm mb-4">
                          {member.role}
                        </p>

                        {/* Thin gray line and biography paragraph */}
                        <div className="border-t border-slate-100 pt-4">
                          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                            {member.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
