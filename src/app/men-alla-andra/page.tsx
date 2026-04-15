'use client'

import { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { HjalpAttSvara } from '@/components/HjalpAttSvara'
import {
  Share2,
  MapPin,
  Users,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HandHeart,
  School,
  Copy,
  Check,
} from 'lucide-react'
import { kommuner } from '@/lib/kommuner'

const SwedenMap = dynamic(() => import('@/components/SwedenMap'), {
  ssr: false,
  loading: () => <div className="h-[420px] bg-warm-50 rounded-[1.5rem] animate-pulse" />,
})

const kategorier = [
  { id: 'mobil', label: 'En mobil', icon: '📱', color: 'bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-300 hover:bg-blue-100' },
  { id: 'tiktok', label: 'TikTok', icon: '🎵', color: 'bg-pink-50 text-pink-700 border-pink-100 hover:border-pink-300 hover:bg-pink-100' },
  { id: 'instagram', label: 'Instagram', icon: '📸', color: 'bg-purple-50 text-purple-700 border-purple-100 hover:border-purple-300 hover:bg-purple-100' },
  { id: 'snapchat', label: 'Snapchat', icon: '👻', color: 'bg-yellow-50 text-yellow-700 border-yellow-100 hover:border-yellow-300 hover:bg-yellow-100' },
  { id: 'youtube', label: 'YouTube', icon: '▶️', color: 'bg-red-50 text-red-700 border-red-100 hover:border-red-300 hover:bg-red-100' },
  { id: 'annat', label: 'Annat', icon: '💬', color: 'bg-warm-50 text-warm-700 border-warm-200 hover:border-warm-300 hover:bg-warm-100' },
]

const arskurser = ['Förskoleklass', '1', '2', '3', '4', '5', '6', '7', '8', '9']

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

  const filteredKommuner = useMemo(() => {
    if (!kommunSearch) return []
    const search = kommunSearch.toLowerCase()
    return kommuner.filter(k => k.toLowerCase().startsWith(search)).slice(0, 8)
  }, [kommunSearch])

  const shareUrl = useMemo(() => {
    if (!kommun) return ''
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('kommun')) { setKommun(params.get('kommun')!); setKommunSearch(params.get('kommun')!) }
    if (params.get('skola')) setSkola(params.get('skola')!)
    if (params.get('arskurs')) setArskurs(params.get('arskurs')!)
    if (params.get('klass')) setKlass(params.get('klass')!)
  }, [])

  async function handleSubmit() {
    setLoading(true); setError('')
    try {
      const fp = getFingerprint()
      const klassLabel = [arskurs, klass].filter(Boolean).join(' ')
      const res = await fetch('/api/men-alla-andra/report', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kommun, skola: skola || null, klass: klassLabel || null, kategori, fingerprint: fp }) })
      if (res.status !== 429 && !res.ok) throw new Error('Kunde inte spara')
      const statsParams = new URLSearchParams({ kommun })
      if (skola) statsParams.set('skola', skola)
      if (klassLabel) statsParams.set('klass', klassLabel)
      const statsRes = await fetch(`/api/men-alla-andra/stats?${statsParams}`)
      if (statsRes.ok) setStats(await statsRes.json())
      setStep('done')
    } catch { setError('Något gick fel. Försök igen.') }
    finally { setLoading(false) }
  }

  async function handleCopy() {
    try { await navigator.clipboard.writeText(shareText); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch {}
  }
  async function handleShare() {
    if (navigator.share) { try { await navigator.share({ title: '"Men alla andra har..."', text: shareText, url: shareUrl }) } catch { handleCopy() } } else { handleCopy() }
  }

  return (
    <div>
      {step === 'start' && (
        <section className="min-h-[80vh] flex items-center pt-8 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 text-coral-600 rounded-full text-sm font-medium mb-8">
              <HandHeart className="w-4 h-4" />
              Du är inte ensam
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-navy-900 mb-6 leading-[1.1]">
              &ldquo;Men <span className="text-coral-500">alla andra</span> har...&rdquo;
            </h1>
            <p className="text-lg sm:text-xl text-warm-500 mb-4 max-w-2xl mx-auto leading-relaxed">
              Har ditt barn sagt det? Tryck på knappen. Se hur många andra föräldrar
              i din kommun, skola och klass som hör exakt samma sak.
            </p>
            <p className="text-base text-warm-400 mb-14 max-w-xl mx-auto">
              Tillsammans är vi starkare. Dela med andra föräldrar och
              visa att &ldquo;alla andra&rdquo; kanske inte stämmer.
            </p>
            <button
              onClick={() => setStep('kategori')}
              className="group relative inline-flex items-center justify-center px-14 py-7 bg-coral-500 text-white rounded-full font-bold text-2xl sm:text-3xl hover:bg-coral-600 transition-all shadow-xl shadow-coral-500/25 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
            >
              Mitt barn sa det just!
            </button>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: CheckCircle2, label: 'Helt anonymt' },
                { icon: MapPin, label: 'Per kommun & skola' },
                { icon: Users, label: 'Stå starka tillsammans' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2.5 text-warm-400">
                  <div className="w-11 h-11 rounded-full bg-navy-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-navy-500" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {step === 'kategori' && (
        <section className="min-h-[80vh] flex items-center py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button onClick={() => setStep('start')} className="flex items-center gap-2 text-warm-400 hover:text-warm-600 mb-8">
              <ArrowLeft className="w-4 h-4" /> Tillbaka
            </button>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 mb-3">&ldquo;Men alla andra har...&rdquo;</h2>
              <p className="text-lg text-warm-500">Vad sa ditt barn att alla andra har?</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {kategorier.map((kat) => (
                <button key={kat.id} onClick={() => { setKategori(kat.id); setStep('plats') }} className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all hover:-translate-y-1 hover:shadow-md ${kat.color}`}>
                  <span className="text-4xl">{kat.icon}</span>
                  <span className="font-semibold text-lg">{kat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {step === 'plats' && (
        <section className="min-h-[80vh] flex items-center py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button onClick={() => setStep('kategori')} className="flex items-center gap-2 text-warm-400 hover:text-warm-600 mb-8">
              <ArrowLeft className="w-4 h-4" /> Tillbaka
            </button>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-coral-50 text-coral-600 rounded-full text-sm font-medium mb-4">
                {kategorier.find(k => k.id === kategori)?.icon} &ldquo;Alla andra har {kategorier.find(k => k.id === kategori)?.label.toLowerCase()}&rdquo;
              </div>
              <h2 className="font-display text-3xl font-extrabold text-navy-900 mb-3">Var bor ni?</h2>
              <p className="text-warm-500">Så att vi kan visa hur det ser ut i ert område</p>
            </div>
            <div className="space-y-5 bg-warm-50 rounded-[2rem] p-8 border border-warm-100">
              <div className="relative">
                <label className="block text-sm font-semibold text-warm-700 mb-2"><MapPin className="w-4 h-4 inline mr-1" />Kommun *</label>
                <input type="text" value={kommunSearch} onChange={(e) => { setKommunSearch(e.target.value); setKommun(''); setShowKommunList(true) }} onFocus={() => setShowKommunList(true)} placeholder="Sök kommun..." className="w-full px-4 py-3.5 rounded-xl border border-warm-200 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 focus:outline-none text-lg text-warm-800 bg-white" />
                {showKommunList && filteredKommuner.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-xl border border-warm-200 shadow-lg max-h-60 overflow-y-auto">
                    {filteredKommuner.map((k) => (
                      <button key={k} onClick={() => { setKommun(k); setKommunSearch(k); setShowKommunList(false) }} className="w-full text-left px-4 py-3 hover:bg-navy-50 text-warm-700 transition-colors first:rounded-t-xl last:rounded-b-xl">{k}</button>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-warm-700 mb-2"><School className="w-4 h-4 inline mr-1" />Skola <span className="font-normal text-warm-400">(valfritt)</span></label>
                <input type="text" value={skola} onChange={(e) => setSkola(e.target.value)} placeholder="T.ex. Vikingaskolan" className="w-full px-4 py-3.5 rounded-xl border border-warm-200 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 focus:outline-none text-lg text-warm-800 bg-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-2">Årskurs <span className="font-normal text-warm-400">(valfritt)</span></label>
                  <select value={arskurs} onChange={(e) => setArskurs(e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-warm-200 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 focus:outline-none text-lg text-warm-800 bg-white">
                    <option value="">Välj...</option>
                    {arskurser.map((ak) => (<option key={ak} value={ak}>{ak === 'Förskoleklass' ? 'F-klass' : `Åk ${ak}`}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-2">Klass <span className="font-normal text-warm-400">(valfritt)</span></label>
                  <input type="text" value={klass} onChange={(e) => setKlass(e.target.value)} placeholder="T.ex. 5B" className="w-full px-4 py-3.5 rounded-xl border border-warm-200 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 focus:outline-none text-lg text-warm-800 bg-white" />
                </div>
              </div>
              {error && <p className="text-red-600 text-sm bg-red-50 px-4 py-2.5 rounded-xl">{error}</p>}
              <button onClick={handleSubmit} disabled={!kommun || loading} className="w-full py-4 bg-coral-500 text-white rounded-xl font-bold text-xl hover:bg-coral-600 transition-all shadow-md shadow-coral-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                {loading ? <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div> : <><span>Jag har hört det!</span><ArrowRight className="w-5 h-5" /></>}
              </button>
            </div>
          </div>
        </section>
      )}

      {step === 'done' && (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-50 mb-6">
                <CheckCircle2 className="w-8 h-8 text-navy-500" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 mb-3">Du är inte ensam!</h2>
              <p className="text-lg text-warm-500">Tack för att du rapporterade. Här är vad vi vet:</p>
            </div>
            {stats && (
              <div className="space-y-6 mb-10">
                <div className="bg-warm-50 rounded-[2rem] p-8 border border-warm-100">
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-5 flex items-center gap-2"><MapPin className="w-5 h-5 text-navy-500" />I {kommun}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm"><div className="font-display text-4xl font-extrabold text-navy-700">{stats.local.count}</div><div className="text-sm text-warm-500 mt-1">föräldrar i {kommun}</div></div>
                    {skola && <div className="bg-white rounded-2xl p-5 text-center shadow-sm"><div className="font-display text-4xl font-extrabold text-coral-500">{stats.local.skolaCount}</div><div className="text-sm text-warm-500 mt-1">på {skola}</div></div>}
                    {(arskurs || klass) && <div className="bg-white rounded-2xl p-5 text-center shadow-sm"><div className="font-display text-4xl font-extrabold text-warm-700">{stats.local.klassCount}</div><div className="text-sm text-warm-500 mt-1">i {[arskurs, klass].filter(Boolean).join(' ')}</div></div>}
                  </div>
                </div>
                <div className="bg-white rounded-[2rem] p-8 border border-warm-100">
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-5 flex items-center gap-2"><Users className="w-5 h-5 text-navy-500" />I hela Sverige</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-warm-50 rounded-2xl p-5 text-center"><div className="font-display text-4xl font-extrabold text-navy-700">{stats.total}</div><div className="text-sm text-warm-500 mt-1">föräldrar totalt</div></div>
                    <div className="bg-warm-50 rounded-2xl p-5 text-center"><div className="font-display text-4xl font-extrabold text-navy-700">{stats.kommunCount}</div><div className="text-sm text-warm-500 mt-1">kommuner</div></div>
                  </div>
                  {Object.keys(stats.kategoriStats).length > 0 && (
                    <div className="mt-6 pt-6 border-t border-warm-100">
                      <h4 className="text-sm font-semibold text-warm-400 mb-3">MEST RAPPORTERAT</h4>
                      <div className="flex flex-wrap gap-2">{Object.entries(stats.kategoriStats).sort(([, a], [, b]) => b - a).map(([kat, count]) => { const katInfo = kategorier.find(k => k.id === kat); return (<span key={kat} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-warm-50 text-warm-600 border border-warm-200">{katInfo?.icon} {katInfo?.label}: {count}</span>) })}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Map */}
            {stats && Object.keys(stats.kommunStats).length > 0 && (
              <div className="bg-white rounded-[2rem] p-6 border border-warm-100 mb-6">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-navy-500" />
                  Var i Sverige rapporterar föräldrar?
                </h3>
                <SwedenMap kommunStats={stats.kommunStats} highlightKommun={kommun} />
              </div>
            )}

            {/* Help section */}
            <div className="mb-6">
              <HjalpAttSvara />
            </div>

            <div className="bg-gradient-to-br from-coral-50 to-coral-100/30 rounded-[2rem] p-8 border border-coral-100 mb-10">
              <h3 className="font-display text-2xl font-bold text-warm-800 mb-3 text-center">Dela med föräldragruppen!</h3>
              <p className="text-warm-500 text-center mb-6">Skicka länken i klassens WhatsApp-grupp. Ju fler som rapporterar, desto tydligare blir bilden.</p>
              <div className="bg-white rounded-xl p-4 mb-4 text-sm text-warm-600 border border-warm-100"><p className="whitespace-pre-line">{shareText}</p></div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={handleShare} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-coral-500 text-white rounded-xl font-semibold hover:bg-coral-600 transition-all shadow-sm"><Share2 className="w-5 h-5" />Dela</button>
                <button onClick={handleCopy} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white text-warm-700 rounded-xl font-semibold border border-warm-200 hover:bg-warm-50 transition-all">{copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}{copied ? 'Kopierat!' : 'Kopiera text'}</button>
              </div>
            </div>
            <div className="bg-warm-50 rounded-[2rem] p-8 border border-warm-100 text-center">
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">Vill du veta mer?</h3>
              <p className="text-warm-500 mb-6">Föräldrakollen har forskningsbaserade guider för hur du skyddar ditt barn online.</p>
              <Link href="/guider" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-800 text-white rounded-full font-semibold hover:bg-navy-700 transition-all shadow-sm">Se guiderna <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="text-center mt-8"><button onClick={() => { setStep('start'); setKategori(''); setStats(null) }} className="text-warm-400 hover:text-warm-600 text-sm">Rapportera igen med annan kategori</button></div>
          </div>
        </section>
      )}
    </div>
  )
}
