
import React from 'react';
import { Smartphone, ShieldCheck, Zap, Settings } from 'lucide-react';
import { Product, Feature, Brand, NavLink, SocialLink, ContactInfo } from './types';

export const COLORS = {
  techBlue: '#0055FF',
  lightBlue: '#E0F2FE',
  silver: '#F8FAFC',
  white: '#FFFFFF',
  dark: '#1E293B'
};

// --- بيانات التواصل الأساسية ---
export const CONTACT_DATA: ContactInfo = {
  phone: '01040604406',
  phoneDisplay: '01040604406',
  email: 'info@smartsource-eg.com',
  address: 'القاهرة، جمهورية مصر العربية',
  workingHours: 'يومياً: 10:00 ص - 10:00 م',
  whatsapp: '201040604406'
};

// --- روابط التنقل ---
export const NAV_LINKS: NavLink[] = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'عن الشركة', href: '#about' },
  { name: 'هواتف', href: '#mobiles' },
  { name: 'عناية شخصية', href: '#personal-care' },
  { name: 'منزل ذكي', href: '#smart-home' },
  { name: 'تكييفات', href: '#ac' },
];

// --- روابط التواصل الاجتماعي ---
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'facebook', url: 'https://facebook.com' },
  { platform: 'instagram', url: 'https://instagram.com' },
  { platform: 'twitter', url: 'https://twitter.com' }
];

// --- العلامات التجارية (شركاء النجاح) ---
export const BRANDS: Brand[] = [
  { name: 'LG', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRraVvIfk4RZE6AyAWJXI-LBnQTaO48xIV4zQ&s' },
  { name: 'Samsung', logo: 'https://images.samsung.com/is/image/samsung/assets/levant_ar/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$' },
  { name: 'Gree', logo: 'https://crystalpng.com/wp-content/uploads/2025/03/gree-logo.png' },
  { name: 'Daikin', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqq3UfR_PFgHmk7h5XwiSDV7vzxxSHo-jGw&s' },
  { name: 'York', logo: 'https://cdn.worldvectorlogo.com/logos/york.svg' },
  { name: 'Carrier', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqphnLCkZg8n22TuPmHJG4wrWS9BWPrR4uQ&s' }
];

// --- المنتجات ---
export const MOBILE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "هواتف الفئة الرائدة",
    description: "أحدث ما توصلت إليه تكنولوجيا الهواتف الذكية، شاشات فائقة الدقة ومعالجات جبارة لأداء لا يضاهى.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    tag: "جديد"
  },
  {
    id: 2,
    name: "هواتف الفئة المتوسطة",
    description: "توازن مثالي بين السعر والأداء، كاميرات احترافية وبطاريات تدوم طويلاً لتناسب استخدامك اليومي.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800",
    tag: "الأكثر طلباً"
  },
  {
    id: 3,
    name: "سماعات لاسلكية ذكية",
    description: "تجربة صوتية غامرة مع تقنيات إلغاء الضجيج المتقدمة واتصال سلس بجميع أجهزتك.",
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "ملحقات الشحن السريع",
    description: "حلول شحن ذكية وآمنة تدعم تقنيات الشحن السريع لحماية أجهزتك وتوفير وقتك.",
    image: "https://i.pinimg.com/1200x/5f/06/48/5f06488795480086ea8918582bced6a1.jpg"
  }
];

export const PERSONAL_CARE: Product[] = [
  {
    id: 5,
    name: "ماكينة حلاقة ذكية",
    description: "حلاقة دقيقة ومريحة تناسب الاستخدام اليومي الرطب والجاف.",
    image: "https://i.pinimg.com/1200x/c4/39/9a/c4399a0316cc78585d8afb4c25df853b.jpg",
    tag: "رجالي"
  },
  {
    id: 6,
    name: "جهاز تنظيف البشرة",
    description: "تقنية الموجات الصوتية لنضارة دائمة وتنظيف عميق للمسام.",
    image: "https://i.pinimg.com/1200x/43/ad/61/43ad61848b5d5171733bd8599e46a362.jpg",
    tag: "حريمي"
  },
  {
    id: 101,
    name: "جهاز ليزر منزلي IPL",
    description: "إزالة شعر آمنة وفعالة في المنزل بتقنية الضوء النبضي المكثف.",
    image: "https://i.pinimg.com/1200x/c9/d6/3e/c9d63e8f431189ed8ec87808f2f66fa2.jpg",
    tag: "بريميوم"
  },
  {
    id: 102,
    name: "فرشاة أسنان ذكية",
    description: "عناية فائقة بالأسنان مع مستشعرات ضغط واتصال بالتطبيق.",
    image: "https://i.pinimg.com/1200x/b6/06/57/b60657ac5ac366028f011c832ebcfd1f.jpg"
  }
];

export const SMART_HOME: Product[] = [
  {
    id: 7,
    name: "مكنسة روبوت ذكية",
    description: "كنس ومسح ذكي مع نظام رسم خرائط الليزر المتقدم.",
    image: "https://i.pinimg.com/736x/03/09/90/030990b703ef87b66bd50228fe5519d5.jpg"
  },
  {
    id: 8,
    name: "قلاية هوائية ديجيتال",
    description: "أكل صحي بلمسة زر واحدة بسعة كبيرة وشاشة لمس.",
    image: "https://i.pinimg.com/1200x/f4/12/54/f41254bd0ece86c19ecc9406283a46af.jpg"
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "جودة مضمونة",
    description: "نختار أفضل الماركات العالمية لضمان رضاكم.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  },
  {
    id: 2,
    title: "أسعار مدروسة",
    description: "توازن مثالي بين القيمة والتكلفة.",
    icon: <Zap className="w-8 h-8 text-blue-600" />
  },
  {
    id: 3,
    title: "دعم فني متخصص",
    description: "فريقنا معك دائماً للإجابة على استفساراتك.",
    icon: <Settings className="w-8 h-8 text-blue-600" />
  },
  {
    id: 4,
    title: "تجربة شراء ذكية",
    description: "سهولة في الطلب وسرعة في التوصيل.",
    icon: <Smartphone className="w-8 h-8 text-blue-600" />
  }
];
