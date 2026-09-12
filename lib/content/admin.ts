export async function adminContent<T>(collection: string): Promise<T[]> {
  const response = await fetch(`/api/admin/content/${collection}`);
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? "Could not load content.");
  return body.data as T[];
}

export async function saveAdminContent<T>(collection: string, payload: Record<string, unknown>): Promise<T> {
  const method = payload.id || payload.key ? "PATCH" : "POST";
  const response = await fetch(`/api/admin/content/${collection}`, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? "Could not save content.");
  return body.data as T;
}

export async function removeAdminContent(collection: string, id: string, isKey = false) {
  const response = await fetch(`/api/admin/content/${collection}`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify(isKey ? { key: id } : { id }) });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? "Could not delete content.");
}
