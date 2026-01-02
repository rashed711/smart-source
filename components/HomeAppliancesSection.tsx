
import React from 'react';
import { SMART_HOME } from '../constants';
import { ArrowLeft, Check } from 'lucide-react';

const HomeAppliancesSection: React.FC = () => {
  return (
    <section id="smart-home" className="py-32 bg-slate-950 overflow-hidden relative">
      {/* Visual background flares */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center lg:text-right">
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">الأجهزة المنزلية الذكية</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-8 leading-tight">بيت ذكي، <br /> لحياة أكثر راحة</h2>
            <p className="text-slate-400 text-lg">وداعاً للمهام التقليدية. اكتشف مجموعتنا من الروبوتات والأجهزة المنزلية التي تعمل بالذكاء الاصطناعي لتوفر لك أهم ما تملك: وقتك.</p>
          </div>
          <div className="hidden lg:flex gap-4 mb-2">
             <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 overflow-hidden bg-slate-800">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-slate-950 bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  +2k
                </div>
             </div>
             <div className="text-right mr-4">
                <div className="text-white font-bold text-sm">تقييمات ممتازة</div>
                <div className="text-slate-500 text-[10px]">من مستخدمي الأجهزة الذكية</div>
             </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SMART_HOME.map((product) => (
            <div key={product.id} className="group relative bg-white/5 backdrop-blur-md rounded-[3rem] p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-700 overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="w-full lg:w-2/5 aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="w-full lg:w-3/5 text-center lg:text-right">
                  <h4 className="text-2xl font-black text-white mb-4">{product.name}</h4>
                  <p className="text-slate-400 mb-8 leading-relaxed">{product.description}</p>
                  
                  <ul className="space-y-3 mb-10 text-right">
                    {["تحكم كامل عبر الهاتف", "توفير فائق للطاقة", "تصميم عصري جذاب"].map((feat, i) => (
                      <li key={i} className="flex items-center justify-center lg:justify-start gap-3 flex-row-reverse">
                        <span className="text-slate-300 text-sm">{feat}</span>
                        <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="w-full py-3 sm:py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base">
                    تواصل معنا للتفاصيل
                    <ArrowLeft size={20} />
                  </a>
                </div>
              </div>
              
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[40px] rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAppliancesSection;
