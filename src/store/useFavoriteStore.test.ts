import { useFavoriteStore } from './useFavoriteStore';

describe('useFavoriteStore', () => {
  beforeEach(() => {
    const { clearFavorites } = useFavoriteStore.getState();
    clearFavorites();
  });

  it('should start with an empty favorites object', () => {
    const { favorites } = useFavoriteStore.getState();
    expect(favorites).toEqual({}); 
  });

  it('should add a product ID to favorites when toggleFavorite is called', () => {
    const productId = '101';
    const { toggleFavorite } = useFavoriteStore.getState();

    toggleFavorite(productId);

    const { favorites } = useFavoriteStore.getState();
    expect(favorites[productId]).toBe(true); 
  });

  it('should remove a product ID from favorites if it already exists', () => {
    const productId = '101';
    const { toggleFavorite } = useFavoriteStore.getState();

    toggleFavorite(productId);
    toggleFavorite(productId);

    const { favorites } = useFavoriteStore.getState();
    expect(favorites[productId]).toBeUndefined(); 
  });

  it('should clear all favorites', () => {
    const { toggleFavorite, clearFavorites } = useFavoriteStore.getState();
    
    toggleFavorite('101');
    toggleFavorite('102');
    clearFavorites();

    const { favorites } = useFavoriteStore.getState();
    expect(favorites).toEqual({});
  });
});