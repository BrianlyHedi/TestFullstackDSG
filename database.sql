-- ============================================================
-- PT XYZ - Kendaraan Bekas Pakai
-- SQL Script untuk PostgreSQL
-- ============================================================

-- 1) Buat database (jalankan di psql atau pgAdmin sebagai superuser)
-- CREATE DATABASE pt_xyz_kendaraan;

-- 2) Gunakan database pt_xyz_kendaraan lalu jalankan script di bawah:

-- Buat tabel produk
CREATE TABLE IF NOT EXISTS produk (
    id          SERIAL PRIMARY KEY,
    merek       VARCHAR(100) NOT NULL,
    jenis       VARCHAR(100) NOT NULL,
    stok        INTEGER NOT NULL DEFAULT 0 CHECK (stok >= 0),
    harga       DECIMAL(15, 2) NOT NULL DEFAULT 0 CHECK (harga >= 0),
    keterangan  TEXT DEFAULT '',
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Index untuk pencarian berdasarkan merek (case-insensitive)
CREATE INDEX IF NOT EXISTS idx_produk_merek ON produk (LOWER(merek));

-- Seed data contoh kendaraan bekas
INSERT INTO produk (merek, jenis, stok, harga, keterangan) VALUES
    ('Toyota', 'SUV', 5, 250000000, 'Fortuner 2020 - Kondisi sangat baik'),
    ('Toyota', 'Sedan', 3, 180000000, 'Camry 2019 - Low KM'),
    ('Toyota', 'MPV', 8, 220000000, 'Avanza 2021 - Servis rutin'),
    ('Daihatsu', 'MPV', 6, 150000000, 'Xenia 2020 - Full original'),
    ('Daihatsu', 'SUV', 2, 200000000, 'Terios 2021 - Mulus'),
    ('Honda', 'Sedan', 4, 270000000, 'Civic 2020 - Turbo'),
    ('Honda', 'SUV', 3, 350000000, 'CR-V 2021 - Prestige'),
    ('Mitsubishi', 'SUV', 2, 380000000, 'Pajero Sport 2020 - Dakar'),
    ('Suzuki', 'Hatchback', 7, 130000000, 'Swift 2019 - Matic'),
    ('Suzuki', 'SUV', 4, 250000000, 'XL7 2021 - Alpha');
