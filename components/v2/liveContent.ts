"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { removeAdminContent, saveAdminContent } from "@/lib/content/admin";

export type HomepageContent = { eyebrow: string; heading: string; description: string; cta: string };
export type AddedChapter = { id?: string; city: string; state: string; lead: string; summary: string; image: string; events: string[]; instagram?: string };
export type LiveResource = { id?: string; title: string; description: string; href: string };
export type LiveArticle = { id?: string; title: string; excerpt: string; url: string; date: string; image?: string };
export type LiveEvent = { id?: string; title: string; caption: string; image: string; isHighlight: boolean; location?: string };
export type LivePartner = { id?: string; name: string; subtitle?: string; body: string; href?: string };
export type LiveTeamMember = { id?: string; name: string; role: string; group_name: string; bio: string; image?: string };

const fallbackHome: HomepageContent = { eyebrow: "Youth-led action for safer communities", heading: "Hope that moves from awareness to action.", description: "Project A.S.H.A. is a youth-led initiative dedicated to combating human trafficking through education, advocacy, and community awareness.", cta: "Get involved" };

function usePublishedRows<T>(table: string, fallback: T[], map: (row: Record<string, unknown>) => T | null) {
  const [rows, setRows] = useState<T[]>(fallback);
  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data, error } = await supabaseBrowser.from(table).select("*").eq("status", "published").order("sort_order");
      // Keep the repository content visible until its one-time Supabase seed has run.
      if (!error && data && data.length && active) setRows(data.map((row) => map(row as Record<string, unknown>)).filter((row): row is T => row !== null));
    };
    void load();
    const channel = supabaseBrowser.channel(`public:${table}`).on("postgres_changes", { event: "*", schema: "public", table }, () => void load()).subscribe();
    return () => { active = false; void supabaseBrowser.removeChannel(channel); };
  }, [table]);
  return rows;
}

export function useHomepageContent() {
  const [content, setContent] = useState<HomepageContent>(fallbackHome);
  useEffect(() => {
    let active = true;
    const load = async () => { const { data } = await supabaseBrowser.from("site_settings").select("value").eq("key", "homepage").maybeSingle(); if (active && data?.value) setContent({ ...fallbackHome, ...(data.value as Partial<HomepageContent>) }); };
    void load();
    const channel = supabaseBrowser.channel("public:homepage").on("postgres_changes", { event: "*", schema: "public", table: "site_settings", filter: "key=eq.homepage" }, () => void load()).subscribe();
    return () => { active = false; void supabaseBrowser.removeChannel(channel); };
  }, []);
  return content;
}
export async function saveHomepageContent(value: HomepageContent) { await saveAdminContent("site_settings", { key: "homepage", value }); }

const chapterMapper = (row: Record<string, unknown>): AddedChapter => ({ id: row.id as string, city: row.city as string, state: row.state as string, lead: row.lead_name as string, summary: row.summary as string, image: (row.image_url as string) || "linear-gradient(135deg, #1F5EFF, #00AEF0)", events: Array.isArray(row.events) ? row.events as string[] : [], instagram: row.instagram_url as string | undefined });
export function useLiveChapters(base: AddedChapter[]) { return usePublishedRows("chapters", base, chapterMapper); }
export function useAddedChapters() { return useLiveChapters([]); }
export function useChapterEdits() { return {} as Record<string, Partial<AddedChapter>>; }
export function useDeletedChapters() { return [] as string[]; }
export async function addChapter(value: AddedChapter) { await saveAdminContent("chapters", { slug: value.city.toLowerCase().replace(/[^a-z0-9]+/g, "-"), city: value.city, state: value.state, lead_name: value.lead, summary: value.summary, image_url: value.image, instagram_url: value.instagram ?? null, events: value.events, status: "published" }); }
export async function saveChapterEdit(id: string, value: Partial<AddedChapter>) { await saveAdminContent("chapters", { id, ...(value.city ? { city: value.city, slug: value.city.toLowerCase().replace(/[^a-z0-9]+/g, "-") } : {}), ...(value.state ? { state: value.state } : {}), ...(value.lead ? { lead_name: value.lead } : {}), ...(value.summary !== undefined ? { summary: value.summary } : {}), ...(value.image ? { image_url: value.image } : {}), ...(value.instagram !== undefined ? { instagram_url: value.instagram } : {}) }); }
export async function deleteChapter(id: string) { await removeAdminContent("chapters", id); }

