
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between px-4 md:px-6 py-3 rounded-2xl md:rounded-full transition-all duration-500 ${isScrolled ? 'bg-slate-50/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-slate-200' : 'bg-white/40 backdrop-blur-md border border-white/40 shadow-sm'}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg shadow-blue-200">S</div>
            <span className="text-lg md:text-xl font-black tracking-tight text-slate-900">Smart Source</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="font-bold text-sm transition-all relative group text-slate-700 hover:text-blue-600"
              >
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
             <a href="#contact" className="bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-black hover:bg-blue-600 transition-all flex items-center gap-2 group shadow-xl shadow-slate-900/10">
              تواصل معنا
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      <div className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-white z-[101] transition-transform duration-500 ease-out shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">S</div>
              <span className="text-2xl font-black text-slate-900">Smart Source</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full"><X size={24} /></button>
          </div>
          <div className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-slate-700 hover:text-blue-600 font-bold text-2xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-6 bg-slate-900 text-white text-center py-4 rounded-2xl font-black text-base shadow-2xl shadow-slate-900/20 active:scale-95 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
