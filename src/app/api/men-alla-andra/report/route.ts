import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-server'
import { kommuner } from '@/lib/kommuner'

const VALID_KATEGORIER = ['mobil', 'tiktok', 'instagram', 'snapchat', 'youtube', 'annat']

// Trimma fritext och kapa längden så att skräp inte hamnar i statistiken
const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().replace(/\s+/g, ' ').slice(0, max) || null : null

export async function POST(request: NextRequest) {
  try {
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
    const fingerprint = clean(body.fingerprint, 100)

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
    if (fingerprint) {
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
