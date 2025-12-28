
import React from 'react';
import { ShieldCheck, Target, Award, MoveLeft } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          <div className="w-full lg:w-1/2 relative reveal-left">
            <div className="relative z-10 grid grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-6 md:space-y-8">
                <div className="aspect-[3/4] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl group">
                  <img src="https://i.pinimg.com/1200x/a1/51/1e/a1511e4ca46e14a6c3dec9cd5437d313.jpg" alt="Tech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-xl translate-x-8 md:translate-x-16 group">
                  <img src="https://images.unsplash.com/photo-1593344484962-796055d4a3a4?auto=format&fit=crop&q=80&w=800" alt="Home" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
              <div className="space-y-6 md:space-y-8 pt-12 md:pt-20">
                <div className="aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-xl -translate-x-8 md:-translate-x-16 group">
                   <img src="https://i.pinimg.com/1200x/bd/f3/0e/bdf30eb4e76d2be2a9f72c865a018e50.jpg" alt="Care" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="aspect-[3/4] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl group">
                  <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800" alt="Office" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-50 rounded-full -z-10 animate-blob"></div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-right reveal-right">
            <div className="mb-10">
               <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">نبذة عن سمارت سورس</span>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 leading-tight mb-8">
                 نحن هنا لنصنع فارقاً <br /> 
                 <span className="text-slate-400">في حياتك اليومية</span>
               </h2>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
              تأسست سمارت سورس لتكون الجسر بينك وبين أحدث الابتكارات العالمية. نحن نؤمن أن التكنولوجيا هي وسيلة لتعزيز جودة الحياة، ولذلك نختار كل منتج بعناية فائقة لضمان الجودة، الأداء، والتصميم الأنيق.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
              {[
                { icon: <ShieldCheck />, title: 'موثوقية تامة', desc: 'ضمان حقيقي للمنتجات' },
                { icon: <Target />, title: 'اختيار ذكي', desc: 'ننتقي الأفضل لك' },
                { icon: <Award />, title: 'تجربة فاخرة', desc: 'خدمة عملاء استثنائية' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-end group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {/* Fix: Explicitly cast icon as React.ReactElement<any> to resolve TypeScript error when cloning with extra props */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h4 className="font-black text-slate-900 mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-4 text-slate-900 font-black hover:text-blue-600 transition-all group text-lg">
              <span className="border-b-4 border-slate-900 group-hover:border-blue-600 pb-2">تواصل مع مستشارينا التقنيين</span>
              <MoveLeft size={24} className="transform group-hover:-translate-x-3 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
