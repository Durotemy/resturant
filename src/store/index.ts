import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: string;
  count: number;
}

interface StoreState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  incrementCount: (id: number) => void;
  decrementCount: (id: number) => void;
}

export const useStore = create(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (item: CartItem) => {
        set((state: StoreState) => {
          const existingItem = state.cartItems.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id ? { ...i, count: i.count + 1 } : i
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...item, count: 1 }],
            };
          }
        });
      },

      removeFromCart: (item: CartItem) => {
        set((state: StoreState) => ({
          cartItems: state.cartItems.filter(
            (cartItem: { id: number }) => cartItem.id !== item.id
          ),
        }));
      },

      incrementCount: (id: number) => {
        set((state: StoreState) => ({
          cartItems: state.cartItems.map(
            (item: { id: number; count: number }) =>
              item.id === id ? { ...item, count: item.count + 1 } : item
          ),
        }));
      },

      decrementCount: (id: number) => {
        set((state: StoreState) => ({
          cartItems: state.cartItems.map(
            (item: { id: number; count: number }) =>
              item.id === id && item.count > 1
                ? { ...item, count: item.count - 1 }
                : item
          ),
        }));
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export type RootState = ReturnType<typeof useStore>;
