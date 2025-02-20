import { ReactNode } from "react";

export interface CartProviderProps {
  children: ReactNode;
}

export type CartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  isOpen: boolean
};

export type CartItem = {
  id: string;
  quantity: number;
};
