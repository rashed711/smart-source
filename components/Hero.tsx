
import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, Sparkles, MoveLeft, ChevronRight, ChevronLeft } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1200", // Mobile Technology
  "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200", // Smart Home Interior
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200", // Personal Care & Beauty
  "https://images.unsplash.com/photo-1614359833899-63fafe025ee1?auto=format&fit=crop&q=80&w=1200", // Modern AC & Cooling
  "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200"  // Tech Lifestyle
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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-20 mesh-gradient overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-sky-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/80 px-4 py-2 rounded-full mb-8 shadow-sm reveal active">
              <Sparkles size={14} className="text-blue-600 animate-pulse" />
              <span className="text-blue-800 text-[10px] md:text-xs font-bold tracking-wider">مستقبلك يبدأ هنا</span>
            </div>
            
            <div className="overflow-hidden mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1]">
                نمط حياة <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-700 via-blue-500 to-sky-400">أكثر ذكاءً</span>
              </h1>
            </div>
            
            <p className="text-base md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mr-0 lg:ml-auto leading-relaxed">
              في سمارت سورس، ننتقي لك بعناية فائقة أحدث ما وصلت إليه التكنولوجيا لنجعل حياتك اليومية أسهل، أجمل، وأكثر كفاءة.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <a href="#mobiles" className="relative group overflow-hidden w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-200 block text-center">
                <span className="relative z-10 flex items-center justify-center gap-3 pointer-events-none">
                  تصفح المنتجات
                  <MoveLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a href="#about" className="w-full sm:w-auto px-10 py-5 bg-white/50 backdrop-blur-sm text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-white hover:border-blue-300 transition-all flex items-center justify-center block text-center">
                تعرف علينا
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
               {[
                 { val: '+5k', label: 'عميل سعيد' },
                 { val: '+120', label: 'منتج ذكي' },
                 { val: '24/7', label: 'دعم فني' }
               ].map((stat, i) => (
                 <React.Fragment key={i}>
                   <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-slate-900">{stat.val}</span>
                      <span className="text-[10px] md:text-xs text-slate-500">{stat.label}</span>
                   </div>
                   {i < 2 && <div className="h-8 w-px bg-slate-200"></div>}
                 </React.Fragment>
               ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative z-10 max-w-lg mx-auto lg:max-w-none group">
              {/* Image Slider Container */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] xl:aspect-[1.4/1] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-4 md:border-8 border-white bg-slate-100 group-hover:shadow-[0_48px_80px_-20px_rgba(37,99,235,0.2)] transition-shadow duration-700">
                 {HERO_IMAGES.map((img, index) => (
                   <div 
                    key={img}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                   >
                    <img 
                      src={img} 
                      alt={`Smart Lifestyle ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                   </div>
                 ))}
                
                {/* Overlay Controls */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                  <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
                    <ChevronRight size={20} />
                  </button>
                  <div className="flex gap-2">
                    {HERO_IMAGES.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white w-8' : 'bg-white/40 w-2'}`}
                      />
                    ))}
                  </div>
                  <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
                    <ChevronLeft size={20} />
                  </button>
                </div>
              </div>
              
              {/* Floating Widgets */}
              <div className="absolute -top-6 -left-4 md:-top-10 md:-left-10 bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-[2rem] shadow-2xl border border-white/50 animate-float hidden sm:block z-30">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg shadow-blue-200">
                  <Smartphone size={24} />
                </div>
                <div className="text-slate-900 font-bold text-sm md:text-base mb-1 text-right">تكنولوجيا الغد</div>
                <div className="text-slate-500 text-[10px] md:text-xs text-right">أحدث الإصدارات هنا.</div>
              </div>

              <div className="absolute -bottom-6 right-4 md:-bottom-10 md:right-10 bg-white/90 backdrop-blur-xl p-4 md:p-5 rounded-[2rem] shadow-2xl border border-white/50 animate-float flex items-center gap-4 hidden sm:flex z-30" style={{ animationDelay: '1.5s' }}>
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Zap size={20} />
                 </div>
                 <div className="text-right">
                    <div className="text-slate-900 font-bold text-sm md:text-base">توفير ذكي</div>
                    <div className="text-slate-500 text-[10px] md:text-xs">تقنيات موفرة للطاقة</div>
                 </div>
              </div>
            </div>

            {/* Decorative back-glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-blue-400/10 rounded-full -z-10 blur-[100px] animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
