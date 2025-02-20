import Modal from "react-modal";
import { useCart } from "../context/cart.context";
import CartItem from "./CartItems";
import { ProductsContext } from "../context/products.context";
import { useContext } from "react";
import { formatCurrency } from "../utilities/formatCurrency";

// Modal.setAppElement("#root");

const Cart = () => {
  const { closeCart, isOpen, cartItems } = useCart();

  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    // console.error("Store debe estar envuelto en un ProductsProviderWrapper");
    return null;
  }

  const { products } = productsContext;
  return (
    <div className="modal-container" data-testid="cart-component">
      <Modal
        isOpen={isOpen}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="checkout">
          <h2>Checkout</h2>
          <strong>
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </strong>
        </div>

        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <button onClick={closeCart}>Close</button>
      </Modal>
    </div>
  );
};

export default Cart;
