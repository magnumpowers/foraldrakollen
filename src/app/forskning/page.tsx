import { BookOpen, Brain, Moon, Heart, Clock, Users, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = { title: 'Forskning om skärmtid | Föräldrakollen', description: 'Vad säger forskningen om barns skärmanvändning?' }

const findings = [
  { icon: Moon, title: 'Sömn och skärmtid', items: ['Mycket skärmtid kan leda till sämre sömn och fler depressiva symtom','Barn 6–12 år behöver 10–11 timmars sömn, tonåringar 8–9 timmar','Ungdomar som slutade med skärmar kl 21 somnade ca 20 min tidigare och sov ca 17 min längre (Perrault m.fl. 2019)','Skärmar bör stängas av 30–60 minuter före sänggåendet','Mobilen mår bäst av att ladda utanför sovrummet'] },
  { icon: Brain, title: 'Psykisk hälsa', items: ['Omfattande skärmanvändning hänger samman med ökad psykisk ohälsa','Sociala medier från 10 års ålder kan öka risken för kroppsmissnöje','Algoritmerna bryr sig mer om engagemang än åldersanpassning','Algoritmer kan bidra till dålig självkänsla genom perfekta ideal','Många fastnar lätt i mobilen, vilket drabbar relationer och sömn'] },
  { icon: Heart, title: 'Social utveckling', items: ['Öppen dialog mellan förälder och barn är avgörande','Engagerat föräldraskap minskar risken för skärmberoende','Regelbundna samtal om onlinelivet bygger förtroende','Folkhälsomyndigheten rekommenderar sedan juni 2026 att vänta med egen smartphone till det år barnet fyller 13'] },
]

const stats = [
  { value: '1 av 4', label: 'unga har före 15 år blivit kontaktade i sexuellt syfte av någon minst 5 år äldre', source: 'Unga, sex och internet efter #metoo (2021)', url: 'https://web.archive.org/web/2024/https://allmannabarnhuset.se/wp-content/uploads/2022/09/Unga_Sex_Och_Internet_Efter_MeToo_2021.pdf', icon: AlertTriangle },
  { value: '1–2 tim', label: 'skärmtid per dag på fritiden för barn 6–12 år', source: 'Folkhälsomyndigheten (2024)', url: 'https://www.folkhalsomyndigheten.se/contentassets/201463a976054dde8ad7aa8a47861c0a/rekommendationer-digitala-medier-barns-ungas-medieanvandning.pdf', icon: Moon },
  { value: '60 min', label: 'TikToks automatiska påminnelse för under 18 år', source: 'TikTok Newsroom (2023)', url: 'https://newsroom.tiktok.com/sv-se/nya-funktioner-for-ungdomar-och-familjer-pa-tiktok', icon: Clock },
  { value: '16 år', label: 'åldersgräns för DM på TikTok', source: 'TikTok Safety', url: 'https://www.tiktok.com/safety/sv-se/guardians-guide/', icon: Users },
]

export default function ResearchPage() {
  return (
    <div>
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="etikett mb-5">Forskningsbaserat</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-900 mb-4">Vad säger forskningen?</h1>
          <p className="text-lg text-warm-500 max-w-2xl mx-auto">Kunskap är första steget till informerade beslut om ditt barns digitala liv.</p>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => { const Icon = s.icon; return (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="bg-warm-50 rounded-2xl p-5 text-center hover:bg-navy-50 transition-all group">
                <div className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 bg-navy-50 group-hover:bg-navy-100"><Icon className="w-5 h-5 text-navy-500" /></div>
                <div className="font-display text-2xl font-extrabold text-navy-700 mb-1">{s.value}</div>
                <div className="text-xs text-warm-500 leading-tight mb-2">{s.label}</div>
                <div className="text-[10px] text-warm-500 group-hover:text-navy-500">{s.source} &rarr;</div>
              </a>
            )})}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-display text-2xl font-bold text-navy-900 text-center mb-6">Forskningsresultat</h2>
          {findings.map((s, i) => { const Icon = s.icon; return (
            <div key={i} className="bg-white rounded-2xl border border-warm-100 overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 bg-warm-50 border-b border-warm-100">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-navy-50"><Icon className="w-5 h-5 text-navy-500" /></div>
                <h3 className="font-display font-bold text-lg text-warm-800">{s.title}</h3>
              </div>
              <div className="p-6"><ul className="space-y-3">{s.items.map((f, j) => (<li key={j} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-navy-500" /><span className="text-warm-600">{f}</span></li>))}</ul></div>
            </div>
          )})}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 rounded-md p-9 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Balansen är nyckeln</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 text-left">
              <div><h3 className="font-semibold text-navy-100 mb-2">Det handlar inte om förbud</h3><p className="text-navy-300 text-sm leading-relaxed">Målet är att hjälpa ditt barn att få en balanserad mediediet. Förvalda kanaler ger mer kontroll än fria algoritmer.</p></div>
              <div><h3 className="font-semibold text-navy-100 mb-2">Dialog före kontroll</h3><p className="text-navy-300 text-sm leading-relaxed">Det viktigaste skyddet är en öppen relation. Prata om innehållet — diskutera utan att skuldbelägga.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Redo att börja?</h2>
          <p className="text-warm-500 mb-6">Nu när du vet varför — ta steget och ställ in skydden.</p>
          <Link href="/guider" className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-paper rounded-md font-semibold hover:bg-navy-700 transition-colors">Gå till guiderna</Link>
        </div>
      </section>
    </div>
  )
}
