import Header from './components/layout/Header';
import HeroSlider from './components/home/HeroSlider';
import AboutUs from './components/home/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        <HeroSlider />
        <AboutUs />
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;
