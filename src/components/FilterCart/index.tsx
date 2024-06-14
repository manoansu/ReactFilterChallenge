import "./style.css";

export default function FilterCart() {
  return (
    <main>
      <section id="filter-section" className="container mt30">
        <div className="filter">
          <form>
            <div className="input-preco">
              <div className="input-field">
                <input type="text" placeholder="Preco Minimo" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Preço Maximo" />
              </div>
            </div>
            <button type="submit">Filter</button>
          </form>
        </div>
      </section>
    </main>
  );
}
