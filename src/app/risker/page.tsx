import {
  AlertTriangle,
  UserX,
  Eye,
  Zap,
  CreditCard,
  MessageCircle,
  Shield,
  Heart,
  Phone,
  CheckCircle2,
  ExternalLink,
  LucideIcon
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Risker på nätet | Föräldrakollen',
  description: 'Lär dig om riskerna barn möter online: grooming, näthat, beroendeframkallande design, olämpligt innehåll och mer. Varningstecken och hur du kan hjälpa.',
}

type Severity = 'high' | 'medium' | 'low'

interface Risk {
  id: string
  icon: LucideIcon
  title: string
  severity: Severity
  description: string
  statistics: string
  howItWorks: string[]
  warningSigns: string[]
  protection: string[]
  guideLink: string
}

const risks: Risk[] = [
  {
    id: 'grooming',
    icon: UserX,
    title: 'Grooming',
    severity: 'high',
    description: 'Vuxna som tar kontakt med barn online för att utnyttja dem sexuellt',
    statistics: '1 av 4 barn i Sverige har utsatts för groomingförsök online',
    howItWorks: [
      'Börjar ofta med smicker och komplimanger',
      'Bygger förtroende genom att visa förståelse',
      'Ber om personlig information gradvis',
      'Försöker isolera barnet från föräldrar och vänner',
      'Kan be om bilder eller föreslå att träffas'
    ],
    warningSigns: [
      'Barnet är hemlighetsfull kring vem de pratar med online',
      'Nya presenter eller pengar utan förklaring',
      'Ändrat beteende – tillbakadragen eller orolig',
      'Döljer skärmen när du kommer nära',
      'Vill träffa någon de bara känner från nätet'
    ],
    protection: [
      'Begränsa meddelanden till endast kända kontakter',
      'Prata om att aldrig ge ut personlig information',
      'Gå igenom vänlistor regelbundet tillsammans',
      'Uppmuntra barnet att alltid berätta om någon beter sig konstigt',
      'Visa att du står på barnets sida utan att skuldbelägga'
    ],
    guideLink: 'meddelanden'
  },
  {
    id: 'beroende',
    icon: Zap,
    title: 'Skärmberoende och beroendeframkallande design',
    severity: 'high',
    description: 'Appar och spel designade för att maximera tid på skärmen',
    statistics: 'Algoritmiska flöden är designade för att fånga uppmärksamheten med oändliga klipp',
    howItWorks: [
      'Oändlig scroll utan naturligt slut',
      'Notifikationer som skapar FOMO (rädsla att missa något)',
      'Belöningssystem som aktiverar hjärnans dopaminsystem',
      'Personaliserade algoritmer som lär sig vad som fångar dig',
      'Socialt tryck genom likes, streaks och följarantal'
    ],
    warningSigns: [
      'Svårt att sluta även när det är dags',
      'Blir irriterad eller arg när skärmen tas bort',
      'Förlorar intresse för andra aktiviteter',
      'Ljuger om hur mycket tid som spenderas online',
      'Sämre sömn och trötthet'
    ],
    protection: [
      'Sätt tydliga tidsgränser med nedtid på kvällen',
      'Använd föräldrakontroll för att begränsa appar',
      'Ha skärmfria zoner (sovrum, matbord)',
      'Modellera ett hälsosamt förhållande till din egen skärmanvändning',
      'Hitta roliga aktiviteter offline tillsammans'
    ],
    guideLink: 'skarmtid'
  },
  {
    id: 'innehall',
    icon: Eye,
    title: 'Olämpligt innehåll',
    severity: 'medium',
    description: 'Pornografi, våld, droger, hat och annat skadligt innehåll',
    statistics: 'Nätporr kan ge en skev bild av relationer och sexualitet hos barn',
    howItWorks: [
      'Kan dyka upp oavsiktligt i sökresultat eller flöden',
      'Vänner kan dela länkar eller skicka bilder',
      'Algoritmer kan rekommendera gränsfall-innehåll',
      'Popp-upp-annonser på oseriösa sidor',
      'Hashtags och sökord som leder till olämpligt material'
    ],
    warningSigns: [
      'Stänger snabbt ner saker när du kommer',
      'Verkar skakad eller oroad efter skärmtid',
      'Ställer frågor om vuxna ämnen',
      'Har lärt sig ord eller begrepp som känns åldersmässigt olämpliga',
      'Undviker att berätta vad de tittar på'
    ],
    protection: [
      'Aktivera innehållsfilter på alla enheter',
      'Använd YouTube Kids istället för vanliga YouTube',
      'Sätt på Begränsat läge på alla plattformar',
      'Prata öppet om att olämpligt innehåll finns – och att det är okej att berätta',
      'Reagera lugnt om barnet sett något – skuldbelägg inte'
    ],
    guideLink: 'innehall'
  },
  {
    id: 'integritet',
    icon: Shield,
    title: 'Integritet och datainsamling',
    severity: 'medium',
    description: 'Appar som samlar in och delar personlig information om barnet',
    statistics: 'Platsdata kan läcka information om hemadress, skola eller fritidsaktiviteter',
    howItWorks: [
      'Appar ber om tillgång till plats, kamera, kontakter',
      'Bilder kan innehålla geotaggar som röjer var de togs',
      'Profilinfo som delas offentligt kan kartlägga barnet',
      'Sökhistorik och beteendedata används för riktad reklam',
      'Data kan säljas till tredje part eller läcka vid intrång'
    ],
    warningSigns: [
      'Barnet har delat sin ort eller skola i profilen',
      'Bilder med platstagg på sociala medier',
      'Appar har fler behörigheter än nödvändigt',
      'Använder sitt riktiga namn som användarnamn',
      'Har offentlig profil med personlig information'
    ],
    protection: [
      'Stäng av platstjänster för sociala appar',
      'Använd Spökläge (Ghost Mode) på Snapchat',
      'Hjälp barnet välja ett anonymt användarnamn',
      'Granska app-behörigheter regelbundet',
      'Lär ut att man inte behöver fylla i riktiga uppgifter överallt'
    ],
    guideLink: 'plats'
  },
  {
    id: 'nathat',
    icon: MessageCircle,
    title: 'Näthat och mobbning',
    severity: 'medium',
    description: 'Kränkningar, hot och trakasserier som sker online',
    statistics: 'Mobbning kan komma från okända via spel och sociala medier',
    howItWorks: [
      'Elaka kommentarer på inlägg eller bilder',
      'Ryktesspridning i gruppchatter',
      'Utfrysning från grupper eller spel',
      'Spridning av pinsamma bilder eller skärmdumpar',
      'Skapande av fejkkonton för att förnedra'
    ],
    warningSigns: [
      'Vill plötsligt inte använda telefonen/datorn',
      'Verkar ledsen eller orolig efter att ha varit online',
      'Drar sig undan socialt',
      'Förändrade sovvanor eller aptit',
      'Pratar negativt om sig själv'
    ],
    protection: [
      'Ha en öppen dialog om vad som händer online',
      'Lär barnet hur man blockerar och anmäler',
      'Spara bevis om mobbning sker',
      'Kontakta skola eller polis vid allvarliga fall',
      'Stötta barnet – det är aldrig deras fel'
    ],
    guideLink: 'meddelanden'
  },
  {
    id: 'ekonomi',
    icon: CreditCard,
    title: 'Ekonomiska risker',
    severity: 'low',
    description: 'Oavsiktliga köp, bedrägerier och spelliknande mekanismer',
    statistics: 'Många föräldrar har fått räkningar på tusentals kronor för in-app-köp',
    howItWorks: [
      'In-app-köp som lockar med spelvaluta eller fördelar',
      'Loot-lådor med slumpmässigt innehåll (spelliknande)',
      'Prenumerationstjänster som är svåra att avsluta',
      'Bedrägerier som lovar gratis saker mot personinfo',
      'Spel som kräver köp för att avancera'
    ],
    warningSigns: [
      'Pratar mycket om att vilja köpa saker i spel',
      'Oväntade transaktioner på kontoutdrag',
      'Tjatar om att "alla andra" får köpa',
      'Har fått "presenter" i spel utan att veta hur',
      'Ber om kontokortsinformation'
    ],
    protection: [
      'Stäng av köp i appar helt eller kräv lösenord',
      'Koppla inte betalkort till barnets konton',
      'Sätt eventuellt en månadsbudget för digitala köp',
      'Prata om att digitala varor kostar riktiga pengar',
      'Gör köp tillsammans istället för att barnet klickar själv'
    ],
    guideLink: 'kop'
  }
]

