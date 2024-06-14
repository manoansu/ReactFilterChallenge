import "./style.css";

export default function Header() {
  return (
    <header>
      <nav className="navebar container">
        <div className="nav-content">
          <h2 className="site-name">AMFilter</h2>
          <div className="nav-item">
            <h3>Produto(s)</h3>
          </div>
        </div>
      </nav>
    </header>
  );
}
