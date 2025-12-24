// src/store/useFavoriteStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
  favorites: string[];
  toggleFavorite: (productId: string) => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id],
        })),
    }),
    { name: 'favorites-storage' }
  )
);