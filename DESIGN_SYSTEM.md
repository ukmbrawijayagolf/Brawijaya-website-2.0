# 🏛️ DESIGN SYSTEM SPECIFICATION: BRAWIJAYA GOLF (ALBATROS)
> **Versi:** 2.0 • **Edisi:** Collegiate Luxury Golf Aesthetic  
> **Unit Kegiatan Mahasiswa:** Brawijaya Golf (ALBATROS) — Universitas Brawijaya Malang  
> **Tujuan Dokumen:** Digunakan sebagai panduan acuan standar (*Single Source of Truth*) untuk merancang dan mengimplementasikan halaman baru (`E-Learning`, `About Detail`, `Member Dashboard`, `Turnamen Registration`, dll.) tanpa perlu penyesuaian ulang desain. Cukup berikan dokumen ini ke developer atau prompt AI untuk menghasilkan halaman dengan konsistensi 100%.

---

## 1. Filosofi & Karakter Visual (Design Tone)
* **Karakter Utama:** *Prestigious, Collegiate Heritage, Architectural Elegance, Athletic Precision*.
* **Inspirasi:** Perpaduan antara kemewahan klub golf kejuaraan dunia (*The Masters / Augusta National*, *St Andrews*) dengan semangat kejuaraan universitas elit (*Collegiate Athletics*).
* **Hindari:** Warna hijau neon cerah yang murahan, layout datar tanpa kedalaman (*flat generic*), font standar browser (Arial/Times New Roman), tombol kotak polos tanpa border highlight/glow, serta elemen grafis non-golf yang ramai.

---

## 2. Palet Warna Resmi (Color Palette Tokens)

Gunakan **hanya** kombinasi 5 warna resmi berikut beserta nilai opacity yang ditentukan:

| Token Name | Hex Code | RGB | Karakter & Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| `--color-black` | `#000000` | `rgb(0, 0, 0)` | **Deep Noir Canvas:** Background paling dasar, footer base, kontras teks putih pada elemen tertentu. |
| `--color-navy` | `#111D49` | `rgb(17, 29, 73)` | **Imperial Midnight Navy:** Warna primer identitas UKM. Digunakan untuk background kartu (*glassmorphic card*), navbar blur, badge container, dan border aksen. |
| `--color-slate` | `#6386AC` | `rgb(99, 134, 172)` | **Fairway Slate Blue:** Warna sekunder. Digunakan untuk ikon, teks subjudul, garis separator, aksen hover, dan tombol sekunder. |
| `--color-frost` | `#D8DFE5` | `rgb(216, 223, 229)` | **Frost Platinum Gray:** Warna netral dingin. Digunakan untuk teks deskripsi isi (*body text*), border tipis 1px, chip pill, dan tag kategori. |
| `--color-ivory` | `#FDF6E5` | `rgb(253, 246, 229)` | **Warm Ivory Gold / Cream:** Warna aksen mewah (*luxury highlight*). Digunakan untuk teks judul utama (H1/H2), tombol *Call-to-Action* primer, glowing border, dan piala/prestasi. |

### Translucent & Glassmorphism Tokens
```css
--bg-dark: #070b18;
--bg-navy-90: rgba(17, 29, 73, 0.92);
--bg-navy-80: rgba(17, 29, 73, 0.82);
--bg-navy-60: rgba(17, 29, 73, 0.60);
--bg-card: rgba(17, 29, 73, 0.55);
--bg-card-hover: rgba(22, 38, 92, 0.75);

--border-subtle: rgba(216, 223, 229, 0.14);
--border-light: rgba(216, 223, 229, 0.28);
--border-gold: rgba(253, 246, 229, 0.45);

--shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.35);
--shadow-md: 0 10px 30px rgba(7, 11, 24, 0.55);
--shadow-lg: 0 18px 45px rgba(7, 11, 24, 0.75);
--shadow-gold: 0 8px 24px rgba(253, 246, 229, 0.25);
--shadow-glow: 0 0 35px rgba(99, 134, 172, 0.28);
```

