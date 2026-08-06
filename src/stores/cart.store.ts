import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/product.type";

interface CartState {
  items: CartItem[];
  addToCart?: (newItem: CartItem) => void;
  updateItemQuantity?: (id: number) => void;
  removeFromCart: (id: number) => void;
  emptyCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      removeFromCart: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id)}))
      },

      emptyCart: () => {
        set({ items: [] })
      }
    }),
    {
      name: "cart-storage",
    }
  )
);

// derived selectors
export const totalCartQuantity = (state: CartState) => state.items.reduce((total, item) => total + item.quantity, 0);

export const totalCartPrice = (state: CartState) => state.items.reduce((total, item) => total + (item.quantity * item.price), 0)

// call them with
// useCartStore(totalCartQuantity)
