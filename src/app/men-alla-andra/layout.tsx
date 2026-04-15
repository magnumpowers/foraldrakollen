import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '"Men alla andra har..." | Föräldrakollen',
  description: 'Ditt barn sa "men alla andra har en mobil"? Du är inte ensam. Se hur många föräldrar i din kommun som hör samma sak — och stå starka tillsammans.',
  openGraph: {
    title: '"Men alla andra har..." — Du är inte ensam',
    description: 'Se hur många föräldrar i din kommun som hör "men alla andra har en mobil/TikTok/Instagram". Stå starka tillsammans.',
    type: 'website',
    locale: 'sv_SE',
  },
}

export default function MenAllaAndraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
