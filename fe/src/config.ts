import { LocalePrefix, Pathnames } from 'next-intl/routing';
export const locales = ["en", "vi"] as const

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  '/':'/',
  '/automotive': '/services/automotive',
  '/history': '/about/history',
}

export const localePrefix: LocalePrefix<Locales> = 'always'