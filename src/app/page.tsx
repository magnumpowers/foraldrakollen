import Link from 'next/link'
import {
  Moon,
  Smartphone,
  MessageSquareOff,
  MapPinOff,
  ShieldAlert,
  AppWindow,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  AlertTriangle
} from 'lucide-react'

const guideAreas = [
  {
    id: 'skarmtid',
    icon: Moon,
    title: 'Skärmtid nattetid',
    description: 'Skydda sömnen genom att begränsa skärmanvändning på kvällen',
    priority: 1,
    color: 'primary',
  },
  {
    id: 'algoritmer',
    icon: Smartphone,
    title: 'Algoritmiskt innehåll',
    description: 'Hantera TikTok, Reels och YouTube Shorts på ett hälsosamt sätt',
    priority: 2,
    color: 'coral',
  },
  {
    id: 'meddelanden',
    icon: MessageSquareOff,
    title: 'Okända kontakter',
    description: 'Blockera meddelanden från främlingar och skydda mot grooming',
    priority: 3,
    color: 'primary',
  },
  {
    id: 'plats',
    icon: MapPinOff,
    title: 'Platstjänster',
    description: 'Stäng av onödig platsspårning och skydda persondata',
    priority: 4,
    color: 'coral',
  },
  {
    id: 'innehall',
    icon: ShieldAlert,
    title: 'Vuxeninnehåll',
    description: 'Filtrera och blockera olämpligt innehåll som porr och våld',
    priority: 5,
    color: 'primary',
  },
  {
    id: 'appar',
    icon: AppWindow,
    title: 'Appgodkännande',
    description: 'Kräv ditt godkännande innan nya appar installeras',
    priority: 6,
    color: 'coral',
  },
  {
    id: 'kop',
    icon: CreditCard,
    title: 'Köp i appar',
    description: 'Förhindra oavsiktliga köp och skydda er ekonomi',
    priority: 7,
    color: 'primary',
  },
]

const stats = [
  { value: '1 av 4', label: 'barn har utsatts för groomingförsök online' },
  { value: '9-11h', label: 'sömn behöver barn 8-13 år per natt' },
  { value: '60 min', label: 'är TikToks automatiska dagsgräns för barn' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-sand-50 to-sand-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0YTliOWIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Forskningsbaserad guide för föräldrar
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Skydda ditt barn
              <span className="text-primary-500"> på nätet</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Praktiska steg-för-steg-guider för att ställa in säkra inställningar på iOS, Android,
              TikTok, Instagram, Snapchat och YouTube. Anpassat för barn 8–16 år.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guider"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral-400 text-white rounded-2xl font-semibold text-lg hover:bg-coral-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Börja skydda ditt barn
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/forskning"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold text-lg hover:bg-sand-100 transition-all border border-sand-300"
              >
                <BookOpen className="w-5 h-5" />
                Läs forskningen
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-sand-200"
              >
                <div className="font-display text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Areas Section */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              7 områden att skydda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiden är prioriterad från det viktigaste och mest skadliga, till det mer förebyggande.
              Börja uppifrån och arbeta dig nedåt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideAreas.map((area) => {
              const Icon = area.icon
              const isCoralAccent = area.color === 'coral'

              return (
                <Link
                  key={area.id}
                  href={`/guider#${area.id}`}
                  className="group bg-white rounded-3xl p-6 border border-sand-200 hover:border-primary-300 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      isCoralAccent
                        ? 'bg-coral-100 text-coral-500 group-hover:bg-coral-200'
                        : 'bg-primary-100 text-primary-500 group-hover:bg-primary-200'
                    } transition-colors`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          isCoralAccent
                            ? 'bg-coral-100 text-coral-600'
                            : 'bg-primary-100 text-primary-600'
                        }`}>
                          Steg {area.priority}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/guider"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Se alla guider med detaljerade instruktioner
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Varför är detta viktigt?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Psykisk hälsa</h3>
                    <p className="text-gray-600">
                      Forskning visar att omfattande skärmanvändning hänger samman med ökad psykisk ohälsa hos unga.
                      Algoritmerna bryr sig mer om engagemang än åldersanpassning.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Moon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sömn och hälsa</h3>
                    <p className="text-gray-600">
                      Längre skärmtid leder till sämre sömn och fler depressiva symtom.
                      Bara genom att lägga bort mobilen i tid kan ungdomar sova ~20 minuter längre per natt.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sociala risker</h3>
                    <p className="text-gray-600">
                      1 av 4 barn i Sverige har utsatts för groomingförsök online.
                      Genom att begränsa vem som kan kontakta ditt barn minskar du riskerna betydligt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-sand-100 rounded-3xl p-8 border border-primary-100">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Det viktigaste skyddet
              </h3>
              <p className="text-gray-600 mb-6">
                Ingen inställning är 100% säker – det viktigaste skyddet är en öppen relation där barnet
                vågar prata med dig om nätet.
              </p>
              <ul className="space-y-3">
                {[
                  'Prata regelbundet om vad barnet gör online',
                  'Reagera lugnt om barnet berättar något jobbigt',
                  'Gå igenom vänlistor och följare tillsammans',
                  'Visa att du står på barnets sida utan att skuldbelägga'
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Redo att börja?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Det tar bara några minuter att ställa in de viktigaste skydden.
            Börja med skärmtid nattetid – det ger störst effekt för ditt barns välmående.
          </p>
          <Link
            href="/guider"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-2xl font-semibold text-lg hover:bg-sand-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Visa steg-för-steg-guiderna
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
