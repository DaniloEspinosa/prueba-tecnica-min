import { createContext, useState, useEffect } from "react";
import {
  Product,
  ProductsContextType,
  ProductsProviderProps,
} from "../interfaces/ProductsInterfaces";
import { useFetch } from "../hooks/useFetch";

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export function ProductsProviderWrapper({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  // Obtener productos y actualizar el estado
  const getProducts = async () => {
    const data = await useFetch("http://localhost:3000/grocery");
    setProducts(data);
  };

  // Obtener solo los productos favoritos
  const getFavorites = async () => {
    const data = await useFetch("http://localhost:3000/grocery?favorite=1");
    setFavorites(data);
  };

  // Alternar el estado "favorite" de un producto
  const toggleFavorite = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/grocery/${id}/favorite`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setProducts((prev) =>
          prev.map((item) =>
            item.id === id
              ? { ...item, favorite: item.favorite === 1 ? 0 : 1 }
              : item
          )
        );

        // También actualizamos la lista de favoritos si es necesario
        setFavorites((prev) =>
          prev.map((item) =>
            item.id === id
              ? { ...item, favorite: item.favorite === 1 ? 0 : 1 }
              : item
          )
        );
      } else {
        console.error("Error al actualizar el estado de favorito");
      }
    } catch (error) {
      console.error("Error en la solicitud PATCH:", error);
    }
  };

  useEffect(() => {
    getProducts(); // Cargar los productos al inicio
    getFavorites(); // Cargar los productos favoritos
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <ProductsContext.Provider
      value={{
        products,
        favorites,
        setProducts,
        getProducts,
        toggleFavorite,
        getFavorites,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
