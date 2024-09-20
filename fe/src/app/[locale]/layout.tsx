import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import WebNavbar from "../components/navBar/webNavbar";

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="font-poppins">
        <NextIntlClientProvider messages={messages}>
          <WebNavbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
