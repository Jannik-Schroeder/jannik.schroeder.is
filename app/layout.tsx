import './globals.css'
import { Inter } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Heading from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jannik Schröder',
  description: 'Portfolio',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
      <Heading />
      {children}
      <Footer />
      </body>
      </html>
  );
}