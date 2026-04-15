'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, CheckCircle2, Lightbulb, Apple, Smartphone, Moon, MessageSquareOff, MapPinOff, ShieldAlert, AppWindow, CreditCard, Clock } from 'lucide-react'
import type { Guide } from '@/lib/guides-data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Moon, Smartphone, MessageSquareOff, MapPinOff, ShieldAlert, AppWindow, CreditCard }

function getPlatformIcon(platform: string) {
  const lower = platform.toLowerCase()
  if (lower.includes('ios') || lower.includes('apple') || lower.includes('iphone') || lower.includes('ipad')) return <Apple className="w-4 h-4" />
  if (lower.includes('android') || lower.includes('google')) return <Smartphone className="w-4 h-4" />
  return null
}

export function GuideCard({ guide }: { guide: Guide }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const Icon = iconMap[guide.iconName] || Moon

  useEffect(() => {
    const saved = localStorage.getItem(`guide-progress-${guide.id}`)
    if (saved) try { setCompletedSteps(new Set(JSON.parse(saved))) } catch {}
  }, [guide.id])

  useEffect(() => {
    if (completedSteps.size > 0) localStorage.setItem(`guide-progress-${guide.id}`, JSON.stringify([...completedSteps]))
  }, [completedSteps, guide.id])

  const toggleStep = (stepId: string) => {
    const n = new Set(completedSteps); n.has(stepId) ? n.delete(stepId) : n.add(stepId); setCompletedSteps(n)
  }

  const totalSteps = guide.platforms.reduce((a, p) => a + p.steps.length, 0)
  const completedCount = completedSteps.size
  const pct = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0

  return (
    <div id={guide.id} className="bg-white rounded-2xl border border-warm-100 hover:border-navy-200 transition-colors overflow-hidden scroll-mt-24 hover:shadow-md">
      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full p-7 text-left hover:bg-warm-50/50 transition-colors" aria-expanded={isExpanded}>
        <div className="flex items-start gap-4">
          <div className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0 bg-navy-50 text-navy-500">
            <Icon className="w-7 h-7" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-semibold text-navy-400">Steg {guide.priority}</span>
              <span className="text-xs text-warm-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Ca {guide.estimatedTime}</span>
              {completedCount > 0 && <span className="text-xs text-warm-400">{completedCount}/{totalSteps} klart</span>}
            </div>
            <h2 className="font-display font-bold text-xl text-warm-800 mb-1.5">{guide.title}</h2>
            <p className="text-warm-400 text-sm line-clamp-2">{guide.why.substring(0, 150)}...</p>
            {completedCount > 0 && <div className="mt-3 h-1.5 bg-warm-100 rounded-full overflow-hidden"><div className="h-full rounded-full bg-navy-400 transition-all duration-300" style={{ width: `${pct}%` }} /></div>}
          </div>
          <div className={`p-2 rounded-lg ${isExpanded ? 'bg-warm-100' : ''}`}>
            {isExpanded ? <ChevronUp className="w-5 h-5 text-warm-400" /> : <ChevronDown className="w-5 h-5 text-warm-400" />}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-7 pb-7 border-t border-warm-100">
          <div className="mt-5 p-5 bg-warm-50 rounded-xl">
            <h3 className="font-semibold text-warm-700 mb-2">Varför är detta viktigt?</h3>
            <p className="text-warm-500 text-sm leading-relaxed">{guide.why}</p>
          </div>
          <div className="mt-4 p-4 rounded-xl border-l-4 border-navy-400 bg-navy-50">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5 text-navy-500" />
              <p className="text-sm font-medium text-navy-800">{guide.keyPoint}</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold text-warm-700">Så här gör du:</h3>
            {guide.platforms.map((platform, pi) => (
              <div key={pi} className="border border-warm-100 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-warm-50 border-b border-warm-100">
                  {getPlatformIcon(platform.platform)}
                  <span className="font-medium text-warm-700">{platform.platform}</span>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {platform.steps.map((step, si) => {
                      const id = `${guide.id}-${pi}-${si}`; const checked = completedSteps.has(id)
                      return (
                        <li key={si} className="flex items-start gap-3">
                          <button onClick={() => toggleStep(id)} className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${checked ? 'bg-navy-500 border-navy-500' : 'border-warm-300 hover:border-navy-300'}`}>
                            {checked && <CheckCircle2 className="w-4 h-4 text-white" />}
                          </button>
                          <span className={`text-sm leading-relaxed ${checked ? 'text-warm-400 line-through' : 'text-warm-600'}`}>{step}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-warm-700 mb-3">Tips:</h3>
            <ul className="space-y-2">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-navy-400" />
                  <span className="text-sm text-warm-500">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          {completedCount === totalSteps && totalSteps > 0 && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div><p className="font-semibold text-green-800">Bra jobbat!</p><p className="text-sm text-green-600">Alla steg klara för {guide.title.toLowerCase()}.</p></div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
