import { useContext } from "react";
import "./style.css";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {
  // pega o contexto de aplicação so para o dado de  objeto (contextCartCount),
  const { contextCartCount } = useContext(ContextCartCount);

  return (
    <>
      <div className="cart-icon-item">
        {contextCartCount > 0 && (
          <div className="cart-count">{contextCartCount}</div>
        )}
        <h3>Produto(s)</h3>
      </div>
    </>
  );
}
