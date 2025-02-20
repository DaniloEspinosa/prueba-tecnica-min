import { createContext, useState } from "react";
import { Product, ProductsContextType, ProductsProviderProps } from "../interfaces/ProductsInterfaces";

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

export function ProductsProviderWrapper({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/grocery`);
      if (!response.ok) {
        throw new Error("Error fetching products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setProducts([]);
    }
  };

  const toggleFavorite = async (productId: string) => {
    const productToUpdate = products.find((product) => product.id === productId);
    if (!productToUpdate) return;
  
    const updatedFavorite = productToUpdate.favorite === 1 ? 0 : 1;
  
    try {
      const response = await fetch(`http://localhost:3000/grocery/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorite: updatedFavorite }),
      });
  
      if (!response.ok) {
        throw new Error("Error updating favorite status");
      }
  
      // Si la actualización fue exitosa, actualizamos el estado local
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId ? { ...product, favorite: updatedFavorite } : product
        )
      );
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };
  


  return (
    <ProductsContext.Provider value={{ products, setProducts, getProducts, toggleFavorite }}>
      {children}
    </ProductsContext.Provider>
  );
}