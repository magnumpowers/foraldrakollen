import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let _supabase: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }
  if (!_supabase) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
  return _supabase
}

/*
SQL to create the table in Supabase:

CREATE TABLE men_alla_andra (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  kommun TEXT NOT NULL,
  skola TEXT,
  klass TEXT,
  kategori TEXT NOT NULL,
  fingerprint TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_men_alla_andra_kommun ON men_alla_andra(kommun);
CREATE INDEX idx_men_alla_andra_created_at ON men_alla_andra(created_at);

-- Enable RLS
ALTER TABLE men_alla_andra ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON men_alla_andra
  FOR INSERT WITH CHECK (true);

-- Allow anonymous reads (aggregated via API)
CREATE POLICY "Allow anonymous reads" ON men_alla_andra
  FOR SELECT USING (true);
*/
