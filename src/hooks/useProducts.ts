import { useTranslation } from 'react-i18next';
import { products as productsRu } from '../mocks/data/products.ru';
import { products as productsEn } from '../mocks/data/products.en';

export function useProducts() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'ru';
  return lang === 'en' ? productsEn : productsRu;
}