import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Kanit } from 'next/font/google'
import clsx from 'clsx'
import NextAuthProvider from '@/provider/NextAuthProvider'
import ReduxProvider from '@/provider/ReduxProvider'
import { NextIntlClientProvider } from 'next-intl'

const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'thai'],
})

export const metadata = {
  title: 'DO Utilization',
  description: 'DU',
}

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  /**
   * Setup message locale
   */
  let messages
  try {
    messages = (await import(`@/locales/${locale}.json`)).default
  } catch (error) {}

  return (
    <ReduxProvider>
      <html lang={locale}>
        <body className={clsx(kanit.className, 'bg-white')}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NextAuthProvider>
              <section className="bg-white">{children}</section>
            </NextAuthProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ReduxProvider>
  )
}
