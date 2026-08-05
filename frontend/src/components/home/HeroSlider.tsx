import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    subtitle: 'Manufacturing High Quality',
    title: 'Industrial Switchgear &\nElectrical Metal Enclosures',
    description: 'Delivering innovative & reliable electrical solutions\nfor a safer and stronger tomorrow.',
    // Industrial switchgear control room / manufacturing plant
    bgImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
  },
  {
    id: 2,
    subtitle: 'Advanced Technology',
    title: 'Custom Electrical Panels &\nControl Systems',
    description: 'Engineered for maximum efficiency and safety in\ndemanding industrial environments.',
    // Electrical engineering / wiring close up
    bgImage: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    subtitle: 'Trusted Worldwide',
    title: 'Global Export of\nPremium Switchgears',
    description: 'Meeting international standards with our complete\nrange of electrical distribution solutions.',
    // Large scale industrial plant
    bgImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  }
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden bg-brand-dark">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/95 via-brand-dark/90 to-brand-dark/40"></div>
              </div>

              {/* Content Container */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full items-center h-full">
                  
                  {/* Left Column - Text Content */}
                  <div className="text-white lg:col-span-7 z-10 pt-10">
                    <p className="text-base sm:text-lg font-medium mb-2 text-gray-200">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.2] mb-6 whitespace-pre-line tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-300 mb-8 whitespace-pre-line leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a href="#" className="flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold text-sm px-6 py-3 rounded hover:bg-yellow-500 transition-colors uppercase tracking-wide">
                        Explore Products
                        <ArrowRight size={18} />
                      </a>
                      <a href="#" className="flex items-center gap-2 bg-transparent border-2 border-white/80 text-white font-bold text-sm px-6 py-3 rounded hover:bg-white/10 transition-colors uppercase tracking-wide">
                        Request a Quote
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Images/Graphics (Removed as per user request) */}
                  <div className="hidden lg:flex lg:col-span-5 relative justify-end items-center h-full">
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-brand-yellow w-3 h-3' : 'bg-white/40 hover:bg-white/80'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
