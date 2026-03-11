import { useState, useEffect } from 'react';
import produkService from '../services/produkService';

export function useProdukForm(id) {
  const [form, setForm] = useState({
    merek: '',
    jenis: '',
    stok: 0,
    harga: 0,
    keterangan: '',
  });
  const [loading, setLoading] = useState(!!id);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      try {
        const res = await produkService.getById(id);
        const { merek, jenis, stok, harga, keterangan } = res.data;
        setForm({ merek, jenis, stok, harga: Number(harga), keterangan: keterangan || '' });
      } catch {
        setError('Produk tidak ditemukan');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'stok' || name === 'harga' ? Number(value) : value,
    }));
  };

  const submitCreate = async () => {
    setSubmitting(true);
    setError(null);
    try {
      await produkService.create(form);
      return true;
    } catch {
      setError('Gagal menambahkan produk');
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  const submitUpdate = async () => {
    setSubmitting(true);
    setError(null);
    try {
      await produkService.update(id, form);
      return true;
    } catch {
      setError('Gagal memperbarui produk');
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  return { form, loading, submitting, error, handleChange, submitCreate, submitUpdate };
}
