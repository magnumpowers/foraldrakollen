import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-server'

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabaseAdmin()
    const { searchParams } = new URL(request.url)
    const kommun = searchParams.get('kommun')
    const skola = searchParams.get('skola')
    const klass = searchParams.get('klass')

    const sixMonthsAgo = new Date()
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

    // Get total count
    const totalQuery = supabase
      .from('men_alla_andra')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', sixMonthsAgo.toISOString())

    const { count: totalCount, error: countError } = await totalQuery
    if (countError) {
      console.error('stats count', countError)
      return NextResponse.json({ error: 'Statistik otillgänglig' }, { status: 503 })
    }

    // Hämta alla rader i sidor om 1000, annars kapar PostgREST vid max_rows
    // och kommunsiffrorna blir för låga när tabellen växer
    const allClicks: { kommun: string; kategori: string; skola: string | null; klass: string | null }[] = []
    const PAGE = 1000
    for (let from = 0; ; from += PAGE) {
      const { data, error } = await supabase
        .from('men_alla_andra')
        .select('kommun, kategori, skola, klass')
        .gte('created_at', sixMonthsAgo.toISOString())
        .order('created_at', { ascending: true })
        .range(from, from + PAGE - 1)
      if (error) {
        console.error('stats rows', error)
        return NextResponse.json({ error: 'Statistik otillgänglig' }, { status: 503 })
      }
      allClicks.push(...(data ?? []))
      if (!data || data.length < PAGE) break
    }

    // Aggregate per kommun
    const kommunStats: Record<string, number> = {}
    const kategoriStats: Record<string, number> = {}
    let localCount = 0
    let skolaCount = 0
    let klassCount = 0

    {
      for (const click of allClicks) {
        kommunStats[click.kommun] = (kommunStats[click.kommun] || 0) + 1
        kategoriStats[click.kategori] = (kategoriStats[click.kategori] || 0) + 1

        if (kommun && click.kommun === kommun) {
          localCount++
          if (skola && click.skola?.toLowerCase() === skola.trim().toLowerCase()) {
            skolaCount++
            if (klass && click.klass?.toLowerCase() === klass.trim().toLowerCase()) {
              klassCount++
            }
          }
        }
      }
    }

    // Get unique kommun count
    const kommunCount = Object.keys(kommunStats).length

    return NextResponse.json({
      total: totalCount || 0,
      kommunCount,
      kommunStats,
      kategoriStats,
      local: {
        kommun: kommun || null,
        count: localCount,
        skola: skola || null,
        skolaCount,
        klass: klass || null,
        klassCount,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Serverfel' }, { status: 500 })
  }
}
