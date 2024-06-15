import { useState } from "react";
import "./style.css";

type Props = {
  onFilter: Function;
}

export default function FilterCart({ onFilter }: Props) {

 const [minimo, setMinimo] = useState("");

  const [maximo, setMaximo] = useState("");

  function handleSubmitFilter(event: any) {
    event.preventDefault();
    onFilter(minimo, maximo);
  }

  function handleInputChangeMinimo(event: any) {
    setMinimo(event.target.value);
    console.log('Minimo = ', minimo)
  }

  function handleInputChangeMaximo(event: any) {
    setMaximo(event.target.value);
    console.log('Maximo = ', maximo)
  }

 
  return (
    <main>
      <section id="filter-section" className="container mt30">
        <div className="filter">
          <form onClick={handleSubmitFilter}>
            <div className="input-preco">
              <div className="input-field">
                <input
                name="minimo" 
                value={minimo}
                type="text" 
                placeholder="Preco Minimo" 
                onChange={handleInputChangeMinimo}
                />
              </div>
              <div className="input-field">
                <input 
                name="maximo"
                value={maximo}
                type="text" 
                placeholder="Preço Maximo"
                onChange={handleInputChangeMaximo}
                />
              </div>
            </div>
            <button type="submit">Filter</button>
          </form>
        </div>
      </section>
    </main>
  );
}
