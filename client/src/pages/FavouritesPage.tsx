import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/products.context";
import { Product } from "../interfaces/ProductsInterfaces";
import StoreItem from "../components/StoreItem";

const FavouritesPage = () => {
  const context = useContext(ProductsContext);
  const [favourites, setFavourites] = useState<Product[]>([])


  if (!context) {
    throw new Error("Store debe estar envuelto en un ProductsProviderWrapper");
  }

  const { products, getProducts } = context;

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const obtainFavourites = (array: Product[]) => {
      return array.filter((product) => product.favorite === 1);
    };

    setFavourites(obtainFavourites(products));
  }, [products]);

  return (
    <main>
      <h1>Favorites</h1>
      <ul>
        {favourites.map((item: Product) => (
          <li key={item.id}>
            <StoreItem {...item} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default FavouritesPage;
