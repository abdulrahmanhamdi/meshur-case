import { useFavoriteStore } from './useFavoriteStore';

describe('useFavoriteStore', () => {
  // إعادة ضبط المتجر قبل كل اختبار لضمان استقلالية النتائج
  beforeEach(() => {
    const { clearFavorites } = useFavoriteStore.getState();
    clearFavorites();
  });

  // الاختبار الأول: هل تبدأ المفضلات بكائن فارغ؟
  it('should start with an empty favorites object', () => {
    const { favorites } = useFavoriteStore.getState();
    expect(favorites).toEqual({}); // نتوقع كائن فارغ بعد التطبيع
  });

  // الاختبار الثاني: هل تنجح إضافة معرف منتج؟
  it('should add a product ID to favorites when toggleFavorite is called', () => {
    const productId = '101';
    const { toggleFavorite } = useFavoriteStore.getState();

    toggleFavorite(productId);

    const { favorites } = useFavoriteStore.getState();
    expect(favorites[productId]).toBe(true); // نتوقع وجود المعرف كـ key
  });

  // الاختبار الثالث: هل ينجح حذف المعرف عند استدعاء الدالة مرة أخرى؟
  it('should remove a product ID from favorites if it already exists', () => {
    const productId = '101';
    const { toggleFavorite } = useFavoriteStore.getState();

    // استدعاء أول للإضافة
    toggleFavorite(productId);
    // استدعاء ثاني للحذف
    toggleFavorite(productId);

    const { favorites } = useFavoriteStore.getState();
    expect(favorites[productId]).toBeUndefined(); // نتوقع اختفاء المعرف
  });

  // الاختبار الرابع: هل يعمل مسح المفضلات بالكامل؟
  it('should clear all favorites', () => {
    const { toggleFavorite, clearFavorites } = useFavoriteStore.getState();
    
    toggleFavorite('101');
    toggleFavorite('102');
    clearFavorites();

    const { favorites } = useFavoriteStore.getState();
    expect(favorites).toEqual({});
  });
});