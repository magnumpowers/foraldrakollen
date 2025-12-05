import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Föräldrakollen | Skydda ditt barn på nätet',
  description: 'En forskningsbaserad guide för föräldrar som vill hjälpa sina barn (8-13 år) att vara trygga online. Steg-för-steg-instruktioner för iOS, Android, TikTok, Instagram, Snapchat och YouTube.',
  keywords: ['barn säkerhet', 'föräldrakontroll', 'skärmtid', 'TikTok', 'Instagram', 'Snapchat', 'digital uppfostran', 'näthat', 'grooming'],
  authors: [{ name: 'Föräldrakollen' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Föräldrakollen | Skydda ditt barn på nätet',
    description: 'Forskningsbaserad guide för föräldrar - skydda ditt barn online med konkreta steg-för-steg-instruktioner.',
    type: 'website',
    locale: 'sv_SE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={`${inter.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col bg-sand-50">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
