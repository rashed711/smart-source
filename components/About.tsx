
import React from 'react';
// Fix: Added MoveLeft to the imports as it is used in the component's JSX
import { ShieldCheck, Target, Award, MoveLeft } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1556656793-062ff9878258?auto=format&fit=crop&q=80&w=800" alt="Tech" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-xl translate-x-12">
                  <img src="https://images.unsplash.com/photo-1593344484962-796055d4a3a4?auto=format&fit=crop&q=80&w=800" alt="Home" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-xl -translate-x-12">
                   <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=800" alt="Care" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800" alt="Office" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full -z-10"></div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-right">
            <div className="mb-8">
               <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs">نبذة عن سمارت سورس</span>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
                 نحن هنا لنصنع فارقاً <br /> 
                 <span className="text-slate-400">في حياتك اليومية</span>
               </h2>
            </div>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              تأسست سمارت سورس لتكون الجسر بينك وبين أحدث الابتكارات العالمية. نحن نؤمن أن التكنولوجيا هي وسيلة لتعزيز جودة الحياة، ولذلك نختار كل منتج بعناية فائقة لضمان الجودة، الأداء، والتصميم الأنيق.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center lg:items-end">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">موثوقية تامة</h4>
                <p className="text-xs text-slate-500">ضمان حقيقي لكل المنتجات.</p>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Target size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">اختيار ذكي</h4>
                <p className="text-xs text-slate-500">نختار الأفضل لك دائماً.</p>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">تجربة فاخرة</h4>
                <p className="text-xs text-slate-500">خدمة عملاء بمستوى عالمي.</p>
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-3 text-slate-900 font-black hover:text-blue-600 transition-colors group">
              <span className="border-b-2 border-slate-900 group-hover:border-blue-600 pb-1">تواصل مع مستشارينا التقنيين</span>
              <MoveLeft size={20} className="transform group-hover:-translate-x-2 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
