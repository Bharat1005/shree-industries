import { ArrowUpRight, Clock, Smile, Folder, Boxes, ShieldCheck } from 'lucide-react';
import aboutWorker from '../../assets/about_manufacturing_worker.png';

// Industrial factory building exterior image
const factoryExteriorImg = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80";

const AboutUs = ({ showHeader = true }: { showHeader?: boolean }) => {
  const stats = [
    {
      id: 1,
      icon: <Clock className="w-8 h-8 text-[#009DE1]" />,
      count: "25+",
      label: "Years of Experience"
    },
    {
      id: 2,
      icon: <Smile className="w-8 h-8 text-[#009DE1]" />,
      count: "200+",
      label: "Happy Clients"
    },
    {
      id: 3,
      icon: <Folder className="w-8 h-8 text-[#009DE1]" />,
      count: "5000+",
      label: "Completed Projects"
    },
    {
      id: 4,
      icon: <Boxes className="w-8 h-8 text-[#009DE1]" />,
      count: "50+",
      label: "Product Ranges"
    },
    {
      id: 5,
      icon: <ShieldCheck className="w-8 h-8 text-[#009DE1]" />,
      count: "100%",
      label: "Certified Quality"
    }
  ];

  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white overflow-hidden" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Overlapping Photos (5 cols on lg, added mobile px-4 padding) */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0 min-h-[380px] sm:min-h-[440px] flex flex-col justify-center px-4 sm:px-0">
            
            {/* Top-Left Photo: Office/Engineers */}
            <div className="w-[70%] aspect-[4/3.5] rounded-3xl overflow-hidden shadow-lg border border-slate-100/50 z-10 self-start">
              <img 
                src={aboutWorker} 
                alt="Shree Industries Factory Work" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>



            {/* Curved Orange Connection Arrow SVG (Responsive size) */}
            <svg 
              className="absolute top-[18%] right-[18%] sm:right-[22%] w-16 h-12 sm:w-24 sm:h-16 text-brand-orange z-25 pointer-events-none transform rotate-[10deg] animate-pulse" 
              viewBox="0 0 100 60" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3.5" 
              strokeLinecap="round"
            >
              <path d="M10,50 Q45,5 90,25" strokeDasharray="5 5" />
              <path d="M78,20 L90,25 L82,37" fill="none" />
            </svg>

            {/* Bottom-Right Photo: Factory Building Exterior */}
            <div className="w-[68%] aspect-[4/3.5] rounded-3xl overflow-hidden shadow-lg border border-slate-100/50 z-20 self-end -mt-16 relative">
              <img 
                src={factoryExteriorImg} 
                alt="Shree Industries Building" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Text Content & Description (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col text-left justify-center lg:pl-4">
            {/* Tag Badge */}
            <span className="self-start text-[#009DE1] font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-4">
              ABOUT US
            </span>

            {/* Heading Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 font-sans tracking-tight leading-[1.25] mb-4">
              We are a certified electrical switchgear and modular distribution board manufacturer.
            </h2>

            {/* Description Text */}
            <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
              <p>
                Shree Industries is a leading manufacturer and supplier of high-quality switchgears, distribution boards, metal boxes, and industrial plugs & sockets based in Rajkot, Gujarat. Built on a foundation of rigorous Total Quality Management (TQM) and engineering innovation, we specialize in delivering safe, heat-resistant, and low-maintenance electrical solutions.
              </p>
              <p>
                With over two decades of technical expertise, our state-of-the-art manufacturing facility is equipped with advanced testing systems to ensure absolute compliance with international safety standards. Guided by a client-centric approach and transparent policies, we design durable products tailored to support commercial, residential, and heavy industrial power distribution networks worldwide.
              </p>
            </div>

            {/* CTA Read More Button (Common Style fill) */}
            {showHeader && (
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-brand-yellow hover:bg-yellow-500 text-brand-dark font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-brand-yellow/10 w-fit cursor-pointer"
              >
                Read More
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

        {/* Bottom Statistics Row with dividers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 border-t border-slate-100 pt-12 mt-16 text-center px-4 sm:px-0">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center px-2 md:border-r border-slate-200/60 last:border-r-0"
            >
              <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 select-none">
                {stat.count}
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-slate-500 max-w-[130px] leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
