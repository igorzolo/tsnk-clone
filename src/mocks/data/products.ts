import type { Product } from '../../types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'ts-scan-6575',
    name: 'ТС-СКАН 6575',
    category: 'introscope',
    shortDescription:
      'Рентгеновский досмотровый комплекс для багажа и ручной клади.',
    image: '/images/products/ts-scan-6575.svg',  // для ТС-СКАН 6575
    features: ['Туннель 650×750 мм', 'До 1800 посылок/час', 'Двойное сканирование'],
  },
  {
    id: '2',
    slug: 'm-ion',
    name: 'М-ИОН',
    category: 'detector',
    shortDescription:
      'Портативный детектор следов взрывчатых и наркотических веществ.',
    image: '/images/products/m-ion.svg',         // для М-ИОН
    features: ['Время отклика < 8 сек', 'Автономная работа 6 часов', 'Запатентованная ИДТ'],
  },
  {
    id: '3',
    slug: 'midk-9032',
    name: 'МИДК 9032',
    category: 'mobile',
    shortDescription:
      'Мобильный инспекционно-досмотровый комплекс для транспорта.',
    image: '/images/products/midk-9032.svg',     // для МИДК 9032
    features: ['Проникающая способность 300 мм', 'Сканирование на ходу', 'Монтаж на шасси'],
  },
  {
    id: '4',
    slug: 'radar-iq',
    name: 'Radar-IQ',
    category: 'radar',
    shortDescription:
      'Радиолокационная система обнаружения скрытых объектов.',
    image: '/images/products/radar-iq.svg',      // для Radar-IQ
    features: ['Обнаружение на 30 м', 'Работа через стены', 'Интеграция с видеоаналитикой'],
  },
];