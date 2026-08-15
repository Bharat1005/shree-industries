import { ArrowUpRight } from 'lucide-react';

// Import blog card background images
import blogFuel from '../../assets/blog_fuel.png';
import blogFarm from '../../assets/blog_farm.png';
import blogIndustrial from '../../assets/blog_industrial.png';

interface BlogSectionProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'blogs', blogId?: number | null) => void;
}

export default function BlogSection({ setCurrentPage }: BlogSectionProps) {
  const blogs = [
    {
      id: 1,
      date: '16-Mar-2026',
      title: "Can Ethanol Blending Reduce India's Dependence on Imported Fuels?",
      image: blogFuel
    },
    {
      id: 2,
      date: '03-Aug-2025',
      title: 'Can Carbon Credits Sow the Seeds of Climate Resilience for Indian Farmers?',
      image: blogFarm
    },
    {
      id: 3,
      date: '06-Jul-2025',
      title: 'Can Coal-to-PVC Unlock a Greener Future for a Necessary Evil?',
      image: blogIndustrial
    }
  ];

  return (
    <section id="blogs" className="py-12 sm:py-20 bg-white w-full border-t border-slate-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            {/* Tag / Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009DE1]"></span>
              <span className="text-[#009DE1] font-bold text-xs uppercase tracking-widest">
                Articles
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003E5C] tracking-tight font-sans">
              Director's Corner
            </h2>
          </div>

          {/* View All Button */}
          <div>
            <button
              onClick={() => setCurrentPage('blogs')}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#009DE1] hover:bg-[#009DE1]/90 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative rounded-[24px] overflow-hidden group shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 h-[380px] sm:h-[450px] flex flex-col justify-between p-6 bg-slate-900"
            >
              {/* Background Image with Dark Linear Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10"></div>
              </div>

              {/* Date Badge overlay (Top Left) */}
              <div className="relative z-10 self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-[#009DE1] font-bold text-[11px] sm:text-xs shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
                </svg>
                {blog.date}
              </div>

              {/* Bottom Details Container */}
              <div className="relative z-10 flex flex-col gap-5 mt-auto">
                {/* Title */}
                <h4 className="text-white font-sans font-bold text-base sm:text-lg lg:text-xl leading-snug group-hover:text-white/95 transition-colors">
                  {blog.title}
                </h4>

                {/* Read More Button */}
                <button
                  onClick={() => setCurrentPage('blogs', blog.id)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#009DE1] hover:bg-[#009DE1]/90 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
