
import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
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
import { MOBILE_PRODUCTS, CONTACT_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-white">
      <Header />
      
      <main>
        <Hero />

        <div className="reveal">
          <About />
        </div>

        <section id="mobiles" className="py-24 bg-white reveal">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center md:text-right">
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-4">الهواتف الذكية</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 mt-2 leading-tight">عالم بين يديك</h2>
              <p className="text-slate-500 max-w-2xl md:mr-0 text-lg">اكتشف أحدث الإصدارات من آبل وسامسونج، حيث تجتمع القوة مع الأناقة في تصاميم استثنائية.</p>
            </div>
            <div className="reveal">
              <ProductGrid products={MOBILE_PRODUCTS} />
            </div>
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
      
      {/* WhatsApp Floating Button - Scaled down for better UI integration */}
      <a 
        href={`https://wa.me/${CONTACT_DATA.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center whatsapp-pulse group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] sm:text-[10px] font-bold">1</span>
      </a>

      <style>{`
        .whatsapp-pulse {
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
      `}</style>
    </div>
  );
};

export default App;
