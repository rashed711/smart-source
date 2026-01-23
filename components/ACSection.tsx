
import React, { useState, useEffect } from 'react';
import { Wind, Snowflake, Zap, MoveLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { BRANDS } from '../constants';

const AC_IMAGES = [
  "https://smartsource-eg.com/images/hvac/001.jpg",
  "https://smartsource-eg.com/images/hvac/004.png",
  "https://smartsource-eg.com/images/hvac/003.png",
  "https://smartsource-eg.com/images/hvac/002.png"
];

const ACSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % AC_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % AC_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? AC_IMAGES.length - 1 : prev - 1));
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="ac" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 mb-32">
          
          {/* AC Image Slider Section - Enhanced Design */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
             {/* Background decorative shape */}
             <div className="absolute -z-10 w-full h-full bg-blue-50 rounded-[3rem] md:rounded-[4rem] rotate-3 scale-105"></div>
             
             <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] overflow-hidden bg-slate-100 z-10 border-4 border-white">
                {AC_IMAGES.map((img, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      index === currentImage ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 -rotate-1'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Modern AC Unit ${index + 1}`} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    {/* Subtle Overlay to make unit stand out */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                ))}

                {/* Slider Controls - Glassmorphism style */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
                  <button 
                    onClick={prevSlide} 
                    className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 text-slate-900 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all active:scale-90"
                    aria-label="Previous Slide"
                  >
                    <ChevronRight size={22} />
                  </button>
                  
                  <div className="flex gap-2 px-3 py-2 bg-slate-900/10 backdrop-blur-md rounded-full border border-white/20">
                    {AC_IMAGES.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === currentImage ? 'bg-blue-600 w-8' : 'bg-slate-400/50 w-1.5'
                        }`}
                      ></div>
                    ))}
                  </div>

                  <button 
                    onClick={nextSlide} 
                    className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 text-slate-900 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all active:scale-90"
                    aria-label="Next Slide"
                  >
                    <ChevronLeft size={22} />
                  </button>
                </div>

                {/* Corner Branding Tag */}
                <div className="absolute top-6 right-6 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg z-20">
                  Premium HVAC
                </div>
             </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-right order-1 lg:order-2">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs block mb-4">الراحة المنزلية</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">استمتع بجو مثالي <br /> طوال العام</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">نقدم أحدث أجهزة التكييف المنزلية من كبرى الشركات العالمية، مع ميزات توفير الطاقة والتحكم الذكي وتوزيع الهواء المتطور.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-right mb-12">
              <div className="p-7 rounded-[2.5rem] bg-blue-50/50 border border-blue-100 flex flex-col items-center lg:items-end group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Wind className="w-6 h-6 group-hover:animate-bounce" />
                </div>
                <h4 className="font-black text-slate-900 mb-2 text-xl">توزيع هواء ذكي</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">تغطية ذكية تصل لكل ركن في غرفتك بهدوء تام.</p>
              </div>
              <div className="p-7 rounded-[2.5rem] bg-blue-50/50 border border-blue-100 flex flex-col items-center lg:items-end group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Zap className="w-6 h-6 group-hover:animate-pulse" />
                </div>
                <h4 className="font-black text-slate-900 mb-2 text-xl">توفير الطاقة</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">توفير يصل إلى 60% في استهلاك الكهرباء.</p>
              </div>
            </div>

            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="magnetic-button inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-[1.5rem] sm:rounded-[2.5rem] font-black text-base sm:text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200"
            >
               احصل على عرض سعر
               <MoveLeft size={24} />
            </a>
          </div>
        </div>

        {/* Brand Logos - Enhanced Clarity */}
        <div className="reveal border-t border-slate-100 pt-24 pb-12">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">شركاء النجاح</span>
            <h3 className="text-2xl md:text-5xl font-black text-slate-900 leading-tight">وكلاء معتمدون لأكبر الماركات</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
            {BRANDS.map((brand) => (
              <div 
                key={brand.name} 
                className="flex items-center justify-center p-6 md:p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group cursor-default h-40 md:h-48"
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} Logo`} 
                    className="max-w-full max-h-full w-auto h-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <p className="text-slate-400 text-xs font-bold italic tracking-widest uppercase">Global Partners & Certified Distributors</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </section>
  );
};

export default ACSection;
