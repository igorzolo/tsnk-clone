import type { Product } from '../../types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'ts-scan-6575',
    name: 'TS-SCAN 6575',
    category: 'introscope',
    shortDescription:
      'X-ray inspection system for luggage and hand baggage.',
    fullDescription:
      'TS-SCAN 6575 is the flagship X-ray scanner for inspecting luggage and hand baggage at high-traffic facilities. Dual scanning and intelligent image processing algorithms help operators identify prohibited items faster and more accurately. The system is certified and supplied to airports, railway stations and government facilities.',
    image: '/images/products/ts-scan-6575.jpg',
    features: [
      'Tunnel 650×750 mm',
      'Up to 1800 items per hour',
      'Dual scanning',
      'Automatic detection of dangerous items',
      'Compliant with EU and RF standards',
    ],
    specs: [
      { label: 'Tunnel size', value: '650 × 750 mm' },
      { label: 'Throughput', value: 'up to 1800 items/hour' },
      { label: 'Penetration', value: '40 mm steel' },
      { label: 'Generator power', value: '160 kV' },
      { label: 'Power consumption', value: '1.5 kW' },
      { label: 'Weight', value: '750 kg' },
    ],
  },
  {
    id: '2',
    slug: 'm-ion',
    name: 'M-ION',
    category: 'detector',
    shortDescription:
      'Portable detector of traces of explosives and narcotics.',
    fullDescription:
      'M-ION is a portable detector based on ion mobility spectrometry. It detects trace amounts of explosive and narcotic substances on surfaces, in the air, and on hands. Used by security services, checkpoints and law enforcement. Up to 6 hours of battery life enables use at remote events.',
    image: '/images/products/m-ion.png',
    features: [
      'Response time under 8 seconds',
      'Up to 6 hours of battery life',
      'Patented IMS technology',
      'Library of over 40 substances',
      'Operating temperature from −10 to +50 °C',
    ],
    specs: [
      { label: 'Analysis method', value: 'Ion mobility (IMS)' },
      { label: 'Analysis time', value: '< 8 seconds' },
      { label: 'Battery life', value: 'up to 6 hours' },
      { label: 'Weight', value: '1.6 kg' },
      { label: 'Dimensions', value: '280 × 90 × 60 mm' },
      { label: 'Interfaces', value: 'USB, Wi-Fi' },
    ],
  },
  {
    id: '3',
    slug: 'midk-9032',
    name: 'MIDK 9032',
    category: 'mobile',
    shortDescription:
      'Mobile inspection system for vehicles.',
    fullDescription:
      'MIDK 9032 is a mobile inspection system mounted on a truck chassis. It scans cargo and passenger vehicles on the move, which is critical for checkpoints and large logistics hubs. Provides penetration up to 300 mm of steel and record inspection speed.',
    image: '/images/products/midk-9032.jpg',
    features: [
      'Penetration up to 300 mm',
      'Scanning on the move up to 5 km/h',
      'Mounting on standard chassis',
      'Integration with plate recognition systems',
      'Operation in any weather',
    ],
    specs: [
      { label: 'Penetration', value: '300 mm steel' },
      { label: 'Scanning speed', value: 'up to 5 km/h' },
      { label: 'Object size', value: 'up to 4.5 × 3.5 m' },
      { label: 'Generator power', value: '450 kV' },
      { label: 'Chassis', value: 'KAMAZ / Volvo / MAN' },
      { label: 'Crew', value: '2 operators' },
    ],
  },
  {
    id: '4',
    slug: 'radar-iq',
    name: 'Radar-IQ',
    category: 'radar',
    shortDescription:
      'Radar system for detecting hidden objects.',
    fullDescription:
      'Radar-IQ is a next-generation radar system for detecting hidden objects behind walls, in clothing and in packaging. It uses machine learning to recognize the shape and material of objects. Used in perimeter security, tactical entry, and checkpoints.',
    image: '/images/products/radar-iq.jpg',
    features: [
      'Detection range up to 30 m',
      'Works through walls and partitions',
      'Integration with video analytics',
      'Automatic object classification',
      'Low power consumption',
    ],
    specs: [
      { label: 'Detection range', value: 'up to 30 m' },
      { label: 'Frequency range', value: '3.5 GHz' },
      { label: 'Positioning accuracy', value: '±15 cm' },
      { label: 'Power', value: '220 V / 12 V' },
      { label: 'Weight', value: '4.2 kg' },
      { label: 'Operating temperature', value: '−20…+55 °C' },
    ],
  },
];