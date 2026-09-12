import { NextRequest, NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth/requireAdmin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const access = await requireAdminApi();
  if ("response" in access) return access.response;
  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "A file is required." }, { status: 400 });
  const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${cleanName}`;
  const supabase = await createSupabaseServerClient();
  const { error: uploadError } = await supabase.storage.from("public-media").upload(path, file, { contentType: file.type, upsert: false });
  if (uploadError) return NextResponse.json({ error: uploadError.message }, { status: 400 });
  const { data: publicUrl } = supabase.storage.from("public-media").getPublicUrl(path);
  const { data, error } = await supabase.from("media_assets").insert({ bucket: "public-media", storage_path: path, file_name: file.name, mime_type: file.type, size_bytes: file.size, alt_text: form.get("alt_text")?.toString() ?? null, created_by: access.identity.id }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ data: { ...data, public_url: publicUrl.publicUrl } }, { status: 201 });
}
