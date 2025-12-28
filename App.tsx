
import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X, Phone, Mail, MessageCircle, ChevronLeft, ArrowLeft, ArrowRight } from 'lucide-react';
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
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="mobiles" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center md:text-right">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">الهواتف والإكسسوارات</h2>
              <p className="text-slate-500 max-w-2xl md:mr-0">اكتشف أحدث الهواتف الذكية والإكسسوارات الأصلية التي تواكب العصر.</p>
            </div>
            <ProductGrid products={MOBILE_PRODUCTS} />
          </div>
        </section>

        <section id="personal-care">
          <PersonalCareSection />
        </section>

        <section id="smart-home">
          <HomeAppliancesSection />
        </section>

        <section id="ac">
          <ACSection />
        </section>

        <section id="why-us">
          <WhyUs />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default App;
