
import React from 'react';
import { FEATURES } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs">قيمة مضافة</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-8">لماذا سمارت سورس هي <br /> خيارك الأفضل؟</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="text-center group relative pt-10 px-6 pb-12 rounded-[2rem] hover:bg-slate-50 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-blue-200 group-hover:-rotate-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 mt-4">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 p-12 bg-blue-600 rounded-[3rem] text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 L100 0 L100 100 Z" fill="white" />
              </svg>
           </div>
           <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8">هل أنت جاهز لترقية نمط حياتك؟</h3>
              <a href="#contact" className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-blue-800/20">
                تواصل معنا الآن
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
