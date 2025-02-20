import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/products.context";
import { Product } from "../interfaces/ProductsInterfaces";
import StoreItem from "../components/StoreItem";

const Store = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("Store debe estar envuelto en un ProductsProviderWrapper");
  }

  const { products, getProducts } = context;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <ul>
        {products.map((item: Product) => (
          <li key={item.id}>
            <StoreItem {...item} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Store;
