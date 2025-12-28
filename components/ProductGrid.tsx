
import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Plus, ArrowLeft } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col">
          
          <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] bg-slate-50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {product.tag && (
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-blue-600 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                {product.tag}
              </span>
            )}
            
            {/* Quick Actions Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
               <button className="w-full py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20">
                  <ShoppingCart size={16} />
                  أضف للسلة
               </button>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h4>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-2">{product.description}</p>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">السعر</span>
              <span className="text-slate-900 font-black text-xl">اتصل بنا</span>
            </div>
            <button className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
