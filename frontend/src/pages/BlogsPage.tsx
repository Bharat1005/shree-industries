import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  ArrowUpRight,
  BookOpen,
  User,
  Share2
} from 'lucide-react';

// Import blog card background images
import blogFuel from '../assets/blog_fuel.png';
import blogFarm from '../assets/blog_farm.png';
import blogIndustrial from '../assets/blog_industrial.png';

interface BlogsPageProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs') => void;
  selectedBlogId?: number | null;
  setSelectedBlogId?: (id: number | null) => void;
}

interface BlogArticle {
  id: number;
  date: string;
  author: string;
  readTime: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  content: Array<{
    type: 'paragraph' | 'heading' | 'blockquote' | 'list';
    text?: string;
    items?: string[];
  }>;
}

export default function BlogsPage({ setCurrentPage, selectedBlogId, setSelectedBlogId }: BlogsPageProps) {
  const [internalSelectedBlogId, setInternalSelectedBlogId] = useState<number | null>(null);

  // Active blog state (combines internal page state and external selected ID)
  const activeBlogId = selectedBlogId !== undefined ? selectedBlogId : internalSelectedBlogId;
  const setActiveBlogId = (id: number | null) => {
    if (setSelectedBlogId) {
      setSelectedBlogId(id);
    } else {
      setInternalSelectedBlogId(id);
    }
  };

  // Scroll reading progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (activeBlogId !== null) {
      window.scrollTo(0, 0);
      
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = (window.scrollY / totalHeight) * 100;
          setScrollProgress(progress);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrollProgress(0);
    }
  }, [activeBlogId]);

  const blogs: BlogArticle[] = [
    {
      id: 1,
      date: '16-Mar-2026',
      author: 'Director\'s Desk',
      readTime: '6 min read',
      category: 'Energy & Biofuels',
      title: "Can Ethanol Blending Reduce India's Dependence on Imported Fuels?",
      summary: "Ethanol blending in petrol has emerged as a cornerstone of India's energy transition strategy. We examine its progress, challenges, and long-term impact on foreign exchange and agriculture.",
      image: blogFuel,
      content: [
        {
          type: 'paragraph',
          text: 'Ethanol blending is a green fuel initiative that involves blending ethanol (ethyl alcohol) with gasoline. In India, the government has set ambitious targets under the Ethanol Blending Programme (EBP) to achieve 20% ethanol-blended petrol (E20) by 2025-26. We look at the multi-dimensional impacts of this policy on foreign reserves, carbon footprints, and the sugar industry.'
        },
        {
          type: 'heading',
          text: 'Why Ethanol Blending is a Strategic Priority'
        },
        {
          type: 'paragraph',
          text: 'India currently imports over 85% of its crude oil requirements, which puts pressure on the national treasury and foreign exchange reserves. By integrating locally produced bio-ethanol from crop biomass, India is building a buffer against volatile international oil markets.'
        },
        {
          type: 'list',
          items: [
            'Saving Foreign Exchange: Transitioning to E20 blending can potentially save India upwards of ₹30,000 crores annually in crude oil import bills.',
            'Decarbonizing Transport: Ethanol burns more completely than pure petrol, leading to significant reductions in carbon monoxide (CO), hydrocarbons (HC), and nitrous oxides (NOx) emissions.',
            'Sugarcane & Grain Support: Creating a stable alternative market for sugarcane bagasse, damaged food grains, and maize directly benefits farming communities, guaranteeing minimum support pricing structures.'
          ]
        },
        {
          type: 'blockquote',
          text: '“The Ethanol Blending Programme is not just an environmental initiative; it is a core pillar of national energy security and rural economic empowerment.”'
        },
        {
          type: 'heading',
          text: 'Technical and Structural Roadblocks'
        },
        {
          type: 'paragraph',
          text: 'Despite the impressive momentum, several challenges remain before achieving universal E20 compliance. Engine compatibility is a key concern: older vehicles require fuel system modifications, and automobile manufacturers have had to re-engineer fuel injectors, valves, and gas tanks to prevent ethanol corrosion. Furthermore, balancing feedstock availability for ethanol distilleries without competing with the country’s food security requires precise crop management and inventory planning.'
        },
        {
          type: 'heading',
          text: 'The Road Ahead'
        },
        {
          type: 'paragraph',
          text: 'The expansion of 2G (Second Generation) ethanol plants, which utilize agricultural waste like rice straw and cotton stalks, will play a vital role. This ensures that the feedstock is derived from non-food agricultural residues, resolving the food-vs-fuel debate. With strong policy support and expanding distillery capacities, India is well on its way to a self-reliant and cleaner energy paradigm.'
        }
      ]
    },
    {
      id: 2,
      date: '03-Aug-2025',
      author: 'Director\'s Desk',
      readTime: '5 min read',
      category: 'Climate & Farming',
      title: 'Can Carbon Credits Sow the Seeds of Climate Resilience for Indian Farmers?',
      summary: 'Regenerative agriculture combined with carbon markets offers a new revenue stream for smallholder farmers. Learn how carbon credit platforms are driving sustainability.',
      image: blogFarm,
      content: [
        {
          type: 'paragraph',
          text: 'As climate change leads to unpredictable monsoons and rising temperatures, traditional farming in India faces severe challenges. Regenerative agriculture practices—including low-till farming, cover cropping, and agroforestry—are proving key to restoring soil organic carbon, conserving water, and creating climate-resilient crop yields.'
        },
        {
          type: 'heading',
          text: 'Monetizing Sustainable Agriculture'
        },
        {
          type: 'paragraph',
          text: 'Global carbon markets offer a unique financial tool to reward farmers for implementing eco-friendly methods. By capturing carbon dioxide from the atmosphere and storing it in the soil, farms act as carbon sinks. Verified carbon offsets can then be sold to corporations aiming to balance their emissions.'
        },
        {
          type: 'list',
          items: [
            'Soil Health Restoration: Increasing organic matter improves water retention, reduces dependency on synthetic fertilizers, and increases crop resilience.',
            'Direct Cash Incentives: Annual payouts from voluntary carbon registries provide a vital secondary income source, helping buffer against crop failures.',
            'Sustainable Ecosystems: Restoring micro-biodiversity in farming landscapes controls soil erosion and supports native insect and bird populations.'
          ]
        },
        {
          type: 'blockquote',
          text: '“Soil organic carbon is the true metric of agricultural wealth. Carbon credits translate this biological wealth into actual cash flows for our smallholder farmers.”'
        },
        {
          type: 'heading',
          text: 'Verification and Aggregation Challenges'
        },
        {
          type: 'paragraph',
          text: 'The primary bottleneck is the fragmentation of land holdings in India. The average farm size is under 2 hectares, making individual certification cost-prohibitive. Agri-tech consortiums and cooperatives are step-changing this process by aggregating thousands of small farms under a single programmatic project, utilizing satellite imaging and IoT sensors to track soil health parameters efficiently.'
        },
        {
          type: 'heading',
          text: 'Conclusion'
        },
        {
          type: 'paragraph',
          text: 'Empowering smallholder farmers with access to carbon markets bridges the gap between environmental responsibility and rural prosperity. Over the next decade, carbon farming will transition from a niche pilot system into a mainstream agricultural practice, securing both food supplies and farm incomes.'
        }
      ]
    },
    {
      id: 3,
      date: '06-Jul-2025',
      author: 'Director\'s Desk',
      readTime: '7 min read',
      category: 'Industrial Innovation',
      title: 'Can Coal-to-PVC Unlock a Greener Future for a Necessary Evil?',
      summary: 'As PVC demand surges in infrastructure, coal-based carbide pathways are under scrutiny. We analyze the technology, economic viability, and carbon footprint reduction strategies.',
      image: blogIndustrial,
      content: [
        {
          type: 'paragraph',
          text: 'Polyvinyl Chloride (PVC) is an essential polymer used extensively in manufacturing pipes, window frames, medical tubes, and electrical cable insulations. With domestic demand scaling rapidly alongside India’s housing and water infrastructure initiatives, establishing a reliable and sustainable PVC supply chain is of paramount industrial importance.'
        },
        {
          type: 'heading',
          text: 'The Calcium Carbide Technology'
        },
        {
          type: 'paragraph',
          text: 'Due to domestic oil and gas limitations, the traditional ethylene-based PVC process relies heavily on imported petrochemical feeds. The coal-based calcium carbide route offers an alternative chemical pathway. It involves reacting coke and quicklime in electric furnaces to produce calcium carbide, which is then hydrolyzed to form acetylene gas. Chlorinating acetylene creates Vinyl Chloride Monomer (VCM), the precursor to PVC.'
        },
        {
          type: 'list',
          items: [
            'Reducing Import Dependence: Utilizes domestic non-coking coal resources, bypassing expensive imported ethylene derivatives.',
            'Industrial Integration: Carbide slag (calcium hydroxide byproduct) can be channeled directly into cement plants as an raw material, enabling a circular economy.',
            'Supply Stability: Decouples infrastructure material pricing from volatile crude oil benchmarks.'
          ]
        },
        {
          type: 'blockquote',
          text: '“Securing domestic material production is vital for our infrastructural independence. Our focus must be on applying green engineering upgrades to these highly critical coal-to-chemical pathways.”'
        },
        {
          type: 'heading',
          text: 'Mitigating Environmental Footprints'
        },
        {
          type: 'paragraph',
          text: 'The calcium carbide furnace process is inherently energy-intensive and carbon-heavy. To make this process viable under modern sustainability frameworks, plants must implement state-of-the-art technological retrofits. This includes installing waste heat recovery (WHR) boilers, transitioning to clean renewable energy sources to power electric arc furnaces, and capturing carbon dioxide directly from the lime calcination kilns.'
        },
        {
          type: 'heading',
          text: 'Summary'
        },
        {
          type: 'paragraph',
          text: 'Coal-to-PVC is a complex double-edged sword. While it secures raw material pipelines for essential infrastructure, it demands strict regulatory oversight and continuous investment in emission reduction technologies. Through closed-loop industrial clusters, PVC production can align closer with our sustainable development goals.'
        }
      ]
    }
  ];

  const featuredBlog = blogs[0];
  const currentBlog = blogs.find((b) => b.id === activeBlogId);

  return (
    <div className="w-full flex flex-col bg-white text-left text-brand-dark">
      {/* Banner Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-[#009DE1] via-[#006FA0] to-[#003E5C] overflow-hidden flex items-center">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center relative z-10">
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
              {activeBlogId !== null ? 'Insights & Analysis' : 'Director\'s Corner'}
            </h1>

            <div className="text-white/80 text-xs sm:text-sm font-semibold tracking-wider mt-3 flex items-center gap-2">
              <button
                onClick={() => {
                  setActiveBlogId(null);
                  setCurrentPage('home');
                }}
                className="hover:text-white transition-colors cursor-pointer outline-none bg-transparent border-none p-0"
              >
                Home
              </button>
              <span className="text-white/40">/</span>
              {activeBlogId !== null ? (
                <>
                  <button
                    onClick={() => setActiveBlogId(null)}
                    className="hover:text-white transition-colors cursor-pointer outline-none bg-transparent border-none p-0"
                  >
                    Blogs
                  </button>
                  <span className="text-white/40">/</span>
                  <span className="text-white truncate max-w-[200px] sm:max-w-xs inline-block align-bottom">
                    {currentBlog?.title}
                  </span>
                </>
              ) : (
                <span className="text-white">Blogs</span>
              )}
            </div>
          </div>

          <div className="hidden md:block select-none pointer-events-none transform translate-x-4">
            <BookOpen className="w-36 h-36 lg:w-44 lg:h-44 text-white opacity-[0.09]" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"></div>
      </section>

      {/* Main Content Area */}
      {activeBlogId !== null && currentBlog ? (
        /* ==================== BLOG DETAIL VIEW ==================== */
        <article className="w-full relative py-12 sm:py-20 bg-white">
          {/* Scroll progress bar */}
          <div
            className="fixed top-0 left-0 h-1 bg-brand-yellow z-50 transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Back Button */}
            <button
              onClick={() => setActiveBlogId(null)}
              className="inline-flex items-center gap-2 text-[#009DE1] hover:text-[#009DE1]/80 font-bold text-sm mb-8 transition-colors cursor-pointer group bg-transparent border-none p-0"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </button>

            {/* Title Metadata Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                <span className="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  {currentBlog.date}
                </span>
                <span className="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  {currentBlog.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark leading-tight tracking-tight font-sans mb-6">
                {currentBlog.title}
              </h1>

              {/* Author Row */}
              <div className="flex items-center justify-between border-y border-slate-100 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#009DE1] to-[#006FA0] flex items-center justify-center text-white font-bold text-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-brand-dark font-sans leading-none">{currentBlog.author}</h5>
                    <span className="text-slate-400 text-xs font-medium">Shree Industries</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand-blue font-bold py-2 px-3 border border-slate-200 rounded-full hover:border-brand-blue/30 transition-all cursor-pointer bg-transparent"
                  title="Share Article"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-[24px] overflow-hidden mb-10 shadow-lg aspect-video max-h-[480px]">
              <img
                src={currentBlog.image}
                alt={currentBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rich Content Renderer */}
            <div className="prose prose-slate max-w-none font-sans text-slate-600 leading-relaxed space-y-6 sm:space-y-8 text-left">
              {currentBlog.content.map((block, idx) => {
                switch (block.type) {
                  case 'paragraph':
                    return (
                      <p key={idx} className="text-sm sm:text-base md:text-[17px] leading-relaxed">
                        {block.text}
                      </p>
                    );
                  case 'heading':
                    return (
                      <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#003E5C] mt-8 pt-4 font-sans tracking-tight leading-snug">
                        {block.text}
                      </h3>
                    );
                  case 'blockquote':
                    return (
                      <blockquote key={idx} className="border-l-4 border-brand-yellow bg-slate-50 rounded-r-xl p-5 sm:p-6 my-6 italic text-brand-dark font-semibold text-sm sm:text-base">
                        {block.text}
                      </blockquote>
                    );
                  case 'list':
                    return (
                      <ul key={idx} className="space-y-3 sm:space-y-4 my-6 list-none pl-0">
                        {block.items?.map((item, itemIdx) => {
                          const [boldText, ...restText] = item.split(':');
                          return (
                            <li key={itemIdx} className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0 mt-2"></span>
                              <span className="text-sm sm:text-[15px]">
                                {restText.length > 0 ? (
                                  <>
                                    <strong className="text-brand-dark font-semibold font-sans">{boldText}:</strong>
                                    {restText.join(':')}
                                  </>
                                ) : (
                                  item
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={() => setActiveBlogId(null)}
                className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-blue font-bold text-sm transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Share:</span>
                <div className="flex items-center gap-2">
                  {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                    <button
                      key={platform}
                      onClick={() => alert(`Shared on ${platform}`)}
                      className="px-3.5 py-1.5 text-xs text-slate-600 hover:text-brand-blue border border-slate-200 hover:border-brand-blue/30 rounded-full font-bold transition-all cursor-pointer bg-transparent"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      ) : (
        /* ==================== BLOG LISTINGS VIEW ==================== */
        <div className="w-full py-12 sm:py-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Featured Post Card (Hero layout) */}
            {featuredBlog && (
              <div className="mb-12 sm:mb-16">
                <div className="flex flex-col items-center gap-2 mb-4">
                  <div className="flex items-center gap-2 self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">
                      Featured Article
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:shadow-xl transition-all duration-300">
                  {/* Image Column */}
                  <div className="lg:col-span-7 h-[300px] sm:h-[400px] relative overflow-hidden">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between items-start text-left bg-white">
                    <div>
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {featuredBlog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {featuredBlog.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-tight tracking-tight mb-4 group-hover:text-[#009DE1] transition-colors font-sans">
                        {featuredBlog.title}
                      </h3>

                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {featuredBlog.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveBlogId(featuredBlog.id)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#009DE1] hover:bg-[#009DE1]/90 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none"
                    >
                      Read Full Article
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  {/* Top card block */}
                  <div className="relative">
                    <div className="h-56 relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="p-6 text-left">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {blog.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-bold text-brand-dark leading-snug tracking-tight mb-3 group-hover:text-brand-blue transition-colors font-sans line-clamp-2">
                        {blog.title}
                      </h4>

                      {/* Summary */}
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {blog.summary}
                      </p>
                    </div>
                  </div>

                  {/* Bottom card button block */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setActiveBlogId(blog.id)}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#009DE1] hover:bg-[#009DE1]/90 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-none"
                    >
                      Read More
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
