import { AlertTriangle, UserX, Eye, Zap, CreditCard, MessageCircle, Shield, Heart, Phone, CheckCircle2, ExternalLink, LucideIcon } from 'lucide-react'
import Link from 'next/link'

export const metadata = { title: 'Risker på nätet | Föräldrakollen', description: 'Risker barn möter online och hur du skyddar dem.' }

type Severity = 'high' | 'medium' | 'low'
interface Risk { id: string; icon: LucideIcon; title: string; severity: Severity; description: string; statistics: string; howItWorks: string[]; warningSigns: string[]; protection: string[]; guideLink: string }

const risks: Risk[] = [
  { id:'grooming', icon:UserX, title:'Grooming', severity:'high', description:'Vuxna som tar kontakt med barn online', statistics:'1 av 4 barn har utsatts för groomingförsök', howItWorks:['Börjar med smicker','Bygger förtroende','Ber om personlig info gradvis','Försöker isolera barnet','Kan be om bilder'], warningSigns:['Hemlighetsfull kring kontakter','Nya presenter utan förklaring','Ändrat beteende','Döljer skärmen','Vill träffa nätbekanta'], protection:['Begränsa meddelanden till kända kontakter','Prata om att inte ge ut info','Granska vänlistor tillsammans','Uppmuntra barnet att berätta','Stå på barnets sida'], guideLink:'meddelanden' },
  { id:'beroende', icon:Zap, title:'Skärmberoende', severity:'high', description:'Appar designade att maximera skärmtid', statistics:'Algoritmflöden designade att fånga uppmärksamheten', howItWorks:['Oändlig scroll','FOMO-notifikationer','Dopamin-belöningssystem','Personaliserade algoritmer','Likes och streaks'], warningSigns:['Svårt att sluta','Irriterad utan skärm','Tappar intresse för annat','Ljuger om tid online','Sämre sömn'], protection:['Tydliga tidsgränser','Föräldrakontroll','Skärmfria zoner','Var en god förebild','Aktiviteter offline'], guideLink:'skarmtid' },
  { id:'innehall', icon:Eye, title:'Olämpligt innehåll', severity:'medium', description:'Pornografi, våld, hat och skadligt innehåll', statistics:'Nätporr kan ge skev bild av relationer', howItWorks:['Dyker upp i sökresultat','Vänner delar','Algoritmer rekommenderar','Pop-up-annonser','Hashtags leder fel'], warningSigns:['Stänger snabbt ner','Verkar oroad efter skärmtid','Frågor om vuxna ämnen','Olämpliga ord','Undviker att visa'], protection:['Innehållsfilter','YouTube Kids','Begränsat läge','Prata öppet','Reagera lugnt'], guideLink:'innehall' },
  { id:'integritet', icon:Shield, title:'Integritet och data', severity:'medium', description:'Appar som samlar personlig info', statistics:'Platsdata kan läcka hemadress och skola', howItWorks:['Plats/kamera/kontakter','Geotaggar i bilder','Offentlig profilinfo','Beteendedata','Data säljs vidare'], warningSigns:['Ort/skola i profil','Platstaggade bilder','För många app-behörigheter','Riktigt namn online','Offentlig profil'], protection:['Stäng av platstjänster','Ghost Mode på Snapchat','Anonymt användarnamn','Granska behörigheter','Lär ut dataskydd'], guideLink:'plats' },
  { id:'nathat', icon:MessageCircle, title:'Näthat och mobbning', severity:'medium', description:'Kränkningar och trakasserier online', statistics:'Mobbning kan komma från okända', howItWorks:['Elaka kommentarer','Ryktesspridning','Utfrysning','Spridning av bilder','Fejkkonton'], warningSigns:['Vill inte använda telefon','Ledsen efter online-tid','Drar sig undan','Ändrade vanor','Negativt om sig själv'], protection:['Öppen dialog','Lär blockera/anmäl','Spara bevis','Kontakta skola/polis','Stötta — aldrig deras fel'], guideLink:'meddelanden' },
  { id:'ekonomi', icon:CreditCard, title:'Ekonomiska risker', severity:'low', description:'Oavsiktliga köp och bedrägerier', statistics:'Tusentals kronor i oväntade in-app-köp', howItWorks:['In-app-köp','Loot-lådor','Svåra prenumerationer','Bedrägerier','Pay-to-win'], warningSigns:['Vill köpa i spel','Oväntade transaktioner','Alla andra får','Mystiska presenter','Ber om kortinfo'], protection:['Stäng av köp i appar','Koppla ej betalkort','Eventuell budget','Prata om riktiga pengar','Köp tillsammans'], guideLink:'kop' },
]

