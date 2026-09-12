import { NextRequest, NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth/requireAdmin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const tables = new Set(["site_settings", "page_sections", "chapters", "team_members", "events", "resources", "articles", "partners", "faqs", "media_assets"]);

function validCollection(value: string) { return tables.has(value); }
async function activity(action: string, collection: string, contentId: string | undefined, summary: string, actorId: string) {
  const supabase = await createSupabaseServerClient();
  await supabase.from("content_activity").insert({ action, content_type: collection, content_id: contentId, summary, actor_id: actorId });
}

export async function GET(_: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const access = await requireAdminApi();
  if ("response" in access) return access.response;
  if (!validCollection(collection)) return NextResponse.json({ error: "Unknown content collection." }, { status: 404 });
  const supabase = await createSupabaseServerClient();
  const query = supabase.from(collection).select("*");
  const { data, error } = collection === "site_settings"
    ? await query.order("updated_at", { ascending: true })
    : collection === "media_assets"
      ? await query.order("created_at", { ascending: true })
    : await query.order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ data });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const access = await requireAdminApi();
  if ("response" in access) return access.response;
  if (!validCollection(collection)) return NextResponse.json({ error: "Unknown content collection." }, { status: 404 });
  const payload = await request.json();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from(collection).insert(payload).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  await activity("created", collection, data.id ?? data.key, `Created ${collection} content.`, access.identity.id);
  return NextResponse.json({ data }, { status: 201 });
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const access = await requireAdminApi();
  if ("response" in access) return access.response;
  if (!validCollection(collection)) return NextResponse.json({ error: "Unknown content collection." }, { status: 404 });
  const { id, key, ...payload } = await request.json();
  const column = id ? "id" : "key";
  const value = id ?? key;
  if (!value) return NextResponse.json({ error: "An id or key is required." }, { status: 400 });
  const supabase = await createSupabaseServerClient();
  const { data, error } = collection === "site_settings"
    ? await supabase.from(collection).upsert({ key: value, ...payload }).select().single()
    : await supabase.from(collection).update(payload).eq(column, value).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  await activity("updated", collection, data.id ?? data.key, `Updated ${collection} content.`, access.identity.id);
  return NextResponse.json({ data });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const access = await requireAdminApi();
  if ("response" in access) return access.response;
  if (!validCollection(collection)) return NextResponse.json({ error: "Unknown content collection." }, { status: 404 });
  const { id, key } = await request.json();
  const column = id ? "id" : "key";
  const value = id ?? key;
  if (!value) return NextResponse.json({ error: "An id or key is required." }, { status: 400 });
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from(collection).delete().eq(column, value);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  await activity("deleted", collection, value, `Deleted ${collection} content.`, access.identity.id);
  return NextResponse.json({ ok: true });
}
