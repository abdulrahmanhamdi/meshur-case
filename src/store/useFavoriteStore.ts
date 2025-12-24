import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
  favorites: Record<string, boolean>; 
  toggleFavorite: (id: string) => void;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favorites: {}, 

      toggleFavorite: (id) => 
        set((state) => {
          const next = { ...state.favorites };
          if (next[id]) {
            delete next[id]; 
          } else {
            next[id] = true; 
          }
          return { favorites: next };
        }),

      clearFavorites: () => set({ favorites: {} }),
    }),
    { name: 'meshur-favorites' }
  )
);