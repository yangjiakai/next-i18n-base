
import './globals.css'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import Header from '../../components/Header';
const locales = ['en', 'jp'];
const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header>
            <Header />
          </header>
          <main>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
