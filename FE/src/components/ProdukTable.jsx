import { useNavigate } from 'react-router-dom';
import { formatRupiah } from '../utils/formatRupiah';

function ProdukTable({ data, onDelete }) {
  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div className="empty-state">
        <p>Tidak ada data produk ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Merek</th>
            <th>Jenis</th>
            <th>Stok</th>
            <th>Harga</th>
            <th>Keterangan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.merek}</td>
              <td>{p.jenis}</td>
              <td>{p.stok}</td>
              <td className="text-right">{formatRupiah(p.harga)}</td>
              <td>{p.keterangan}</td>
              <td>
                <div className="action-btns">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => navigate(`/edit/${p.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(p.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdukTable;
