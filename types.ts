import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  highlight?: boolean;
}

export interface MenuCategory {
  title: string;
  note?: string; // For things like (Hot / Iced)
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Amenity {
  icon: LucideIcon;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}