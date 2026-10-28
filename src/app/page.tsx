import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const guideAreas = [
  { id: 'skarmtid', title: 'Skärmtid nattetid', description: 'Skydda sömnen genom att begränsa skärmanvändning på kvällen.' },
  { id: 'algoritmer', title: 'Algoritmiskt innehåll', description: 'Hantera TikTok, Reels och YouTube Shorts på ett hälsosamt sätt.' },
  { id: 'meddelanden', title: 'Okända kontakter', description: 'Blockera meddelanden från främlingar och skydda mot grooming.' },
  { id: 'plats', title: 'Platstjänster', description: 'Stäng av onödig platsspårning och skydda persondata.' },
  { id: 'innehall', title: 'Vuxeninnehåll', description: 'Filtrera och blockera olämpligt innehåll som porr och våld.' },
  { id: 'appar', title: 'Appgodkännande', description: 'Kräv ditt godkännande innan nya appar installeras.' },
  { id: 'kop', title: 'Köp i appar', description: 'Förhindra oavsiktliga köp och skydda er ekonomi.' },
]

const stats = [
  { value: '1 av 4', label: 'unga har före 15 års ålder blivit kontaktade i sexuellt syfte av någon minst fem år äldre', source: 'Unga, sex och internet efter #metoo (2021)', sourceUrl: 'https://web.archive.org/web/2024/https://allmannabarnhuset.se/wp-content/uploads/2022/09/Unga_Sex_Och_Internet_Efter_MeToo_2021.pdf' },
  { value: '10–11 h', label: 'sömn per natt behöver barn 6–12 år', source: 'Folkhälsomyndigheten (2024)', sourceUrl: 'https://www.folkhalsomyndigheten.se/contentassets/201463a976054dde8ad7aa8a47861c0a/rekommendationer-digitala-medier-barns-ungas-medieanvandning.pdf' },
  { value: '60 min', label: 'efter så lång tid påminner TikTok automatiskt användare under 18 år', source: 'TikTok Newsroom (2023)', sourceUrl: 'https://newsroom.tiktok.com/sv-se/nya-funktioner-for-ungdomar-och-familjer-pa-tiktok' },
]

const ikvall = [
  'Lägg barnets mobil på laddning utanför sovrummet.',
  'Slå på Skärmtid eller Family Link med en kod bara du kan.',
  'Fråga barnet vilka appar som är roligast just nu.',
]

const reasons = [
  { title: 'Psykisk hälsa', text: 'Omfattande skärmanvändning hänger samman med ökad psykisk ohälsa hos unga. Algoritmerna bryr sig mer om engagemang än om åldersanpassning.' },
  { title: 'Sömn', text: 'Mycket skärmtid kan leda till sämre sömn. I en studie somnade ungdomar som slutade med skärmar klockan 21 omkring 20 minuter tidigare och sov 17 minuter längre.' },
  { title: 'Sociala risker', text: 'Var fjärde ung har före 15 års ålder blivit kontaktad i sexuellt syfte av någon minst fem år äldre. Begränsa vem som kan kontakta ditt barn.' },
]

const prata = [
  'Prata regelbundet om vad barnet gör online.',
  'Reagera lugnt om barnet berättar något jobbigt.',
  'Gå igenom vänlistor och följare tillsammans.',
  'Visa att du står på barnets sida, utan att skuldbelägga.',
]

