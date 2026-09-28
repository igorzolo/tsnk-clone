import { useTranslation } from 'react-i18next';
import { news as newsRu } from '../mocks/data/news.ru';
import { news as newsEn } from '../mocks/data/news.en';

export function useNews() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'ru';
  return lang === 'en' ? newsEn : newsRu;
}