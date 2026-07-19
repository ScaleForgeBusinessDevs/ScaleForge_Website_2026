import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn(
    "⚠️ Supabase environment variables are missing! Portals will not function.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ── Shared Types ──────────────────────────────────────────────────────────────

// ── CEO Portal Types ──────────────────────────────────────────────────────────
