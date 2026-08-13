"use client";

import { useEffect, useState } from "react";

export type HomepageContent = { eyebrow: string; heading: string; description: string; cta: string };
export type AddedChapter = { city: string; state: string; lead: string; summary: string; image: string; events: string[]; instagram?: string };

const homeKey = "project-asha:homepage";
const chapterKey = "project-asha:chapters";
const chapterEditKey = "project-asha:chapter-edits";
const deletedChapterKey = "project-asha:deleted-chapters";
const fallbackHome: HomepageContent = {
  eyebrow: "Youth-led action for safer communities",
  heading: "Hope that moves from awareness to action.",
  description: "Project A.S.H.A. is a youth-led initiative dedicated to combating human trafficking through education, advocacy, and community awareness.",
  cta: "Get involved",
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { return JSON.parse(window.localStorage.getItem(key) ?? "") as T; } catch { return fallback; }
}
function write<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("project-asha:content"));
  const channel = new BroadcastChannel("project-asha:content");
  channel.postMessage(key);
  channel.close();
}
function useStored<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(fallback);
  useEffect(() => {
    const refresh = () => setValue(read(key, fallback));
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("project-asha:content", refresh);
    const channel = new BroadcastChannel("project-asha:content");
    channel.addEventListener("message", refresh);
    return () => { window.removeEventListener("storage", refresh); window.removeEventListener("project-asha:content", refresh); channel.close(); };
  }, [key]);
  return value;
}

export function useHomepageContent() { return useStored(homeKey, fallbackHome); }
export function saveHomepageContent(value: HomepageContent) { write(homeKey, value); }
export function useAddedChapters() { return useStored<AddedChapter[]>(chapterKey, []); }
export function addChapter(value: AddedChapter) { write(chapterKey, [...read<AddedChapter[]>(chapterKey, []), value]); }
export function useChapterEdits() { return useStored<Record<string, Partial<AddedChapter>>>(chapterEditKey, {}); }
export function saveChapterEdit(city: string, value: Partial<AddedChapter>) {
  write(chapterEditKey, { ...read<Record<string, Partial<AddedChapter>>>(chapterEditKey, {}), [city]: value });
}
export function useDeletedChapters() { return useStored<string[]>(deletedChapterKey, []); }
export function deleteChapter(city: string) { write(deletedChapterKey, [...new Set([...read<string[]>(deletedChapterKey, []), city])]); }
