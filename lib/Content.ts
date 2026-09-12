import { supabase } from "./supabase";

export async function getSection(page: string, section: string) {
  const { data, error } = await supabase
    .from("page_sections")
    .select("*")
    .eq("page_slug", page)
    .eq("section_key", section)
    .eq("status", "published");

  if (error) return [];

  return data ?? [];
}
