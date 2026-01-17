
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs">تواصل معنا</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">نحن هنا لخدمتك دائماً</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">سواء كان لديك استفسار تقني أو ترغب في استشارة حول أفضل الأجهزة، فريقنا مستعد لمساعدتك في أي وقت.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">اتصال مباشر</h3>
              <p className="text-slate-500 text-sm mb-6">تحدث مع أحد خبرائنا التقنيين مباشرة.</p>
              <a href={`tel:${CONTACT_DATA.phone}`} className="text-blue-600 font-black text-lg flex items-center gap-2 group-hover:gap-4 transition-all flex-row-reverse justify-end">
                <span dir="ltr">{CONTACT_DATA.phoneDisplay}</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-blue-100 shadow-2xl shadow-blue-100/20 scale-105 relative z-10 group">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-100 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">واتساب</h3>
              <p className="text-slate-500 text-sm mb-6">أسرع وسيلة للحصول على رد فوري لطلباتك.</p>
              <a href={`https://wa.me/${CONTACT_DATA.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-black text-lg flex items-center gap-2 group-hover:gap-4 transition-all flex-row-reverse justify-end">
                ابدأ المحادثة
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">البريد الإلكتروني</h3>
              <p className="text-slate-500 text-sm mb-6">للاستفسارات الرسمية والعروض التجارية.</p>
              <a href={`mailto:${CONTACT_DATA.email}`} className="text-slate-900 font-black text-lg flex items-center gap-2 group-hover:gap-4 transition-all flex-row-reverse justify-end">
                {CONTACT_DATA.email}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-center text-center p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="flex items-center gap-3 mb-4 flex-row-reverse">
              <MapPin className="text-blue-600" />
              <span className="font-bold text-slate-900">المقر الرئيسي: {CONTACT_DATA.address}</span>
            </div>
            <p className="text-slate-500 text-sm">مواعيد العمل: {CONTACT_DATA.workingHours.replace('يومياً:', '')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
