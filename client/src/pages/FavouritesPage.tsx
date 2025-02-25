import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/products.context";
import { Product } from "../interfaces/ProductsInterfaces";
import StoreItem from "../components/StoreItem";

const FavouritesPage = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("Store debe estar envuelto en un ProductsProviderWrapper");
  }

  const { products, favorites, getFavorites } = context;

  useEffect(() => {
    getFavorites();
  }, [products]);

  return (
    <main>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((item: Product) => (
          <li key={item.id}>
            <StoreItem {...item} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default FavouritesPage;
