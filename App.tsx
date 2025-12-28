
import React, { useEffect } from 'react';
import { Smartphone, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductGrid from './components/ProductGrid';
import PersonalCareSection from './components/PersonalCareSection';
import HomeAppliancesSection from './components/HomeAppliancesSection';
import ACSection from './components/ACSection';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MOBILE_PRODUCTS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    // Initial check for elements in view on load
    const handleInitialReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };
    handleInitialReveal();
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-white">
      <Header />
      
      <main>
        <Hero />

        <div className="reveal">
          <About />
        </div>

        <section id="mobiles" className="py-20 bg-white reveal">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center md:text-right">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">الهواتف الذكية</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 mt-2">عالم بين يديك</h2>
              <p className="text-slate-500 max-w-2xl md:mr-0">اكتشف أحدث الإصدارات من آبل وسامسونج، حيث تجتمع القوة مع الأناقة.</p>
            </div>
            <ProductGrid products={MOBILE_PRODUCTS} />
          </div>
        </section>

        <div className="reveal">
          <PersonalCareSection />
        </div>

        <div className="reveal">
          <HomeAppliancesSection />
        </div>

        <div className="reveal">
          <ACSection />
        </div>

        <div className="reveal">
          <WhyUs />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
      
      {/* WhatsApp Floating Button with Animation */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center whatsapp-pulse"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default App;
