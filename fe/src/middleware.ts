import { locales } from './config';
import createMiddleware from 'next-intl/middleware';

 
export default createMiddleware({
  locales,
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(vi|en)/:path*']
};