import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'about' | 'products') => void;
}

const Footer = ({ setCurrentPage }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    if (name === 'About Us') {
      e.preventDefault();
      setCurrentPage('about');
    } else if (name === 'Products') {
      e.preventDefault();
      setCurrentPage('products');
    } else if (href.startsWith('#')) {
      e.preventDefault();
      setCurrentPage('home');
      // Set scroll timeout to wait for home template rendering
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    }
  };

  return (
    <footer id="contact" className="w-full bg-transparent relative">
    <div className="w-full bg-white relative overflow-hidden border-t border-slate-100">
      {/* 2. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-slate-100 pb-12">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <a href="/" className="inline-block w-fit">
              <img 
                src="https://shree-industries.co.in/images/shree_switch_logo.png" 
                alt="Shree Switch Gear Logo" 
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Delivering high-quality LT control switches, rotary switches, enclosures, and distribution boards with safety, reliability, and innovation.
            </p>
          </div>

          {/* Column 2: Useful Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-bold text-base text-brand-blue tracking-wide">
              Useful Links
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: 'About Us', href: '#about-us' },
                { name: 'Products', href: '#products' },
                { name: 'Infrastructure', href: '#sectors' },
                { name: 'Quality', href: '#about-us' },
                { name: 'Blogs', href: '#blogs' },
                { name: 'Contact', href: '#contact' },
                { name: 'Privacy Policy', href: '#privacy' },
              ].map((link, idx) => (
                <li key={idx} className="flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></span>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.name, link.href)}
                    className="text-slate-600 text-sm font-medium hover:text-brand-blue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-bold text-base text-brand-blue tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4.5">
              <li className="flex items-start gap-3 group">
                <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <MapPin size={15} />
                </div>
                <span className="text-slate-600 text-sm font-medium leading-relaxed">
                  Plot No. 256, Behind Torrent Pharma, Ahmedabad-mehsana Highway, Village-chadasna, Mehsana, Gujarat-384450
                </span>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={14} />
                </div>
                <a 
                  href="tel:+919723456789"
                  className="text-slate-600 text-sm font-medium hover:text-brand-blue transition-colors"
                >
                  +91 97234 56789
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={14} />
                </div>
                <a 
                  href="mailto:sales@shree-industries.co.in"
                  className="text-slate-600 text-sm font-medium hover:text-brand-blue transition-colors break-all"
                >
                  sales@shree-industries.co.in
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock size={14} />
                </div>
                <span className="text-slate-600 text-sm font-medium">
                  Mon–Sat: 9:00 AM – 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons & Channels (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-bold text-base text-brand-blue tracking-wide">
              Follow Us
            </h4>
            <ul className="space-y-3.5">
              {[
                { 
                  name: 'Facebook', 
                  href: '#facebook',
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  ) 
                },
                { 
                  name: 'X (Twitter)', 
                  href: '#twitter',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ) 
                },
                { 
                  name: 'Instagram', 
                  href: '#instagram',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ) 
                },
                { 
                  name: 'LinkedIn', 
                  href: '#linkedin',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ) 
                },
                { 
                  name: 'YouTube', 
                  href: '#youtube',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ) 
                },
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href}
                    className="flex items-center gap-3 text-slate-600 text-sm font-medium hover:text-brand-blue transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-50 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. Copyright / Sign-off Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 font-medium relative z-10">
          <p>© {currentYear} Shree Industries. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with precision & passion
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
