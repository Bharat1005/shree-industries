import { useState } from 'react';
import { Phone, Mail, Award, FileText, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import DownloadCatalogueModal from '../common/DownloadCatalogueModal';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-xs sm:text-sm py-2 px-4 w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-brand-yellow">
              <Award size={16} />
              <span className="text-white">ISO 9001:2015 Certified Company</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-brand-yellow">
              <Award size={16} />
              <span className="text-white">25+ Years of Manufacturing Excellence</span>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="tel:+919723456789" className="flex items-center gap-1.5 text-brand-yellow hover:text-white transition-colors">
              <Phone size={14} />
              <span className="text-white hover:text-brand-yellow">+91 97234 56789</span>
            </a>
            <a href="mailto:sales@shree-industries.co.in" className="flex items-center gap-1.5 text-brand-yellow hover:text-white transition-colors">
              <Mail size={14} />
              <span className="text-white hover:text-brand-yellow">sales@shree-industries.co.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img 
                src="https://shree-industries.co.in/images/shree_switch_logo.png" 
                alt="Shree Switch Gear Logo" 
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-brand-blue font-bold text-sm border-b-2 border-brand-yellow pb-1">HOME</a>
            <a href="#" className="text-brand-dark hover:text-brand-blue font-semibold text-sm transition-colors">ABOUT US</a>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-brand-dark hover:text-brand-blue font-semibold text-sm transition-colors pb-1">
                PRODUCTS <ChevronDown size={14} className={`transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-md border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${isProductsDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightblue hover:text-brand-blue">Switches</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightblue hover:text-brand-blue">MCBs & RCCBs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightblue hover:text-brand-blue">Distribution Boards</a>
              </div>
            </div>

            <a href="#" className="text-brand-dark hover:text-brand-blue font-semibold text-sm transition-colors">INFRASTRUCTURE</a>
            <a href="#" className="text-brand-dark hover:text-brand-blue font-semibold text-sm transition-colors">QUALITY</a>
            <a href="#" className="text-brand-dark hover:text-brand-blue font-semibold text-sm transition-colors">BLOGS</a>
            <a href="#" className="text-brand-dark hover:text-brand-blue font-semibold text-sm transition-colors">CONTACT US</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setIsDownloadModalOpen(true)}
              className="flex items-center gap-2 border border-brand-dark text-brand-dark font-semibold text-sm px-4 py-2 rounded-sm hover:bg-brand-dark hover:text-white transition-colors"
            >
              <FileText size={16} />
              DOWNLOAD CATALOGUE
            </button>
            <a href="#" className="flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-yellow-500 transition-colors">
              GET A QUOTE
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg absolute w-full">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-brand-blue font-bold text-sm">HOME</a>
              <a href="#" className="text-brand-dark font-semibold text-sm">ABOUT US</a>
              
              <div className="flex flex-col gap-2">
                <button 
                  className="flex items-center justify-between text-brand-dark font-semibold text-sm"
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                >
                  PRODUCTS <ChevronDown size={16} className={`transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsDropdownOpen && (
                  <div className="pl-4 flex flex-col gap-2 border-l-2 border-brand-yellow ml-2 mt-1">
                    <a href="#" className="text-gray-600 text-sm">Switches</a>
                    <a href="#" className="text-gray-600 text-sm">MCBs & RCCBs</a>
                    <a href="#" className="text-gray-600 text-sm">Distribution Boards</a>
                  </div>
                )}
              </div>

              <a href="#" className="text-brand-dark font-semibold text-sm">INFRASTRUCTURE</a>
              <a href="#" className="text-brand-dark font-semibold text-sm">QUALITY</a>
              <a href="#" className="text-brand-dark font-semibold text-sm">BLOGS</a>
              <a href="#" className="text-brand-dark font-semibold text-sm">CONTACT US</a>
              
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="flex items-center justify-center gap-2 border border-brand-dark text-brand-dark font-semibold text-sm px-4 py-2 rounded-sm text-center"
                >
                  <FileText size={16} /> DOWNLOAD CATALOGUE
                </button>
                <a href="#" className="flex items-center justify-center gap-2 bg-brand-yellow text-brand-dark font-bold text-sm px-4 py-2 rounded-sm text-center">
                  GET A QUOTE <ArrowRight size={16} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      <DownloadCatalogueModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
