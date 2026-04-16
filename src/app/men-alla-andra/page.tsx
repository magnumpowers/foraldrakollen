'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { HjalpAttSvara } from '@/components/HjalpAttSvara'
import {
  Share2,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle2,
  HandHeart,
  School,
  Copy,
  Check,
  ArrowDown,
  Sparkles,
} from 'lucide-react'
import { kommuner } from '@/lib/kommuner'

const SwedenMap = dynamic(() => import('@/components/SwedenMap'), {
  ssr: false,
  loading: () => <div className="h-[420px] bg-warm-50 rounded-[1.5rem] animate-pulse" />,
})

const kategorier = [
  {
    id: 'mobil',
    label: 'En mobil',
    icon: '📱',
    quote: 'Alla i klassen har en iPhone',
    tint: 'bg-blue-50 group-hover:bg-blue-100',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: '🎵',
    quote: 'Alla andra scrollar TikTok',
    tint: 'bg-pink-50 group-hover:bg-pink-100',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: '📸',
    quote: 'Jag är den enda utan Insta',
    tint: 'bg-purple-50 group-hover:bg-purple-100',
  },
  {
    id: 'snapchat',
    label: 'Snapchat',
    icon: '👻',
    quote: 'Alla snappar — jag missar allt',
    tint: 'bg-yellow-50 group-hover:bg-yellow-100',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: '▶️',
    quote: 'Alla får titta på YouTube i sängen',
    tint: 'bg-red-50 group-hover:bg-red-100',
  },
  {
    id: 'annat',
    label: 'Något annat',
    icon: '💬',
    quote: 'Ditt barn sa något annat',
    tint: 'bg-warm-100 group-hover:bg-warm-200',
  },
]

const arskurser = ['F', '1', '2', '3', '4', '5', '6', '7', '8', '9']

type Step = 'start' | 'kategori' | 'plats' | 'done'

interface Stats {
  total: number
  kommunCount: number
  kommunStats: Record<string, number>
  kategoriStats: Record<string, number>
  local: { kommun: string | null; count: number; skola: string | null; skolaCount: number; klass: string | null; klassCount: number }
}

function getFingerprint(): string {
  if (typeof window === 'undefined') return ''
  const stored = localStorage.getItem('maa_fingerprint')
  if (stored) return stored
  const fp = Math.random().toString(36).substring(2) + Date.now().toString(36)
  localStorage.setItem('maa_fingerprint', fp)
  return fp
}

