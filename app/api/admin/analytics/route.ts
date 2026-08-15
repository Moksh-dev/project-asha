import { NextResponse } from "next/server";

function countFrom(payload: unknown): number | null {
  if (typeof payload === "number") return payload;
  if (!payload || typeof payload !== "object") return null;
  const record = payload as Record<string, unknown>;
  for (const key of ["count", "value", "data", "result"]) {
    const value = record[key];
    if (typeof value === "number") return value;
    if (value && typeof value === "object") {
      const nested = countFrom(value);
      if (nested !== null) return nested;
    }
  }
  return null;
}

export async function GET() {
  const token = process.env.VERCEL_ANALYTICS_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  if (!token || !projectId) return NextResponse.json({ configured: false }, { status: 503 });
  const url = new URL("https://api.vercel.com/v1/query/web-analytics/visits/count");
  url.searchParams.set("projectId", projectId);
  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, next: { revalidate: 300 } });
  const payload: unknown = await response.json().catch(() => null);
  if (!response.ok) return NextResponse.json({ configured: true, error: "Vercel analytics could not be read yet." }, { status: response.status });
  const data = payload && typeof payload === "object" ? (payload as { data?: { visitors?: unknown; pageviews?: unknown } }).data : undefined;
  return NextResponse.json({
    configured: true,
    visitors: typeof data?.visitors === "number" ? data.visitors : countFrom(payload),
    pageviews: typeof data?.pageviews === "number" ? data.pageviews : null,
    updatedAt: new Date().toISOString(),
  });
}