const help = [
  { name:'BRIS', desc:'Stödlinje för barn och unga', phone:'116 111', url:'https://www.bris.se' },
  { name:'Polisen', desc:'Anmäl brott eller rådgivning', phone:'114 14', url:'https://polisen.se' },
  { name:'Mind', desc:'Stöd för psykisk hälsa', phone:'90101', url:'https://mind.se' },
]

const sevColors: Record<Severity,string> = { high:'bg-coral-50 text-coral-600 border-coral-200', medium:'bg-amber-50 text-amber-600 border-amber-200', low:'bg-navy-50 text-navy-600 border-navy-200' }
const sevLabels: Record<Severity,string> = { high:'Hög risk', medium:'Medium', low:'Lägre risk' }

export default function RisksPage() {
  return (
    <div>
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 text-coral-600 rounded-full text-sm font-medium mb-6"><AlertTriangle className="w-4 h-4" />Viktigt att känna till</div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-900 mb-4">Risker på nätet</h1>
          <p className="text-lg text-warm-500 max-w-2xl mx-auto">Förstå riskerna för att kunna skydda ditt barn.</p>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"><Heart className="w-5 h-5 text-navy-500" /></div>
            <div><h3 className="font-semibold text-warm-800 mb-1">Kom ihåg</h3><p className="text-warm-500 text-sm">De flesta barn använder internet utan att något allvarligt händer. Öppen dialog är det bästa skyddet.</p></div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {risks.map((r) => { const Icon = r.icon; return (
            <div key={r.id} id={r.id} className="bg-white rounded-2xl border border-warm-100 overflow-hidden scroll-mt-24 hover:shadow-md transition-shadow">
              <div className="p-6 border-b border-warm-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center flex-shrink-0"><Icon className="w-6 h-6 text-coral-500" /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h2 className="font-display font-bold text-xl text-warm-800">{r.title}</h2>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${sevColors[r.severity]}`}>{sevLabels[r.severity]}</span>
                    </div>
                    <p className="text-warm-500">{r.description}</p>
                    <p className="text-sm text-coral-600 font-medium mt-2">{r.statistics}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><h3 className="font-semibold text-warm-600 mb-3 text-sm uppercase tracking-wide">Hur det fungerar</h3><ul className="space-y-2">{r.howItWorks.map((x,i)=>(<li key={i} className="flex items-start gap-2 text-sm text-warm-500"><span className="text-warm-300 mt-1">•</span>{x}</li>))}</ul></div>
                <div><h3 className="font-semibold text-coral-600 mb-3 text-sm uppercase tracking-wide">Varningstecken</h3><ul className="space-y-2">{r.warningSigns.map((x,i)=>(<li key={i} className="flex items-start gap-2 text-sm text-warm-500"><AlertTriangle className="w-4 h-4 text-coral-400 flex-shrink-0 mt-0.5" />{x}</li>))}</ul></div>
                <div><h3 className="font-semibold text-navy-600 mb-3 text-sm uppercase tracking-wide">Så skyddar du</h3><ul className="space-y-2">{r.protection.map((x,i)=>(<li key={i} className="flex items-start gap-2 text-sm text-warm-500"><CheckCircle2 className="w-4 h-4 text-navy-400 flex-shrink-0 mt-0.5" />{x}</li>))}</ul><Link href={`/guider#${r.guideLink}`} className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-navy-600 hover:text-navy-800">Se guiden <ExternalLink className="w-3 h-3" /></Link></div>
              </div>
            </div>
          )})}
        </div>
      </section>

      <section className="py-12 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-8 text-center">Hit kan du vända dig</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {help.map((h,i)=>(<div key={i} className="bg-white rounded-2xl p-6 border border-warm-100 text-center shadow-sm">
              <h3 className="font-display font-bold text-warm-800 mb-1">{h.name}</h3>
              <p className="text-sm text-warm-500 mb-4">{h.desc}</p>
              <div className="flex items-center justify-center gap-2 mb-3"><Phone className="w-4 h-4 text-navy-500" /><span className="font-semibold text-navy-600">{h.phone}</span></div>
              <a href={h.url} target="_blank" rel="noopener noreferrer" className="text-sm text-navy-500 hover:text-navy-700 underline">{h.url.replace('https://','')}</a>
            </div>))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-[2rem] p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Du gör redan rätt</h2>
            <p className="text-warm-500 max-w-2xl mx-auto mb-6">Kombinera tekniska inställningar med öppna samtal — det bästa skyddet som finns.</p>
            <Link href="/guider" className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 text-white rounded-full font-semibold text-lg hover:bg-navy-700 transition-all shadow-lg shadow-navy-800/20">Ställ in skydden nu</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
