import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabase()
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

    const { count: totalCount } = await totalQuery

    // Get counts per kommun
    const { data: allClicks } = await supabase
      .from('men_alla_andra')
      .select('kommun, kategori, skola, klass')
      .gte('created_at', sixMonthsAgo.toISOString())

    // Aggregate per kommun
    const kommunStats: Record<string, number> = {}
    const kategoriStats: Record<string, number> = {}
    let localCount = 0
    let skolaCount = 0
    let klassCount = 0

    if (allClicks) {
      for (const click of allClicks) {
        kommunStats[click.kommun] = (kommunStats[click.kommun] || 0) + 1
        kategoriStats[click.kategori] = (kategoriStats[click.kategori] || 0) + 1

        if (kommun && click.kommun === kommun) {
          localCount++
          if (skola && click.skola === skola) {
            skolaCount++
            if (klass && click.klass === klass) {
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
