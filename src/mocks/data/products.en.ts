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
  {
  id: '5',
  slug: 'jaguar',
  name: 'Jaguar',
  category: 'xray',
  shortDescription:
      'Multifunctional X-ray system for tomographic inspection.',
  fullDescription:
      'The Jaguar X-ray system is designed for tomographic inspection of objects with high spatial resolution and the ability to visualize their internal structure in 3D. The 3D model helps detect cracks, determine the dimensions, shape of discontinuities and foreign inclusions, as well as their exact location.\n\nProprietary software uses projection data for 3D visualization, ensuring high efficiency and quality of object analysis with image detail down to 5 microns.',
  image: '/images/products/jaguar.jpg',
  features: [
      'Control of inspection parameters',
      'Export results to TIFF, BMP, JPG',
      'Measurement of linear object parameters',
      'Adjustable histogram of the inspection area',
      '3D model creation via rendering',
  ],
  specs: [
      { label: 'Anode voltage adjustment range', value: 'from 50 to 130 kV' },
      { label: 'Rated anode current', value: '0.1 mA' },
      { label: 'Rated effective focal spot size', value: 'no more than 50 microns' },
      { label: 'Power supply', value: '220 V' },
      { label: 'Weight', value: 'no more than 400 kg' },
      { label: 'Maximum resolution', value: '5 microns' },
  ],
  },
  {
  id: '6',
  slug: 'miran-b',
  name: 'Miran B',
  category: 'medicine',
  shortDescription:
    'Portable medical X-ray diagnostic apparatus "Miran B"',
  fullDescription:
    'The small-sized MIRAN X-ray diagnostic apparatus is intended for performing radiography in non-specialized conditions, including in hospital wards, at home for patients with limited mobility, in feldsher-midwife stations, in emergency situations, in military field hospitals, and in cold climate conditions.\n\nThe apparatus is supplied in a hard case (Version A) with a fixed focal length, and in a lightweight version (Version B) on a telescopic stand. The assembly and preparation time for operation is 3 minutes. Power from its own batteries is provided; chargers are available for AC mains (AC 230 V) and for a car electrical system.',
  image: '/images/products/miran-b.png',
  features: [
    'control of examination parameters',
    'import of results in TIFF, BMP, JPG',
    'measurement of linear parameters of objects',
    'ability to modify the histogram of the examination area',
    'standalone operation without mains power',
  ],
  specs: [
    { label: 'Anode voltage adjustment range', value: 'from 50 to 100 kV' },
    { label: 'Nominal anode current', value: '1 mA' },
    { label: 'Nominal effective focal spot size', value: 'no more than 500 µm' },
    { label: 'Power supply', value: '24 V' },
    { label: 'Weight', value: 'no more than 25 kg' },
    { label: 'Maximum resolution', value: '3.4 lp/mm' },
  ],
  },
  {
  id: '7',
  slug: 'miran-a',
  name: 'Miran A',
  category: 'medicine',
  shortDescription:
    'Portable medical X-ray diagnostic apparatus "Miran A"',
  fullDescription:
    'The small-sized MIRAN X-ray diagnostic apparatus is intended for performing radiography in non-specialized conditions, including in hospital wards, at home for patients with limited mobility, in feldsher-midwife stations, in emergency situations, in military field hospitals, and in cold climate conditions.\n\nThe apparatus is supplied in a hard case (Version A) with a fixed focal length, and in a lightweight version (Version B) on a telescopic stand. The assembly and preparation time for operation is 3 minutes. Power from its own batteries is provided; chargers are available for AC mains (AC 230 V) and for a car electrical system.',
  image: '/images/products/miran-a.jpg',
  features: [
    'control of examination parameters',
    'import of results in TIFF, BMP, JPG',
    'measurement of linear parameters of objects',
    'ability to modify the histogram of the examination area',
    'standalone operation without mains power',
  ],
  specs: [
    { label: 'Anode voltage adjustment range', value: 'from 50 to 100 kV' },
    { label: 'Nominal anode current', value: '1 mA' },
    { label: 'Nominal effective focal spot size', value: 'no more than 500 µm' },
    { label: 'Power supply', value: '24 V' },
    { label: 'Weight', value: 'no more than 25 kg' },
    { label: 'Maximum resolution', value: '3.4 lp/mm' },
  ],
  },
  {
  id: '8',
  slug: 'kalan4',
  name: 'Kalan-4',
  category: 'mobile',
  shortDescription:
    'Designed for inspecting objects by radiographic and radiological methods in the absence of a specially equipped X-ray laboratory.',
  fullDescription:
    'The KALAN-4 X-ray protective inspection chamber is designed for inspecting objects by radiographic and radioscopic methods in the absence of a specially equipped X-ray laboratory.\n\nStructurally, the chamber consists of three compartments: a compartment for housing the X-ray apparatus, a compartment for housing the inspected object, and a compartment for the X-ray television converter.\n\nThe X-ray protective inspection chamber is designed for use with high-current X-ray apparatuses RAP-90-5, RAP-160-5, and RAP-220-5 (depending on the type of apparatus used, the thickness of the protection and, accordingly, the weight of the product vary). The chamber is equipped with an X-ray radiation interlock device that activates when any of the doors is opened.',
  image: '/images/products/kalan4.jpg',
  features: [
    'Interactive display',
    'SanPiN 2.6.1.3164-14 and others',
    'RAP series X-ray apparatuses (up to 300 kV)',
  ],
  specs: [
    { label: 'Installation weight (without apparatus)', value: '1580 kg' },
    { label: 'Lead protection thickness', value: '14 mm' },
    { label: 'Internal dimensions', value: '542 x 582 x 442 mm (WxDxH)' },
    { label: 'Maximum weight of inspected object', value: '10 kg' },
    { label: 'Detector', value: 'EXT 2430HE (or similar flat-panel detector)' },
    { label: 'Key modification', value: 'Automated detector table (X, Y, Z)' },
  ],
  },
  {
  id: '9',
  slug: 'rust-m2',
  name: 'RUST-M2',
  category: 'medicine',
  shortDescription:
    'X-ray installation for irradiation of blood and its components RUST-M2',
  fullDescription:
    'The RUST M2 installation is designed for X-ray irradiation of donor blood, its components, and other biological objects and tissues. The areas of application of the installation are blood banks, hematological, oncological, genetic, microbiological institutes and research centers, clinics for the treatment of immunosuppressed patients, bone marrow transplantation centers, treatment of blood pathology and leukemia, operating rooms (surgical, cardiological) departments, procedure rooms of hospitals and polyclinics, blood transfusion stations and centers.\n\nThe installation complies with the requirements of Russian and international standards: GOST IEC 61010-1 (IEC 61010-1), GOST R IEC 61326-1 (IEC 61326-1), GOST R 52938-2008, GOST R ISO 51939-2011 (ISO/ASTM 51939). The installation is a self-shielded generating source of ionizing (X-ray) radiation formed by one or two emitters on X-ray tubes.',
  image: '/images/products/rustm2.jpg',
  features: [
    'High reliability and durability of emitters',
    'High irradiation speed',
    'Scanning of the unique donation code and printing of labels with the dose and date of irradiation',
    'Maintenance of a database of operators and irradiated blood bags',
    'Operation without connection to external liquid cooling',
  ],
  specs: [
    { label: 'Anode voltage range', value: '60-220 kV' },
    { label: 'Nominal anode current', value: '5 mA' },
    { label: 'Maximum dose rate of blood bag irradiation', value: '2.5 Gy/min' },
    { label: 'Power supply', value: '220 V' },
    { label: 'Weight', value: 'no more than 800 kg' },
    { label: 'Nominal consumption', value: '4 kW/h' },
  ],
  },
  {
  id: '10',
  slug: 'eagle2',
  name: 'OREL-2',
  category: 'mobile',
  shortDescription:
    'Installation for non-destructive testing of printed circuit boards and electronic components "Orel-2"',
  fullDescription:
    'The Orel-2 installation allows for the examination of microelectronics products using the tomosynthesis method and subsequent reconstruction of 3D models.\n\nThe installation is designed for quality control of the assembly of microelectronics products (including processors) and allows for the detection of a wide range of various defects.',
  image: '/images/products/eagle2.jpg',
  features: [
    'Detection of defects in printed circuit boards',
    'Detection of defects in soldered joints',
    'Detection of defects in electronic radio components',
    'Movement system',
    'Software',
  ],
  specs: [
    { label: 'Anode voltage range', value: 'from 50 to 160 kV' },
    { label: 'Nominal anode current', value: '0.1 mA' },
    { label: 'Nominal effective focal spot size', value: '1 µm' },
    { label: 'Power supply', value: '220 V' },
    { label: 'Weight', value: 'no more than 1600 kg' },
    { label: 'Range of movement of the inspected object',
    value: 
    ['Axis A (arc): 0–70°',
    'Axis X: ±150 mm',
    'Axis Y: ±150 mm',
    'Axis Z: 300 mm',
    'Axis X1: 130 mm',
    'Axis C (table): 360°',],
    },
  ],
  },
  {
    id: '11',
    slug: 'urs',
    name: 'URS',
    category: 'mobile',
    shortDescription:
      'X-ray television installation URS-800',
    fullDescription:
      'The stationary X-ray television installation is designed for quality control of castings, welded and soldered joints of parts with maximum dimensions of 700x700x700 mm (W:H:D) made of aluminum, titanium alloys, steels, and other materials with a total wall thickness of 60-70 mm.\n\nThe installation provides the ability to detect defects in castings, welded and soldered joints, their type, nature, and size, followed by determination of their location through digital processing of the resulting image of the part.\n\nThe result of the complex\'s operation is digital images of the inspected parts containing information about the location, size, and shape of defects, inhomogeneous density, and foreign inclusions.',
    image: '/images/products/urs.jpg',
    features: [
      'Detection of casting defects',
      'Detection of welded joint defects',
      'Detection of soldered joint defects',
      'Movement system',
      'Software',
    ],
    specs: [
      { label: 'Working surface size', value: '23 x 29 cm' },
      { label: 'Pixel pitch', value: '76 µm' },
      { label: 'ADC', value: '16 bit' },
      { label: 'Resolution', value: '3840 x 3072' },
      { label: 'Flat-panel detector', value: 'DiaVi 2430HE' },
    ],
  },
];
