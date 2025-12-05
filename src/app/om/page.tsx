import { Users, ExternalLink, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Om Föräldrakollen | Föräldrakollen',
  description: 'Föräldrakollen drivs av Magnus Paues och Fredrik Hanefalk, skaparna av podcasten Veckans AI.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-sand-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Om oss
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Om Föräldrakollen
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-sand-200 overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Image - centered and square */}
              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/veckans-ai.jpg"
                    alt="Magnus Paues och Fredrik Hanefalk, skaparna av Veckans AI"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Föräldrakollen drivs av <strong>Magnus Paues</strong> och <strong>Fredrik Hanefalk</strong>,
                  skaparna av podcasten <a
                    href="https://veckans.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >Veckans AI</a>. Vi arbetar dagligen med att förklara och granska utvecklingen inom
                  artificiell intelligens, och når varje vecka tusentals lyssnare som vill förstå vad
                  tekniken betyder för samhället.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Just därför känner vi ett särskilt ansvar. Det räcker inte att sprida nyheter, verktyg
                  och innovationer vidare utan eftertanke. Som röster i AI-samtalet vill vi bidra till en
                  mer nyanserad och ansvarsfull användning – särskilt när det gäller barn och ungas digitala vardag.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Föräldrakollen är vårt sätt att samla forskning, riktlinjer och praktiska råd i ett format
                  som hjälper föräldrar att fatta välgrundade beslut. Målet är inte att skapa oro, utan att
                  stärka vuxna i att förstå risker, sätta sunda gränser och bygga en trygg digital miljö där
                  barn kan utvecklas på ett hållbart sätt.
                </p>
              </div>

              {/* Spotify link */}
              <div className="mt-10 pt-8 border-t border-sand-200">
                <a
                  href="https://open.spotify.com/show/61Fr0ASttW7VmunY1r0EtR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100 hover:border-green-300 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      Lyssna på Spotify
                    </div>
                    <div className="text-sm text-gray-600">
                      Följ Veckans AI på Spotify
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Har du frågor eller förslag? Tveka inte att höra av dig via våra sociala kanaler.
            </p>
            <Link
              href="/guider"
              className="inline-flex items-center gap-2 px-8 py-4 bg-coral-400 text-white rounded-2xl font-semibold text-lg hover:bg-coral-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Heart className="w-5 h-5" />
              Börja skydda ditt barn
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
