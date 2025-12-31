# 🎁 Diyah Gift

> Website pemasaran untuk penjualan kado wisuda dan buket bunga untuk momen spesial wisuda Anda.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.0-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-red)

---

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Fitur Utama](#-fitur-utama)
- [Tech Stack](#-tech-stack)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi & Setup](#-instalasi--setup)
- [Menjalankan Aplikasi](#-menjalankan-aplikasi)
- [Build untuk Produksi](#-build-untuk-produksi)
- [Komponen](#-komponen)
- [Halaman](#-halaman)
- [Produk](#-produk)
- [Kontak & Pemesanan](#-kontak--pemesanan)
- [Kontributor](#-kontributor)

---

## 🎓 Tentang Proyek

**Diyah Gift** adalah website pemasaran yang dirancang khusus untuk mempromosikan dan menjual berbagai produk kado wisuda. Website ini menyediakan katalog lengkap produk-produk seperti:

- 🎀 **Selempang Wisuda** - Berbagai model selempang untuk momen wisuda
- 💐 **Buket Bunga** - Buket bunga cantik untuk hadiah wisuda
- 🎁 **Produk Lainnya** - Foto polaroid dan aksesoris pendukung wisuda

Website ini dibangun menggunakan teknologi modern React + Vite untuk memberikan pengalaman pengguna yang cepat dan responsif.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🌙 **Dark Mode** | Mendukung mode gelap untuk kenyamanan pengguna |
| 📱 **Responsive Design** | Tampilan optimal di desktop dan mobile |
| 🖼️ **Galeri Produk** | Katalog produk dengan filter berdasarkan kategori |
| 📞 **Multi-Channel Contact** | Hubungi via WhatsApp atau Email |
| ⚡ **Fast Loading** | Dioptimalkan dengan Vite untuk performa maksimal |
| 🎨 **Modern UI** | Desain modern dengan TailwindCSS |

---

## 🛠️ Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| [React](https://react.dev/) | 18.3.1 | Library UI JavaScript |
| [Vite](https://vitejs.dev/) | 6.0.5 | Build tool & development server |
| [TailwindCSS](https://tailwindcss.com/) | 4.0.0 | Utility-first CSS framework |
| [React Router](https://reactrouter.com/) | 7.1.3 | Client-side routing |
| [Iconify](https://iconify.design/) | 5.2.0 | Icon library |
| [ESLint](https://eslint.org/) | 9.17.0 | Linting tool |

---

## 📁 Struktur Proyek

```plaintext
my-react-app/
├── 📂 public/                    # Asset statis
│   ├── 📂 image/                 # Gambar produk
│   │   ├── 📂 buket/             # Gambar buket (26 item)
│   │   ├── 📂 selempang/         # Gambar selempang (11 item)
│   │   └── 📂 lainnya/           # Gambar produk lainnya (9 item)
│   ├── 📄 products.json          # Data produk (JSON)
│   ├── 🖼️ logo.png               # Logo website
│   └── 🖼️ icon.png               # Favicon
│
├── 📂 src/                       # Source code utama
│   ├── 📂 components/            # Komponen React
│   │   ├── 📂 Forms/             # Komponen form (3 file)
│   │   │   ├── FormWhatsapp.jsx
│   │   │   └── FormGmail.jsx
│   │   ├── 📂 Hooks/             # Custom hooks (1 file)
│   │   │   └── useScroll.js
│   │   ├── 📂 Layouts/           # Layout komponen (12 file)
│   │   │   ├── Navigation.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CardProductLayout.jsx
│   │   │   ├── CardServiceLayout.jsx
│   │   │   ├── IntroLayout.jsx
│   │   │   ├── ExplanationLayout.jsx
│   │   │   └── ...
│   │   └── 📂 UI/                # UI komponen (6 file)
│   │       ├── Button.jsx
│   │       ├── IconModeNav.jsx
│   │       ├── Skeleton.tsx
│   │       └── ...
│   ├── 📂 pages/                 # Halaman utama (4 file)
│   │   ├── BerandaPage.jsx       # Halaman utama
│   │   ├── GaleriPage.jsx        # Halaman galeri produk
│   │   ├── KontakPage.jsx        # Halaman kontak
│   │   └── MainPage.jsx          # Main page wrapper
│   ├── 📂 assets/                # Asset internal
│   ├── 📄 App.jsx                # Root component & routing
│   ├── 📄 App.css                # Styling App
│   ├── 📄 main.jsx               # Entry point
│   └── 📄 index.css              # Global styles
│
├── 📂 dist/                      # Build output
├── 📄 index.html                 # HTML template
├── 📄 package.json               # Dependencies & scripts
├── 📄 vite.config.js             # Vite configuration
├── 📄 eslint.config.js           # ESLint configuration
├── 📄 Dockerfile                 # Docker configuration
└── 📄 README.md                  # Dokumentasi (file ini)
```

---

## 🚀 Instalasi & Setup

### Prasyarat

Pastikan Anda telah menginstall:

- [Node.js](https://nodejs.org/) versi 18.x atau lebih baru
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/mkeyzxi/diyah-gift.git
   cd diyah-gift/my-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   atau menggunakan yarn:
   ```bash
   yarn install
   ```

---

## ▶️ Menjalankan Aplikasi

### Development Mode

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📦 Build untuk Produksi

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`.

### Docker Deployment

```bash
# Build Docker image
docker build -t diyah-gift .

# Run container
docker run -p 3000:3000 diyah-gift
```

---

## 🧩 Komponen

### Layout Components (`src/components/Layouts/`)

| Komponen | Deskripsi |
|----------|-----------|
| `Navigation.jsx` | Navbar utama dengan dark mode toggle |
| `Footer.jsx` | Footer website dengan info kontak |
| `CardProductLayout.jsx` | Card untuk menampilkan produk |
| `CardServiceLayout.jsx` | Card untuk menampilkan layanan |
| `IntroLayout.jsx` | Section intro di halaman beranda |
| `ExplanationLayout.jsx` | Section penjelasan layanan |
| `WhatIsLayout.jsx` | Section "Apa itu Diyah Gift" |
| `SalempangLayout.jsx` | Section khusus produk selempang |
| `HeaderNavLayout.jsx` | Header dengan navigasi |
| `HeadingTo.jsx` | Heading dengan link |
| `SkeletonLoading.tsx` | Loading skeleton |

### UI Components (`src/components/UI/`)

| Komponen | Deskripsi |
|----------|-----------|
| `Button.jsx` | Komponen button reusable |
| `IconModeNav.jsx` | Icon toggle dark/light mode |
| `IconBasketNav.jsx` | Icon keranjang belanja |
| `Navigasi.jsx` | Navigation item |
| `Skeleton.tsx` | Skeleton loading component |
| `Triangle.jsx` | Decorative triangle shape |

### Form Components (`src/components/Forms/`)

| Komponen | Deskripsi |
|----------|-----------|
| `FormWhatsapp.jsx` | Form untuk menghubungi via WhatsApp |
| `FormGmail.jsx` | Form untuk mengirim email |

### Custom Hooks (`src/components/Hooks/`)

| Hook | Deskripsi |
|------|-----------|
| `useScroll.js` | Hook untuk scroll ke atas halaman |

---

## 📄 Halaman

### 1. Beranda (`/`)
Halaman utama yang menampilkan:
- Hero section dengan intro
- Penjelasan tentang Diyah Gift
- Produk unggulan
- Layanan yang tersedia

### 2. Galeri (`/galeri`)
Katalog lengkap produk dengan fitur:
- Filter berdasarkan kategori (Selempang, Buket, Lainnya)
- Grid tampilan produk
- Like/favorite produk

### 3. Kontak (`/kontak`)
Halaman untuk menghubungi:
- Form WhatsApp - Langsung terhubung ke WhatsApp
- Form Email - Kirim pesan via email
- Toggle antara kedua opsi kontak

---

## 🎁 Produk

Data produk disimpan di `public/products.json` dengan struktur:

```json
{
  "products": [
    {
      "title": "Nama Produk",
      "price": 12000,
      "path_img": "/image/kategori/gambar.webp",
      "like": false,
      "message": "Deskripsi produk",
      "type": "selempang | buket | lainnya"
    }
  ]
}
```

### Kategori Produk

| Kategori | Jumlah Item | Deskripsi |
|----------|-------------|-----------|
| **Selempang** | 11 | Selempang wisuda berbagai model (satu sisi, dua sisi, dengan pita, rumbai, kain satin) |
| **Buket** | 26 | Buket bunga untuk wisuda |
| **Lainnya** | 9 | Produk pendukung seperti foto polaroid 4R |

---

## 📞 Kontak & Pemesanan

Website ini menyediakan dua cara untuk menghubungi dan melakukan pemesanan:

### WhatsApp
- Langsung terhubung ke WhatsApp bisnis
- Form interaktif untuk mengirim pesan

### Email
- Form email untuk pertanyaan dan pemesanan
- Respons melalui email

---

## 🎨 Customization

### Dark Mode

Website mendukung dark mode yang dapat diaktifkan melalui toggle di navigation bar. Preferensi pengguna tersimpan di localStorage.

### Styling

Gunakan TailwindCSS untuk customization:

```css
/* Variabel warna utama di App.css */
--pinkSecondary: #...;
```

---

## 📜 Scripts yang Tersedia

```bash
npm run dev      # Jalankan development server
npm run build    # Build untuk produksi
npm run lint     # Jalankan ESLint
npm run preview  # Preview build produksi
```

---

## 🔗 Routing

| Path | Halaman | Komponen |
|------|---------|----------|
| `/` | Beranda | `BerandaPage.jsx` |
| `/galeri` | Galeri Produk | `GaleriPage.jsx` |
| `/kontak` | Kontak | `KontakPage.jsx` |
| `/testing` | Testing Layout | `CardLikeLayout.jsx` |

---

## 🐳 Docker

Proyek ini sudah dikonfigurasi dengan Docker:

```dockerfile
# Dockerfile tersedia di root project
```

---

## 🤝 Kontributor

| Nama | Role |
|------|------|
| Diyah Gift Team | Developer & Owner |

---

## 📝 Lisensi

Proyek ini bersifat **Private** dan tidak untuk distribusi publik.

---

## 📧 Dukungan

Jika Anda memiliki pertanyaan atau membutuhkan bantuan:

- 📱 **WhatsApp**: Hubungi melalui halaman Kontak
- 📧 **Email**: Kirim pesan melalui form email di website

---

<div align="center">

**💝 Diyah Gift - Hadiah Spesial untuk Momen Wisuda Anda 🎓**

Made with <b>mkeyzxi</b> ❤️ using React + Vite

</div>
