import { useState } from 'react';
import { Phone, Mail, Award, FileText, Menu, X, ArrowRight } from 'lucide-react';
import DownloadCatalogueModal from '../common/DownloadCatalogueModal';

interface HeaderProps {
  currentPage: 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs' | 'contact';
  setCurrentPage: (
    page: 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs' | 'contact',
    blogId?: number | null,
    scrollForm?: boolean
  ) => void;
}

const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs' | 'contact') => {
    setCurrentPage(page, null, false);
    setIsMobileMenuOpen(false);
  };

  const handleQuoteClick = () => {
    setCurrentPage('contact', null, true);
    setIsMobileMenuOpen(false);
  };

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
            <button
              onClick={() => handleNavClick('home')}
              className="flex-shrink-0 cursor-pointer outline-none"
            >
              <img
                src="https://shree-industries.co.in/images/shree_switch_logo.png"
                alt="Shree Switch Gear Logo"
                className="h-16 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm pb-1 transition-all cursor-pointer ${currentPage === 'home'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-yellow'
                  : 'text-brand-dark hover:text-brand-blue font-semibold'
                }`}
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm pb-1 transition-all cursor-pointer ${currentPage === 'about'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-yellow'
                  : 'text-brand-dark hover:text-brand-blue font-semibold'
                }`}
            >
              ABOUT US
            </button>

            <button
              onClick={() => handleNavClick('products')}
              className={`text-sm pb-1 transition-all cursor-pointer ${currentPage === 'products'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-yellow'
                  : 'text-brand-dark hover:text-brand-blue font-semibold'
                }`}
            >
              PRODUCTS
            </button>

            <button
              onClick={() => handleNavClick('infrastructure')}
              className={`text-sm pb-1 transition-all cursor-pointer ${currentPage === 'infrastructure'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-yellow'
                  : 'text-brand-dark hover:text-brand-blue font-semibold'
                }`}
            >
              INFRASTRUCTURE
            </button>
            <button
              onClick={() => handleNavClick('quality')}
              className={`text-sm pb-1 transition-all cursor-pointer ${currentPage === 'quality'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-yellow'
                  : 'text-brand-dark hover:text-brand-blue font-semibold'
                }`}
            >
              QUALITY
            </button>
            <button
              onClick={() => handleNavClick('blogs')}
              className={`text-sm pb-1 transition-all cursor-pointer ${currentPage === 'blogs'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-yellow'
                  : 'text-brand-dark hover:text-brand-blue font-semibold'
                }`}
            >
              BLOGS
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm pb-1 transition-all cursor-pointer ${currentPage === 'contact'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-yellow'
                  : 'text-brand-dark hover:text-brand-blue font-semibold'
                }`}
            >
              CONTACT US
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="flex items-center gap-2 border border-brand-dark text-brand-dark font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg hover:bg-brand-dark hover:text-white hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider"
            >
              <FileText size={16} />
              DOWNLOAD CATALOGUE
            </button>
            <button 
              onClick={handleQuoteClick}
              className="flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg hover:bg-yellow-500 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider shadow-lg shadow-brand-yellow/10 cursor-pointer border-none"
            >
              GET A QUOTE
              <ArrowRight size={16} />
            </button>
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
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left text-sm ${currentPage === 'home' ? 'text-brand-blue font-bold' : 'text-brand-dark font-semibold'}`}
              >
                HOME
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left text-sm ${currentPage === 'about' ? 'text-brand-blue font-bold' : 'text-brand-dark font-semibold'}`}
              >
                ABOUT US
              </button>

              <button
                onClick={() => handleNavClick('products')}
                className={`text-left text-sm ${currentPage === 'products' ? 'text-brand-blue font-bold' : 'text-brand-dark font-semibold'}`}
              >
                PRODUCTS
              </button>

              <button
                onClick={() => handleNavClick('infrastructure')}
                className={`text-left text-sm ${currentPage === 'infrastructure' ? 'text-brand-blue font-bold' : 'text-brand-dark font-semibold'}`}
              >
                INFRASTRUCTURE
              </button>
              <button
                onClick={() => handleNavClick('quality')}
                className={`text-left text-sm ${currentPage === 'quality' ? 'text-brand-blue font-bold' : 'text-brand-dark font-semibold'}`}
              >
                QUALITY
              </button>
              <button
                onClick={() => handleNavClick('blogs')}
                className={`text-left text-sm ${currentPage === 'blogs' ? 'text-brand-blue font-bold' : 'text-brand-dark font-semibold'}`}
              >
                BLOGS
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left text-sm ${currentPage === 'contact' ? 'text-brand-blue font-bold' : 'text-brand-dark font-semibold'}`}
              >
                CONTACT US
              </button>

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="flex items-center justify-center gap-2 border border-brand-dark text-brand-dark font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg text-center hover:bg-brand-dark hover:text-white hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider"
                >
                  <FileText size={16} /> DOWNLOAD CATALOGUE
                </button>
                <button 
                  onClick={handleQuoteClick}
                  className="flex items-center justify-center gap-2 bg-brand-yellow text-brand-dark font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg text-center hover:bg-yellow-500 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider shadow-lg shadow-brand-yellow/10 cursor-pointer border-none w-full"
                >
                  GET A QUOTE <ArrowRight size={16} />
                </button>
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
