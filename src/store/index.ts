import { create } from "zustand";

export const useStore = create((set) => ({
  cartItems: [],

  // Add item with count tracking
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id
              ? { ...i, count: i.count + 1 } // Increment count if item exists
              : i
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...item, count: 1 }],
        };
      }
    });
  },

  // Remove item from the cart
  removeFromCart: (item) => {
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== item.id),
    }));
  },

  // Increment item count
  incrementCount: (id) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    }));
  },

  // Decrement item count
  decrementCount: (id) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      ),
    }));
  },
}));

export type RootState = ReturnType<typeof useStore>;
