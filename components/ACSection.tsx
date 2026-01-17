
import React from 'react';
import { Wind, Snowflake, Zap, MoveLeft } from 'lucide-react';
import { BRANDS } from '../constants';

const ACSection: React.FC = () => {
  return (
    <section id="ac" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 mb-32">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
             <div className="absolute -z-10 w-full h-full bg-blue-50 rounded-[3rem] md:rounded-[4rem] rotate-3 scale-105"></div>
             <img 
               src="https://i.pinimg.com/1200x/f8/91/09/f89109f80845a454ac6c7325edc485cd.jpg" 
               alt="Modern AC Unit" 
               className="w-full rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative z-10 object-cover"
             />
             <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/90 backdrop-blur p-4 md:p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Snowflake className="animate-spin-slow w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] md:text-xs text-slate-500 font-bold">كفاءة تبريد</div>
                  <div className="font-black text-slate-900 text-sm md:text-base">تبريد فائق وهادئ</div>
                </div>
             </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-right order-1 lg:order-2">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs block mb-4">الراحة المنزلية</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">استمتع بجو مثالي <br /> طوال العام</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">نقدم أحدث أجهزة التكييف المنزلية من كبرى الشركات العالمية، مع ميزات توفير الطاقة والتحكم الذكي وتوزيع الهواء المتطور.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-right mb-12">
              <div className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100 flex flex-col items-center lg:items-end group hover:bg-white hover:shadow-xl transition-all">
                <Wind className="text-blue-600 mb-4 w-10 h-10 group-hover:animate-bounce" />
                <h4 className="font-black text-slate-900 mb-2 text-lg">توزيع هواء ذكي</h4>
                <p className="text-sm text-slate-500 font-medium">يغطي جميع أركان الغرفة بالتساوي.</p>
              </div>
              <div className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100 flex flex-col items-center lg:items-end group hover:bg-white hover:shadow-xl transition-all">
                <Zap className="text-blue-600 mb-4 w-10 h-10 group-hover:animate-pulse" />
                <h4 className="font-black text-slate-900 mb-2 text-lg">توفير الطاقة</h4>
                <p className="text-sm text-slate-500 font-medium">تقنيات انفرتر متطورة لتقليل الاستهلاك.</p>
              </div>
            </div>

            <a href="#contact" className="magnetic-button inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-black text-base sm:text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
               اطلب استشارة مجانية
               <MoveLeft size={22} />
            </a>
          </div>
        </div>

        {/* Brand Logos with High Fidelity and Enhanced Hover Effects */}
        <div className="reveal border-t border-slate-100 pt-24 pb-12">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">شركاء النجاح</span>
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">نحن وكلاء معتمدون لأكبر الماركات العالمية</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 items-stretch">
            {BRANDS.map((brand) => (
              <div 
                key={brand.name} 
                className="flex items-center justify-center p-8 md:p-10 rounded-[2.5rem] bg-slate-50/50 border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-500 group cursor-default"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`} 
                  className="w-full h-12 md:h-14 lg:h-16 object-contain filter grayscale brightness-110 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-700 ease-in-out transform group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${brand.name}&background=f1f5f9&color=64748b&bold=true&size=128`;
                  }}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-slate-400 text-sm font-bold italic">جميع الشعارات هي علامات تجارية مسجلة لأصحابها.</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </section>
  );
};

export default ACSection;
