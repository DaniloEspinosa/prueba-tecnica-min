import { useContext } from "react";
import { useCart } from "../context/cart.context";
import { CartItem } from "../interfaces/CartInterfaces";
import { ProductsContext } from "../context/products.context";

const CartItems = ({ id, quantity }: CartItem) => {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    console.error("Store debe estar envuelto en un ProductsProviderWrapper");
    return null;
  }

  const { products } = productsContext;

  const { decreaseCartQuantity, increaseCartQuantity } = useCart();

  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="card-cart">
      <img src={item.image_url} alt={item.productName} />
      <div>
        <p>{item.productName}</p>
        <div className="buttons">
          <button onClick={() => decreaseCartQuantity(id)}>-</button>
          <div>
            <span className="fs-3">{quantity}</span> in cart
          </div>
          <button onClick={() => increaseCartQuantity(id)}>+</button>
        </div>
      </div>
      <p className="price-item">{item.price * quantity}€</p>
    </div>
  );
};

export default CartItems;
