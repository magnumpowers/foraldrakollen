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
  AlertTriangle,
  HandHeart,
  Sparkles
} from 'lucide-react'

const guideAreas = [
  { id: 'skarmtid', icon: Moon, title: 'Skärmtid nattetid', description: 'Skydda sömnen genom att begränsa skärmanvändning på kvällen', priority: 1 },
  { id: 'algoritmer', icon: Smartphone, title: 'Algoritmiskt innehåll', description: 'Hantera TikTok, Reels och YouTube Shorts på ett hälsosamt sätt', priority: 2 },
  { id: 'meddelanden', icon: MessageSquareOff, title: 'Okända kontakter', description: 'Blockera meddelanden från främlingar och skydda mot grooming', priority: 3 },
  { id: 'plats', icon: MapPinOff, title: 'Platstjänster', description: 'Stäng av onödig platsspårning och skydda persondata', priority: 4 },
  { id: 'innehall', icon: ShieldAlert, title: 'Vuxeninnehåll', description: 'Filtrera och blockera olämpligt innehåll som porr och våld', priority: 5 },
  { id: 'appar', icon: AppWindow, title: 'Appgodkännande', description: 'Kräv ditt godkännande innan nya appar installeras', priority: 6 },
  { id: 'kop', icon: CreditCard, title: 'Köp i appar', description: 'Förhindra oavsiktliga köp och skydda er ekonomi', priority: 7 },
]

const stats = [
  { value: '1 av 4', label: 'barn har utsatts för groomingförsök online', source: 'Unga, sex och internet (2021)', sourceUrl: 'https://allmannabarnhuset.se/wp-content/uploads/2022/09/Unga_Sex_Och_Internet_Efter_MeToo_2021.pdf' },
  { value: '9-11h', label: 'sömn behöver barn 8-13 år per natt', source: 'Folkhälsomyndigheten (2024)', sourceUrl: 'https://www.folkhalsomyndigheten.se/contentassets/201463a976054dde8ad7aa8a47861c0a/rekommendationer-digitala-medier-barns-ungas-medieanvandning.pdf' },
  { value: '60 min', label: 'är TikToks automatiska dagsgräns för barn', source: 'TikTok Newsroom (2023)', sourceUrl: 'https://newsroom.tiktok.com/sv-se/nya-funktioner-for-ungdomar-och-familjer-pa-tiktok' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 text-navy-600 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Forskningsbaserad guide
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-navy-900 mb-6 text-balance leading-[1.1]">
              Skydda ditt barn
              <br />
              <span className="text-navy-400">på nätet</span>
            </h1>

            <p className="text-lg sm:text-xl text-warm-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Praktiska steg-för-steg-guider för att ställa in säkra inställningar på iOS, Android,
              TikTok, Instagram, Snapchat och YouTube. Anpassat för barn 8–13 år.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guider"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-navy-800 text-white rounded-full font-semibold text-lg hover:bg-navy-700 transition-all shadow-lg shadow-navy-800/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Börja skydda ditt barn
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/forskning"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-warm-50 text-warm-700 rounded-full font-semibold text-lg border border-warm-200 hover:bg-warm-100 hover:border-warm-300 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                Läs forskningen
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-warm-50 rounded-3xl p-7 text-center hover:bg-navy-50 transition-all">
                <div className="font-display text-4xl font-extrabold text-navy-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-warm-500 text-sm mb-2">
                  {stat.label}
                </div>
                <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-warm-400 hover:text-navy-500 transition-colors">
                  {stat.source} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Men alla andra" Banner */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/men-alla-andra"
            className="group flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-gradient-to-br from-navy-50 to-navy-100/50 rounded-[2rem] p-8 md:p-10 border border-navy-200/60 hover:shadow-lg hover:shadow-navy-100/50 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <HandHeart className="w-8 h-8 text-navy-500" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-1.5">
                &ldquo;Men alla andra har...&rdquo;
              </h2>
              <p className="text-warm-500">
                Har ditt barn sagt det? Du är inte ensam. Se hur många andra föräldrar i din kommun som hör samma sak.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-800 text-white rounded-full font-semibold group-hover:bg-navy-700 transition-colors shadow-sm flex-shrink-0">
              Tryck här
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Guide Areas */}
      <section className="py-20 bg-warm-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
              7 områden att skydda
            </h2>
            <p className="text-lg text-warm-500 max-w-2xl mx-auto">
              Prioriterat från viktigast till förebyggande. Börja uppifrån.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guideAreas.map((area) => {
              const Icon = area.icon
              return (
                <Link
                  key={area.id}
                  href={`/guider#${area.id}`}
                  className="group bg-white rounded-2xl p-6 border border-warm-100 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-50 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-navy-50 text-navy-500 group-hover:bg-navy-100 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-navy-400 mb-1 block">Steg {area.priority}</span>
                      <h3 className="font-display font-bold text-lg text-warm-800 mb-1 group-hover:text-navy-700 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-warm-400 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/guider" className="inline-flex items-center gap-2 text-navy-600 font-semibold hover:text-navy-800 transition-colors">
              Se alla guider med instruktioner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 mb-8">
                Varför är detta viktigt?
              </h2>
              <div className="space-y-7">
                {[
                  { icon: AlertTriangle, title: 'Psykisk hälsa', text: 'Omfattande skärmanvändning hänger samman med ökad psykisk ohälsa hos unga. Algoritmerna bryr sig mer om engagemang än åldersanpassning.', color: 'bg-coral-50 text-coral-500' },
                  { icon: Moon, title: 'Sömn och hälsa', text: 'Längre skärmtid leder till sämre sömn. Bara genom att lägga bort mobilen i tid kan ungdomar sova ~20 minuter längre per natt.', color: 'bg-navy-50 text-navy-500' },
                  { icon: Users, title: 'Sociala risker', text: '1 av 4 barn i Sverige har utsatts för groomingförsök online. Begränsa vem som kan kontakta ditt barn.', color: 'bg-coral-50 text-coral-500' },
                ].map(({ icon: Icon, title, text, color }) => (
                  <div key={title} className="flex gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-warm-800 mb-1">{title}</h3>
                      <p className="text-warm-500 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-50 rounded-[2rem] p-9">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-5">
                Det viktigaste skyddet
              </h3>
              <p className="text-warm-500 mb-6 leading-relaxed">
                Ingen inställning är 100% säker — det viktigaste skyddet är en öppen relation där barnet
                vågar prata med dig om nätet.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Prata regelbundet om vad barnet gör online',
                  'Reagera lugnt om barnet berättar något jobbigt',
                  'Gå igenom vänlistor och följare tillsammans',
                  'Visa att du står på barnets sida utan att skuldbelägga'
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-navy-500 flex-shrink-0 mt-0.5" />
                    <span className="text-warm-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Redo att börja?
          </h2>
          <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
            Det tar bara några minuter att ställa in de viktigaste skydden.
            Börja med skärmtid nattetid — det ger störst effekt.
          </p>
          <Link
            href="/guider"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-white text-navy-800 rounded-full font-semibold text-lg hover:bg-warm-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Visa steg-för-steg-guiderna
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
