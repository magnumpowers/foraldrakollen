import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

const VALID_KATEGORIER = ['mobil', 'tiktok', 'instagram', 'snapchat', 'youtube', 'annat']

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase()
    const body = await request.json()
    const { kommun, skola, klass, kategori, fingerprint } = body

    if (!kommun || !kategori) {
      return NextResponse.json({ error: 'Kommun och kategori krävs' }, { status: 400 })
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
      skola: skola || null,
      klass: klass || null,
      kategori,
      fingerprint: fingerprint || null,
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
