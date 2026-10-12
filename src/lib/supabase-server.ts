import 'server-only'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Bara API-routerna pratar med tabellen. Nyckeln saknar NEXT_PUBLIC_ och når aldrig webbläsaren,
// så RLS kan stänga all direktåtkomst med den publika anon-nyckeln.
let _admin: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error('Supabase är inte konfigurerat. Sätt NEXT_PUBLIC_SUPABASE_URL och SUPABASE_SERVICE_ROLE_KEY.')
  }
  if (!_admin) _admin = createClient(url, key, { auth: { persistSession: false } })
  return _admin
}
