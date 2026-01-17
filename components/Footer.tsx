
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Clock } from 'lucide-react';
import { CONTACT_DATA, NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 overflow-hidden relative text-right">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/20">S</div>
              <span className="text-2xl font-black tracking-tight text-white">Smart Source</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              شريكك الذكي في عالم التكنولوجيا. نقدم لك حلولاً تجمع بين الأداء الرفيع والتصميم العصري لترقية نمط حياتك اليومي.
            </p>
            <div className="flex items-center justify-start gap-4">
              {SOCIAL_LINKS.map((social, idx) => {
                const Icon = social.platform === 'facebook' ? Facebook : 
                             social.platform === 'instagram' ? Instagram : Twitter;
                return (
                  <a 
                    key={idx}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/5"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 4).map((link, idx) => (
                <li key={idx}><a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">{link.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Sections Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">الأقسام</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(3).map((link, idx) => (
                <li key={idx}><a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">{link.name}</a></li>
              ))}
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">معلومات التواصل</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-white text-sm font-bold">العنوان الرئيسي</div>
                  <p className="text-slate-400 text-xs mt-1">{CONTACT_DATA.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-blue-500 shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-white text-sm font-bold">مواعيد العمل</div>
                  <p className="text-slate-400 text-xs mt-1">{CONTACT_DATA.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
          <div className="order-2 md:order-1">
            <p className="text-slate-500 text-xs font-medium">
              &copy; {new Date().getFullYear()} سمارت سورس. جميع الحقوق محفوظة.
            </p>
          </div>
          
          <div className="order-1 md:order-2 flex flex-col md:flex-row items-center gap-2 text-slate-400 text-xs bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <span>تم التصميم والتطوير بواسطة</span>
            <a 
              href="https://enjaz.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-white hover:text-blue-400 transition-all flex items-center gap-2 group"
            >
              شركة إنجاز للحلول الذكية
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:animate-ping"></span>
            </a>
          </div>

          <div className="order-3 opacity-0 pointer-events-none hidden md:block w-32"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
