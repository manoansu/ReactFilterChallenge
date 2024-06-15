import { useState } from "react";
import Header from "./Header";
import HomeBody from "./HomeBody";
import { ContextCartCount } from "./utils/context-cart";

function App() {
  // Sempre que o numero de itens de carrinho mudar, eu posso setar esse useState de forma que outro componente que não tem nada com esse app, reaja a esse estado
  const [contextCartCount, setContextCartCount] = useState<number>(0); // esta prover este usestate em toda aplicação e outros pode usar esse useState

  return (
    <>
      <ContextCartCount.Provider
        value={{ contextCartCount, setContextCartCount }}
      >
        <Header />
        <HomeBody />
      </ContextCartCount.Provider>
    </>
  );
}

export default App;
