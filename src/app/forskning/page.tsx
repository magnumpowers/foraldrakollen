import {
  BookOpen,
  Brain,
  Moon,
  Heart,
  TrendingDown,
  Clock,
  Users,
  ExternalLink,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Forskning om skärmtid | Föräldrakollen',
  description: 'Vad säger forskningen om barns skärmanvändning? Läs om sambandet mellan skärmtid och psykisk hälsa, sömn och social utveckling.',
}

const researchFindings = [
  {
    icon: Moon,
    title: 'Sömn och skärmtid',
    color: 'primary',
    findings: [
      'Längre skärmtid leder till sämre sömn och fler depressiva symtom hos barn och tonåringar',
      'Barn 8–13 år behöver ungefär 9–11 timmars sömn per natt för att må bra',
      'Bara genom att lägga bort mobilen i tid kan ungdomar sova ~20 minuter längre per natt',
      'Skärmar på kvällen stör insomning – både genom stimulerande innehåll och blått ljus',
      'Skärmtid sent på kvällen konkurrerar med sömnen och kan försämra skolprestationer och humör nästa dag'
    ]
  },
  {
    icon: Brain,
    title: 'Psykisk hälsa',
    color: 'coral',
    findings: [
      'Forskning visar att omfattande skärmanvändning hänger samman med ökad psykisk ohälsa hos unga',
      'Flitig sociala medier-användning från 10 års ålder ökar missnöje med egen kropp och tecken på ätstörning',
      'Algoritmerna bryr sig mer om engagemang än åldersanpassning',
      'Algoritmer kan bidra till dålig självkänsla genom perfekta ideal och filtrerade liv på skärmen',
      'Många fastnar lätt i mobilen, vilket drabbar relationer, fysisk aktivitet och sömn'
    ]
  },
  {
    icon: Heart,
    title: 'Social utveckling',
    color: 'primary',
    findings: [
      'Barn mår bättre när de endast interagerar med folk de känner och litar på online',
      'Den öppna dialogen mellan förälder och barn är avgörande för digital trygghet',
      'Engagerat föräldraskap minskar risken för skärmberoende och att barnet fastnar i olämpligt material',
      'Många barn drar sig för att berätta om jobbiga saker av rädsla eller skuld – öppen dialog är nyckeln',
      'Att prata regelbundet om vad barnet gör online bygger förtroende'
    ]
  }
]

const recommendations = [
  {
    source: 'Folkhälsomyndigheten',
    target: 'Barn 6–12 år',
    recommendations: [
      'Cirka 10–11 timmars sömn per dygn',
      'Mycket fysisk aktivitet',
      'Högst 1–2 timmars fritids-skärmtid per dag'
    ]
  },
  {
    source: 'Svenska myndigheter',
    target: 'Barn 6–12 år',
    recommendations: [
      'Undvik appar som styrs av algoritmer (t.ex. TikTok, YouTube)',
      'Risk för exponering av reklam, falsk information, våld eller osunda ideal',
      'Välj åldersanpassade appar utan algoritmstyrning eller reklam'
    ]
  },
  {
    source: 'Plattformarnas åldersgränser',
    target: 'Barn under 13 år',
    recommendations: [
      'TikTok: 13-årsgräns',
      'Instagram: 13-årsgräns',
      'Snapchat: 13-årsgräns',
      'YouTube: 13-årsgräns (YouTube Kids för yngre)',
      'Appar med 13+ är inte anpassade för yngre barn'
    ]
  }
]

