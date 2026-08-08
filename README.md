# Otto Brothers — QR Menü

Otto Brothers Pizza için hazırlanmış, tamamen ücretsiz araçlarla geliştirilip barındırılan, çok dilli ve animasyonlu bir dijital QR menü.

<p align="center">
  <img src="docs/screenshots/home.png" width="260" alt="Ana sayfa" />
  <img src="docs/screenshots/sinirsiz-pizza.png" width="260" alt="Sınırsız Pizza detay sayfası" />
  <img src="docs/screenshots/icecekler.png" width="260" alt="İçecekler sayfası" />
</p>

## Öne çıkanlar

- **4 kategori, tek dokunuşla erişim** — Sınırsız Pizza, Gel Al Pizza, Pizza + İçecek, İçeceklerimiz
- **Pizza dilimi temalı geçiş animasyonu** — kategoriler arası geçişte ve ilk açılışta GSAP ile özel bir "dilim birleşme/dağılma" efekti
- **3 dil desteği** — Türkçe, İngilizce, Rusça (react-i18next), tercih tarayıcıda hatırlanır
- **`prefers-reduced-motion` desteği** — animasyonlar erişilebilirlik tercihine göre otomatik sadeleşir
- **Mobil öncelikli tasarım** — QR ile taranan bir menü olarak %100 telefon deneyimine göre kurgulandı

## Tech stack

| Katman | Seçim |
|---|---|
| Framework | React 19 + Vite |
| Yönlendirme | React Router (HashRouter) |
| Stil | Tailwind CSS v4 |
| Animasyon | GSAP |
| Çoklu dil | i18next / react-i18next |
| İkonlar | lucide-react + özel SVG illüstrasyonlar |

## Proje yapısı

```
src/
├── data/menu.js          # Yapısal menü verisi (fiyat, görsel, slug)
├── locales/*.json        # tr / en / ru çevirileri
├── context/               # Sayfa geçişi animasyon context'i (GSAP)
├── components/            # Kart, ikon, header/footer, politika bileşenleri
├── pages/                 # Home, kategori detay sayfaları
└── hooks/                 # Menü içeriğini dil ile birleştiren hook'lar
```

## Geliştirme

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # prod derleme
npm run preview   # prod build'i yerelde önizle
```

## Notlar

- Pizza ve içecek görselleri, ücretsiz stok fotoğraf kaynaklarından (Unsplash, Pexels) seçilmiştir; marka çakışması olmaması için içecek görsellerinin çoğu markasız/soyut (sıvı + kabarcık) çekimlerdir.
- Barındırma tamamen ücretsiz katmanlarla (Vercel/GitHub Pages) yapılacak şekilde tasarlanmıştır — backend veya veritabanı gerektirmez.

---

Created by **Ulutan BARLAS** — Full-Stack Developer
