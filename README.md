## Workit Landing Page

Landing page Workit yang responsif untuk perangkat mobile, tablet, dan desktop.
Proyek ini dibuat sebagai bahan untuk Technical Skill Test.

## Tech Stack

- Next.js => React framework untuk membangun aplikasi.
- React => Membangun antarmuka berbasis komponen
- Tailwind CSS => CSS framework untuk styling.
- Typescript => Memeriksa tipe data saat pengembangan
- Framer Motion => Animasi Viewport
- pnpm v11.5.2 => Package Manager

## Installation Steps

!IMPORTANT! Pastikan Node.js dan pnpm sudah terinstall.
Node.js yang digunakan dalam project ini adalah v26.0.0

Clone Repository:

```bash
git clone https://github.com/AfifSatrio/workit-landing-page.git
```

Masuk ke folder proyek:

```bash
cd workit-landing-page
```

Install dependensi:

```bash
pnpm install
```

Jalankan development server:

```bash
pnpm run dev
```

Buka [http://localhost:3000] pada browser.

## Error Handling

### Konten bertumpuk pada layar mobile

Tinggi section berbasis viewport dan pengaturan posisi tetap membuat
konten keluar dari ruang yang tersedia. Perbaikannya adalah membiarkan
tinggi section mengikuti konten dan menggunakan layout responsif agar
bagian berikutnya tetap berada pada posisi yang sesuai.

### Foto founder terlalu kecil

Foto berada di dalam grid 12 kolom, tetapi elemen pembungkusnya tidak
memiliki pengaturan rentang kolom yang sesuai. Lebar berbasis persentase
kemudian membuat foto semakin kecil.

Perbaikannya adalah mengatur foto agar menempati lima kolom pada layar
tablet dan desktop, serta membuat gambar mengikuti lebar pembungkusnya.

### Favicon tidak muncul

File ikon perlu mengikuti penamaan yang dikenali Next.js.
Favicon ditempatkan sebagai `app/icon.png` agar Next.js otomatis
menambahkannya ke metadata halaman.

## Pemeriksaan Proyek

Jalankan lint untuk memeriksa masalah kode:

```bash
pnpm lint
```
