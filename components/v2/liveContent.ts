"use client";

import { useEffect, useState } from "react";

export type HomepageContent = { eyebrow: string; heading: string; description: string; cta: string };
export type AddedChapter = { city: string; state: string; lead: string; summary: string; image: string; events: string[]; instagram?: string };
export type LiveResource = { title: string; description: string; href: string };
export type LiveArticle = { title: string; excerpt: string; url: string; date: string; image?: string };

const homeKey = "project-asha:homepage";
const chapterKey = "project-asha:chapters";
const chapterEditKey = "project-asha:chapter-edits";
const deletedChapterKey = "project-asha:deleted-chapters";
const resourceKey = "project-asha:resources";
const resourceEditKey = "project-asha:resource-edits";
const deletedResourceKey = "project-asha:deleted-resources";
const blogKey = "project-asha:blogs";
const blogEditKey = "project-asha:blog-edits";
const deletedBlogKey = "project-asha:deleted-blogs";
const pressKey = "project-asha:press";
const pressEditKey = "project-asha:press-edits";
const deletedPressKey = "project-asha:deleted-press";
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

function useLiveCollection<T extends { [key: string]: string }>(base: T[], key: string, editKey: string, deletedKey: string, identifier: keyof T) {
  const added = useStored<T[]>(key, []);
  const edits = useStored<Record<string, Partial<T>>>(editKey, {});
  const deleted = useStored<string[]>(deletedKey, []);
  return [...added, ...base]
    .filter((item) => !deleted.includes(item[identifier]))
    .map((item) => ({ ...item, ...edits[item[identifier]] }));
}
function addToCollection<T>(key: string, value: T) { write(key, [...read<T[]>(key, []), value]); }
function editCollection<T>(key: string, id: string, value: Partial<T>) { write(key, { ...read<Record<string, Partial<T>>>(key, {}), [id]: value }); }
function deleteFromCollection(key: string, id: string) { write(key, [...new Set([...read<string[]>(key, []), id])]); }

export function useLiveResources(base: LiveResource[]) { return useLiveCollection(base, resourceKey, resourceEditKey, deletedResourceKey, "href"); }
export function addResource(value: LiveResource) { addToCollection(resourceKey, value); }
export function saveResourceEdit(href: string, value: Partial<LiveResource>) { editCollection(resourceEditKey, href, value); }
export function deleteResource(href: string) { deleteFromCollection(deletedResourceKey, href); }

export function useLiveBlogs(base: LiveArticle[]) { return useLiveCollection(base, blogKey, blogEditKey, deletedBlogKey, "url"); }
export function addBlog(value: LiveArticle) { addToCollection(blogKey, value); }
export function saveBlogEdit(url: string, value: Partial<LiveArticle>) { editCollection(blogEditKey, url, value); }
export function deleteBlog(url: string) { deleteFromCollection(deletedBlogKey, url); }

export function useLivePress(base: LiveArticle[]) { return useLiveCollection(base, pressKey, pressEditKey, deletedPressKey, "url"); }
export function addPressArticle(value: LiveArticle) { addToCollection(pressKey, value); }
export function savePressEdit(url: string, value: Partial<LiveArticle>) { editCollection(pressEditKey, url, value); }
export function deletePressArticle(url: string) { deleteFromCollection(deletedPressKey, url); }
