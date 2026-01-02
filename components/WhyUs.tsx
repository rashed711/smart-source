
import React from 'react';
import { FEATURES } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24 reveal">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">المميزات والخدمات</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-10 leading-tight">لماذا سمارت سورس هي <br /> خيارك الأذكى؟</h2>
          <div className="w-32 h-2.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 stagger-container">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id} 
              className="text-center group relative pt-16 px-8 pb-12 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-400 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 reveal stagger-item"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:-rotate-12 group-hover:scale-110">
                {/* Fix: Use React.ReactElement<any> to allow cloning with size and className properties */}
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 36, className: "group-hover:animate-pulse" })}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 mt-6">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 p-8 md:p-20 bg-slate-900 rounded-[3rem] md:rounded-[4rem] text-center relative overflow-hidden reveal shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)]">
           {/* Moving background tech-pattern */}
           <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-400 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           </div>
           
           <div className="relative z-10">
              <h3 className="text-3xl md:text-6xl font-black text-white mb-10 leading-tight">هل أنت جاهز لترقية <br /> نمط حياتك اليوم؟</h3>
              <a href="#contact" className="magnetic-button inline-block px-10 py-5 sm:px-14 sm:py-6 bg-blue-600 text-white rounded-[1.5rem] sm:rounded-[2rem] font-black text-lg sm:text-2xl hover:bg-white hover:text-blue-600 transition-all duration-500 shadow-2xl shadow-blue-600/30">
                تواصل معنا الآن
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