const statistics = [
  {
    value: '1 av 4',
    label: 'barn i Sverige har utsatts för groomingförsök online',
    icon: AlertTriangle,
    color: 'coral'
  },
  {
    value: '20 min',
    label: 'extra sömn per natt genom att lägga bort mobilen i tid',
    icon: Moon,
    color: 'primary'
  },
  {
    value: '60 min',
    label: 'automatisk daglig skärmtidsgräns på TikTok för under 18 år',
    icon: Clock,
    color: 'coral'
  },
  {
    value: '16 år',
    label: 'åldersgräns för direktmeddelanden på TikTok',
    icon: Users,
    color: 'primary'
  }
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-sand-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Forskningsbaserat
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Vad säger forskningen?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Här sammanfattar vi den forskning som ligger till grund för våra rekommendationer.
              Kunskap är första steget till att fatta informerade beslut om ditt barns digitala liv.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statistics.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 border border-sand-200 text-center"
                >
                  <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                    stat.color === 'coral' ? 'bg-coral-100' : 'bg-primary-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      stat.color === 'coral' ? 'text-coral-500' : 'text-primary-500'
                    }`} />
                  </div>
                  <div className={`font-display text-2xl font-bold mb-1 ${
                    stat.color === 'coral' ? 'text-coral-600' : 'text-primary-600'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Findings */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">
            Forskningsresultat
          </h2>
          <div className="space-y-6">
            {researchFindings.map((section, index) => {
              const Icon = section.icon
              const isCoralAccent = section.color === 'coral'

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-sand-200 overflow-hidden"
                >
                  <div className={`flex items-center gap-3 px-6 py-4 border-b ${
                    isCoralAccent ? 'bg-coral-50 border-coral-100' : 'bg-primary-50 border-primary-100'
                  }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isCoralAccent ? 'bg-coral-100' : 'bg-primary-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        isCoralAccent ? 'text-coral-500' : 'text-primary-500'
                      }`} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {section.findings.map((finding, findingIndex) => (
                        <li key={findingIndex} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            isCoralAccent ? 'text-coral-400' : 'text-primary-400'
                          }`} />
                          <span className="text-gray-700">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Official Recommendations */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">
            Officiella rekommendationer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-sand-50 rounded-2xl p-6 border border-sand-200"
              >
                <div className="text-sm font-medium text-primary-600 mb-1">{rec.source}</div>
                <div className="font-display font-bold text-gray-900 mb-4">{rec.target}</div>
                <ul className="space-y-2">
                  {rec.recommendations.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-primary-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Balance */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
            <h2 className="font-display text-2xl font-bold mb-4 text-center">
              Balansen är nyckeln
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-semibold text-primary-100 mb-3">Det handlar inte om förbud</h3>
                <p className="text-primary-100 text-sm leading-relaxed">
                  Målet är inte att totalförbjuda roliga klipp eller sociala medier, utan att hjälpa ditt barn
                  att få en balanserad mediediet. Ett par förvalda YouTube-kanaler eller en Netflix-profil
                  med barnläge ger mer kontrollerat nöje än att låta algoritmerna härja fritt.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-100 mb-3">Dialog före kontroll</h3>
                <p className="text-primary-100 text-sm leading-relaxed">
                  Tekniska inställningar är ett stöd, men det viktigaste skyddet är en öppen relation
                  där barnet vågar prata med dig. Prata om innehållet ni ser – om barnet stöter på något
                  konstigt, var öppen och diskutera det utan att skuldbelägga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Källor och vidare läsning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://mediemyndigheten.se/barn-och-unga/for-vuxna/foraldraguider/foraldrainstallningar-for-skarmtid-och-sakerhet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-sand-50 rounded-xl border border-sand-200 hover:border-primary-300 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <ExternalLink className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  Mediemyndigheten
                </div>
                <div className="text-sm text-gray-500">
                  Föräldrainställningar för skärmtid och säkerhet
                </div>
              </div>
            </a>
            <a
              href="https://www.folkhalsomyndigheten.se"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-sand-50 rounded-xl border border-sand-200 hover:border-primary-300 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <ExternalLink className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  Folkhälsomyndigheten
                </div>
                <div className="text-sm text-gray-500">
                  Rekommendationer för barn och ungas hälsa
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Redo att börja?
          </h2>
          <p className="text-gray-600 mb-6">
            Nu när du vet varför det är viktigt – ta steget och ställ in skydden på ditt barns enheter.
          </p>
          <Link
            href="/guider"
            className="inline-flex items-center gap-2 px-8 py-4 bg-coral-400 text-white rounded-2xl font-semibold text-lg hover:bg-coral-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Gå till guiderna
          </Link>
        </div>
      </section>
    </div>
  )
}
