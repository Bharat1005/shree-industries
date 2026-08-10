import { useState, useEffect } from 'react';
import { ArrowLeft, Mail, CheckCircle, Download, ShieldCheck, X, ArrowRight } from 'lucide-react';
import { productsData } from '../components/home/ProductShowcase';

interface ProductDetailPageProps {
  productId: number;
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'product-detail') => void;
}

export default function ProductDetailPage({ productId, setCurrentPage }: ProductDetailPageProps) {
  const product = productsData.find((p) => p.id === productId);

  // Form submission states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formQty, setFormQty] = useState('100');
  const [formModel, setFormModel] = useState('General Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Tab state
  const [activeTab, setActiveTab] = useState<'features' | 'models'>('features');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h2>
        <button
          onClick={() => setCurrentPage('products')}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-blue text-white rounded-lg font-semibold hover:-translate-y-0.5 transition-all duration-300 shadow-lg cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </button>
      </div>
    );
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shree_Product-Catalogue_2026.pdf';
    link.download = 'Shree_Product-Catalogue_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Inner Banner Section with brand blue theme gradient background */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#009DE1] via-[#006FA0] to-[#003E5C] overflow-hidden flex items-center">
        {/* Soft radial overlay glow */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-4">
          {/* Left Side: Title & Breadcrumbs */}
          <div className="text-left">
            <span className="text-white/80 font-bold text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mb-3 inline-block">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-sans mt-1">
              {product.title}
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
              <button 
                onClick={() => setCurrentPage('products')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Our Products
              </button>
              <span className="text-white/40">/</span>
              <span className="text-white truncate max-w-[200px] sm:max-w-xs">{product.title}</span>
            </div>
          </div>

          {/* Quick PDF Catalogue Download link */}
          <button
            onClick={triggerDownload}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-yellow text-brand-blue font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <Download className="w-4 h-4" /> Download Full Catalog
          </button>
        </div>

        {/* Diagonal border layout decoration at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"></div>
      </section>

      {/* Main Body Section */}
      <section className="pt-12 pb-4 sm:pt-16 sm:pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Link */}
        <button
          onClick={() => setCurrentPage('products')}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-blue text-xs font-bold uppercase tracking-wider mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products List
        </button>

        {/* Upper Segment: Image Showcase & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-4">
          
          {/* Left Column: Image Box & HSN Code (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="w-full aspect-[4/3] bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 flex items-center justify-center shadow-lg shadow-slate-100/50 relative">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 uppercase tracking-wide">
                HSN Code: {product.hsnCode}
              </span>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <h5 className="text-slate-800 font-bold text-xs uppercase tracking-wider mb-1">
                  Quality Guaranteed
                </h5>
                <p className="text-slate-500 text-xs leading-relaxed">
                  All components conform to standard industrial specifications and are ISO 9001:2015 certified for safety, durability, and heat resistance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Specs Tabs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-wider mb-2">
              Product Details
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-blue mb-4 tracking-tight">
              {product.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Details Navigation Tabs */}
            <div className="flex border-b border-slate-100 mb-6">
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'features'
                    ? 'border-brand-blue text-brand-blue'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Key Features
              </button>
              {product.models && product.models.length > 0 && (
                <button
                  onClick={() => setActiveTab('models')}
                  className={`pb-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'models'
                      ? 'border-brand-blue text-brand-blue'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Technical Specifications ({product.models.length})
                </button>
              )}
            </div>

            {/* Tab Contents */}
            {activeTab === 'features' ? (
              <div className="space-y-4">
                <p className="text-slate-500 text-xs sm:text-sm">
                  Our products are built in compliance with international guidelines, ensuring high dielectric strength, impact resistance, and long-term electrical safety.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                      <span className="w-2 h-2 rounded-full bg-[#00B7AC] shrink-0 mt-1.5"></span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Technical Specs Table inside Right Side Tab */
              <div className="space-y-4">
                <div className="overflow-x-auto border border-slate-100 rounded-2xl bg-slate-50/30">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                        <th className="py-3 px-4">Cat. No.</th>
                        <th className="py-3 px-4">Rating / Type</th>
                        {product.models.some((m) => m.poles) && <th className="py-3 px-4">Poles</th>}
                        {product.models.some((m) => m.volts) && <th className="py-3 px-4">Volts</th>}
                        {product.models.some((m) => m.pkg) && <th className="py-3 px-4">Pkg.</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.models.map((m) => (
                        <tr key={m.catNo} className="hover:bg-slate-100/50 transition-colors text-slate-700 font-medium">
                          <td className="py-2.5 px-4 font-bold text-brand-blue">{m.catNo}</td>
                          <td className="py-2.5 px-4">{m.type || m.rating || '-'}</td>
                          {product.models.some((m) => m.poles) && <td className="py-2.5 px-4">{m.poles || '-'}</td>}
                          {product.models.some((m) => m.volts) && <td className="py-2.5 px-4">{m.volts || '-'}</td>}
                          {product.models.some((m) => m.pkg) && <td className="py-2.5 px-4">{m.pkg || '-'}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Inquire Now CTA button */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#009DE1] hover:bg-[#009DE1]/90 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Inquire Now
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Modal Popup containing the Quotation Inquiry Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors duration-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Body */}
            <div className="p-8 sm:p-10 text-left bg-white flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-5">
                Quotation Inquiry Form
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Inquiring For */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase mb-1">
                        Inquiring For
                      </label>
                      <input
                        type="text"
                        disabled
                        value={product.title}
                        className="w-full px-3 py-2 border border-slate-200 bg-slate-50 rounded-lg text-slate-700 text-xs sm:text-sm font-semibold cursor-not-allowed"
                      />
                    </div>
                    
                    {/* Model selection */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Select Model / Rating *
                      </label>
                      <select
                        required
                        value={formModel}
                        onChange={(e) => setFormModel(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-brand-blue bg-white font-medium"
                      >
                        <option value="General Inquiry">General Inquiry (All Models)</option>
                        {product.models && product.models.map(m => (
                          <option key={m.catNo} value={m.catNo}>
                            {m.catNo} {m.rating ? `- ${m.rating}` : ''} {m.type ? `- ${m.type}` : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="Power Grid Corp"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

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
                    Thank you, <strong>{formName}</strong>. Your request for <strong>{product.title} ({formModel})</strong> has been logged. Our sales team will email you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSubmitted(false);
                    }}
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
    </div>
  );
}
