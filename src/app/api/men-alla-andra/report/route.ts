import { createHash } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-server'
import { kommuner } from '@/lib/kommuner'

const VALID_KATEGORIER = ['mobil', 'tiktok', 'instagram', 'snapchat', 'youtube', 'annat']

// Trimma fritext och kapa längden så att skräp inte hamnar i statistiken
const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().replace(/\s+/g, ' ').slice(0, max) || null : null

// Enkel spärr per IP (per serverinstans) så att ingen kan spamma statistiken
// genom att bara skippa eller byta fingerprint.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 60 // generöst: skolor och hem delar ofta IP
const hits = new Map<string, number[]>()

function clientIp(request: NextRequest) {
  return (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || request.headers.get('x-real-ip') || 'okand'
}

function tooMany(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

export async function POST(request: NextRequest) {
  try {
    const ip = clientIp(request)
    if (tooMany(ip)) {
      return NextResponse.json({ error: 'För många rapporter, försök igen senare' }, { status: 429 })
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Ogiltig förfrågan' }, { status: 400 })
    }
    const supabase = getSupabaseAdmin()
    const kommun = typeof body.kommun === 'string' ? body.kommun.trim() : ''
    const kategori = typeof body.kategori === 'string' ? body.kategori : ''
    const skola = clean(body.skola, 80)
    const klass = clean(body.klass, 20)
    // Utan fingerprint från klienten används en hash av IP-adressen, så att
    // 30-dagarsspärren nedan inte kan kringgås genom att utelämna fältet.
    const fingerprint =
      clean(body.fingerprint, 100) || 'ip-' + createHash('sha256').update(ip).digest('hex').slice(0, 32)

    if (!kommun || !kategori) {
      return NextResponse.json({ error: 'Kommun och kategori krävs' }, { status: 400 })
    }

    if (!(kommuner as readonly string[]).includes(kommun)) {
      return NextResponse.json({ error: 'Ogiltig kommun' }, { status: 400 })
    }

    if (!VALID_KATEGORIER.includes(kategori)) {
      return NextResponse.json({ error: 'Ogiltig kategori' }, { status: 400 })
    }

    // Rate limit: check if this fingerprint has reported in the same category in the last 30 days
    {
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

      const { data: existing } = await supabase
        .from('men_alla_andra')
        .select('id')
        .eq('fingerprint', fingerprint)
        .eq('kategori', kategori)
        .gte('created_at', thirtyDaysAgo.toISOString())
        .limit(1)

      if (existing && existing.length > 0) {
        return NextResponse.json({ error: 'Du har redan rapporterat detta nyligen' }, { status: 429 })
      }
    }

    const { error } = await supabase.from('men_alla_andra').insert({
      kommun,
      skola,
      klass,
      kategori,
      fingerprint,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Kunde inte spara' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Serverfel' }, { status: 500 })
  }
}
