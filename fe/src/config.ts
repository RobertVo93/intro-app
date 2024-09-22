import { LocalePrefix, Pathnames } from 'next-intl/routing';
export const locales = ["en", "vi"] as const

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  '/':'/',
  // '/services':'/services'
}

export const localePrefix: LocalePrefix<Locales> = 'always'