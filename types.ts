
import React from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: string;
  tag?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'whatsapp';
  url: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  workingHours: string;
  whatsapp: string;
}
