'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Copy, Check, ExternalLink, Brain } from 'lucide-react'
import { hjalpResponses } from '@/lib/hjalp-att-svara'

export function HjalpAttSvara() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  async function handleCopy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {}
  }

  return (
    <div className="bg-navy-50 rounded-[2rem] p-8 border border-navy-100">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
          <Brain className="w-6 h-6 text-navy-500" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-navy-900">Hjälp att svara ditt barn</h3>
        </div>
      </div>
      <p className="text-warm-500 mb-6 ml-14">
        Forskningsbaserade svar du kan använda nästa gång ditt barn säger &ldquo;men alla andra har...&rdquo;
      </p>

      <div className="space-y-3">
        {hjalpResponses.map((r) => {
          const isOpen = openId === r.id
          return (
            <div key={r.id} className="bg-white rounded-2xl border border-warm-100 overflow-hidden">
              <button
                onClick={() => setOpenId(isOpen ? null : r.id)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-warm-50/50 transition-colors"
              >
                <span className="text-2xl">{r.icon}</span>
                <span className="flex-1 font-semibold text-warm-800">{r.title}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-warm-400" /> : <ChevronDown className="w-4 h-4 text-warm-400" />}
              </button>

              {isOpen && (
                <div className="px-4 pb-4 space-y-4">
                  {/* Child says */}
                  <div className="flex justify-start">
                    <div className="bg-warm-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-xs font-medium text-warm-400 mb-1">Barnet säger:</p>
                      <p className="text-warm-700 font-medium">&ldquo;{r.barnSager}&rdquo;</p>
                    </div>
                  </div>

                  {/* Parent can say */}
                  <div className="flex justify-end">
                    <div className="bg-navy-50 border border-navy-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                      <p className="text-xs font-medium text-navy-400 mb-1">Du kan svara:</p>
                      <p className="text-navy-800 leading-relaxed">&ldquo;{r.duKanSvara}&rdquo;</p>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleCopy(r.id, r.duKanSvara) }}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-navy-400 hover:text-navy-600 transition-colors"
                      >
                        {copiedId === r.id ? <><Check className="w-3.5 h-3.5" /> Kopierat!</> : <><Copy className="w-3.5 h-3.5" /> Kopiera svar</>}
                      </button>
                    </div>
                  </div>

                  {/* Fact */}
                  <div className="bg-warm-50 rounded-xl p-3 border border-warm-100">
                    <p className="text-xs text-warm-500 leading-relaxed">
                      <strong className="text-warm-600">Fakta:</strong> {r.fakta}
                    </p>
                    <a
                      href={r.kalla.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-navy-500 hover:text-navy-700 mt-1"
                    >
                      Källa: {r.kalla.text} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