function AnimatedCount({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    let start: number | null = null
    const startValue = 0
    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(startValue + (value - startValue) * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [value, duration])
  return <>{display.toLocaleString('sv-SE')}</>
}

export default function MenAllaAndra() {
  const [step, setStep] = useState<Step>('start')
  const [kategori, setKategori] = useState('')
  const [kommun, setKommun] = useState('')
  const [kommunSearch, setKommunSearch] = useState('')
  const [skola, setSkola] = useState('')
  const [arskurs, setArskurs] = useState('')
  const [klass, setKlass] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [stats, setStats] = useState<Stats | null>(null)
  const [copied, setCopied] = useState(false)
  const [showKommunList, setShowKommunList] = useState(false)
  const [livePreview, setLivePreview] = useState<number | null>(null)

  const kategoriRef = useRef<HTMLDivElement>(null)
  const platsRef = useRef<HTMLDivElement>(null)
  const doneRef = useRef<HTMLDivElement>(null)

  const filteredKommuner = useMemo(() => {
    if (!kommunSearch) return []
    const search = kommunSearch.toLowerCase()
    return kommuner.filter(k => k.toLowerCase().startsWith(search)).slice(0, 8)
  }, [kommunSearch])

  const shareUrl = useMemo(() => {
    if (!kommun) return typeof window !== 'undefined' ? `${window.location.origin}/men-alla-andra` : 'https://foraldrakollen.nu/men-alla-andra'
    const base = typeof window !== 'undefined' ? window.location.origin : 'https://foraldrakollen.nu'
    const params = new URLSearchParams()
    params.set('kommun', kommun)
    if (skola) params.set('skola', skola)
    if (arskurs) params.set('arskurs', arskurs)
    if (klass) params.set('klass', klass)
    return `${base}/men-alla-andra?${params.toString()}`
  }, [kommun, skola, arskurs, klass])

  const shareText = useMemo(() => {
    const selectedKat = kategorier.find(k => k.id === kategori)
    let text = `Mitt barn sa just "men ALLA andra har ${selectedKat?.label?.toLowerCase() || 'det'}"`
    if (stats && stats.local.count > 1) text += ` — och ${stats.local.count - 1} andra föräldrar i ${kommun} har hört samma sak.`
    text += `\n\nHar ditt barn också sagt det? Klicka här:\n${shareUrl}`
    return text
  }, [kategori, stats, kommun, shareUrl])

  // Load stats on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('kommun')) { setKommun(params.get('kommun')!); setKommunSearch(params.get('kommun')!) }
    if (params.get('skola')) setSkola(params.get('skola')!)
    if (params.get('arskurs')) setArskurs(params.get('arskurs')!)
    if (params.get('klass')) setKlass(params.get('klass')!)

    fetch('/api/men-alla-andra/stats')
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setStats(data) })
      .catch(() => {})
  }, [])

  // Live preview when kommun changes
  useEffect(() => {
    if (!kommun || !stats) { setLivePreview(null); return }
    setLivePreview(stats.kommunStats[kommun] || 0)
  }, [kommun, stats])

  function scrollTo(ref: React.RefObject<HTMLDivElement | null>) {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  function selectKategori(id: string) {
    setKategori(id)
    setStep('plats')
    scrollTo(platsRef)
  }

  function startFlow() {
    setStep('kategori')
    scrollTo(kategoriRef)
  }

  async function handleSubmit() {
    setLoading(true); setError('')
    try {
      const fp = getFingerprint()
      const klassLabel = [arskurs, klass].filter(Boolean).join(' ')
      const res = await fetch('/api/men-alla-andra/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kommun, skola: skola || null, klass: klassLabel || null, kategori, fingerprint: fp }),
      })
      if (res.status !== 429 && !res.ok) throw new Error('Kunde inte spara')
      const statsParams = new URLSearchParams({ kommun })
      if (skola) statsParams.set('skola', skola)
      if (klassLabel) statsParams.set('klass', klassLabel)
      const statsRes = await fetch(`/api/men-alla-andra/stats?${statsParams}`)
      if (statsRes.ok) setStats(await statsRes.json())
      setStep('done')
      scrollTo(doneRef)
    } catch { setError('Något gick fel. Försök igen.') }
    finally { setLoading(false) }
  }

  async function handleCopy() {
    try { await navigator.clipboard.writeText(shareText); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch {}
  }
  async function handleShare() {
    if (navigator.share) { try { await navigator.share({ title: '"Men alla andra har..."', text: shareText, url: shareUrl }) } catch { handleCopy() } } else { handleCopy() }
  }

  const selectedKatLabel = kategorier.find(k => k.id === kategori)?.label.toLowerCase() || ''
  const selectedKatIcon = kategorier.find(k => k.id === kategori)?.icon || ''

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="pt-16 sm:pt-24 pb-20 sm:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 10%, rgba(74,127,181,0.08), transparent 60%), radial-gradient(circle at 90% 80%, rgba(224,112,85,0.05), transparent 50%)' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-50 text-navy-700 rounded-full text-sm font-semibold mb-10">
            <HandHeart className="w-4 h-4" />
            {stats && stats.total > 0
              ? <>{stats.total.toLocaleString('sv-SE')} {stats.total === 1 ? 'förälder har' : 'föräldrar har'} känt igen sig</>
              : 'Du är inte ensam'}
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-extrabold text-navy-900 mb-8 leading-[1.05] text-balance">
            &ldquo;Men <span className="text-navy-400">alla andra</span> har...&rdquo;
          </h1>
          <p className="text-xl sm:text-2xl text-warm-500 mb-5 max-w-3xl mx-auto leading-relaxed">
            Har ditt barn sagt det? Tryck på knappen. Se hur många andra föräldrar
            i din kommun, skola och klass som hör exakt samma sak.
          </p>
          <p className="text-lg text-warm-400 mb-14 max-w-2xl mx-auto">
            Tillsammans är vi starkare. Dela med andra föräldrar och
            visa att &ldquo;alla andra&rdquo; kanske inte stämmer.
          </p>
          <button
            onClick={startFlow}
            className="group relative inline-flex items-center justify-center px-16 py-7 sm:py-8 bg-navy-800 text-white rounded-full font-bold text-2xl sm:text-3xl hover:bg-navy-700 transition-all shadow-2xl shadow-navy-800/25 hover:shadow-navy-800/40 hover:-translate-y-1 active:translate-y-0"
          >
            Mitt barn sa det just!
          </button>
          {stats && stats.kommunStats && Object.keys(stats.kommunStats).length > 0 && (
            <button
              onClick={() => document.getElementById('karta')?.scrollIntoView({ behavior: 'smooth' })}
              className="block mt-6 mx-auto text-warm-400 hover:text-navy-600 text-sm font-medium transition-colors"
            >
              eller visa bara statistiken <ArrowDown className="w-4 h-4 inline ml-1" />
            </button>
          )}
        </div>
      </section>

      {/* ============ KATEGORI ============ */}
      <section ref={kategoriRef} className={`py-20 sm:py-24 bg-warm-50/40 border-y border-warm-100 transition-opacity ${step === 'start' ? 'opacity-40' : 'opacity-100'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-navy-500 mb-3">Steg 1 av 2</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-900 leading-[1.1] mb-4 text-balance">
              Vad sa ditt barn?
            </h2>
            <p className="text-lg text-warm-500 leading-relaxed">
              Välj det som ligger närmast. Allt är helt anonymt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kategorier.map((kat) => {
              const count = stats?.kategoriStats?.[kat.id] || 0
              const isSelected = kategori === kat.id
              return (
                <button
                  key={kat.id}
                  onClick={() => selectKategori(kat.id)}
                  disabled={step === 'start'}
                  className={`group relative flex flex-col gap-5 p-7 rounded-[2rem] border bg-white text-left transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-50 ${
                    isSelected
                      ? 'border-navy-400 ring-4 ring-navy-100 shadow-xl shadow-navy-100/50'
                      : 'border-warm-100 hover:border-navy-200'
                  } ${step === 'start' ? 'cursor-default hover:translate-y-0 hover:shadow-none' : 'cursor-pointer'}`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-colors ${kat.tint}`}>
                    {kat.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-warm-800 group-hover:text-navy-700 transition-colors mb-2">
                      {kat.label}
                    </h3>
                    <p className="text-warm-500 italic leading-relaxed">
                      &ldquo;{kat.quote}&rdquo;
                    </p>
                  </div>
                  {count > 0 && (
                    <div className="mt-auto pt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500">
                      <Sparkles className="w-3.5 h-3.5" />
                      {count.toLocaleString('sv-SE')} {count === 1 ? 'förälder har hört detta' : 'föräldrar har hört detta'}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ PLATS ============ */}
      {(step === 'plats' || step === 'done') && (
        <section ref={platsRef} className={`py-20 sm:py-24 transition-opacity ${step === 'done' ? 'opacity-60' : 'opacity-100'}`}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Context chip */}
            <div className="mb-8 flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-50 text-navy-700 text-sm font-medium">
                <span className="text-lg">{selectedKatIcon}</span>
                &ldquo;Alla andra har {selectedKatLabel}&rdquo;
              </div>
              <button
                onClick={() => { setStep('kategori'); scrollTo(kategoriRef) }}
                className="text-sm text-warm-400 hover:text-navy-600 underline underline-offset-2 transition-colors"
              >
                ändra
              </button>
            </div>

            <div className="mb-10">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-navy-500 mb-3">Steg 2 av 2</div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-900 leading-[1.1] mb-4 text-balance">
                Bara två saker till.
              </h2>
              <p className="text-lg text-warm-500 leading-relaxed">
                Helt anonymt. Inga personuppgifter. Vi visar siffrorna direkt.
              </p>
            </div>

            <div className="space-y-5">
              {/* Kommun card */}
              <div className="bg-white rounded-[2rem] p-7 sm:p-8 border border-warm-100 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-warm-800 mb-1.5">
                  Var bor ni?
                </h3>
                <p className="text-warm-500 mb-5 text-sm">
                  Kommun räcker — vi behöver inget mer.
                </p>
                <div className="relative">
                  <input
                    type="text"
                    value={kommunSearch}
                    onChange={(e) => { setKommunSearch(e.target.value); setKommun(''); setShowKommunList(true) }}
                    onFocus={() => setShowKommunList(true)}
                    placeholder="Sök bland 290 kommuner..."
                    className="w-full px-6 py-5 rounded-2xl border-2 border-warm-200 bg-white text-xl placeholder:text-warm-300 focus:border-navy-400 focus:ring-4 focus:ring-navy-100 focus:outline-none transition-all"
                  />
                  {kommun && (
                    <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-navy-500" />
                  )}
                  {showKommunList && filteredKommuner.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white rounded-2xl border border-warm-200 shadow-xl max-h-64 overflow-y-auto">
                      {filteredKommuner.map((k) => (
                        <button
                          key={k}
                          onClick={() => { setKommun(k); setKommunSearch(k); setShowKommunList(false) }}
                          className="w-full text-left px-5 py-4 hover:bg-navy-50 text-warm-700 transition-colors flex items-center gap-2.5 first:rounded-t-2xl last:rounded-b-2xl"
                        >
                          <MapPin className="w-4 h-4 text-warm-400" />
                          {k}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {kommun && livePreview !== null && livePreview > 0 && (
                  <div className="mt-4 px-5 py-3 bg-navy-50 rounded-xl text-navy-700 font-medium text-sm">
                    Redan <strong>{livePreview}</strong> {livePreview === 1 ? 'förälder' : 'föräldrar'} i {kommun} har hört det.
                  </div>
                )}
              </div>

              {/* Skola + Klass card */}
              {kommun && (
                <div className="bg-white rounded-[2rem] p-7 sm:p-8 border border-warm-100 shadow-sm">
                  <h3 className="font-display text-2xl font-bold text-warm-800 mb-1.5">
                    Vilken skola och klass?
                  </h3>
                  <p className="text-warm-500 mb-5 text-sm">
                    Frivilligt — men då ser du siffrorna för just er skola.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-warm-600 mb-2 flex items-center gap-1.5">
                        <School className="w-4 h-4" /> Skola
                      </label>
                      <input
                        type="text"
                        value={skola}
                        onChange={(e) => setSkola(e.target.value)}
                        placeholder="T.ex. Vikingaskolan"
                        className="w-full px-5 py-4 rounded-xl border border-warm-200 bg-white text-lg placeholder:text-warm-300 focus:border-navy-400 focus:ring-4 focus:ring-navy-100 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-warm-600 mb-2">Årskurs</label>
                      <div className="flex flex-wrap gap-2">
                        {arskurser.map((ak) => (
                          <button
                            key={ak}
                            onClick={() => setArskurs(arskurs === ak ? '' : ak)}
                            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                              arskurs === ak
                                ? 'bg-navy-800 text-white shadow-md'
                                : 'bg-warm-50 text-warm-600 hover:bg-warm-100 border border-warm-200'
                            }`}
                          >
                            {ak === 'F' ? 'F-klass' : `Åk ${ak}`}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-warm-600 mb-2">Klass (valfritt)</label>
                      <input
                        type="text"
                        value={klass}
                        onChange={(e) => setKlass(e.target.value)}
                        placeholder="T.ex. 5B"
                        className="w-full px-5 py-4 rounded-xl border border-warm-200 bg-white text-lg placeholder:text-warm-300 focus:border-navy-400 focus:ring-4 focus:ring-navy-100 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="px-5 py-3 bg-coral-50 border border-coral-200 text-coral-700 rounded-2xl text-sm font-medium">
                  {error}
                </div>
              )}

              {/* Submit CTA */}
              {kommun && (
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-[2rem] p-7 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-xl shadow-navy-900/25">
                  <div className="text-center sm:text-left">
                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-1">
                      Redo att se siffrorna?
                    </h3>
                    <p className="text-navy-200 text-sm">
                      Hur många andra föräldrar känner igen sig?
                    </p>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-8 py-4 bg-white text-navy-800 rounded-full font-bold text-lg shadow-lg hover:bg-cream-50 hover:-translate-y-0.5 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {loading ? (
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-navy-800 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-navy-800 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-navy-800 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    ) : (
                      <>Visa mig siffrorna <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ============ DONE ============ */}
      {step === 'done' && stats && (
        <section ref={doneRef} className="py-20 sm:py-28 bg-gradient-to-b from-warm-50/40 to-white border-t border-warm-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Emotional payoff */}
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-50 text-navy-700 rounded-full text-sm font-semibold mb-8">
                <CheckCircle2 className="w-4 h-4" />
                Du är inte ensam
              </div>
              {stats.local.count >= 2 ? (
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.08] text-balance">
                  <span className="text-navy-400">
                    <AnimatedCount value={stats.local.count} />
                  </span>{' '}
                  föräldrar i {kommun} har hört &ldquo;men alla andra har {selectedKatLabel}&rdquo;.
                </h1>
              ) : (
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-[1.1] text-balance">
                  Du är den första vi hör från i {kommun}.
                  <br /><span className="text-navy-400">Dela länken — så blir ni fler.</span>
                </h1>
              )}
              {stats.local.count >= 10 && (
                <p className="text-lg text-warm-500 mt-4">— det är en hel skolklass.</p>
              )}
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-navy-50 to-white rounded-[2rem] p-8 text-center border border-navy-100">
                <div className="font-display text-5xl sm:text-6xl font-extrabold text-navy-700 mb-2">
                  <AnimatedCount value={stats.local.count} />
                </div>
                <div className="text-sm text-warm-500">i {kommun}</div>
              </div>
              {skola && (
                <div className="bg-white rounded-[2rem] p-8 text-center border border-warm-100 shadow-sm">
                  <div className="font-display text-5xl sm:text-6xl font-extrabold text-navy-500 mb-2">
                    <AnimatedCount value={stats.local.skolaCount} />
                  </div>
                  <div className="text-sm text-warm-500">på {skola}</div>
                </div>
              )}
              {(arskurs || klass) && (
                <div className="bg-white rounded-[2rem] p-8 text-center border border-warm-100 shadow-sm">
                  <div className="font-display text-5xl sm:text-6xl font-extrabold text-warm-600 mb-2">
                    <AnimatedCount value={stats.local.klassCount} />
                  </div>
                  <div className="text-sm text-warm-500">i {[arskurs === 'F' ? 'F-klass' : arskurs ? `Åk ${arskurs}` : '', klass].filter(Boolean).join(' ')}</div>
                </div>
              )}
            </div>

            {/* Share card - promoted above map */}
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-[2rem] p-8 sm:p-10 mb-10 shadow-xl shadow-navy-900/20">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-balance">
                Skicka vidare till föräldragruppen
              </h3>
              <p className="text-navy-200 mb-6 max-w-xl">
                Ju fler som rapporterar, desto tydligare bilden. Dela länken i klassens WhatsApp — det tar 10 sekunder.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-5 text-sm text-navy-100 border border-white/10">
                <p className="whitespace-pre-line">{shareText}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={handleShare} className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-navy-800 rounded-full font-bold hover:bg-cream-50 transition-all shadow-md">
                  <Share2 className="w-5 h-5" /> Dela nu
                </button>
                <button onClick={handleCopy} className="flex-1 flex items-center justify-center gap-2 py-4 bg-navy-700 text-white rounded-full font-semibold border border-navy-600 hover:bg-navy-600 transition-all">
                  {copied ? <Check className="w-5 h-5 text-green-300" /> : <Copy className="w-5 h-5" />}
                  {copied ? 'Kopierat!' : 'Kopiera text'}
                </button>
              </div>
            </div>

            {/* Map */}
            {Object.keys(stats.kommunStats).length > 0 && (
              <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-warm-100 mb-10">
                <div className="mb-5">
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-1 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-navy-500" />
                    Var i Sverige rapporterar föräldrar?
                  </h3>
                  <p className="text-warm-500 text-sm">{stats.total} rapporter från {stats.kommunCount} kommuner</p>
                </div>
                <SwedenMap kommunStats={stats.kommunStats} highlightKommun={kommun} />
              </div>
            )}

            {/* Category bar chart */}
            {Object.keys(stats.kategoriStats).length > 0 && (
              <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-warm-100 mb-10">
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-5">Mest rapporterat i hela Sverige</h3>
                <div className="space-y-3">
                  {Object.entries(stats.kategoriStats)
                    .sort(([, a], [, b]) => b - a)
                    .map(([kat, count]) => {
                      const katInfo = kategorier.find(k => k.id === kat)
                      const max = Math.max(...Object.values(stats.kategoriStats))
                      const pct = max > 0 ? (count / max) * 100 : 0
                      const isUserCat = kat === kategori
                      return (
                        <div key={kat} className="flex items-center gap-3">
                          <div className="flex items-center gap-2 w-32 sm:w-40 flex-shrink-0">
                            <span className="text-xl">{katInfo?.icon}</span>
                            <span className={`text-sm font-semibold ${isUserCat ? 'text-navy-800' : 'text-warm-600'}`}>{katInfo?.label}</span>
                          </div>
                          <div className="flex-1 h-8 bg-warm-50 rounded-full overflow-hidden relative">
                            <div
                              className={`h-full rounded-full transition-all duration-700 ${isUserCat ? 'bg-navy-600' : 'bg-navy-300'}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <div className="w-12 text-right font-bold text-navy-700">{count}</div>
                        </div>
                      )
                    })}
                </div>
              </div>
            )}

            {/* Help section */}
            <div className="mb-10">
              <HjalpAttSvara />
            </div>

            {/* Footer CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/guider" className="bg-warm-50 rounded-[2rem] p-7 border border-warm-100 hover:border-navy-200 hover:shadow-md transition-all group">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Se våra guider</h3>
                <p className="text-warm-500 text-sm mb-4">Konkreta steg för att skydda ditt barn online.</p>
                <span className="inline-flex items-center gap-1.5 text-navy-600 font-semibold text-sm group-hover:text-navy-800 transition-colors">
                  Gå till guiderna <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <button
                onClick={() => { setStep('start'); setKategori(''); setKommun(''); setKommunSearch(''); setSkola(''); setArskurs(''); setKlass(''); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="text-left bg-warm-50 rounded-[2rem] p-7 border border-warm-100 hover:border-navy-200 hover:shadow-md transition-all group"
              >
                <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Rapportera igen</h3>
                <p className="text-warm-500 text-sm mb-4">Har ditt barn sagt något annat? Rapportera en till kategori.</p>
                <span className="inline-flex items-center gap-1.5 text-navy-600 font-semibold text-sm group-hover:text-navy-800 transition-colors">
                  Börja om <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============ Map on start page (before submit) ============ */}
      {step === 'start' && stats && Object.keys(stats.kommunStats).length > 0 && (
        <section id="karta" className="py-20 sm:py-24 bg-warm-50/40 border-t border-warm-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-navy-500 mb-3">Live just nu</div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4 text-balance">
                Här rapporterar föräldrar &ldquo;men alla andra har...&rdquo;
              </h2>
              <p className="text-lg text-warm-500">
                <strong className="text-navy-700">{stats.total}</strong> {stats.total === 1 ? 'förälder' : 'föräldrar'} i <strong className="text-navy-700">{stats.kommunCount}</strong> {stats.kommunCount === 1 ? 'kommun' : 'kommuner'} har redan delat sin upplevelse.
              </p>
            </div>
            <div className="bg-white rounded-[2rem] p-4 sm:p-6 border border-warm-100 shadow-sm">
              <SwedenMap kommunStats={stats.kommunStats} />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
