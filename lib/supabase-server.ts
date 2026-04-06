// lib/supabase-server.ts
// Server-side Supabase client for API routes — uses service_role key
// NEVER import this from client components
//
// Lazy initialization: the client is created on first call, NOT at module
// load time. This prevents the build from crashing when env vars are
// missing (they're only needed at runtime).

import { createClient } from "@supabase/supabase-js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _supabaseAdmin: any = null;

export function getSupabaseAdmin() {
  if (_supabaseAdmin) return _supabaseAdmin;

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error("[supabase-server] Missing SUPABASE_URL env var");
  }
  if (!supabaseServiceKey) {
    throw new Error("[supabase-server] Missing SUPABASE_SERVICE_ROLE_KEY env var");
  }

  _supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    db: { schema: "gold" },
    auth: { persistSession: false },
  });

  return _supabaseAdmin;
}