const helpResources = [
  {
    name: 'BRIS',
    description: 'Barnens rätt i samhället – stödlinje för barn och unga',
    phone: '116 111',
    url: 'https://www.bris.se'
  },
  {
    name: 'Polisen',
    description: 'Anmäl brott eller få rådgivning',
    phone: '114 14',
    url: 'https://polisen.se'
  },
  {
    name: 'Mind',
    description: 'Stöd för psykisk hälsa',
    phone: '90101',
    url: 'https://mind.se'
  }
]

export default function RisksPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-coral-50 to-sand-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-100 text-coral-700 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Viktigt att känna till
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Risker på nätet
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              För att kunna skydda ditt barn behöver du förstå vilka risker som finns.
              Här beskriver vi de vanligaste hoten och hur du kan känna igen varningssignaler.
            </p>
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="py-8 -mt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 border border-sand-200 flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-primary-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Kom ihåg</h3>
              <p className="text-gray-600 text-sm">
                De flesta barn använder internet utan att något allvarligt händer. Målet är inte att skrämma,
                utan att ge dig kunskap att skydda och stötta ditt barn. En öppen dialog är det bästa skyddet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {risks.map((risk) => {
              const Icon = risk.icon
              const severityColors = {
                high: 'bg-coral-100 text-coral-600 border-coral-200',
                medium: 'bg-amber-100 text-amber-600 border-amber-200',
                low: 'bg-primary-100 text-primary-600 border-primary-200'
              }
              const severityLabels = {
                high: 'Hög risk',
                medium: 'Medium risk',
                low: 'Lägre risk'
              }

              return (
                <div
                  key={risk.id}
                  id={risk.id}
                  className="bg-white rounded-3xl border border-sand-200 overflow-hidden scroll-mt-24"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-sand-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-coral-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-coral-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <h2 className="font-display font-bold text-xl text-gray-900">
                            {risk.title}
                          </h2>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${severityColors[risk.severity]}`}>
                            {severityLabels[risk.severity]}
                          </span>
                        </div>
                        <p className="text-gray-600">{risk.description}</p>
                        <p className="text-sm text-coral-600 font-medium mt-2">
                          {risk.statistics}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* How it works */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                        Hur det fungerar
                      </h3>
                      <ul className="space-y-2">
                        {risk.howItWorks.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-gray-400 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Warning signs */}
                    <div>
                      <h3 className="font-semibold text-coral-600 mb-3 text-sm uppercase tracking-wide">
                        Varningstecken
                      </h3>
                      <ul className="space-y-2">
                        {risk.warningSigns.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <AlertTriangle className="w-4 h-4 text-coral-400 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Protection */}
                    <div>
                      <h3 className="font-semibold text-primary-600 mb-3 text-sm uppercase tracking-wide">
                        Så skyddar du
                      </h3>
                      <ul className="space-y-2">
                        {risk.protection.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/guider#${risk.guideLink}`}
                        className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary-600 hover:text-primary-700"
                      >
                        Se guiden
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Help resources */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Hit kan du vända dig
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Om något har hänt eller om du behöver prata med någon finns det hjälp att få.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {helpResources.map((resource, index) => (
              <div
                key={index}
                className="bg-sand-50 rounded-2xl p-6 border border-sand-200 text-center"
              >
                <h3 className="font-display font-bold text-gray-900 mb-1">{resource.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span className="font-semibold text-primary-600">{resource.phone}</span>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  {resource.url.replace('https://', '')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final message */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-sand-100 rounded-3xl p-8 border border-primary-100 text-center">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Du gör redan rätt
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Genom att ta dig tid att lära dig om dessa risker tar du ett viktigt steg för att skydda ditt barn.
              Kombinera tekniska inställningar med öppna samtal – det är det bästa skyddet som finns.
            </p>
            <Link
              href="/guider"
              className="inline-flex items-center gap-2 px-8 py-4 bg-coral-400 text-white rounded-2xl font-semibold text-lg hover:bg-coral-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Ställ in skydden nu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
