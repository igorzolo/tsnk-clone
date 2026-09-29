export type ProductCategory = 'introscope' | 'detector' | 'mobile' | 'radar' | 'xray' | 'medicine';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
};

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;   // добавь — полный текст новости
  date: string;      // ISO
  image: string;
};
