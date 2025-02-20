import { ReactNode } from "react";

export interface Product {
  id: string;
  image_url: string;
  stock: number;
  productName: string;
  price: number;
  productDescription: string;
  favorite: number;
}

export interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  getProducts: () => Promise<void>;
}

export interface ProductsProviderProps {
  children: ReactNode;
}

export interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  getProducts: () => Promise<void>;
  toggleFavorite: (productId: string) => void
}