import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import HeroSlider from './components/home/HeroSlider';
import AboutUs from './components/home/AboutUs';
import ProductShowcase from './components/home/ProductShowcase';
import Sectors from './components/home/Sectors';
import GlobalPresence from './components/home/GlobalPresence';
import Footer from './components/layout/Footer';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products'>('home');

  // Automatically scroll to the top of the viewport when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Navigation with routing handlers */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow flex flex-col w-full">
        {currentPage === 'home' && (
          <>
            <HeroSlider />
            <AboutUs />
            <ProductShowcase />
            <Sectors />
            <GlobalPresence />
          </>
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'products' && (
          <ProductsPage setCurrentPage={setCurrentPage} />
        )}
      </main>

      {/* Footer Navigation with routing handlers */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
