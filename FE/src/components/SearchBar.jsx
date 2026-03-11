import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword.trim());
  };

  const handleReset = () => {
    setKeyword('');
    onSearch('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cari berdasarkan merek produk..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Cari
      </button>
      {keyword && (
        <button type="button" className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      )}
    </form>
  );
}

export default SearchBar;
