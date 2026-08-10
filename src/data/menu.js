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
  { slug: 'pepsi', brandColor: '#0a4da2', image: '/images/drinks/drink-pepsi.webp' },
  { slug: 'pepsi-max', brandColor: '#2b2b2b', image: '/images/drinks/drink-pepsi-max.webp' },
  { slug: '7up', brandColor: '#2fa63f', image: '/images/drinks/drink-7up.webp' },
  { slug: 'yedigun', brandColor: '#f2c400', image: '/images/drinks/drink-yedigun.webp' },
  { slug: 'lipton-ice-tea', brandColor: '#e8871e', image: '/images/drinks/drink-lipton.webp' },
  { slug: 'fruko-soda', brandColor: '#1c8a4b', image: '/images/drinks/drink-fruko.webp' },
]

export const SNACKS = [
  { slug: 'kajun-patates', price: null, image: '/images/snacks/kajun-patates.webp' },
  { slug: 'sosis-sogan-patates', price: null, image: '/images/snacks/sosis-sogan-patates.webp' },
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
      { type: 'info' },
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
    heroImage: '/images/drinks-hero.webp',
    drinks: DRINKS,
  },
  {
    slug: 'atistirmaliklar',
    kind: 'snacks',
    heroImage: '/images/snacks/atistirmaliklar-hero.webp',
    items: SNACKS,
  },
]

export const getCategoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug)
