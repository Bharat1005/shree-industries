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
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products' | 'product-detail'>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  // Automatically scroll to the top of the viewport when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const handleHeaderNav = (page: 'home' | 'about' | 'products') => {
    if (page === 'products') {
      setSelectedCategory('All Products');
    }
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Navigation with routing handlers */}
      <Header 
        currentPage={currentPage === 'product-detail' ? 'products' : currentPage} 
        setCurrentPage={handleHeaderNav} 
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
            <BlogSection setCurrentPage={handleHeaderNav} />
          </>
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={handleHeaderNav} />
        )}
        {currentPage === 'products' && (
          <ProductsPage 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={handleHeaderNav} 
            onProductClick={handleProductClick} 
          />
        )}
        {currentPage === 'product-detail' && selectedProductId !== null && (
          <ProductDetailPage productId={selectedProductId} setCurrentPage={setCurrentPage} />
        )}
      </main>

      {/* Footer Navigation with routing handlers */}
      <Footer setCurrentPage={handleHeaderNav} />
    </div>
  );
}

export default App;
