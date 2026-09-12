import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key",
    { cookies: { getAll: () => request.cookies.getAll(), setAll: (items) => { items.forEach(({ name, value }) => request.cookies.set(name, value)); response = NextResponse.next({ request }); items.forEach(({ name, value, options }) => response.cookies.set(name, value, options)); } } },
  );
  const { data: { user } } = await supabase.auth.getUser();
  const isLogin = request.nextUrl.pathname === "/admin/login";
  if (request.nextUrl.pathname.startsWith("/admin") && !isLogin) {
    if (!user) return NextResponse.redirect(new URL("/admin/login", request.url));
    const { data: membership } = await supabase.from("admin_users").select("user_id").eq("user_id", user.id).maybeSingle();
    if (!membership) return NextResponse.redirect(new URL("/admin/login?error=not-authorized", request.url));
  }
  return response;
}

export const config = { matcher: ["/admin/:path*", "/auth/callback"] };
