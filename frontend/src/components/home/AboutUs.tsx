import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import aboutMain from '../../assets/about_main.png';
import aboutInt1 from '../../assets/about_int1.png';
import aboutInt2 from '../../assets/about_int2.png';

const AboutUs = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = 25;
    const duration = 1500; // 1.5 seconds animation
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 sm:py-24 bg-white overflow-hidden"
      id="about-us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image collage */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[1.35/1] lg:aspect-[1.15/1] max-w-xl mx-auto lg:mx-0">
            {/* Background Blue Outline for Bottom Left Image */}
            <div className="absolute left-[-2%] bottom-[0%] w-[44%] h-[46%] border-l-2 border-t-2 border-b-2 border-brand-blue/30 rounded-l-2xl z-0"></div>

            {/* Main factory image */}
            <div className="absolute top-[0%] left-[8%] w-[84%] h-[68%] z-10 overflow-hidden rounded-2xl shadow-md group">
              <img 
                src={aboutMain} 
                alt="Shree Industries Factory Exterior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom-left factory interior image */}
            <div className="absolute bottom-[2%] left-[0%] w-[44%] h-[46%] z-20 overflow-hidden rounded-xl border-[6px] border-white shadow-lg group">
              <img 
                src={aboutInt1} 
                alt="Shree Industries Manufacturing Interior 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom-right factory interior image */}
            <div className="absolute bottom-[2%] right-[4%] w-[48%] h-[46%] z-20 overflow-hidden rounded-xl border-[6px] border-white shadow-lg group">
              <img 
                src={aboutInt2} 
                alt="Shree Industries Manufacturing Interior 2" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Gold wireframe offset behind the badge */}
            <div className="absolute left-[13%] top-[49%] w-[24%] h-[24%] border-2 border-brand-yellow rounded-xl z-10"></div>

            {/* Blue Counter Badge */}
            <div className="absolute left-[15%] top-[51%] w-[24%] h-[24%] flex flex-col items-center justify-center bg-brand-blue text-white rounded-xl shadow-xl text-center z-30 p-2 sm:p-4 select-none hover:scale-105 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
                {count}+
              </span>
              <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold tracking-wider uppercase mt-0.5 sm:mt-1.5 text-blue-100">
                Years of
              </span>
              <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold tracking-wider uppercase text-blue-100">
                Trust
              </span>
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center">
                <span className="text-brand-blue font-bold text-sm tracking-wider uppercase relative pb-1.5">
                  About Us
                  <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand-yellow"></span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark leading-tight">
                Leading Manufacturer of Industrial Switchgear & Electrical Products
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Shree Industries is a trusted name in the manufacturing of high-quality LT Control Switches, Rotary Switches, Metal Enclosures, Distribution Boards and more. Our products are known for their durability, safety and superior performance.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm lg:text-base">
                  ISO 9001:2015 Certified Company
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm lg:text-base">
                  High Quality Raw Materials
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm lg:text-base">
                  Advanced Manufacturing Facility
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm lg:text-base">
                  Timely Delivery & Best Support
                </span>
              </div>
            </div>

            {/* Read More Button */}
            <div className="pt-2">
              <a 
                href="#about-us" 
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-md shadow-md transition-all duration-300 group hover:shadow-lg"
              >
                Read More About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
