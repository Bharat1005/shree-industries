import Header from './components/layout/Header';
import HeroSlider from './components/home/HeroSlider';
import AboutUs from './components/home/AboutUs';
import ProductShowcase from './components/home/ProductShowcase';
import Sectors from './components/home/Sectors';
import GlobalPresence from './components/home/GlobalPresence';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        <HeroSlider />
        <AboutUs />
        <ProductShowcase />
        <Sectors />
        <GlobalPresence />
      </main>
      <Footer />
    </div>
  );
}

export default App;
