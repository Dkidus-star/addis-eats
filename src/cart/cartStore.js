import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (dish) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === dish.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === dish.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { items: [...state.items, { ...dish, quantity: 1 }] };
        }),

      updateQuantity: (id, amount) =>
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === id) {
              const newQuantity = Math.max(1, item.quantity + amount);
              return { ...item, quantity: newQuantity };
            }
            return item;
          }),
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "addis-eats-cart", // The key used in localStorage
    },
  ),
);
