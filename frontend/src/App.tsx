import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import HeroSlider from './components/home/HeroSlider';
import AboutUs from './components/home/AboutUs';
import ProductShowcase, { productsData } from './components/home/ProductShowcase';
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
    if (path.startsWith('/products')) {
      return 'products';
    }
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
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/products')) {
      const parts = path.split('/');
      if (parts[2]) {
        return decodeURIComponent(parts[2]).replace(/-/g, ' ');
      }
    }
    return 'All Products';
  });
  const [selectedProductId, setSelectedProductId] = useState<number | null>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/products')) {
      const parts = path.split('/');
      if (parts[3]) {
        return parseInt(parts[3], 10) || null;
      }
    }
    return null;
  });
  const [scrollToContactForm, setScrollToContactForm] = useState(false);

  // Automatically scroll to the top of the viewport when changing page routes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  // Synchronize browser history and update dynamic category/product-wise SEO Metadata (including geo-based keywords)
  useEffect(() => {
    const pageToPath: Record<string, string> = {
      home: '/',
      about: '/about',
      products: '/products',
      infrastructure: '/infrastructure',
      quality: '/quality',
      blogs: '/blogs',
      contact: '/contact'
    };
    let targetPath = pageToPath[currentPage] || '/';
    
    // Build sub-paths for products (pure URL pathnames)
    if (currentPage === 'products') {
      if (selectedCategory && selectedCategory !== 'All Products') {
        targetPath += '/' + encodeURIComponent(selectedCategory.replace(/\s+/g, '-'));
        if (selectedProductId) {
          targetPath += '/' + selectedProductId;
        }
      } else if (selectedProductId) {
        const product = productsData.find(p => p.id === selectedProductId);
        const cat = product ? product.category : 'General';
        targetPath += '/' + encodeURIComponent(cat.replace(/\s+/g, '-')) + '/' + selectedProductId;
      }
    }

    if (window.location.pathname !== targetPath || window.location.search || window.location.hash) {
      window.history.pushState({}, '', targetPath);
    }

    const seoMap: Record<string, { title: string; desc: string; image: string }> = {
      home: {
        title: "Shree Industries | Premium Electrical Switchgears & Sheet Metal Fabrication Rajkot",
        desc: "Shree Industries is a leading manufacturer of premium electrical switchgears, kit-kat fuses, industrial plugs, sockets, and custom sheet metal fabrication in Rajkot, Gujarat. ISO 9001:2015 certified.",
        image: "/seo-about.png"
      },
      about: {
        title: "About Us | Shree Industries - Electrical Manufacturing Pioneers",
        desc: "Learn about Shree Industries, a trusted name with 18+ years of manufacturing excellence in Rajkot, Gujarat. Discover our history, team, quality values, and certification standards.",
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

    const categorySeoMap: Record<string, { title: string; desc: string; keywords: string }> = {
      'Switch Gear': {
        title: "Switchgear Manufacturers in Rajkot, Gujarat | Shree Industries",
        desc: "Looking for reliable Switchgear manufacturers in Rajkot, Gujarat, India? Shree Industries manufactures high-durability electrical changeover and limit switches built for heavy-duty industrial environments.",
        keywords: "switchgear manufacturers rajkot, industrial changeover switches gujarat, electrical limit switches india, shree industries switchgears"
      },
      'Porcelain Kit Kat Fuse': {
        title: "Porcelain Kit Kat Fuses Suppliers in Gujarat, India | Shree Industries",
        desc: "Shree Industries is a premium supplier of Porcelain Kit Kat Fuses in Rajkot, Gujarat. Our kit-kat fuses offer superior insulation, high current ratings, and strict safety compliance.",
        keywords: "porcelain kit kat fuse rajkot, kit kat fuse supplier gujarat, ceramic electrical fuse india, shree industries fuses"
      },
      'Industrial Plug & Socket': {
        title: "Industrial Plugs & Sockets Manufacturer Rajkot | Shree Industries",
        desc: "Discover heavy-duty industrial plugs and sockets by Shree Industries. Manufactured in Rajkot, Gujarat, matching international safety standards for reliable factory power supply.",
        keywords: "industrial plug and socket manufacturer rajkot, heavy duty industrial sockets gujarat, electrical power plugs india, industrial switchgears"
      },
      'SPN Metal MCB Distribution Board': {
        title: "SPN Metal MCB Distribution Boards Rajkot | Shree Industries",
        desc: "Purchase top-grade Single Pole & Neutral (SPN) metal MCB distribution boards from Shree Industries, Rajkot, Gujarat. Perfect powder coated sheet metal designs.",
        keywords: "spn metal distribution board rajkot, mcb board manufacturer gujarat, spn enclosure factory india, sheet metal db boards"
      },
      'TPN Metal MCB Distribution Board': {
        title: "TPN Metal MCB Distribution Board Manufacturer Gujarat | Shree Industries",
        desc: "Shree Industries manufactures TPN (Triple Pole & Neutral) metal MCB distribution boards in Rajkot, India. High heat dissipation, premium durability certifications.",
        keywords: "tpn metal distribution board rajkot, tpn mcb box gujarat, 3 phase distribution board manufacturers india, shree industries"
      },
      'Junction Board': {
        title: "Industrial Electrical Junction Boards Rajkot | Shree Industries",
        desc: "Premium quality electrical junction boards manufactured by Shree Industries in Rajkot, Gujarat. Custom size modifications and sheet metal powder coating options.",
        keywords: "junction board manufacturer rajkot, industrial electrical boxes gujarat, wire junction enclosure india, custom sheet metal boxes"
      },
      'Industrial Socket Board': {
        title: "Industrial Socket Boards Manufacturers Rajkot Gujarat | Shree Industries",
        desc: "Buy safe and durable industrial socket boards from Shree Industries. Precision manufactured in Kothariya, Rajkot with shockproof enclosures and pre-wired layouts.",
        keywords: "industrial socket board rajkot, pre wired socket boards gujarat, heavy duty socket assembly india, shree industries"
      },
      'Metal Socket + MCB Board': {
        title: "Metal Socket with MCB Boards Suppliers Rajkot | Shree Industries",
        desc: "Premium metal socket board panels equipped with MCB protection, engineered by Shree Industries, Rajkot, Gujarat. Built for heavy electrical machines.",
        keywords: "metal socket mcb board rajkot, mcb protected sockets gujarat, industrial metal socket enclosure india, shree industries"
      },
      'PVC Socket + MCB Board': {
        title: "PVC Socket + MCB Protection Boards Rajkot | Shree Industries",
        desc: "Explore lightweight and chemical resistant PVC socket boards with integrated MCBs manufactured in Rajkot, Gujarat by Shree Industries.",
        keywords: "pvc socket board with mcb rajkot, plastic socket board manufacturer gujarat, chemical resistant pvc electrical boxes india"
      },
      'IP67 PVC Socket + MCB Board': {
        title: "IP67 Waterproof PVC Socket Boards Rajkot | Shree Industries",
        desc: "High-grade IP67 dustproof and waterproof PVC socket boards with MCBs by Shree Industries, Rajkot, Gujarat. Ideal for outdoor construction and wet environments.",
        keywords: "ip67 waterproof socket board rajkot, outdoor pvc electrical board gujarat, weather resistant socket boxes india"
      },
      'Metal Push Button Board': {
        title: "Metal Push Button Stations & Boards Rajkot | Shree Industries",
        desc: "Shree Industries designs and manufactures custom metal push button control boards and station enclosures in Rajkot, Gujarat. CNC machined sheet metal panels.",
        keywords: "metal push button board rajkot, industrial control stations gujarat, push button enclosure manufacturers india"
      },
      'Bus Bar Chamber': {
        title: "Copper & Aluminum Bus Bar Chambers Rajkot | Shree Industries",
        desc: "Leading manufacturer of high-ampere copper and aluminum bus bar chambers in Rajkot, Gujarat. Shree Industries offers CPRI tested phase distribution layouts.",
        keywords: "bus bar chamber manufacturers rajkot, copper busbar chamber gujarat, heavy electrical distribution chamber india"
      },
      'AC Box Metal Enclosure': {
        title: "AC Box Metal Enclosures Manufacturers Rajkot | Shree Industries",
        desc: "Heavy-duty sheet metal AC box enclosures manufactured in Rajkot, Gujarat. Premium paint finish, rustproof treatments, and universal air conditioner fits.",
        keywords: "ac box metal enclosure rajkot, sheet metal ac box gujarat, air conditioner metal cover india, electrical enclosures"
      }
    };

    let currentSeo = seoMap[currentPage] || seoMap.home;
    let targetKeywords = "shree industries, electrical switchgears, kit-kat fuses, distribution boards, rajkot manufacturer, gujarat electricals";

    // Dynamic resolution of category/product-specific details for search bots
    if (currentPage === 'products') {
      if (selectedProductId) {
        const product = productsData.find(p => p.id === selectedProductId);
        if (product) {
          currentSeo = {
            title: `${product.title} Manufacturer in Rajkot, Gujarat | Shree Industries`,
            desc: `High quality electrical ${product.title} manufactured by Shree Industries in Rajkot, Gujarat, India. Standard and custom options, safety certified.`,
            image: product.image
          };
          targetKeywords = `${product.title.toLowerCase()} manufacturer, electrical ${product.category.toLowerCase()} supplier gujarat, shree industries ${product.title.toLowerCase()}`;
        }
      } else if (selectedCategory && selectedCategory !== 'All Products' && categorySeoMap[selectedCategory]) {
        const catSeo = categorySeoMap[selectedCategory];
        currentSeo = {
          title: catSeo.title,
          desc: catSeo.desc,
          image: seoMap.products.image
        };
        targetKeywords = catSeo.keywords;
      }
    }

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

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', targetKeywords);

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
  }, [currentPage, selectedCategory, selectedProductId]);


  const handleHeaderNav = (
    page: 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs' | 'contact',
    blogId: number | null = null,
    scrollForm: boolean = false
  ) => {
    if (page === 'products') {
      setSelectedCategory('All Products');
    }
    setSelectedProductId(null);
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
                setSelectedProductId(null);
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
            selectedProductId={selectedProductId}
            setSelectedProductId={setSelectedProductId}
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
