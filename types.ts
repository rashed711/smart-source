
// Fix: Added React import to provide access to the React namespace for ReactNode type
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
