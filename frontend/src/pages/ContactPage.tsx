import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, HelpCircle, ChevronDown, CheckCircle, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs' | 'contact') => void;
  scrollToForm?: boolean;
  setScrollToForm?: (scroll: boolean) => void;
}

export default function ContactPage({ setCurrentPage, scrollToForm = false, setScrollToForm }: ContactPageProps) {
  // Form state variables
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Smooth scroll to form section if requested from header Quote button
  useEffect(() => {
    if (scrollToForm) {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (setScrollToForm) {
        setScrollToForm(false);
      }
    }
  }, [scrollToForm, setScrollToForm]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const faqData = [
    {
      q: "Where is your manufacturing facility located?",
      a: "Our state-of-the-art manufacturing facility is located at Plot No. 33, Sardar Industrial Area, Gondal Road, Kothariya, Rajkot, Gujarat, India."
    },
    {
      q: "What is your typical production lead time?",
      a: "Lead times depend on the design complexity and batch volume. Standard items like distribution boards or porcelain fuse sets are usually shipped within 7-10 days, while custom OEM sheet metal fabrication projects typically take 3-4 weeks."
    },
    {
      q: "Are Shree Industries products ISO certified?",
      a: "Yes, Shree Industries is an ISO 9001:2015 certified company. All switchgears, plugs, sockets, and distribution systems undergo strict quality inspections and dielectric strength testing before shipment."
    },
    {
      q: "Do you support international exports and shipping?",
      a: "Absolutely. We coordinates shipments directly to international ports. We handle standard custom documentation, heavy-duty export packaging, and freight coordination from major ports in Gujarat."
    }
  ];


  return (
    <div className="w-full flex flex-col bg-white">
      {/* Banner Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-[#009DE1] via-[#006FA0] to-[#003E5C] overflow-hidden flex items-center">
        {/* Soft light reflection */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center relative z-10">
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
              Contact Us
            </h1>
            
            {/* Breadcrumbs */}
            <div className="text-white/80 text-xs sm:text-sm font-semibold tracking-wider mt-3 flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage('home')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-white/40">/</span>
              <span className="text-white">Contact Us</span>
            </div>
          </div>

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
              <rect x="20" y="20" width="60" height="60" rx="4" />
              <line x1="20" y1="40" x2="80" y2="40" />
              <line x1="50" y1="40" x2="50" y2="80" />
              <circle cx="35" cy="60" r="4" />
              <circle cx="65" cy="60" r="4" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"></div>
      </section>

      {/* Main Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Call Support Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:shadow-xl hover:border-slate-200/80 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-3">Call Support</h3>
              <p className="text-xs text-slate-400 mb-4 max-w-[200px]">Speak to our manufacturing experts or sales desk.</p>
              <div className="space-y-1">
                <a href="tel:+919724346700" className="block text-sm font-bold text-brand-blue hover:text-brand-blue/80 transition-colors">+91 97243 46700</a>
                <a href="tel:+919913746700" className="block text-xs font-semibold text-slate-600 hover:text-brand-blue transition-colors">+91 99137 46700 (Office)</a>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:shadow-xl hover:border-slate-200/80 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-3">Email Inquiries</h3>
              <p className="text-xs text-slate-400 mb-4 max-w-[200px]">Send us your purchase orders or blueprints.</p>
              <div className="space-y-1">
                <a href="mailto:sales@shree-industries.co.in" className="block text-sm font-bold text-brand-blue hover:text-brand-blue/80 transition-colors">sales@shree-industries.co.in</a>
                <a href="mailto:shreenileshpatel@yahoo.in" className="block text-xs font-semibold text-slate-600 hover:text-brand-blue transition-colors">shreenileshpatel@yahoo.in</a>
              </div>
            </div>

            {/* Factory Address Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:shadow-xl hover:border-slate-200/80 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-3">Office Address</h3>
              <p className="text-xs text-slate-400 mb-3 max-w-[200px]">Visit our headquarters showroom & office.</p>
              <span className="text-xs font-bold text-slate-700 leading-relaxed">
                22/30, Samrat Industrial Area,<br />
                Behind S.T. Workshop, Ambedkar Chowk,<br />
                Gondal Road, Rajkot - 360004, Gujarat, India
              </span>
            </div>
          </div>

          {/* Form & Map Embed Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Contact Inquiry Form Panel (7 columns) */}
            <div id="contact-form" className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-lg shadow-slate-200/40 text-left flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#00B7AC] uppercase tracking-wider block mb-1">
                  Online Inquiry Desk
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-6 font-sans">
                  Send Us A Message
                </h2>

                {!isSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formCompany}
                          onChange={(e) => setFormCompany(e.target.value)}
                          placeholder="Power Distribution Corp"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    {/* Message Details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Requirements Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Please specify ratings, sheet thickness, quantities or customization drawings..."
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-blue resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#009DE1] hover:bg-[#008CC9] disabled:bg-slate-300 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-brand-blue/15 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-none"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  /* Success Notice Block */
                  <div className="flex flex-col items-center justify-center text-center p-8 space-y-6 animate-in fade-in duration-300">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                      Thank You for Contacting Us!
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md">
                      Hello <strong>{formName}</strong>, your message has been received. Our sales coordinators will analyze your request and email you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormName('');
                        setFormEmail('');
                        setFormPhone('');
                        setFormCompany('');
                        setFormMessage('');
                      }}
                      className="px-6 py-2.5 border border-slate-200 hover:border-slate-300 text-slate-600 font-bold rounded-lg text-xs uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 cursor-pointer bg-transparent"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Google Map Box (5 columns) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-100 shadow-lg shadow-slate-200/40 flex flex-col justify-between">
              <div className="h-full flex flex-col justify-between gap-6">
                <div>
                  <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-wider block mb-1 text-left">
                    Factory Map Location
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-4 text-left font-sans">
                    Find Us On Google Maps
                  </h3>
                  
                  {/* Styled Map Container */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative z-10 bg-slate-50">
                    <iframe
                      title="Shree Industries Location"
                      src="https://maps.google.com/maps?q=Shree%20Industries,%20Samrat%20Industrial%20Area,%20Ambedkar%20Chowk,%20Gondal%20Road,%20Rajkot,%20Gujarat%20360004&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-none"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-start gap-4 text-left">
                  <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-800 font-bold text-xs uppercase tracking-wider mb-1">
                      Business Hours
                    </h5>
                    <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
                      Monday - Saturday: 09:00 AM - 06:00 PM IST<br />
                      Sunday: Closed (Weekly Holiday)
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Accordion FAQ Segment */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold text-[#00B7AC] uppercase tracking-wider block mb-1">
              FAQ Helpdesk
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight font-sans">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200/60 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left cursor-pointer outline-none select-none font-sans"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-brand-blue shrink-0" />
                      <span className="text-sm font-bold text-slate-800 leading-tight">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180 text-brand-blue' : ''
                      }`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[200px] border-t border-slate-200/50' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 py-5 bg-white text-left">
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificates banner at bottom */}
      <section className="bg-slate-50 py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-slate-600 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
              <span>ISO 9001:2015 Registered</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
              <span>Make In India Quality</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
              <span>CPRI Pre-Tested standard</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
