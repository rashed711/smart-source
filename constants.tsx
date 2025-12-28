
import React from 'react';
import { Smartphone, ShieldCheck, Headphones, Zap, Wind, User, Heart, Settings, MessageCircle, Phone, Mail } from 'lucide-react';
import { Product, Feature } from './types';

export const COLORS = {
  techBlue: '#0055FF',
  lightBlue: '#E0F2FE',
  silver: '#F8FAFC',
  white: '#FFFFFF',
  dark: '#1E293B'
};

export const MOBILE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "آيفون 15 برو",
    description: "أحدث تكنولوجيا الهواتف الذكية مع معالج A17 Pro وهيكل من التيتانيوم.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    tag: "جديد"
  },
  {
    id: 2,
    name: "سامسونج S24 ألترا",
    description: "تجربة الذكاء الاصطناعي الكاملة في هاتفك مع قلم S-Pen المدمج.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800",
    tag: "الأكثر طلباً"
  },
  {
    id: 3,
    name: "سماعات AirPods Pro",
    description: "إلغاء ضجيج نشط وتجربة صوتية غامرة مع علبة شحن USB-C.",
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "شاحن سريع 65 وات",
    description: "شحن ذكي وآمن لجميع أجهزتك بتقنية GaN في وقت قياسي.",
    image: "https://images.unsplash.com/photo-1625517345318-42f92b3cc0f5?auto=format&fit=crop&q=80&w=800"
  }
];

export const PERSONAL_CARE: Product[] = [
  {
    id: 5,
    name: "ماكينة حلاقة ذكية",
    description: "حلاقة دقيقة ومريحة تناسب الاستخدام اليومي الرطب والجاف.",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800",
    tag: "رجالي"
  },
  {
    id: 6,
    name: "جهاز تنظيف البشرة",
    description: "تقنية الموجات الصوتية لنضارة دائمة وتنظيف عميق للمسام.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    tag: "حريمي"
  },
  {
    id: 101,
    name: "جهاز ليزر منزلي IPL",
    description: "إزالة شعر آمنة وفعالة في المنزل بتقنية الضوء النبضي المكثف.",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800",
    tag: "بريميوم"
  },
  {
    id: 102,
    name: "فرشاة أسنان ذكية",
    description: "عناية فائقة بالأسنان مع مستشعرات ضغط واتصال بالتطبيق.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 103,
    name: "مسدس مساج ذكي",
    description: "تخفيف آلام العضلات واسترخاء عميق مع 5 مستويات سرعة.",
    image: "https://images.unsplash.com/photo-1631543533910-363bbdf7fccf?auto=format&fit=crop&q=80&w=800",
    tag: "رياضي"
  }
];

export const SMART_HOME: Product[] = [
  {
    id: 7,
    name: "مكنسة روبوت ذكية",
    description: "كنس ومسح ذكي مع نظام رسم خرائط الليزر المتقدم.",
    image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "قلاية هوائية ديجيتال",
    description: "أكل صحي بلمسة زر واحدة بسعة كبيرة وشاشة لمس.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800"
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
