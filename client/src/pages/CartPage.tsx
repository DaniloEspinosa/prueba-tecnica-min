import { useContext } from "react";
import { useCart } from "../context/cart.context";
import { ProductsContext } from "../context/products.context";
import CartItem from "../components/CartItems";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useCart();
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    console.error("Store debe estar envuelto en un ProductsProviderWrapper");
    return null;
  }
  const { products } = productsContext;

  return (
    <>
      <div className="cart-page-content">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

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
        <Link to="/">Store</Link>
      </div>
    </>
  );
};

export default CartPage;
