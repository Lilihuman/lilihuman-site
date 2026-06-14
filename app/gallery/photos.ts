export type Category = 'family' | 'travel' | 'business' | 'adventures';

export type CategoryMeta = {
  slug: Category;
  title: string;
  eyebrow: string;
  description: string;
};

// Order here is the order categories appear on the landing page.
export const categories: CategoryMeta[] = [
  {
    slug: 'family',
    title: 'Family & Friends',
    eyebrow: 'Family & Friends',
    description: 'Weddings, babies, and the people who made everything matter.',
  },
  {
    slug: 'travel',
    title: 'Travel',
    eyebrow: 'Travel',
    description: 'Cities, coastlines, and passport stamps from around the world.',
  },
  {
    slug: 'adventures',
    title: 'Adventures',
    eyebrow: 'Adventures',
    description: 'Bungee jumps, volcanoes, paragliding — a life lived out loud.',
  },
  {
    slug: 'business',
    title: 'Business',
    eyebrow: 'Business',
    description: 'Work, coaching, and building something of my own.',
  },
];

export type Photo = {
  src: string;
  caption: string;
  category?: Category;
};

// Single source of truth for every gallery photo.
// Set `category` on a photo to file it under one of the categories above.
// Photos with no category still appear in the "All photos" view.
const basePhotos: Photo[] = [
  { src: '/images/gallery/paragliding 013.jpg', caption: 'Paragliding', category: 'adventures' },
  { src: '/images/gallery/paragliding 008.jpg', caption: 'Paragliding', category: 'adventures' },
  { src: '/images/gallery/whistler bungee jump.JPG', caption: 'Whistler bungee jump', category: 'adventures' },
  { src: '/images/gallery/highest bungee jump in the world south africa.JPG', caption: 'Highest bungee jump in the world — South Africa', category: 'adventures' },
  { src: '/images/gallery/hiking an active volcano in guatemala.JPG', caption: 'Hiking an active volcano in Guatemala', category: 'adventures' },
  { src: '/images/gallery/takal guatemala.JPG', caption: 'Tikal, Guatemala', category: 'travel' },
  { src: '/images/gallery/caye caulker belize.JPG', caption: 'Caye Caulker, Belize', category: 'travel' },
  { src: '/images/gallery/Las vegas.JPG', caption: 'Las Vegas', category: 'travel' },
  { src: '/images/gallery/pocna isla mujeres.JPG', caption: 'Pocna, Isla Mujeres', category: 'travel' },
  { src: '/images/gallery/havana cuba.JPG', caption: 'Havana, Cuba', category: 'travel' },
  { src: '/images/gallery/sandles bahamas.jpg', caption: 'Bahamas', category: 'travel' },
  { src: '/images/gallery/gastown vancouver.jpg', caption: 'Gastown, Vancouver', category: 'travel' },
  { src: '/images/gallery/stanley park vancouver.jpg', caption: 'Stanley Park, Vancouver', category: 'travel' },
  { src: '/images/gallery/surfing tofino bc.jpg', caption: 'Surfing in Tofino, BC', category: 'adventures' },
  { src: '/images/gallery/westcoast trails.JPG', caption: 'West Coast trails', category: 'travel' },
  { src: '/images/gallery/rockies.JPG', caption: 'The Rockies', category: 'travel' },
  { src: '/images/gallery/south africa.JPG', caption: 'South Africa', category: 'travel' },
  { src: '/images/gallery/south africa (1).JPG', caption: 'South Africa', category: 'travel' },
  { src: '/images/gallery/south africa (2).JPG', caption: 'South Africa', category: 'travel' },
  { src: '/images/gallery/south africa (3).JPG', caption: 'South Africa', category: 'travel' },
  { src: '/images/gallery/colosseum rome.JPG', caption: 'Colosseum, Rome', category: 'travel' },
  { src: '/images/gallery/florence italy.JPG', caption: 'Florence, Italy', category: 'travel' },
  { src: '/images/gallery/pisa italy.JPG', caption: 'Pisa, Italy', category: 'travel' },
  { src: '/images/gallery/venice italy.JPG', caption: 'Venice, Italy', category: 'travel' },
  { src: '/images/gallery/vence italy.JPG', caption: 'Vence, Italy', category: 'travel' },
  { src: '/images/gallery/verona italy juliet.JPG', caption: "Verona, Italy — Juliet's balcony", category: 'travel' },
  { src: '/images/gallery/london.JPG', caption: 'London', category: 'travel' },
  { src: '/images/gallery/nothingham.JPG', caption: 'Nottingham', category: 'travel' },
  { src: '/images/gallery/louvre.JPG', caption: 'The Louvre, Paris', category: 'travel' },
  { src: '/images/gallery/notre-dame cathedral of paris.JPG', caption: 'Notre-Dame Cathedral, Paris', category: 'travel' },
  { src: '/images/gallery/catacomb.JPG', caption: 'The Catacombs, Paris', category: 'travel' },
  { src: '/images/gallery/kicked a bunny in paris.JPG', caption: 'Kicked a bunny in Paris', category: 'travel' },
  { src: '/images/gallery/escargo in paris.JPG', caption: 'Escargot in Paris', category: 'travel' },
  { src: '/images/gallery/nice france.JPG', caption: 'Nice, France', category: 'travel' },
  { src: '/images/gallery/greece (1).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (2).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (3).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (4).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (5).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (6).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (7).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (8).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (9).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (10).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/greece (11).jpg', caption: 'Greece', category: 'travel' },
  { src: '/images/gallery/elephant mud bath thailand.jpg', caption: 'Elephant mud bath, Thailand', category: 'adventures' },
  { src: '/images/gallery/swimming with elephants thailand.jpg', caption: 'Swimming with elephants, Thailand', category: 'adventures' },
  { src: '/images/gallery/thailand.jpg', caption: 'Thailand', category: 'travel' },
  { src: '/images/gallery/cambodia.jpg', caption: 'Cambodia', category: 'travel' },
  { src: '/images/gallery/halong bay vientnam.jpg', caption: 'Ha Long Bay, Vietnam', category: 'travel' },
  { src: '/images/gallery/mud fishing vietnam.jpg', caption: 'Mud fishing, Vietnam', category: 'adventures' },
  { src: '/images/gallery/bathman.jpg', caption: 'Batman', category: 'adventures' },
  { src: '/images/gallery/engagement photos.jpg', caption: 'Engagement', category: 'family' },
  { src: '/images/gallery/engagement photos 2.jpg', caption: 'Engagement', category: 'family' },
  { src: '/images/gallery/wedding.jpg', caption: 'Wedding day', category: 'family' },
  { src: '/images/gallery/wedding dance.jpg', caption: 'Wedding dance', category: 'family' },
  { src: '/images/gallery/pregnancy  (1).JPG', caption: 'Pregnancy', category: 'family' },
  { src: '/images/gallery/pregnancy  (2).JPG', caption: 'Pregnancy', category: 'family' },
  { src: '/images/gallery/pregnancy  (3).JPG', caption: 'Pregnancy', category: 'family' },
  { src: '/images/gallery/baby olive.jpg', caption: 'Baby Olive', category: 'family' },
  { src: '/images/gallery/nico infant photos (1).JPG', caption: 'Baby Nico', category: 'family' },
  { src: '/images/gallery/nico infant photos (2).JPG', caption: 'Baby Nico', category: 'family' },
  { src: '/images/gallery/nico infant photos (3).JPG', caption: 'Baby Nico', category: 'family' },
  { src: '/images/gallery/nico infant photos (4).JPG', caption: 'Baby Nico', category: 'family' },
  { src: '/images/gallery/olive paddleboarding.jpg', caption: 'Olive paddleboarding', category: 'adventures' },
  { src: '/images/gallery/forest stream.jpg', caption: 'Forest stream', category: 'business' },
];

export const photos = basePhotos.map((p, i) => ({ ...p, id: i + 1, alt: p.caption }));

export type PhotoWithMeta = (typeof photos)[number];

export function photosInCategory(slug: Category) {
  return photos.filter((p) => p.category === slug);
}

export function categoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
