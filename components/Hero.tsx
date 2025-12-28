
import React from 'react';
import { Smartphone, Zap, Sparkles, MoveLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 mesh-gradient overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-sky-300/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          <div className="lg:w-1/2 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur border border-white/80 px-4 py-2 rounded-full mb-8 shadow-sm">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-blue-800 text-xs md:text-sm font-bold tracking-wide">اكتشف حلول التكنولوجيا الذكية</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] mb-8">
              نمط حياة <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-blue-500">أكثر ذكاءً</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-xl lg:mr-0 lg:ml-auto leading-relaxed">
              في سمارت سورس، نجمع لك أحدث التقنيات العالمية في مكان واحد. هواتف، أجهزة منزلية، وعناية شخصية صُممت لتعيد تعريف يومك.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <a href="#mobiles" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-2xl shadow-blue-200 hover:shadow-slate-200 flex items-center justify-center gap-3">
                تصفح المنتجات
                <MoveLeft size={20} />
              </a>
              <a href="#about" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                تعرف على قصتنا
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">+5000</span>
                  <span className="text-xs text-slate-500">عميل سعيد</span>
               </div>
               <div className="h-10 w-px bg-slate-200"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">+120</span>
                  <span className="text-xs text-slate-500">منتج ذكي</span>
               </div>
               <div className="h-10 w-px bg-slate-200"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">24/7</span>
                  <span className="text-xs text-slate-500">دعم فني</span>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
                 <img 
                  src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1000" 
                  alt="Tech Lifestyle" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Widgets */}
              <div className="absolute -top-10 -left-10 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 animate-bounce-gentle max-w-[180px]">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg shadow-blue-100">
                  <Smartphone size={24} />
                </div>
                <div className="text-slate-900 font-bold text-sm mb-1">تكنولوجيا الغد</div>
                <div className="text-slate-500 text-[10px]">أحدث إصدارات آيفون وسامسونج أصبحت هنا.</div>
              </div>

              <div className="absolute -bottom-10 right-10 bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/50 animate-bounce-gentle-delayed flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Zap size={20} />
                 </div>
                 <div>
                    <div className="text-slate-900 font-bold text-sm">توفير ذكي</div>
                    <div className="text-slate-500 text-[10px]">تقنيات موفرة للطاقة 100%</div>
                 </div>
              </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 rounded-full -z-10 blur-[100px]"></div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
        }
        @keyframes bounce-gentle-delayed {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-bounce-gentle { animation: bounce-gentle 5s ease-in-out infinite; }
        .animate-bounce-gentle-delayed { animation: bounce-gentle-delayed 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