const resourceMapper = (row: Record<string, unknown>): LiveResource => ({ id: row.id as string, title: row.title as string, description: row.description as string, href: (row.external_url as string) ?? "" });
export function useLiveResources(base: LiveResource[]) { return usePublishedRows("resources", base, resourceMapper); }
export async function addResource(value: LiveResource) { await saveAdminContent("resources", { title: value.title, description: value.description, external_url: value.href, status: "published" }); }
export async function saveResourceEdit(id: string, value: Partial<LiveResource>) { await saveAdminContent("resources", { id, ...(value.title ? { title: value.title } : {}), ...(value.description !== undefined ? { description: value.description } : {}), ...(value.href ? { external_url: value.href } : {}) }); }
export async function deleteResource(id: string) { await removeAdminContent("resources", id); }

const articleMapper = (row: Record<string, unknown>): LiveArticle => ({ id: row.id as string, title: row.title as string, excerpt: row.excerpt as string, url: row.external_url as string, date: (row.publisher ?? row.published_date ?? "") as string, image: row.image_url as string | undefined });
function useArticles(kind: "blog" | "press", base: LiveArticle[]) { return usePublishedRows("articles", base, (row) => row.kind === kind ? articleMapper(row) : null); }
export function useLiveBlogs(base: LiveArticle[]) { return useArticles("blog", base); }
export async function addBlog(value: LiveArticle) { await saveAdminContent("articles", { kind: "blog", title: value.title, excerpt: value.excerpt, external_url: value.url, publisher: value.date, status: "published" }); }
export async function saveBlogEdit(id: string, value: Partial<LiveArticle>) { await saveAdminContent("articles", { id, ...(value.title ? { title: value.title } : {}), ...(value.excerpt !== undefined ? { excerpt: value.excerpt } : {}), ...(value.url ? { external_url: value.url } : {}), ...(value.date ? { publisher: value.date } : {}) }); }
export async function deleteBlog(id: string) { await removeAdminContent("articles", id); }
export function useLivePress(base: LiveArticle[]) { return useArticles("press", base); }
export async function addPressArticle(value: LiveArticle) { await saveAdminContent("articles", { kind: "press", title: value.title, excerpt: value.excerpt, external_url: value.url, publisher: value.date, image_url: value.image ?? null, status: "published" }); }
export async function savePressEdit(id: string, value: Partial<LiveArticle>) { await saveAdminContent("articles", { id, ...(value.title ? { title: value.title } : {}), ...(value.excerpt !== undefined ? { excerpt: value.excerpt } : {}), ...(value.url ? { external_url: value.url } : {}), ...(value.date ? { publisher: value.date } : {}), ...(value.image !== undefined ? { image_url: value.image } : {}) }); }
export async function deletePressArticle(id: string) { await removeAdminContent("articles", id); }

const eventMapper = (row: Record<string, unknown>): LiveEvent => ({ id: row.id as string, title: row.title as string, caption: row.caption as string, image: row.image_url as string, isHighlight: Boolean(row.is_highlight), location: row.location as string | undefined });
export function useLiveEvents(base: LiveEvent[]) { return usePublishedRows("events", base, eventMapper); }
const partnerMapper = (row: Record<string, unknown>): LivePartner => ({ id: row.id as string, name: row.name as string, subtitle: row.subtitle as string | undefined, body: row.description as string, href: row.external_url as string | undefined });
export function useLivePartners(base: LivePartner[]) { return usePublishedRows("partners", base, partnerMapper); }
const teamMapper = (row: Record<string, unknown>): LiveTeamMember => ({ id: row.id as string, name: row.name as string, role: row.role as string, group_name: row.group_name as string, bio: row.bio as string, image: row.portrait_url as string | undefined });
export function useLiveTeamMembers(base: LiveTeamMember[]) { return usePublishedRows("team_members", base, teamMapper); }
