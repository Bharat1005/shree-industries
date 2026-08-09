import React, { useState } from 'react';
import { X, FileText, Send } from 'lucide-react';

interface DownloadCatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadCatalogueModal: React.FC<DownloadCatalogueModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shree_Product-Catalogue_2026.pdf';
    link.download = 'Shree_Product-Catalogue_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      triggerDownload();
      
      // Reset after 6 seconds and close
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', company: '' });
        onClose();
      }, 6000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brand-blue p-5 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText size={24} className="text-brand-yellow" />
            <h2 className="text-xl font-bold">Download Catalogue</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
              <p className="text-gray-600 text-sm mb-4">
                Your download has started automatically.
              </p>
              <p className="text-gray-500 text-xs">
                If the download did not start,{' '}
                <a 
                  href="/Shree_Product-Catalogue_2026.pdf" 
                  download="Shree_Product-Catalogue_2026.pdf"
                  className="text-brand-blue font-bold hover:underline"
                >
                  click here to download manually
                </a>.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6 text-sm">
                Please fill out the form below to receive our latest product catalogue.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-500 text-brand-dark font-bold py-3 px-4 rounded-lg hover:-translate-y-0.5 transition-all duration-300 mt-6 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-brand-yellow/10"
                >
                  {isSubmitting ? 'Processing...' : (
                    <>
                      GET CATALOGUE <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadCatalogueModal;
