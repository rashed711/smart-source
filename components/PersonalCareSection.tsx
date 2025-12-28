
import React from 'react';
import { PERSONAL_CARE } from '../constants';
import ProductGrid from './ProductGrid';

const PersonalCareSection: React.FC = () => {
  return (
    <section className="py-24 bg-sky-50/50">
      <div className="container mx-auto px-4 text-center lg:text-right">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">العناية والجمال</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">أجهزة العناية الشخصية</h3>
            <p className="text-slate-600">نقدم لك مجموعة مختارة من أجهزة العناية بالبشرة والحلاقة للرجال والنساء، بتصاميم عصرية وأداء احترافي.</p>
          </div>
          <a href="#" className="hidden lg:block text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 hover:text-blue-700 hover:border-blue-700 transition-colors">تصفح المجموعة الكاملة</a>
        </div>
        
        <ProductGrid products={PERSONAL_CARE} />
      </div>
    </section>
  );
};

export default PersonalCareSection;
