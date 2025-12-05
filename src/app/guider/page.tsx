import { guides } from '@/lib/guides-data'
import { GuideCard } from '@/components/GuideCard'
import { Shield, Filter } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Steg-för-steg-guider | Föräldrakollen',
  description: 'Praktiska guider för att ställa in säkra inställningar på ditt barns enheter. Instruktioner för iOS, Android, TikTok, Instagram, Snapchat och YouTube.',
}

const platformFilters = [
  { id: 'all', label: 'Alla plattformar' },
  { id: 'ios', label: 'iOS' },
  { id: 'android', label: 'Android' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'snapchat', label: 'Snapchat' },
  { id: 'youtube', label: 'YouTube' },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-sand-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              7 områden att skydda
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Steg-för-steg-guider
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Följ guiderna i ordning – de är prioriterade från det viktigaste och mest skadliga,
              till det mer förebyggande. Bocka av stegen allt eftersom du gör dem.
            </p>
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-sand-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-sm text-gray-500 flex-shrink-0">Hoppa till:</span>
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={`#${guide.id}`}
                className="flex-shrink-0 px-3 py-1.5 text-sm font-medium rounded-lg bg-sand-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                {guide.priority}. {guide.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>

          {/* Summary table */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Sammanfattande översikt
            </h2>
            <div className="bg-white rounded-3xl border border-sand-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-sand-50 border-b border-sand-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Åtgärd</th>
                      <th className="text-center py-4 px-3 font-semibold text-gray-900">iOS</th>
                      <th className="text-center py-4 px-3 font-semibold text-gray-900">Android</th>
                      <th className="text-center py-4 px-3 font-semibold text-gray-900">YouTube</th>
                      <th className="text-center py-4 px-3 font-semibold text-gray-900">TikTok</th>
                      <th className="text-center py-4 px-3 font-semibold text-gray-900">Instagram</th>
                      <th className="text-center py-4 px-3 font-semibold text-gray-900">Snapchat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-100">
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Stänga av platsdelning</td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-gray-400">N/A</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                    </tr>
                    <tr className="bg-sand-50/50">
                      <td className="py-3 px-4 text-gray-700">Begränsa algoritmflöde</td>
                      <td className="py-3 px-3 text-center"><span className="text-amber-600 font-medium">Delvis</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-amber-600 font-medium">Delvis</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-amber-600 font-medium">Delvis</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-amber-600 font-medium">Delvis</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Blockera okända meddelanden</td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-amber-600 font-medium">Delvis</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                    </tr>
                    <tr className="bg-sand-50/50">
                      <td className="py-3 px-4 text-gray-700">Skärmfri nattetid</td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-gray-400">Nej</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-gray-400">Nej</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-gray-400">Nej</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Kräva app-godkännande</td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-gray-400">N/A</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-gray-400">N/A</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-gray-400">N/A</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-gray-400">N/A</span></td>
                    </tr>
                    <tr className="bg-sand-50/50">
                      <td className="py-3 px-4 text-gray-700">Inaktivera köp i appar</td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Filtrera vuxet innehåll</td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-primary-600 font-medium">Ja</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-amber-600 font-medium">Delvis</span></td>
                      <td className="py-3 px-3 text-center"><span className="text-amber-600 font-medium">Delvis</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-sand-50 border-t border-sand-200 text-xs text-gray-500">
                <strong>Ja</strong> = har inbyggt stöd · <strong>Delvis</strong> = viss funktion finns · <strong>Nej/N/A</strong> = inte tillgängligt (hanteras via OS-inställningar)
              </div>
            </div>
          </div>

          {/* Final note */}
          <div className="mt-12 p-6 bg-gradient-to-br from-primary-50 to-sand-100 rounded-3xl border border-primary-100 text-center">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
              Kom ihåg det viktigaste
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Att skydda barn på nätet är en fortlöpande process. Ingen inställning är 100% säker –
              det viktigaste skyddet är en <strong>öppen relation</strong> där barnet vågar prata med dig om nätet.
              Med tydliga gränser kring datadelning, innehåll och tid, kombinerat med dialog och stöd,
              lägger du en stark grund för ditt barns digitala välmående.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
