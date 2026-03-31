// lib/supabase-server.ts
// Server-side Supabase client for API routes — uses service_role key
// NEVER import this from client components

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  console.warn("[supabase-server] Missing SUPABASE_URL env var");
}
if (!supabaseServiceKey) {
  console.warn("[supabase-server] Missing SUPABASE_SERVICE_ROLE_KEY env var");
}

export const supabaseAdmin = createClient(
  supabaseUrl ?? "",
  supabaseServiceKey ?? "",
  {
    db: { schema: "gold" },
    auth: { persistSession: false },
  }
);
