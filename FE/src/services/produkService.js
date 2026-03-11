import apiClient from './apiClient';

const produkService = {
  getAll(merek) {
    const params = merek ? { merek } : {};
    return apiClient.get('/produk', { params });
  },

  getById(id) {
    return apiClient.get(`/produk/${id}`);
  },

  create(data) {
    return apiClient.post('/produk', data);
  },

  update(id, data) {
    return apiClient.put(`/produk/${id}`, data);
  },

  delete(id) {
    return apiClient.delete(`/produk/${id}`);
  },
};

export default produkService;
