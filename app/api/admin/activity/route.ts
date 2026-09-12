import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth/requireAdmin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  const access = await requireAdminApi();
  if ("response" in access) return access.response;
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("content_activity").select("*").order("created_at", { ascending: false }).limit(10);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ data });
}
