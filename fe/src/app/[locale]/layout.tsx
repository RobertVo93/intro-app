import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import AppWrapper from "../components/appWrapper";

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
          <AppWrapper>
            {children}
          </AppWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
