import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProdukListPage from './pages/ProdukListPage';
import ProdukCreatePage from './pages/ProdukCreatePage';
import ProdukEditPage from './pages/ProdukEditPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProdukListPage />} />
        <Route path="/create" element={<ProdukCreatePage />} />
        <Route path="/edit/:id" element={<ProdukEditPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
