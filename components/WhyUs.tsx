
import React from 'react';
import { FEATURES } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24 reveal">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">المميزات والخدمات</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-8 leading-tight">لماذا سمارت سورس هي <br /> خيارك الأذكى؟</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id} 
              className="text-center group relative pt-12 px-6 pb-12 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] transition-all duration-700 reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:-rotate-12 group-hover:scale-110">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 32, className: "group-hover:animate-pulse" })}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 mt-4">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-28 p-10 md:p-16 bg-blue-600 rounded-[3rem] text-center relative overflow-hidden reveal group shadow-2xl shadow-blue-200">
           {/* Moving background patterns */}
           <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
           </div>
           
           <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">هل أنت جاهز لترقية <br /> نمط حياتك اليوم؟</h3>
              <a href="#contact" className="inline-block px-12 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl shadow-blue-900/20 transform hover:-translate-y-1">
                تواصل معنا الآن
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