---

## 3. Tipografi (Typography Hierarchy)

Website menggunakan 2 keluarga font Google Fonts:
1. **Headings & Brand Title:** `'Cinzel', 'Playfair Display', Georgia, serif`
2. **Body & Interface Text:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`

### Skala Tipografi:
- **Hero Title (H1):** `clamp(2.8rem, 6.5vw, 5.2rem)` • Weight: 800 • Line-height: 1.08 • Letter-spacing: `0.04em` • Warna: `#FDF6E5`
- **Section Title (H2):** `clamp(2rem, 4vw, 3rem)` • Weight: 700 • Line-height: 1.25 • Warna: `#FDF6E5` (opsional berikan sentuhan *italic serif* untuk judul prestisius seperti *"Dari UBG untuk Brawijaya"* dan *"Kegiatan Kami"*).
- **Card Title (H3):** `1.3rem - 1.6rem` • Weight: 700 • Warna: `#FDF6E5`
- **Sub-heading / Kategori / Badge:** `0.75rem - 0.85rem` • Weight: 700 • Letter-spacing: `0.12em` • Text-transform: `uppercase` • Warna: `#6386AC` atau `#FDF6E5`
- **Body Text (Paragraph):** `0.95rem - 1.05rem` • Weight: 400 • Line-height: 1.75 • Warna: `#D8DFE5`
- **Muted Notes / Metadata:** `0.78rem - 0.85rem` • Weight: 400 • Warna: `#8fa7c4`

---

## 4. Pola Komponen Standar (Reusable Component Patterns)

### A. Kartu Kaca Mewah (*Luxury Glassmorphic Card*)
Gunakan pola ini untuk setiap wadah konten informasi, artikel, modul, dan prestasi:
```css
.luxury-card {
  background: rgba(17, 29, 73, 0.55);
  border: 1px solid rgba(216, 223, 229, 0.14);
  border-radius: 20px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(7, 11, 24, 0.55);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Garis aksen emas di bagian atas kartu */
.luxury-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(253, 246, 229, 0.45), transparent);
  opacity: 0.6;
}

.luxury-card:hover {
  transform: translateY(-4px);
  background: rgba(22, 38, 92, 0.75);
  border-color: rgba(216, 223, 229, 0.28);
  box-shadow: 0 18px 45px rgba(7, 11, 24, 0.75), 0 0 35px rgba(99, 134, 172, 0.28);
}
```

### B. Tombol Utama (*Primary Call to Action*)
Tombol beraksen Ivory Gold (`#FDF6E5`) dengan teks Navy (`#111D49`):
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 9999px; /* Pill */
  background: #FDF6E5;
  color: #111D49;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 4px 20px rgba(253, 246, 229, 0.25);
  transition: all 0.35s ease;
  border: none;
  cursor: pointer;
}
.btn-primary:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(253, 246, 229, 0.4);
}
```

### C. Tombol Sekunder (*Secondary Glass Button*)
Tombol transparan dengan bingkai Slate Blue (`#6386AC`):
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 9999px;
  background: rgba(17, 29, 73, 0.7);
  color: #FDF6E5;
  border: 1px solid #6386AC;
  backdrop-filter: blur(8px);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.35s ease;
  cursor: pointer;
}
.btn-secondary:hover {
  background: rgba(99, 134, 172, 0.25);
  border-color: #D8DFE5;
  transform: translateY(-2px);
  color: #ffffff;
}
```

### D. Section Badge / Category Pill
```css
.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 9999px;
  background: rgba(99, 134, 172, 0.15);
  border: 1px solid rgba(216, 223, 229, 0.25);
  color: #FDF6E5;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

---

