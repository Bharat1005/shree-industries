import { useState } from 'react';
import { Mail, X, CheckCircle, ArrowRight } from 'lucide-react';

// Import local assets
import switchgearImg from '../../assets/switchgear.png';
import fuseImg from '../../assets/porcelain_fuse.png';
import plugImg from '../../assets/industrial_plug.png';
import mcbBoardImg from '../../assets/mcb_distribution_board.png';

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
}

const categories = [
  'All Products',
  'Distribution Boards',
  'Plugs & Sockets',
  'Switchgears & Fuses',
  'Junctions & Push Buttons'
];

const productsData: Product[] = [
  {
    id: 1,
    title: 'Switch Gear',
    category: 'Switchgears & Fuses',
    image: switchgearImg,
    description: 'High-performance air break switchgears and electrical control panels engineered for heavy-duty commercial power distribution systems.',
    specs: ['Air Break System', '415V Rated Voltage', 'Heavy-Duty Steel Enclosure']
  },
  {
    id: 2,
    title: 'Porcelain Kit Kat Fuse',
    category: 'Switchgears & Fuses',
    image: fuseImg,
    description: 'Heavy-duty ceramic porcelain fuse cutouts with excellent thermal stability, high electrical resistance, and high-conductivity copper contact terminals.',
    specs: ['Premium Ceramic Base', 'Rewirable Fuse Carrier', 'Self-Aligning Contacts']
  },
  {
    id: 3,
    title: 'Industrial Plug & Socket',
    category: 'Plugs & Sockets',
    image: plugImg,
    description: 'Heavy-duty industrial plugs and connector sockets engineered to provide reliable and safe connections in demanding warehouse environments.',
    specs: ['IP44 / IP67 Rated', 'Impact Resistant Body', 'Self-Cleaning Pins']
  },
  {
    id: 4,
    title: 'SPN Metal MCB Distribution Board',
    category: 'Distribution Boards',
    image: mcbBoardImg,
    description: 'Single Pole and Neutral metal distribution boards constructed with high-grade galvanized metal and high-end powder coated finish for robust protection.',
    specs: ['Single Door / Double Door', 'Neutral & Earth Link Bars', 'Din Rail Mounted']
  },
  {
    id: 5,
    title: 'TPN Metal MCB Distribution Board',
    category: 'Distribution Boards',
    image: mcbBoardImg,
    description: 'Triple Pole and Neutral metal distribution boards engineered for multi-phase industrial machines and balanced high-load distribution setups.',
    specs: ['Multi-Phase Outlets', 'Reversible Door Openings', 'Segregated Neutral Links']
  },
  {
    id: 6,
    title: 'Junction Board',
    category: 'Junctions & Push Buttons',
    image: mcbBoardImg,
    description: 'Robust galvanized metal junction enclosures designed for clean wiring management, cable splicing, and protection in commercial buildings.',
    specs: ['Galvanized Sheet Metal', 'Pre-punched Knockouts', 'Dust & Splatter Protection']
  },
  {
    id: 7,
    title: 'Industrial Socket Board',
    category: 'Plugs & Sockets',
    image: plugImg,
    description: 'Fully wired and integrated socket assemblies fitted inside heavy-duty enclosures, ideal for high-power industrial machinery links.',
    specs: ['Pre-wired Setup', 'Heavy-Duty Sockets', 'Integrated MCB Safety']
  },
  {
    id: 8,
    title: 'Metal Socket + MCB Board',
    category: 'Plugs & Sockets',
    image: plugImg,
    description: 'Wall-mounted sheet metal distribution board combining high-capacity electrical sockets with quick-action miniature circuit breakers.',
    specs: ['Powder Coated Sheet Metal', 'Premium Earth Links', 'Short Circuit Protection']
  },
  {
    id: 9,
    title: 'PVC Socket + MCB Board',
    category: 'Plugs & Sockets',
    image: plugImg,
    description: 'High-impact thermoplastic PVC enclosure boards equipped with surface-mounted sockets and protection circuit switches.',
    specs: ['Flame Retardant PVC', 'Lightweight Design', 'Easy Surface Mounting']
  },
  {
    id: 10,
    title: 'IP67 PVC Socket + MCB Board',
    category: 'Plugs & Sockets',
    image: plugImg,
    description: 'Premium weatherproof IP67-rated PVC boards offering complete dust protection and sealing against high-pressure water jets.',
    specs: ['IP67 Waterproof Sealing', 'Chemical Resistant Housing', 'Outdoor Grade Durability']
  },
  {
    id: 11,
    title: 'Metal Push Button Board',
    category: 'Junctions & Push Buttons',
    image: mcbBoardImg,
    description: 'Heavy-duty control stations fitted with push button switches, indicators, and emergency stop components for industrial motor lines.',
    specs: ['Emergency Stop Switch', 'LED Status Indicators', 'Rugged Control Enclosure']
  }
];
interface ProductShowcaseProps {
  showHeader?: boolean;
}

