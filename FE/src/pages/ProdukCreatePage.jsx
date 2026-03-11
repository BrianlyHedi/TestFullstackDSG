import { useNavigate } from 'react-router-dom';
import { useProdukForm } from '../hooks/useProdukForm';
import ProdukForm from '../components/ProdukForm';

function ProdukCreatePage() {
  const navigate = useNavigate();
  const { form, submitting, error, handleChange, submitCreate } = useProdukForm();

  const handleSubmit = async () => {
    const success = await submitCreate();
    if (success) {
      alert('Produk berhasil ditambahkan!');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Tambah Produk Baru</h2>
      <ProdukForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitting={submitting}
        error={error}
        submitLabel="Simpan"
      />
    </div>
  );
}

export default ProdukCreatePage;
