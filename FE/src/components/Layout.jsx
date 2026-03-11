function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1>
            <a href="/">PT XYZ — Kendaraan Bekas Pakai</a>
          </h1>
        </div>
      </header>
      <main className="container main">{children}</main>
      <footer className="footer">
        <div className="container">
          <p>&copy; Brianly Hedi Rawung.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
