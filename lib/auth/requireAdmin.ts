import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AdminIdentity = { id: string; email: string | undefined; role: "admin" | "editor" };

export async function getAdminIdentity(): Promise<AdminIdentity | null> {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await supabase.from("admin_users").select("role").eq("user_id", user.id).maybeSingle();
  if (!data || (data.role !== "admin" && data.role !== "editor")) return null;
  return { id: user.id, email: user.email, role: data.role };
}

export async function requireAdminApi() {
  const identity = await getAdminIdentity();
  if (identity) return { identity } as const;
  return { response: NextResponse.json({ error: "Administrator access is required." }, { status: 401 }) } as const;
}
