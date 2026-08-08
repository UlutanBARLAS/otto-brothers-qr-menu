// Otto Brothers Pizza — yapısal menü verisi (fiyat, görsel, ikon, slug).
// Çevrilebilir metinler (isim, açıklama, malzeme, politika notu) src/locales/*.json içindedir,
// slug üzerinden eşleştirilir — bkz. src/hooks/useMenuContent.js

export const PIZZA_VARIETY_SLUGS = ['karisik', 'sucuklu', 'sosisli', 'margarita']

export const PIZZA_VARIETIES = [
  { slug: 'karisik', image: '/images/pizza-karisik.webp' },
  { slug: 'sucuklu', image: '/images/pizza-sucuklu.webp' },
  { slug: 'sosisli', image: '/images/pizza-sosisli.webp' },
  { slug: 'margarita', image: '/images/pizza-margarita.webp' },
]

export const DRINKS = [
  { slug: 'pepsi', brandColor: '#0a4da2', shape: 'can' },
  { slug: 'pepsi-zero', brandColor: '#111111', shape: 'can' },
  { slug: '7up', brandColor: '#2fa63f', shape: 'can' },
  { slug: 'yedigun', brandColor: '#f2c400', shape: 'can' },
  { slug: 'lipton-ice-tea', brandColor: '#e8871e', shape: 'bottle' },
  { slug: 'fruko-soda', brandColor: '#1c8a4b', shape: 'bottle' },
]

export const CATEGORIES = [
  {
    slug: 'sinirsiz-pizza',
    kind: 'pizza-package',
    price: 339.99,
    hasPriceNote: true,
    heroImage: '/images/pizza-karisik.webp',
    varieties: PIZZA_VARIETIES,
    hasNotes: true,
    policies: [
      { type: 'warning' },
      { type: 'info' },
    ],
  },
  {
    slug: 'gel-al-pizza',
    kind: 'pizza-package',
    price: 250.0,
    heroImage: '/images/pizza-sucuklu.webp',
    varieties: PIZZA_VARIETIES,
    hasNotes: true,
  },
  {
    slug: 'pizza-icecek',
    kind: 'pizza-package',
    price: 299.99,
    hasPriceNote: true,
    heroImage: '/images/pizza-sosisli.webp',
    varieties: PIZZA_VARIETIES,
    hasNotes: true,
    includesDrinks: true,
  },
  {
    slug: 'icecekler',
    kind: 'drinks',
    heroImage: null,
    drinks: DRINKS,
  },
]

export const getCategoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug)
