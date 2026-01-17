
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-5 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col hover-glow overflow-hidden"
        >
          <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-[2rem] bg-slate-50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            {product.tag && (
              <span className="absolute top-4 right-4 bg-white/95 backdrop-blur text-blue-600 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm z-10">
                {product.tag}
              </span>
            )}
            
            {/* Soft gradient overlay on hover (no button) */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="flex-1 px-2 pb-4">
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {product.name}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
