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

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs'>('home');
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  // Automatically scroll to the top of the viewport when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);


  const handleHeaderNav = (
    page: 'home' | 'about' | 'products' | 'infrastructure' | 'quality' | 'blogs',
    blogId: number | null = null
  ) => {
    if (page === 'products') {
      setSelectedCategory('All Products');
    }
    if (page === 'blogs') {
      setSelectedBlogId(blogId);
    }
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
      </main>

      {/* Footer Navigation with routing handlers */}
      <Footer setCurrentPage={handleHeaderNav as any} />
    </div>
  );
}

export default App;
