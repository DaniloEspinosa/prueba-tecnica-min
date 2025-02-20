import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { useCart } from "../context/cart.context";
import { Product } from "../interfaces/ProductsInterfaces";
import { useContext } from "react";
import { ProductsContext } from "../context/products.context";


const StoreItem = (product: Product) => {

  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("StoreItem debe estar envuelto en un ProductsProviderWrapper");
  }

  const { toggleFavorite } = context;

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useCart();

  const quantity = getItemQuantity(product.id);

  return (
    <div className="card">
      <img src={product.image_url} alt={product.productName} />
      <FaHeart onClick={() => toggleFavorite(product.id)} color={product.favorite === 1 ? "red" : "white"} className="icon-btn"/>
      <div className="card-body">
        <div>
          <div>
            <h3>{product.productName}</h3>
            <p>
              <strong>{product.price}</strong>€
            </p>
          </div>
          <p className="description">{product.productDescription}</p>
        </div>
        <div className="footer">
          <p>
            <strong>{product.stock - quantity}</strong> left
          </p>
          {quantity === 0 ? (
            <button onClick={() => increaseCartQuantity(product.id)}>
              +Add
            </button>
          ) : (
            <div style={{ gap: ".5rem" }}>
              <div style={{ gap: ".5rem" }} className="buttons-store">
                <button onClick={() => decreaseCartQuantity(product.id)}>
                  -
                </button>
                <div>
                  <span>{quantity}</span>
                </div>
                <button onClick={() => increaseCartQuantity(product.id)}>
                  +
                </button>
                <button className="remove-button" onClick={() => removeFromCart(product.id)}><FaTrashAlt /></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
