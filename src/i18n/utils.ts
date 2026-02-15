import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';
export type TranslationKey = keyof typeof es;

const translations = { es, en } as const;

export function t(key: TranslationKey, lang: Lang = 'es'): string {
  return translations[lang][key] ?? translations['es'][key] ?? key;
}

export { es, en, translations };
