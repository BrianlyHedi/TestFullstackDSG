import { Link } from 'react-router-dom';

function ProdukForm({ form, onChange, onSubmit, submitting, error, submitLabel = 'Simpan' }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="form-card">
      {error && <div className="alert alert-error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="merek">Merek Produk</label>
          <input
            id="merek"
            name="merek"
            type="text"
            value={form.merek}
            onChange={onChange}
            placeholder="Contoh: Toyota, Daihatsu, Honda"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="jenis">Jenis Produk</label>
          <input
            id="jenis"
            name="jenis"
            type="text"
            value={form.jenis}
            onChange={onChange}
            placeholder="Contoh: SUV, Sedan, MPV, Hatchback"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="stok">Jumlah Stok</label>
            <input
              id="stok"
              name="stok"
              type="number"
              min="0"
              value={form.stok}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="harga">Harga (Rp)</label>
            <input
              id="harga"
              name="harga"
              type="number"
              min="0"
              value={form.harga}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="keterangan">Keterangan</label>
          <textarea
            id="keterangan"
            name="keterangan"
            rows="3"
            value={form.keterangan}
            onChange={onChange}
            placeholder="Deskripsi kondisi kendaraan..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-success" disabled={submitting}>
            {submitting ? 'Menyimpan...' : submitLabel}
          </button>
          <Link to="/" className="btn btn-secondary">
            Batal
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ProdukForm;
