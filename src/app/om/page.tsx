import { Users, Podcast, ExternalLink, Heart } from 'lucide-react'
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
            {/* Image */}
            <div className="relative w-full aspect-video bg-gray-100">
              <Image
                src="/veckans-ai.jpg"
                alt="Magnus Paues och Fredrik Hanefalk, skaparna av Veckans AI"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text content */}
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Föräldrakollen drivs av <strong>Magnus Paues</strong> och <strong>Fredrik Hanefalk</strong>,
                  skaparna av podcasten <a
                    href="https://bit.ly/veckans-ai"
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

              {/* Podcast link */}
              <div className="mt-10 pt-8 border-t border-sand-200">
                <a
                  href="https://bit.ly/veckans-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-primary-50 rounded-2xl border border-primary-100 hover:border-primary-300 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Podcast className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      Veckans AI
                    </div>
                    <div className="text-sm text-gray-600">
                      Lyssna på vår podcast om artificiell intelligens
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
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
