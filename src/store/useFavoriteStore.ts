import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FavoriteState {
  favorites: string[];
  
  toggleFavorite: (id: string) => void;
  clearFavorites: () => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) => {
        const currentFavorites = get().favorites;
        const isFav = currentFavorites.includes(id);
        
        set({
          favorites: isFav 
            ? currentFavorites.filter((favId) => favId !== id) 
            : [...currentFavorites, id]
        });
      },

      clearFavorites: () => set({ favorites: [] }),

      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: 'meshur-favorites', 
      storage: createJSONStorage(() => localStorage),
    }
  )
);