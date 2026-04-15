import { guides } from '@/lib/guides-data'
import { GuideCard } from '@/components/GuideCard'
import { Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Steg-för-steg-guider | Föräldrakollen',
  description: 'Praktiska guider för att ställa in säkra inställningar på ditt barns enheter.',
}

export default function GuidesPage() {
  return (
    <div>
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 text-navy-600 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />7 områden att skydda
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-900 mb-4">Steg-för-steg-guider</h1>
          <p className="text-lg text-warm-500 max-w-2xl mx-auto">Prioriterade från viktigast till förebyggande. Bocka av stegen allt eftersom.</p>
        </div>
      </section>

      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-warm-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-sm text-warm-400 flex-shrink-0">Hoppa till:</span>
            {guides.map((g) => (
              <Link key={g.id} href={`#${g.id}`} className="flex-shrink-0 px-3 py-1.5 text-sm font-medium rounded-full bg-warm-50 text-warm-600 hover:bg-navy-50 hover:text-navy-700 transition-colors border border-warm-100">
                {g.priority}. {g.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">{guides.map((g) => <GuideCard key={g.id} guide={g} />)}</div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-6 text-center">Sammanfattande översikt</h2>
            <div className="bg-white rounded-2xl border border-warm-100 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="bg-warm-50 border-b border-warm-100">
                    <th className="text-left py-4 px-4 font-semibold text-warm-700">Åtgärd</th>
                    {['iOS','Android','YouTube','TikTok','Instagram','Snapchat'].map(p => <th key={p} className="text-center py-4 px-3 font-semibold text-warm-700">{p}</th>)}
                  </tr></thead>
                  <tbody className="divide-y divide-warm-100">
                    {[
                      ['Stänga av platsdelning','Ja','Ja','N/A','Ja','Ja','Ja'],
                      ['Begränsa algoritmflöde','Delvis','Delvis','Ja','Ja','Delvis','Delvis'],
                      ['Blockera okända meddelanden','Ja','Delvis','Ja','Ja','Ja','Ja'],
                      ['Skärmfri nattetid','Ja','Ja','Nej','Ja','Nej','Nej'],
                      ['Kräva app-godkännande','Ja','Ja','N/A','N/A','N/A','N/A'],
                      ['Inaktivera köp i appar','Ja','Ja','Ja','Ja','Ja','Ja'],
                      ['Filtrera vuxet innehåll','Ja','Ja','Ja','Ja','Delvis','Delvis'],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 ? 'bg-warm-50/50' : ''}>
                        <td className="py-3 px-4 text-warm-600">{row[0]}</td>
                        {row.slice(1).map((v, j) => (
                          <td key={j} className="py-3 px-3 text-center">
                            <span className={`font-medium ${v === 'Ja' ? 'text-navy-600' : v === 'Delvis' ? 'text-amber-600' : 'text-warm-400'}`}>{v}</span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-warm-50 border-t border-warm-100 text-xs text-warm-500">
                <strong className="text-warm-600">Ja</strong> = inbyggt stöd · <strong className="text-warm-600">Delvis</strong> = viss funktion · <strong className="text-warm-600">Nej/N/A</strong> = ej tillgängligt
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-navy-50 rounded-[2rem] text-center">
            <h3 className="font-display text-xl font-bold text-navy-900 mb-3">Kom ihåg det viktigaste</h3>
            <p className="text-warm-500 max-w-2xl mx-auto">Ingen inställning är 100% säker — det viktigaste skyddet är en <strong className="text-warm-700">öppen relation</strong> där barnet vågar prata med dig om nätet.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
