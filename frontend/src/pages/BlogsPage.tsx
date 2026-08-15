import { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Search,
  ArrowUpRight,
  Mail,
  BookOpen,
  User,
  Share2,
  CheckCircle,
  X
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [internalSelectedBlogId, setInternalSelectedBlogId] = useState<number | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  const categories = ['All', 'Energy & Biofuels', 'Climate & Farming', 'Industrial Innovation'];

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

  // Filtering blogs based on category and search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured blog (typically the first one, or most recent)
  const featuredBlog = blogs[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

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

          <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
                <span className="bg-[#E6F5FC] text-[#009DE1] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {currentBlog.category}
                </span>
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
            
            {/* Featured Post Card (Hero layout) - Displayed if no filter is active */}
            {selectedCategory === 'All' && searchQuery === '' && featuredBlog && (
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
                    <div className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                      {featuredBlog.category}
                    </div>
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

            {/* Filter and Search Section */}
            <div className="bg-white rounded-[24px] border border-slate-100 p-4 sm:p-6 shadow-sm mb-10 sm:mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Category Filters */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none scroll-smooth">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer border-none ${
                      selectedCategory === cat
                        ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm text-brand-dark pl-10 pr-10 py-2.5 rounded-full border border-slate-200/60 focus:border-brand-blue focus:outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 cursor-pointer bg-transparent border-none"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Article Count & Active Filter Indicator */}
            {(selectedCategory !== 'All' || searchQuery !== '') && (
              <div className="mb-6 flex justify-between items-center text-sm font-semibold text-slate-500">
                <p>
                  Found {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
                  {selectedCategory !== 'All' && <span> in "{selectedCategory}"</span>}
                  {searchQuery !== '' && <span> matching "{searchQuery}"</span>}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-brand-blue hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Articles Grid */}
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
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
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-blue font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                          {blog.category}
                        </div>
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
            ) : (
              <div className="bg-white rounded-[24px] border border-slate-100 p-12 text-center shadow-sm">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-brand-dark mb-1 font-sans">No Articles Found</h4>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  We couldn't find any articles matching your search filters. Try clearing your filters or query.
                </p>
              </div>
            )}

            {/* Newsletter Subscription Widget */}
            <div className="mt-16 sm:mt-24 relative overflow-hidden bg-gradient-to-r from-[#009DE1] via-[#006FA0] to-[#003E5C] rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row justify-between items-center gap-8 text-left">
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

              <div className="relative z-10 max-w-xl">
                <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                  Newsletter
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4 font-sans">
                  Stay Ahead of Sustainable Industrial Progress
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Join our professional subscriber list to receive monthly technical articles, corporate updates, and clean energy transition analyses from our director’s desk directly in your inbox.
                </p>
              </div>

              <div className="relative z-10 w-full lg:w-96 flex-shrink-0">
                {isSubscribed ? (
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-6 text-center text-white animate-fade-in flex flex-col items-center gap-2">
                    <CheckCircle className="w-10 h-10 text-brand-yellow" />
                    <h5 className="font-bold text-base font-sans">Thank you for subscribing!</h5>
                    <p className="text-xs text-white/80">You've successfully signed up to our monthly technical letters.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="Enter corporate email..."
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full bg-white text-brand-dark pl-11 pr-4 py-3 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-brand-yellow text-sm placeholder-slate-400 transition-all animate-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-brand-yellow hover:bg-yellow-500 text-brand-dark font-bold text-xs uppercase tracking-wider rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md cursor-pointer flex-shrink-0 border-none"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