## 5. Pola Layout & Spacing
- **Container Max-Width:** `1240px`
- **Section Padding Desktop:** `100px 0` (Mobile: `64px 0`)
- **Grid Gap:** `24px` atau `28px`
- **Border Radius:**
  - Kecil (Input / Ikon box): `8px - 12px`
  - Kartu Standar: `20px`
  - Kartu Besar / Modal: `28px`
  - Tombol / Chip: `9999px` (Pill Shape)

---

## 6. Elemen Khas Olahraga Golf (Golf Signature Motifs)
1. **Tekstur Dimple Golf Ball:** Pola titik-titik samar berulang pada overlay background:
   ```css
   .golf-pattern-overlay {
     position: absolute;
     inset: 0;
     background-image: radial-gradient(rgba(216, 223, 229, 0.06) 1px, transparent 1px);
     background-size: 24px 24px;
     pointer-events: none;
   }
   ```
2. **Ikonografi & Visual Motifs:** Bendera golf (*Pin Flag*), stik bersilang (*Crossed Clubs*), bola golf dengan tekstur dimple, fairway green, lambang sayap burung elang laut (*Albatros*).
3. **Penyebutan Istilah Resmi:** *Handicap Index*, *Gross/Nett Score*, *18-Hole Championship Course*, *Double Eagle / Albatross (-3)*, *Tee Box*, *Putting Green*, *Course Management*, *R&A / USGA Rules*.

---

## 7. Arsitektur Data Firebase Firestore
Jika Anda menambahkan halaman baru yang membutuhkan data dinamis, gunakan konvensi koleksi Firestore berikut:

- **Koleksi `kegiatan`:**
  - `title`: String (Judul kegiatan)
  - `category`: String (`Turnamen` | `Pelatihan` | `Latihan` | `Seminar`)
  - `date`: String / Timestamp (Tanggal pelaksanaan)
  - `location`: String (Nama lapangan / venue)
  - `description`: String (Deskripsi lengkap kegiatan)
  - `image`: String (URL foto dokumentasi resolusi tinggi)
  - `highlight`: String (Gelar juara / pencapaian utama)
  - `participants`: String (Jumlah peserta)

- **Koleksi `registrasi_anggota`:**
  - `fullName`: String (Nama lengkap mahasiswa)
  - `nim`: String (NIM Universitas Brawijaya)
  - `faculty`: String (Fakultas di UB)
  - `phone`: String (Nomor WhatsApp)
  - `experience`: String (Tingkat kemahiran golf)
  - `createdAt`: ServerTimestamp

- **Koleksi `modul_elearning`:**
  - `title`: String
  - `level`: String (`Beginner` | `Intermediate` | `Advanced`)
  - `duration`: String
  - `description`: String
  - `videoUrl`: String

---

## 8. Template Prompt AI untuk Membuat Halaman Baru
Ketika Anda ingin membuat halaman baru (misalnya halaman detail `E-Learning.jsx`, `About.jsx`, atau `TournamentRegistration.jsx`), cukup salin dan tempelkan prompt berikut:

```text
Buatkan halaman [NAMA_HALAMAN] untuk UKM Brawijaya Golf (ALBATROS) Universitas Brawijaya dengan mengikuti secara persis spesifikasi pada DESIGN_SYSTEM.md:
- Gunakan React.js + Vanilla CSS.
- Terapkan 5 palet warna resmi: Deep Noir (#000000), Imperial Navy (#111D49), Fairway Slate (#6386AC), Frost Gray (#D8DFE5), dan Ivory Cream (#FDF6E5).
- Terapkan tipografi font serif ('Cinzel'/'Playfair Display') untuk judul dan 'Plus Jakarta Sans' untuk teks isi.
- Gunakan komponen .luxury-card dengan glassmorphism (backdrop-filter: blur(14px)) dan border aksen emas/ivory.
- Gunakan tombol .btn-primary (#FDF6E5 dengan teks #111D49) dan .btn-secondary (#111D49 dengan border #6386AC).
- Sambungkan form atau data ke Firebase Firestore sesuai skema kegiatanService.js.
```
