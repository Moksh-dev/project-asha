import { supabase } from "./supabase";

export async function getSection(page: string, section: string) {
  const { data, error } = await supabase
    .from("website_content")
    .select("*")
    .eq("page", page)
    .eq("section", section);

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return data ?? [];
}