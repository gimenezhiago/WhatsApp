import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.URL_DB;
const SUPABASE_ANON_KEY = process.env.KEY_DB;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);