const ProductShowcase = ({ showHeader = true }: ProductShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Form submission states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formQty, setFormQty] = useState('100');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredProducts = activeCategory === 'All Products'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsSubmitted(false);
    setFormName('');
    setFormEmail('');
    setFormPhone('');
    setFormCompany('');
    setFormQty('100');
    setFormMessage('');
  };

  return (
    <section className={`pb-20 sm:pb-24 bg-white w-full relative overflow-hidden ${showHeader ? 'pt-10 sm:pt-14' : 'pt-4 sm:pt-6'}`} id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        {showHeader && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="flex flex-col items-start text-left">
              <span className="self-start text-[#009DE1] font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-4">
                OUR PRODUCTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-brand-blue tracking-tight mb-4">
                Certified Electrical Solutions Engineered for Safety, Efficiency, and Long-Term Performance
              </h2>
            </div>
            <div className="text-left lg:border-l lg:border-slate-200 lg:pl-8 flex flex-col justify-center h-full">
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Explore our complete range of certified distribution boards, metal MCB enclosures, industrial plugs, sockets, and heavy-duty switchgears manufactured to meet global industrial standards.
              </p>
            </div>
          </div>
        )}

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-start items-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:border-slate-200 transition-all duration-300"
            >
              {/* Image Showcase Wrapper */}
              <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden border-b border-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-slate-900/5 text-slate-600 px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Text Description Box */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h4 className="text-base sm:text-lg font-semibold text-[#009DE1] font-sans tracking-tight mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {product.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-1 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Read More Trigger */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="text-brand-blue hover:text-brand-blue/80 text-[11px] sm:text-xs font-bold transition-colors inline-flex items-center gap-1 mb-4 self-start cursor-pointer"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </button>

                {/* Bullet Specifications */}
                <div className="border-t border-slate-100 pt-4 mb-5 space-y-2">
                  {product.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B7AC]"></span>
                      <span className="text-[10px] sm:text-xs font-medium text-slate-600">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Button - Triggers Modal popup */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 group-hover:bg-brand-blue group-hover:text-white text-slate-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 group/btn cursor-pointer hover:-translate-y-0.5"
                >
                  Inquire Now
                  <Mail className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form Modal Window Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]">
            
            {/* Modal Close Anchor */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors duration-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Box: Product Details Showcase */}
            <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 flex flex-col border-b md:border-b-0 md:border-r border-slate-100 md:overflow-y-auto">
              <span className="text-[10px] sm:text-xs font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4">
                {selectedProduct.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 font-sans tracking-tight mb-4">
                {selectedProduct.title}
              </h3>
              
              {/* Image Frame */}
              <div className="w-full aspect-[4/3] bg-white rounded-2xl border border-slate-100 p-6 flex items-center justify-center mb-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              {/* Bullet Specifications List */}
              <div className="space-y-3">
                <h5 className="text-slate-800 font-bold text-xs sm:text-sm tracking-wide uppercase font-sans">
                  Technical Specifications
                </h5>
                <ul className="space-y-2 list-none pl-0">
                  {selectedProduct.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#00B7AC] shrink-0"></span>
                      <span className="text-xs font-semibold text-slate-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Box: Inquiry Form Box */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center md:overflow-y-auto bg-white">
              {!isSubmitted ? (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-brand-blue tracking-tight">
                      Request a Quotation
                    </h4>
                    <p className="text-slate-500 text-xs mt-1">
                      Fill out the form below to receive pricing and availability details.
                    </p>
                  </div>

                  {/* Prefilled Product Field */}
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                      Inquiring For
                    </label>
                    <input
                      type="text"
                      disabled
                      value={selectedProduct.title}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold cursor-not-allowed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="Company Ltd"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Email */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+91 99999 99999"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  {/* Quantity Needed */}
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                      Estimated Order Quantity (Units) *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formQty}
                      onChange={(e) => setFormQty(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                      Requirements / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Please specify customization details or certifications required..."
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue resize-none"
                    />
                  </div>

                  {/* Action submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-brand-blue hover:bg-brand-blue/95 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-brand-blue/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Message State */
                <div className="flex flex-col items-center justify-center text-center p-6 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-2">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 tracking-tight">
                    Inquiry Submitted!
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                    Thank you, <strong>{formName}</strong>. Your request for <strong>{selectedProduct.title}</strong> has been logged. Our sales team will email you shortly.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2.5 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
