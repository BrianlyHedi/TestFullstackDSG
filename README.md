# PT XYZ - Website Kendaraan Bekas Pakai

Test Aplikasi fullstack CRUD untuk manajemen produk kendaraan bekas pakai.

## Tech Stack
- **Frontend**: React.js + Vite + React Router
- **Backend**: NestJS + Prisma ORM + PostgreSQL

## Struktur Project
```
├── BE/                            ← Backend (NestJS + Prisma)
│   ├── prisma/
│   │   └── schema.prisma          ← Prisma schema (model Produk)
│   ├── src/
│   │   ├── main.ts                ← Entry point + CORS + Validation
│   │   ├── app.module.ts          ← Root module
│   │   ├── prisma/
│   │   │   ├── prisma.module.ts   ← Global Prisma module
│   │   │   └── prisma.service.ts  ← Prisma client service
│   │   └── produk/
│   │       ├── produk.module.ts
│   │       ├── produk.controller.ts
│   │       ├── produk.service.ts
│   │       └── dto/
│   │           ├── index.ts
│   │           ├── create-produk.dto.ts
│   │           ├── update-produk.dto.ts
│   │           └── query-produk.dto.ts
│   ├── .env                       ← Konfigurasi DATABASE_URL
│   └── package.json
│
├── FE/                            ← Frontend (React.js + Vite)
│   ├── src/
│   │   ├── main.jsx               ← Entry point
│   │   ├── App.jsx                ← Router setup
│   │   ├── components/            ← Reusable components
│   │   │   ├── Layout.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── ProdukTable.jsx
│   │   │   └── ProdukForm.jsx
│   │   ├── pages/                 ← Page components
│   │   │   ├── ProdukListPage.jsx
│   │   │   ├── ProdukCreatePage.jsx
│   │   │   └── ProdukEditPage.jsx
│   │   ├── hooks/                 ← Custom hooks
│   │   │   ├── useProdukList.js
│   │   │   └── useProdukForm.js
│   │   ├── services/              ← API layer
│   │   │   ├── apiClient.js
│   │   │   └── produkService.js
│   │   ├── utils/                 ← Utility functions
│   │   │   └── formatRupiah.js
│   │   └── styles/
│   │       └── index.css
│   └── package.json
│
├── database.sql                   ← SQL script untuk PostgreSQL
└── README.md
```

## Cara Menjalankan

### 1. Setup Database PostgreSQL
CREATE DATABASE pt_xyz_kendaraan;



### 2. Backend (NestJS + Prisma)
```bash
cd BE

npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
```
Backend berjalan di **http://localhost:3000**

### 3. Frontend (React)
```bash
cd FE
npm install
npm run dev
```
Frontend berjalan di **http://localhost:5173**

## API Endpoints (prefix: /api)
| Method | Endpoint              | Keterangan                        |
|--------|-----------------------|------------------------------------|
| GET    | /api/produk           | Ambil semua produk                 |
| GET    | /api/produk?merek=xxx | Cari produk berdasarkan merek      |
| GET    | /api/produk/:id       | Ambil detail produk                |
| POST   | /api/produk           | Tambah produk baru                 |
| PUT    | /api/produk/:id       | Update produk                      |
| DELETE | /api/produk/:id       | Hapus produk                       |

## Fitur
1. Tabel produk dengan kolom: ID, Merek, Jenis, Stok, Harga, Keterangan, Aksi (Edit/Delete)
2. Fitur Create (tambah produk baru) dengan halaman form terpisah
3. Fitur Search berdasarkan merek produk (case-insensitive)
4. Fitur Edit produk dengan halaman form terpisah
5. Fitur Delete produk dengan konfirmasi
6. Semua operasi CRUD tersinkronisasi dengan database PostgreSQL melalui Prisma ORM
