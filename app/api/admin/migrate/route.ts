import { NextResponse } from "next/server";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { requireAdminApi } from "@/lib/auth/requireAdmin";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { blogFeatures, chapters, partnerTypes, pressArticles, resources, teamGroups } from "@/components/v2/data";

const publicRoot = path.join(process.cwd(), "public");
const mediaExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".pdf"]);
async function files(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => entry.isDirectory() ? files(path.join(directory, entry.name)) : mediaExtensions.has(path.extname(entry.name).toLowerCase()) ? [path.join(directory, entry.name)] : []));
  return nested.flat();
}
function mime(file: string) { const ext = path.extname(file).toLowerCase(); return ext === ".pdf" ? "application/pdf" : ext === ".svg" ? "image/svg+xml" : ext === ".webp" ? "image/webp" : ext === ".png" ? "image/png" : "image/jpeg"; }

export async function POST() {
  const access = await requireAdminApi();
  if ("response" in access) return access.response;
  if (access.identity.role !== "admin") return NextResponse.json({ error: "Only an Admin can run the one-time migration." }, { status: 403 });
  const supabase = createSupabaseAdminClient();
  const uploaded = [] as string[];
  for (const absolute of await files(publicRoot)) {
    const storagePath = path.relative(publicRoot, absolute).replaceAll("\\", "/");
    const contents = await readFile(absolute);
    const { error } = await supabase.storage.from("public-media").upload(storagePath, contents, { contentType: mime(absolute), upsert: true });
    if (!error) { uploaded.push(storagePath); await supabase.from("media_assets").upsert({ bucket: "public-media", storage_path: storagePath, file_name: path.basename(absolute), mime_type: mime(absolute), size_bytes: contents.length, created_by: access.identity.id }, { onConflict: "storage_path" }); }
  }
  const publicUrl = (localPath: string | undefined) => localPath?.startsWith("/") ? supabase.storage.from("public-media").getPublicUrl(localPath.slice(1)).data.publicUrl : localPath ?? null;
  await supabase.from("site_settings").upsert({ key: "homepage", value: { eyebrow: "Youth-led action for safer communities", heading: "Hope that moves from awareness to action.", description: "Project A.S.H.A. is a youth-led initiative dedicated to combating human trafficking through education, advocacy, and community awareness.", cta: "Get involved" }, updated_by: access.identity.id });
  await supabase.from("chapters").upsert(chapters.map((chapter, index) => ({ slug: chapter.city.toLowerCase().replace(/[^a-z0-9]+/g, "-"), city: chapter.city, state: chapter.state, lead_name: chapter.lead, summary: chapter.summary, image_url: publicUrl(chapter.image), instagram_url: chapter.instagram ?? null, events: chapter.events, sort_order: index, status: "published", updated_by: access.identity.id })), { onConflict: "slug" });
  await supabase.from("resources").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  await supabase.from("resources").insert(resources.map((resource, index) => ({ title: resource.title, description: resource.description, external_url: publicUrl(resource.href), sort_order: index, status: "published", updated_by: access.identity.id })));
  await supabase.from("articles").delete().in("kind", ["blog", "press"]);
  await supabase.from("articles").insert([...blogFeatures.map((article, index) => ({ kind: "blog", title: article.title, excerpt: article.excerpt, external_url: publicUrl(article.url), publisher: article.date, sort_order: index, status: "published", updated_by: access.identity.id })), ...pressArticles.map((article, index) => ({ kind: "press", title: article.title, excerpt: article.excerpt, external_url: article.url, publisher: article.date, image_url: publicUrl(article.image), sort_order: index, status: "published", updated_by: access.identity.id }))]);
  const eventSeed = [
    ["United Nations Headquarters", "Project A.S.H.A.’s Founder & Co-Founder represented youth-led advocacy on an international stage at United Nations Headquarters in New York, bringing the voices of young changemakers into global conversations on safety and youth empowerment.", "/content-images/united-nations-highlight.png", true],
    ["Freedom Walk in Oakland", "Freedom Walk in Oakland, California, bringing the community together to raise awareness for survivors and end human trafficking.", "/content-images/freedom-walk-oakland-walk.png", false],
    ["BraveMaker Film Screenings", "Project A.S.H.A. co-founders attended three BraveMaker film screenings hosted by Love Never Fails in Redwood City.", "/content-images/bravemaker-photo.png", false],
    ["Open Mind School presentation", "Project A.S.H.A. presented to staff at Open Mind School on trafficking awareness, warning signs, and online safety.", "/content-images/open-mind-photo.png", false],
    ["NCAPDA opioid rescue kit assembly", "Project A.S.H.A. Core Team members and the Founder assembled opioid overdose rescue kits with NCAPDA.", "/content-images/ncapda-photo.png", false],
    ["ACLU advocacy visit", "Founder advocacy with the American Civil Liberties Union on immigration and human rights.", "/content-images/aclu-photo.png", false],
  ] as const;
  await supabase.from("events").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  await supabase.from("events").insert(eventSeed.map(([title, caption, image, is_highlight], index) => ({ title, caption, image_url: publicUrl(image), is_highlight, sort_order: index, status: "published", updated_by: access.identity.id })));
  await supabase.from("partners").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  await supabase.from("partners").insert(partnerTypes.map((partner, index) => ({ name: partner.name, subtitle: partner.subtitle ?? null, description: partner.body, external_url: partner.href, sort_order: index, status: "published", updated_by: access.identity.id })));
  await supabase.from("team_members").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  await supabase.from("team_members").insert(teamGroups.flatMap((group, groupIndex) => group.people.map((person, index) => ({ name: person.name, role: person.role, group_name: group.title, bio: person.bio, portrait_url: publicUrl("image" in person ? person.image : undefined), sort_order: groupIndex * 100 + index, status: "published", updated_by: access.identity.id }))));
  await supabase.from("content_activity").insert({ actor_id: access.identity.id, action: "migrated", content_type: "website", summary: `Migrated ${uploaded.length} public assets and seeded the current website content.` });
  return NextResponse.json({ uploaded: uploaded.length, message: "Migration completed." });
}
