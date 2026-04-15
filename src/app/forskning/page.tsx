import { BookOpen, Brain, Moon, Heart, Clock, Users, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = { title: 'Forskning om skärmtid | Föräldrakollen', description: 'Vad säger forskningen om barns skärmanvändning?' }

const findings = [
  { icon: Moon, title: 'Sömn och skärmtid', items: ['Längre skärmtid leder till sämre sömn och fler depressiva symtom','Barn 8–13 år behöver 9–11 timmars sömn per natt','Bara genom att lägga bort mobilen i tid kan ungdomar sova ~20 min längre','Skärmar på kvällen stör insomning genom stimulerande innehåll och blått ljus','Skärmtid sent på kvällen kan försämra skolprestationer och humör'] },
  { icon: Brain, title: 'Psykisk hälsa', items: ['Omfattande skärmanvändning hänger samman med ökad psykisk ohälsa','Sociala medier från 10 års ålder kan öka risken för kroppsmissnöje','Algoritmerna bryr sig mer om engagemang än åldersanpassning','Algoritmer kan bidra till dålig självkänsla genom perfekta ideal','Många fastnar lätt i mobilen, vilket drabbar relationer och sömn'] },
  { icon: Heart, title: 'Social utveckling', items: ['Barn mår bättre när de interagerar med folk de känner online','Öppen dialog mellan förälder och barn är avgörande','Engagerat föräldraskap minskar risken för skärmberoende','Många barn drar sig för att berätta av rädsla eller skuld','Regelbundna samtal om onlinelivet bygger förtroende'] },
]

const stats = [
  { value: '1 av 4', label: 'barn har utsatts för groomingförsök', source: 'Unga, sex och internet (2021)', url: 'https://allmannabarnhuset.se/wp-content/uploads/2022/09/Unga_Sex_Och_Internet_Efter_MeToo_2021.pdf', icon: AlertTriangle },
  { value: '1–2 tim', label: 'rekommenderad max skärmtid/dag', source: 'Folkhälsomyndigheten (2024)', url: 'https://www.folkhalsomyndigheten.se/contentassets/201463a976054dde8ad7aa8a47861c0a/rekommendationer-digitala-medier-barns-ungas-medieanvandning.pdf', icon: Moon },
  { value: '60 min', label: 'TikToks dagsgräns för <18', source: 'TikTok Newsroom (2023)', url: 'https://newsroom.tiktok.com/sv-se/nya-funktioner-for-ungdomar-och-familjer-pa-tiktok', icon: Clock },
  { value: '16 år', label: 'åldersgräns för DM på TikTok', source: 'TikTok Safety', url: 'https://www.tiktok.com/safety/sv-se/guardians-guide/', icon: Users },
]

export default function ResearchPage() {
  return (
    <div>
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 text-navy-600 rounded-full text-sm font-medium mb-6"><BookOpen className="w-4 h-4" />Forskningsbaserat</div>
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
                <div className="text-[10px] text-warm-400 group-hover:text-navy-500">{s.source} &rarr;</div>
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
              <div className="p-6"><ul className="space-y-3">{s.items.map((f, j) => (<li key={j} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-navy-400" /><span className="text-warm-600">{f}</span></li>))}</ul></div>
            </div>
          )})}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 rounded-[2rem] p-9 text-center">
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
          <Link href="/guider" className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 text-white rounded-full font-semibold text-lg hover:bg-navy-700 transition-all shadow-lg shadow-navy-800/20">Gå till guiderna</Link>
        </div>
      </section>
    </div>
  )
}
