export interface Fabric {
  id: string;
  name: string;
  category: string;
  image: string; // URL placeholder
  description: string;
}

export const fabrics: Fabric[] = [
  {
    id: '1',
    name: 'Royal Silk Velvet',
    category: 'Silk',
    image: '/model1.jpg',
    description: 'Luxurious deep red velvet perfect for evening gowns.',
  },
  {
    id: '2',
    name: 'Organic Linen Weave',
    category: 'Linen',
    image: '/model2.jpg',
    description: 'Breathable, natural linen in earthy beige tones.',
  },
  {
    id: '3',
    name: 'Damask Gold Pattern',
    category: 'Upholstery',
    image: '/model3.jpg',
    description: 'Intricate golden patterns for high-end furniture.',
  },
  {
    id: '4',
    name: 'Midnight Blue Satin',
    category: 'Satin',
    image: '/model4.jpg',
    description: 'Smooth, glossy finish for premium drapery.',
  },
];