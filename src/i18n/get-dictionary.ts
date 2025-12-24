const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  tr: () => import('./tr.json').then((module) => module.default),
};

export type Dictionary = typeof import('./tr.json');
export type Locale = keyof typeof dictionaries; 

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const selectedLocale = (dictionaries[locale as Locale] ? locale : 'tr') as Locale;
  return dictionaries[selectedLocale]();
};