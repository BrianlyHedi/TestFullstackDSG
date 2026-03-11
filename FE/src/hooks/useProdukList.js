import { useState, useEffect, useCallback } from 'react';
import produkService from '../services/produkService';

export function useProdukList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (merek) => {
    setLoading(true);
    setError(null);
    try {
      const res = await produkService.getAll(merek || undefined);
      setData(res.data);
    } catch (err) {
      setError('Gagal mengambil data produk');
    } finally {
      setLoading(false);
    }
  }, []);

  const removeProduk = useCallback(async (id) => {
    await produkService.delete(id);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData, removeProduk };
}
