import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import HeroSlider from './components/home/HeroSlider';
import AboutUs from './components/home/AboutUs';
import ProductShowcase from './components/home/ProductShowcase';
import Sectors from './components/home/Sectors';
import GlobalPresence from './components/home/GlobalPresence';
import BlogSection from './components/home/BlogSection';
import Footer from './components/layout/Footer';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import InfrastructurePage from './pages/InfrastructurePage';
import QualityPage from './pages/QualityPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs' | 'contact'>(() => {
    const path = window.location.pathname;
    const pathToPage: Record<string, 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs' | 'contact'> = {
      '/': 'home',
      '/about': 'about',
      '/about-us': 'about',
      '/products': 'products',
      '/infrastructure': 'infrastructure',
      '/quality': 'quality',
      '/blogs': 'blogs',
      '/contact': 'contact',
      '/contact-us': 'contact'
    };
    return pathToPage[path] || 'home';
  });
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [scrollToContactForm, setScrollToContactForm] = useState(false);

  // Automatically scroll to the top of the viewport and update SEO Metadata when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    // Update URL query parameters to support search engine indexing
    const pageToPath: Record<string, string> = {
      home: '/',
      about: '/about',
      products: '/products',
      infrastructure: '/infrastructure',
      quality: '/quality',
      blogs: '/blogs',
      contact: '/contact'
    };
    const targetPath = pageToPath[currentPage] || '/';
    if (window.location.pathname !== targetPath || window.location.search || window.location.hash) {
      window.history.pushState({}, '', targetPath);
    }

    const seoMap: Record<string, { title: string; desc: string; image: string }> = {
      home: {
        title: "Shree Industries | Premium Electrical Switchgears & Sheet Metal Fabrication Rajkot",
        desc: "Shree Industries is a leading manufacturer of premium electrical switchgears, kit-kat fuses, industrial plugs, sockets, and custom sheet metal fabrication in Rajkot, Gujarat. ISO 9001:2015 certified.",
        image: "https://shree-industries.co.in/images/shree_switch_logo.png"
      },
      about: {
        title: "About Us | Shree Industries - Electrical Manufacturing Pioneers",
        desc: "Learn about Shree Industries, a trusted name with 25+ years of manufacturing excellence in Rajkot, Gujarat. Discover our history, team, quality values, and certification standards.",
        image: "/seo-about.png"
      },
      products: {
        title: "Electrical Switchgears & Distribution Products | Shree Industries",
        desc: "Explore our range of heavy-duty industrial plugs, sockets, kit-kat porcelain fuses, changeover switches, limit switches, and custom distribution boxes manufactured by Shree Industries.",
        image: "/seo-products.png"
      },
      infrastructure: {
        title: "Infrastructure & Precision Sheet Metal Machinery | Shree Industries",
        desc: "Take a tour of our state-of-the-art manufacturing facility in Rajkot, Gujarat, equipped with automatic powder coating plants, CNC bending, and advanced sheet metal tooling.",
        image: "/seo-infrastructure.png"
      },
      quality: {
        title: "Quality Control & CPRI Testing Standards | Shree Industries",
        desc: "Discover the quality assurance processes at Shree Industries. From CPRI pre-tested switchgear models to strict raw material audits and safety check systems.",
        image: "/seo-quality.png"
      },
      blogs: {
        title: "Industrial Electrical Insights & Industry Blog | Shree Industries",
        desc: "Read the latest guides and insights on industrial power distribution, electrical safety standards, sheet metal design, and energy efficiency solutions.",
        image: "/seo-blogs.png"
      },
      contact: {
        title: "Contact Us & Quotation Inquiry Desk | Shree Industries Rajkot",
        desc: "Get in touch with Shree Industries Rajkot. Send your custom metal fabrication inquiries, dealership requests, or product quotation requirements online.",
        image: "/seo-contact.png"
      }
    };

    const currentSeo = seoMap[currentPage] || seoMap.home;
    
    // Resolve absolute image URL path
    const targetImage = currentSeo.image.startsWith('http')
      ? currentSeo.image
      : window.location.origin + currentSeo.image;

    // Update document title
    document.title = currentSeo.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentSeo.desc);

    // Update Open Graph (OG) Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', currentSeo.title);

    // Update Open Graph (OG) Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', currentSeo.desc);

    // Update Open Graph (OG) Image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', targetImage);

    // Update Open Graph (OG) URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', window.location.href);

    // Update Twitter Title
    let twitterTitle = document.querySelector('meta[property="twitter:title"]') || document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('property', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', currentSeo.title);

    // Update Twitter Description
    let twitterDesc = document.querySelector('meta[property="twitter:description"]') || document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('property', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', currentSeo.desc);

    // Update Twitter Image
    let twitterImage = document.querySelector('meta[property="twitter:image"]') || document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('property', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', targetImage);

    // Update Twitter URL
    let twitterUrl = document.querySelector('meta[property="twitter:url"]') || document.querySelector('meta[name="twitter:url"]');
    if (!twitterUrl) {
      twitterUrl = document.createElement('meta');
      twitterUrl.setAttribute('property', 'twitter:url');
      document.head.appendChild(twitterUrl);
    }
    twitterUrl.setAttribute('content', window.location.href);
  }, [currentPage]);


  const handleHeaderNav = (
    page: 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs' | 'contact',
    blogId: number | null = null,
    scrollForm: boolean = false
  ) => {
    if (page === 'products') {
      setSelectedCategory('All Products');
    }
    if (page === 'blogs') {
      setSelectedBlogId(blogId);
    }
    setScrollToContactForm(scrollForm);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Navigation with routing handlers */}
      <Header 
        currentPage={currentPage === 'blogs' ? 'blogs' : currentPage} 
        setCurrentPage={handleHeaderNav as any} 
      />
      
      <main className="flex-grow flex flex-col w-full">
        {currentPage === 'home' && (
          <>
            <HeroSlider />
            <AboutUs />
            <ProductShowcase 
              onlyShowCategories={true}
              onCategoryClick={(category) => {
                setSelectedCategory(category);
                setCurrentPage('products');
              }}
            />
            <Sectors />
            <GlobalPresence />
            <BlogSection setCurrentPage={handleHeaderNav as any} />
          </>
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={handleHeaderNav as any} />
        )}
        {currentPage === 'products' && (
          <ProductsPage 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={handleHeaderNav as any} 
          />
        )}
        {currentPage === 'infrastructure' && (
          <InfrastructurePage setCurrentPage={handleHeaderNav as any} />
        )}
        {currentPage === 'quality' && (
          <QualityPage setCurrentPage={handleHeaderNav as any} />
        )}
        {currentPage === 'blogs' && (
          <BlogsPage 
            setCurrentPage={handleHeaderNav as any} 
            selectedBlogId={selectedBlogId}
            setSelectedBlogId={setSelectedBlogId}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage 
            setCurrentPage={handleHeaderNav as any} 
            scrollToForm={scrollToContactForm}
            setScrollToForm={setScrollToContactForm}
          />
        )}
      </main>

      {/* Footer Navigation with routing handlers */}
      <Footer setCurrentPage={handleHeaderNav as any} />
    </div>
  );
}

export default App;
