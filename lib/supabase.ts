import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key";

// This module is also evaluated while Next.js prepares static pages on Vercel.
// The real public values are available in the browser; placeholders prevent the
// build process itself from failing before the login page can load.
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: typeof window !== "undefined" },
});
