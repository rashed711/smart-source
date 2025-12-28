
import React from 'react';
import { Wind, Snowflake, Zap, Cloud } from 'lucide-react';

const ACSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
             <div className="absolute -z-10 w-full h-full bg-blue-50 rounded-[4rem] rotate-3 scale-110"></div>
             <img 
               src="https://images.unsplash.com/photo-1594142465967-58197793d623?auto=format&fit=crop&q=80&w=1000" 
               alt="Modern AC Unit in home" 
               className="rounded-[3rem] shadow-2xl relative z-10"
             />
             <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Snowflake className="animate-spin-slow" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">كفاءة تبريد</div>
                  <div className="font-bold text-slate-900">تبريد فائق وهادئ</div>
                </div>
             </div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-right order-1 lg:order-2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">الراحة المنزلية</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">استمتع بجو مثالي <br /> طوال العام</h3>
            <p className="text-lg text-slate-600 mb-10">نقدم أحدث أجهزة التكييف المنزلية من كبرى الشركات العالمية، مع ميزات توفير الطاقة والتحكم الذكي وتوزيع الهواء المتطور.</p>
            
            <div className="grid grid-cols-2 gap-6 text-right">
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <Wind className="text-blue-600 mb-3 w-8 h-8" />
                <h4 className="font-bold text-slate-900 mb-1">توزيع هواء ذكي</h4>
                <p className="text-sm text-slate-500">يغطي جميع أركان الغرفة بالتساوي.</p>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <Zap className="text-blue-600 mb-3 w-8 h-8" />
                <h4 className="font-bold text-slate-900 mb-1">توفير الطاقة</h4>
                <p className="text-sm text-slate-500">تقنيات انفرتر متطورة لتقليل الاستهلاك.</p>
              </div>
            </div>
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
