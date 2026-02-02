import { createClient } from '@supabase/supabase-js';

/**
 * Supabase client (AUTH + DB ONLY)
 * Storage is no longer used
 */
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

/**
 * Logical folder names
 * These now map to S3 folders
 */
export const BUCKETS = {
  AVATARS: 'avatars',
  ARTWORKS: 'artworks',
  EXHIBITIONS: 'exhibitions',
};
