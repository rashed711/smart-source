
import React from 'react';
import { ShieldCheck, Target, Award, MoveLeft } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1556656793-062ff9878258?auto=format&fit=crop&q=80&w=800" alt="Tech" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl translate-x-4 md:translate-x-12">
                  <img src="https://images.unsplash.com/photo-1593344484962-796055d4a3a4?auto=format&fit=crop&q=80&w=800" alt="Home" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl -translate-x-4 md:-translate-x-12">
                   <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=800" alt="Care" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800" alt="Office" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-24 h-24 md:w-40 md:h-40 bg-blue-50 rounded-full -z-10"></div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-right order-1 lg:order-2">
            <div className="mb-6 md:mb-8">
               <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">نبذة عن سمارت سورس</span>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
                 نحن هنا لنصنع فارقاً <br /> 
                 <span className="text-slate-400">في حياتك اليومية</span>
               </h2>
            </div>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 leading-relaxed">
              تأسست سمارت سورس لتكون الجسر بينك وبين أحدث الابتكارات العالمية. نحن نؤمن أن التكنولوجيا هي وسيلة لتعزيز جودة الحياة، ولذلك نختار كل منتج بعناية فائقة لضمان الجودة، الأداء، والتصميم الأنيق.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="flex flex-col items-center lg:items-end">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3 md:mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm md:text-base">موثوقية تامة</h4>
                <p className="text-[10px] md:text-xs text-slate-500">ضمان حقيقي لكل المنتجات.</p>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3 md:mb-4">
                  <Target size={20} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm md:text-base">اختيار ذكي</h4>
                <p className="text-[10px] md:text-xs text-slate-500">نختار الأفضل لك دائماً.</p>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3 md:mb-4">
                  <Award size={20} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm md:text-base">تجربة فاخرة</h4>
                <p className="text-[10px] md:text-xs text-slate-500">خدمة عملاء مميزة.</p>
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-3 text-slate-900 font-black hover:text-blue-600 transition-colors group text-sm md:text-base">
              <span className="border-b-2 border-slate-900 group-hover:border-blue-600 pb-1">تواصل مع مستشارينا التقنيين</span>
              <MoveLeft size={18} className="transform group-hover:-translate-x-2 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