export default function Home() {
  return (
    <div className="text-ink">
      {/* Hero */}
      <section className="pt-14 sm:pt-20 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="etikett mb-5">För föräldrar med barn 8–13 år</p>
            <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl text-ink mb-7 text-balance">
              Skydda ditt barn på nätet. En inställning i taget.
            </h1>
            <p className="text-lg sm:text-xl text-warm-600 mb-10 max-w-xl leading-relaxed">
              Konkreta guider för iOS, Android, TikTok, Instagram, Snapchat och YouTube.
              Byggda på svensk forskning och skrivna för föräldrar som inte är tekniker.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/guider"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink text-paper rounded-md font-semibold hover:bg-navy-700 transition-colors"
              >
                Börja med guiderna
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/forskning"
                className="inline-flex items-center justify-center px-7 py-3.5 text-ink rounded-md font-semibold underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-coral-500 transition-colors"
              >
                Läs forskningen
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5 bg-white rounded-md p-7 sm:p-8">
            <h2 className="font-display text-2xl text-ink mb-5">Gör det här ikväll</h2>
            <ol className="space-y-4">
              {ikvall.map((t, i) => (
                <li key={t} className="flex gap-4">
                  <span className="font-display text-2xl leading-none text-coral-500 w-6 flex-shrink-0">{i + 1}</span>
                  <span className="text-warm-700 leading-snug">{t}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-warm-500">
              Tar ungefär tio minuter. Resten av guiderna kan vänta till helgen.
            </p>
          </aside>
        </div>
      </section>

      {/* Siffror */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="font-display text-5xl text-ink mb-3">{stat.value}</div>
                <p className="text-warm-600 mb-3 leading-snug">{stat.label}</p>
                <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-warm-500 underline underline-offset-2 hover:text-coral-600">
                  Källa: {stat.source}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Men alla andra" */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/men-alla-andra"
            className="group grid md:grid-cols-12 gap-6 items-center bg-paper-dark rounded-md p-8 md:p-12"
          >
            <blockquote className="md:col-span-7 font-display italic text-3xl sm:text-4xl text-ink leading-tight">
              &bdquo;Men alla andra har ju&hellip;&rdquo;
            </blockquote>
            <div className="md:col-span-5">
              <p className="text-warm-700 mb-4 leading-relaxed">
                Har ditt barn sagt det? Se hur många andra föräldrar i din kommun som hör samma sak, och vad de svarar.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-ink group-hover:text-coral-600 transition-colors">
                Se din kommun <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* De sju områdena */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl text-ink mb-4">Sju saker att ställa in</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              Ordnade efter vad som gör mest nytta. Börja uppifrån och ta en i taget.
            </p>
            <Link href="/guider" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-coral-600 transition-colors">
              Alla guider med instruktioner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ol className="lg:col-span-8 space-y-2">
            {guideAreas.map((area, i) => (
              <li key={area.id}>
                <Link href={`/guider#${area.id}`} className="group flex items-baseline gap-4 sm:gap-6 py-3">
                  <span className="font-display text-lg text-warm-500 tabular-nums w-6 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl sm:text-2xl text-ink group-hover:text-coral-600 transition-colors">
                      {area.title}
                    </span>
                    <span className="block text-warm-500 mt-1">{area.description}</span>
                  </span>
                  <ArrowRight className="w-5 h-5 text-warm-300 group-hover:text-coral-600 transition-colors self-center flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Varför */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl text-ink mb-10">Varför det spelar roll</h2>
            <div className="space-y-8">
              {reasons.map(({ title, text }) => (
                <div key={title} className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6">
                  <h3 className="font-display text-xl text-ink">{title}</h3>
                  <p className="text-warm-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div>
              <h2 className="font-display text-2xl text-ink mb-4">Det viktigaste skyddet är du</h2>
              <p className="text-warm-600 mb-6 leading-relaxed">
                Ingen inställning är helt säker. Det som skyddar mest är att barnet vågar berätta för dig när något händer på nätet.
              </p>
              <ul className="space-y-3">
                {prata.map((tip) => (
                  <li key={tip} className="flex gap-3 text-warm-700">
                    <span className="text-coral-500 font-bold" aria-hidden>–</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avslut */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-3">Börja med sömnen.</h2>
              <p className="text-warm-600 max-w-xl">
                Skärmtid nattetid är den inställning som gör störst skillnad. Det tar några minuter.
              </p>
            </div>
            <Link
              href="/guider#skarmtid"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink text-paper rounded-md font-semibold hover:bg-navy-700 transition-colors flex-shrink-0"
            >
              Till guiden om skärmtid
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
