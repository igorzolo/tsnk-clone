export type ProductCategory = 'introscope' | 'detector' | 'mobile' | 'radar';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  image: string;
  features: string[];
};

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  image: string;
};

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  introscope: 'Интроскопы',
  detector: 'Детекторы',
  mobile: 'Мобильные комплексы',
  radar: 'Радары',
};