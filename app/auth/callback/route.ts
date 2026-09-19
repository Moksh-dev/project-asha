import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next")?.startsWith("/") ? url.searchParams.get("next")! : "/admin/dashboard";
  const response = NextResponse.redirect(new URL(next, url.origin));
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key",
    { cookies: { getAll: () => request.headers.get("cookie")?.split(";").filter(Boolean).map((item) => { const [name, ...value] = item.trim().split("="); return { name, value: value.join("=") }; }) ?? [], setAll: (items) => items.forEach(({ name, value, options }) => response.cookies.set(name, value, options)) } },
  );
  if (!code) return NextResponse.redirect(new URL("/admin/login?error=missing-code", url.origin));
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) return NextResponse.redirect(new URL(`/admin/login?error=${encodeURIComponent(error.message)}`, url.origin));
  return response;
}
