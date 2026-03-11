import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProdukList } from '../hooks/useProdukList';
import SearchBar from '../components/SearchBar';
import ProdukTable from '../components/ProdukTable';

function ProdukListPage() {
  const { data, loading, error, fetchData, removeProduk } = useProdukList();
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = (merek) => {
    setSearchKey(merek);
    fetchData(merek);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin ingin menghapus produk ini?')) return;
    try {
      await removeProduk(id);
      fetchData(searchKey || undefined);
    } catch {
      alert('Gagal menghapus produk');
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Daftar Produk Kendaraan</h2>
        <Link to="/create" className="btn btn-success">
          + Tambah Produk
        </Link>
      </div>

      <SearchBar onSearch={handleSearch} />

      {error && <div className="alert alert-error">{error}</div>}

      {loading ? (
        <p className="loading-text">Memuat data...</p>
      ) : (
        <ProdukTable data={data} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default ProdukListPage;
