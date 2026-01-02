
import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, Sparkles, MoveLeft, ChevronRight, ChevronLeft } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200",  // Tech Lifestyle
  "https://i.pinimg.com/736x/8e/47/31/8e47318579d0592c90dd3a1bbe66580e.jpg", // Mobile Technology
  "https://i.pinimg.com/1200x/e1/22/34/e122343ac7ddb125851689e1fb05cc4a.jpg", // Smart Home Interior
  "https://i.pinimg.com/736x/95/51/db/9551dba43eb4c8373710ea21de06e204.jpg", // Personal Care & Beauty
  "https://i.pinimg.com/736x/f3/8d/50/f38d5021f6aa24cc82ed963d84c01678.jpg" // Modern AC & Cooling
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 mesh-gradient overflow-hidden">
      {/* Dynamic Animated Blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-400/20 rounded-full blur-[80px] animate-blob z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-sky-300/20 rounded-full blur-[100px] animate-blob z-0" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <div className="reveal inline-flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/60 px-5 py-2.5 rounded-full mb-8 shadow-sm">
              <Sparkles size={16} className="text-blue-600 animate-pulse" />
              <span className="text-blue-900 text-xs md:text-sm font-black tracking-widest">مستقبلك يبدأ هنا</span>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 leading-[1] mb-8">
                نمط حياة <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-blue-700 via-blue-500 to-sky-400">
                  أكثر ذكاءً
                  <svg className="absolute -bottom-4 left-0 w-full h-4 text-blue-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
            </div>
            
            <p className="reveal text-lg md:text-xl text-slate-600 mb-12 max-w-xl mx-auto lg:mr-0 lg:ml-auto leading-relaxed" style={{ transitionDelay: '200ms' }}>
              في سمارت سورس، ننتقي لك بعناية فائقة أحدث ما وصلت إليه التكنولوجيا لنجعل حياتك اليومية أسهل، أجمل، وأكثر كفاءة.
            </p>
            
            <div className="reveal flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6" style={{ transitionDelay: '300ms' }}>
              <a href="#mobiles" className="magnetic-button relative group overflow-hidden px-8 py-4 sm:px-12 sm:py-6 bg-slate-900 text-white rounded-[1.5rem] sm:rounded-[2rem] font-black text-base sm:text-xl transition-all shadow-2xl shadow-slate-900/20">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  تصفح المنتجات
                  <MoveLeft size={22} className="group-hover:-translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </a>
              <a href="#about" className="magnetic-button px-8 py-4 sm:px-12 sm:py-6 bg-white/80 backdrop-blur-md text-slate-900 border-2 border-slate-100 rounded-[1.5rem] sm:rounded-[2rem] font-black text-base sm:text-xl hover:border-blue-600 hover:bg-white transition-all flex items-center justify-center">
                تعرف علينا
              </a>
            </div>

            <div className="reveal mt-16 flex items-center justify-center lg:justify-start gap-10" style={{ transitionDelay: '400ms' }}>
               {[
                 { val: '+5k', label: 'عميل سعيد' },
                 { val: '+120', label: 'منتج ذكي' },
                 { val: '24/7', label: 'دعم فني' }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter">{stat.val}</span>
                    <span className="text-xs md:text-sm text-slate-400 font-bold mt-1">{stat.label}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 reveal-right" style={{ transitionDelay: '200ms' }}>
            <div className="relative z-10 max-w-lg mx-auto lg:max-w-none group">
              {/* Main Image Slider with perspective */}
              <div className="relative aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] overflow-hidden rounded-[3rem] md:rounded-[4.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white bg-slate-100">
                 {HERO_IMAGES.map((img, index) => (
                   <div 
                    key={img}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentImage ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-2'}`}
                   >
                    <img src={img} alt={`Smart Lifestyle ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                   </div>
                 ))}
                
                {/* Overlay Navigation Controls */}
                <div className="absolute bottom-8 right-8 flex items-center gap-3 z-30">
                  <button onClick={prevSlide} className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all active:scale-90">
                    <ChevronRight size={24} />
                  </button>
                  <button onClick={nextSlide} className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all active:scale-90">
                    <ChevronLeft size={24} />
                  </button>
                </div>

                {/* Dots indicator */}
                <div className="absolute bottom-10 left-10 flex gap-2 z-30">
                   {HERO_IMAGES.map((_, i) => (
                     <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImage ? 'bg-white w-10' : 'bg-white/40 w-2'}`}></div>
                   ))}
                </div>
              </div>
              
              {/* Enhanced Floating Widgets */}
              <div className="absolute -top-12 -left-8 bg-white/90 backdrop-blur-2xl p-6 rounded-[2.5rem] shadow-2xl border border-white/50 animate-float-y hidden md:block z-30">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-sky-400 rounded-3xl flex items-center justify-center text-white mb-4 shadow-xl shadow-blue-200">
                  <Smartphone size={28} />
                </div>
                <div className="text-slate-900 font-black text-lg mb-1 text-right">تكنولوجيا الغد</div>
                <div className="text-slate-500 text-xs text-right">أحدث الإصدارات الحصرية</div>
              </div>

              <div className="absolute -bottom-10 -right-4 bg-white/90 backdrop-blur-2xl p-6 rounded-[2.5rem] shadow-2xl border border-white/50 animate-float-x flex items-center gap-5 hidden md:flex z-30" style={{ animationDelay: '2s' }}>
                 <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Zap size={28} />
                 </div>
                 <div className="text-right">
                    <div className="text-slate-900 font-black text-lg">توفير ذكي</div>
                    <div className="text-slate-500 text-xs">تقنيات استدامة متطورة</div>
                 </div>
              </div>
            </div>

            {/* Glowing background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-blue-500/10 rounded-full -z-0 blur-[120px] animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
