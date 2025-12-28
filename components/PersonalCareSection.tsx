
import React from 'react';
import { PERSONAL_CARE } from '../constants';
import ProductGrid from './ProductGrid';

const PersonalCareSection: React.FC = () => {
  return (
    <section id="personal-care" className="py-24 bg-sky-50/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center lg:text-right">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl text-center lg:text-right w-full lg:w-auto">
            <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4">العناية والجمال</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">أجهزة العناية الشخصية</h3>
            <p className="text-slate-600 text-lg">نقدم لك مجموعة مختارة من أجهزة العناية بالبشرة والحلاقة للرجال والنساء، بتصاميم عصرية وأداء احترافي.</p>
          </div>
          <a href="#contact" className="hidden lg:block text-blue-600 font-black border-b-4 border-blue-100 pb-2 hover:border-blue-600 transition-all">تواصل معنا للاستفسار</a>
        </div>
        
        <ProductGrid products={PERSONAL_CARE} />
      </div>
    </section>
  );
};

export default PersonalCareSection;
