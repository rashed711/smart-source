
import React from 'react';
import { Smartphone, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">S</div>
              <span className="text-2xl font-black tracking-tight text-slate-900">Smart Source</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              شريكك الذكي في عالم التكنولوجيا. نقدم لك حلولاً تجمع بين الأداء الرفيع والتصميم العصري لترقية نمط حياتك اليومي.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">الرئيسية</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">من نحن</a></li>
              <li><a href="#mobiles" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">أحدث الهواتف</a></li>
              <li><a href="#personal-care" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">العناية الشخصية</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8">الأقسام</h4>
            <ul className="space-y-4">
              <li><a href="#smart-home" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">الأجهزة المنزلية</a></li>
              <li><a href="#ac" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">تكييفات الهواء</a></li>
              <li><a href="#why-us" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">لماذا سمارت سورس</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8">اشترك في النشرة</h4>
            <p className="text-slate-500 text-xs mb-6 leading-relaxed">كن أول من يعرف عن العروض الحصرية والإصدارات الجديدة من الأجهزة الذكية.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-blue-100">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-xs font-medium">
            &copy; {new Date().getFullYear()} سمارت سورس. جميع الحقوق محفوظة.
          </p>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>تصميم وتطوير بواسطة</span>
            <a 
              href="https://enjaz.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1 group"
            >
              شركة إنجاز للحلول الذكية
              <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></span>
            </a>
          </div>

          <div className="flex items-center gap-8">
             <a href="#" className="text-slate-300 hover:text-slate-900 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
             <a href="#" className="text-slate-300 hover:text-slate-900 text-[10px] font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative side accent */}
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-600 via-sky-400 to-transparent"></div>
    </footer>
  );
};

export default Footer;
