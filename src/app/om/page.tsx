import { Users, ExternalLink, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Om Föräldrakollen | Föräldrakollen', description: 'Drivs av Magnus Paues och Fredrik Hanefalk.' }

export default function AboutPage() {
  return (
    <div>
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 text-navy-600 rounded-full text-sm font-medium mb-6"><Users className="w-4 h-4" />Om oss</div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-900 mb-4">Om Föräldrakollen</h1>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] border border-warm-100 overflow-hidden shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-md">
                  <Image src="/veckans-ai.jpg" alt="Magnus Paues och Fredrik Hanefalk" fill className="object-cover" priority />
                </div>
              </div>
              <div className="max-w-none space-y-6">
                <p className="text-warm-600 text-lg leading-relaxed">Föräldrakollen drivs av <strong className="text-warm-800">Magnus Paues</strong> och <strong className="text-warm-800">Fredrik Hanefalk</strong>, skaparna av podcasten <a href="https://veckans.ai" target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-navy-800 underline underline-offset-2">Veckans AI</a>. Vi arbetar dagligen med att förklara och granska AI-utvecklingen och når varje vecka tusentals lyssnare.</p>
                <p className="text-warm-600 text-lg leading-relaxed">Just därför känner vi ett särskilt ansvar. Det räcker inte att sprida nyheter och verktyg utan eftertanke. Som röster i AI-samtalet vill vi bidra till ansvarsfull användning — särskilt för barn.</p>
                <p className="text-warm-600 text-lg leading-relaxed">Föräldrakollen samlar forskning, riktlinjer och praktiska råd som hjälper föräldrar att fatta välgrundade beslut. Målet är inte att skapa oro, utan att stärka vuxna att bygga en trygg digital miljö.</p>
              </div>
              <div className="mt-10 pt-8 border-t border-warm-100">
                <a href="https://open.spotify.com/show/61Fr0ASttW7VmunY1r0EtR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-green-50 rounded-2xl border border-green-100 hover:border-green-300 transition-colors group">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                  </div>
                  <div className="flex-1"><div className="font-semibold text-warm-800 group-hover:text-green-700 transition-colors">Lyssna på Spotify</div><div className="text-sm text-warm-500">Följ Veckans AI på Spotify</div></div>
                  <ExternalLink className="w-5 h-5 text-warm-400 group-hover:text-green-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-warm-500 mb-6">Har du frågor eller förslag? Hör av dig via våra sociala kanaler.</p>
            <Link href="/guider" className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 text-white rounded-full font-semibold text-lg hover:bg-navy-700 transition-all shadow-lg shadow-navy-800/20"><Heart className="w-5 h-5" />Börja skydda ditt barn</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
