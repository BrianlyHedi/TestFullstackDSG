import { useNavigate, useParams } from 'react-router-dom';
import { useProdukForm } from '../hooks/useProdukForm';
import ProdukForm from '../components/ProdukForm';

function ProdukEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { form, loading, submitting, error, handleChange, submitUpdate } = useProdukForm(id);

  const handleSubmit = async () => {
    const success = await submitUpdate();
    if (success) {
      alert('Produk berhasil diperbarui!');
      navigate('/');
    }
  };

  if (loading) return <p className="loading-text">Memuat data produk...</p>;

  return (
    <div>
      <h2>Edit Produk (ID: {id})</h2>
      <ProdukForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitting={submitting}
        error={error}
        submitLabel="Update"
      />
    </div>
  );
}

export default ProdukEditPage;
